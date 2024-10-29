import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsIcon, ContactIcon, ProtectIcon } from "@/components/CardIcons";

export function Content() {
  return (
    <div className="py-12 px-4 flex flex-col justify-center max-w-[500px] gap-12 md:px-6">
      <Card className="group border-none rounded-none shadow-none">
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

      <Card className="group border-none rounded-none shadow-none">
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

      <Card className="group border-none rounded-none shadow-none">
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
