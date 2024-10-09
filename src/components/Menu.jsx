import { buttonVariants } from "@/components/ui/button";

export function Menu() {
  const link = `${buttonVariants({
    variant: "ghost",
  })} font-semibold tracking-tight text-muted-foreground transition-colors hover:text-foreground`;

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 bg-background border-b">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a
          href="https://cdle.colorado.gov/employers/myui-employer/resources"
          className={link}
        >
          Resource Guides
        </a>
        <a
          href="https://cdle.colorado.gov/pay-premiums-and-report-wages"
          className={link}
        >
          Premiums Information
        </a>
        <a
          href="https://cdle.colorado.gov/unemployment/myui-employer/employer-faqs"
          className={link}
        >
          FAQs
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfVaXGSESD__IRANrMjpBqkN9qyBGaAhaIVXdg37A46XxuKdg/viewform?usp=sf_link"
          className={link}
        >
          Submit Feedback
        </a>
        <a href="https://cdle.colorado.gov/fraud-prevention" className={link}>
          Report Fraud
        </a>
      </nav>
    </header>
  );
}
