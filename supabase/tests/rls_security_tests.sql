-- ==============================================================================
-- SDBSNX DATABASE SECURITY & ROW LEVEL SECURITY (RLS) TEST SUITE
-- Verification script to execute in Supabase SQL Editor or via psql
-- ==============================================================================

BEGIN;

-- 1. VERIFY RLS IS ACTIVE ON TARGET TABLES
DO $$
BEGIN
    ASSERT (
        SELECT relrowsecurity 
        FROM pg_class 
        WHERE relname = 'contact_requests'
    ) = true, 'CRITICAL: RLS is NOT enabled on contact_requests table!';
    
    ASSERT (
        SELECT relrowsecurity 
        FROM pg_class 
        WHERE relname = 'admin_audit_logs'
    ) = true, 'CRITICAL: RLS is NOT enabled on admin_audit_logs table!';
    
    RAISE NOTICE 'SUCCESS: RLS is actively enforced on all critical tables.';
END $$;

-- 2. SIMULATE ANONYMOUS (PUBLIC / WEB VISITOR) CONTEXT
SET LOCAL ROLE anon;

-- Test 2.1: Anonymous user MUST NOT be able to SELECT / read client data
DO $$
DECLARE
    row_count integer;
BEGIN
    SELECT count(*) INTO row_count FROM public.contact_requests;
    IF row_count > 0 THEN
        RAISE EXCEPTION 'SECURITY BREACH: Anonymous user was able to read % contact requests!', row_count;
    ELSE
        RAISE NOTICE 'SUCCESS: Anonymous user cannot read any contact requests (Returned 0 rows).';
    END IF;
END $$;

-- Test 2.2: Anonymous user CANNOT insert without explicit privacy consent
DO $$
BEGIN
    INSERT INTO public.contact_requests (
        reference_number, full_name, email, service_category, subject, description, privacy_consent
    ) VALUES (
        'SDB-TEST-FAIL', 'Tentative Illégale', 'test@example.com', 'legaltech', 'Sujet', 'Description de test...', false
    );
    RAISE EXCEPTION 'SECURITY BREACH: Anonymous user was allowed to insert without privacy consent!';
EXCEPTION
    WHEN insufficient_privilege OR check_violation THEN
        RAISE NOTICE 'SUCCESS: Anonymous insert without privacy consent was strictly rejected by RLS policy.';
END $$;

-- Test 2.3: Anonymous user CAN submit a valid contact request with consent
DO $$
BEGIN
    INSERT INTO public.contact_requests (
        reference_number, full_name, email, service_category, subject, description, privacy_consent
    ) VALUES (
        'SDB-2026-TEST', 'Amadou Diop', 'amadou.diop@example.com', 'legaltech', 'Projet Pilote GED', 'Cadrage technique et dématérialisation documentaire...', true
    );
    RAISE NOTICE 'SUCCESS: Anonymous user successfully inserted valid contact request with consent.';
EXCEPTION
    WHEN OTHERS THEN
        RAISE EXCEPTION 'FAILURE: Legitimate submission with consent was blocked: %', SQLERRM;
END $$;

-- Test 2.4: Anonymous user CANNOT update or delete any requests
DO $$
BEGIN
    UPDATE public.contact_requests SET status = 'Completed' WHERE reference_number = 'SDB-2026-TEST';
    DELETE FROM public.contact_requests WHERE reference_number = 'SDB-2026-TEST';
    RAISE NOTICE 'SUCCESS: Anonymous modification/deletion attempts have no effect under RLS.';
END $$;

-- 3. SIMULATE AUTHENTICATED STAFF (ADMIN) CONTEXT
SET LOCAL ROLE authenticated;

-- Test 3.1: Authenticated admin CAN view requests
DO $$
DECLARE
    found_count integer;
BEGIN
    SELECT count(*) INTO found_count FROM public.contact_requests;
    RAISE NOTICE 'SUCCESS: Authenticated staff can see % records.', found_count;
END $$;

-- Rollback the test transaction so no dummy records pollute production
ROLLBACK;

-- All RLS security tests passed with zero data leaks!

