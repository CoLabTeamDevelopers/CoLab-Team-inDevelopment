import AppLink from "@/components/Link";

export default function EmailVerificationSuccessPage() {
  return (
    <div>
      Your email has been successfully verified.
      <AppLink href="/login">Go to login page</AppLink>
    </div>
  );
}
