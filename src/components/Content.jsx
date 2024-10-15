import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NewsIcon,
  CreateIcon,
  ContactIcon,
  ProtectIcon,
} from "@/components/CardIcons";
import { ArrowRight } from "lucide-react";

export function Content() {
  return (
    <div className="py-12 px-6 flex flex-col max-w-[500px] gap-12 bg-blue-100">
      <Card className="group border-none shadow-none">
        <CardHeader className="p-0 pb-3 flex-row gap-x-2">
          <CreateIcon />
          <CardTitle className="pb-1">Need an Account?</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p>
            If you are an employer with an active UI account, and have not yet
            activated your MyUI Employer+ account with a mailed code, emailed
            link, or otherwise; or need to register a business for a UI account:
          </p>
          <a
            className={`${buttonVariants({
              variant: "outline",
            })} mt-2 shadow-sm group/btn hover:bg-blue-100 transition duration-500 hover:duration-200`}
            href="#"
          >
            Create an Account &nbsp;
            <div className="relative group-hover/btn:translate-x-1 transition duration-500 group-hover/btn:duration-200">
              <ArrowRight size={16} color="#3d3d3d" />
            </div>
          </a>
        </CardContent>
      </Card>

      <Card className="group border-none shadow-none">
        <CardHeader className="p-0 pb-3 flex-row gap-x-2">
          <NewsIcon />
          <CardTitle className="pb-1">News and Alerts</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          All employers must set up multi-factor authentication (MFA) when
          logging into their MyUI Employer+ account. You can receive temporary
          security codes by text message, email, or an authenticator app on your
          phone. For more information, visit the{" "}
          <a
            href="https://cdle.colorado.gov/multi-factor-authentication-mfa"
            className="underline"
          >
            Multi-Factor Authentication page
          </a>{" "}
          on our website.
        </CardContent>
      </Card>

      <Card className="group border-none shadow-none">
        <CardHeader className="p-0 pb-3 flex-row gap-x-2">
          <ContactIcon />
          <CardTitle className="pb-1">Existing UI Accounts</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          If you are trying to establish yourself as a new user for an existing
          business—a business that&apos;s already registered and has a UI
          employer account—you must contact the system administrator for your
          business account.
        </CardContent>
      </Card>

      <Card className="group border-none shadow-none">
        <div>
          <CardHeader className="p-0 pb-3 flex-row gap-x-2">
            <ProtectIcon />
            <CardTitle className="pb-1 text-balance">
              Protect Yourself from Scams
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            Fraudsters often use spoofed websites—fake sites that copy an
            official site's design—to trick unsuspecting victims into giving up
            personal or financial information.
          </CardContent>
        </div>
        <Card className="mt-4 bg-gold-500/10 rounded-md shadow-md">
          <CardHeader className="block p-3 pb-0">
            <Badge className="bg-gold-500 hover:bg-gold-500/80 text-foreground shadow-sm">
              Remember
            </Badge>
          </CardHeader>
          <CardContent className="p-4 pt-2 text-muted-foreground">
            CDLE will never send you a text message with a link to log into your
            account. To ensure you access the official portal and not a fake
            site, access your MyUI Employer+ account via CDLE's official website
            at{" "}
            <a href="https://coloradoui.gov" className="underline">
              ColoradoUI.gov
            </a>
            .
          </CardContent>
        </Card>
      </Card>
    </div>
  );
}
