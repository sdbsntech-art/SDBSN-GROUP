const getAdminEmails = (): Set<string> => {
  const configuredEmails = [
    import.meta.env.VITE_ADMIN_EMAIL,
    ...(import.meta.env.VITE_ADMIN_EMAILS ?? '').split(/[;,]/),
  ];

  return new Set(
    configuredEmails
      .map((email) => email?.trim().toLowerCase())
      .filter((email): email is string => Boolean(email))
  );
};

export const isAdminEmail = (email?: string | null): boolean => {
  if (!email) return false;
  return getAdminEmails().has(email.trim().toLowerCase());
};
