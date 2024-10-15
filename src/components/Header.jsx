import { buttonVariants } from "@/components/ui/button";

export function Header() {
  const link = `${buttonVariants({
    variant: "ghost",
  })} tracking-tight text-muted-foreground hover:text-foreground hover:bg-blue-100 transition duration-300 hover:duration-200`;

  return (
    <header className="top-0 mx-auto flex max-w-[948px] h-16 justify-between items-center gap-4 bg-background border-b">
      <a href="https://coloradoui.gov">
        <img
          src="/assets/cdle-logo.svg"
          alt="CDLE Logo"
          width="168px"
          height="auto"
        />
      </a>
      <nav className="hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:text-sm lg:gap-2">
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
