import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const link = `${buttonVariants({
    variant: "ghost",
  })} tracking-tight text-muted-foreground hover:text-foreground hover:bg-neutral-100 transition duration-300 hover:duration-200`;

  return (
    <header className="top-0 mx-auto flex px-4 md:p-0 max-w-[500px] lg:max-w-[1000px] h-16 justify-between items-center gap-4 bg-background border-b">
      <a href="https://coloradoui.gov">
        <img
          src="src/assets/cdle-logo.svg"
          alt="CDLE Logo"
          width="168px"
          height="auto"
          decoding="async"
        />
      </a>

      <nav className="hidden flex-col text-sm font-medium lg:flex lg:flex-row lg:items-center lg:gap-2">
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

      <nav className="lg:hidden text-sm font-medium">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4 md:mr-0 w-48">
            <DropdownMenuItem>
              <a href="https://cdle.colorado.gov/employers/myui-employer/resources">
                Resource Guides
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href="https://cdle.colorado.gov/pay-premiums-and-report-wages">
                Premiums Information
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href="https://cdle.colorado.gov/unemployment/myui-employer/employer-faqs">
                FAQs
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfVaXGSESD__IRANrMjpBqkN9qyBGaAhaIVXdg37A46XxuKdg/viewform?usp=sf_link">
                Submit Feedback
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href="https://cdle.colorado.gov/fraud-prevention">
                Report Fraud
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}
