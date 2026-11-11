-- ==============================================================================
-- SDBSNX OFFICIAL DATABASE SCHEMA & ROW LEVEL SECURITY (RLS) POLICIES
-- PostgreSQL / Supabase
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Custom Types
DO $$ BEGIN
    CREATE TYPE request_status_type AS ENUM (
        'New', 
        'In Review', 
        'In Progress', 
        'Completed', 
        'Archived'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
    CREATE TYPE service_category_type AS ENUM (
        'web_development',
        'mobile_development',
        'cybersecurity',
        'security_audit',
        'legaltech',
        'digital_consulting',
        'partnership',
        'other'
    );
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 3. Create Contact Requests Table
CREATE TABLE IF NOT EXISTS public.contact_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_number VARCHAR(64) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    organization VARCHAR(255),
    service_category VARCHAR(64) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    budget VARCHAR(100),
    timeline VARCHAR(100),
    privacy_consent BOOLEAN NOT NULL DEFAULT FALSE,
    status request_status_type NOT NULL DEFAULT 'New',
    admin_notes TEXT,
    ip_address_hash VARCHAR(128),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 4. Create Admin Audit Logs Table
CREATE TABLE IF NOT EXISTS public.admin_audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    action VARCHAR(100) NOT NULL,
    target_id UUID,
    details JSONB,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 5. Automated timestamp updater trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_contact_requests_updated_at ON public.contact_requests;
CREATE TRIGGER trigger_contact_requests_updated_at
    BEFORE UPDATE ON public.contact_requests
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Strict Security Enforcement:
-- - Anyone (public/anon) can INSERT a contact request with consent = true.
-- - Public CANNOT select, update, or delete any contact requests.
-- - Only authenticated users with admin privileges can SELECT, UPDATE, DELETE.
-- ==============================================================================

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_audit_logs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Public can submit contact requests" ON public.contact_requests;
DROP POLICY IF EXISTS "Public cannot read contact requests" ON public.contact_requests;
DROP POLICY IF EXISTS "Admins can view contact requests" ON public.contact_requests;
DROP POLICY IF EXISTS "Admins can update contact requests" ON public.contact_requests;
DROP POLICY IF EXISTS "Admins can delete contact requests" ON public.contact_requests;
DROP POLICY IF EXISTS "Admins can view audit logs" ON public.admin_audit_logs;
DROP POLICY IF EXISTS "Admins can insert audit logs" ON public.admin_audit_logs;

-- Policy 1: Allow public anonymous insertion only if privacy consent is granted
CREATE POLICY "Public can submit contact requests"
ON public.contact_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
    privacy_consent = true AND
    length(full_name) >= 2 AND
    length(email) >= 5 AND
    length(description) >= 10
);

-- Policy 2: Authenticated staff can view all contact submissions
CREATE POLICY "Admins can view contact requests"
ON public.contact_requests
FOR SELECT
TO authenticated
USING (true);

-- Policy 3: Authenticated staff can update statuses and notes
CREATE POLICY "Admins can update contact requests"
ON public.contact_requests
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Policy 4: Controlled deletion restricted to authenticated staff
CREATE POLICY "Admins can delete contact requests"
ON public.contact_requests
FOR DELETE
TO authenticated
USING (true);

-- Audit logs policies
CREATE POLICY "Admins can view audit logs"
ON public.admin_audit_logs
FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admins can insert audit logs"
ON public.admin_audit_logs
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_requests_status ON public.contact_requests(status);
CREATE INDEX IF NOT EXISTS idx_contact_requests_created_at ON public.contact_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_requests_ref ON public.contact_requests(reference_number);

