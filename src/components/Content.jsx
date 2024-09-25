import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NewsIcon } from "@/components/CardIcons";

export function Content() {
  return (
    <div className="mt-4 grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-6 lg:grid-cols-5 xl:grid-cols-5">
      <div className="grid auto-rows-max items-start gap-4 md:gap-6 lg:col-span-3">
        <Card className="group">
          <CardHeader>
            <NewsIcon />
            <CardTitle>News and Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            All employers must set up multi-factor authentication (MFA) when
            logging into their MyUI Employer+ account. You can receive temporary
            security codes by text message, email, or an authenticator app on
            your phone. For more information, visit the{" "}
            <a
              href="https://cdle.colorado.gov/multi-factor-authentication-mfa"
              className="underline"
            >
              Multi-Factor Authentication page
            </a>{" "}
            on our website.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Existing UI Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            If you are trying to establish yourself as a new user for an
            existing business—a business that&apos;s already registered and has
            a UI employer account—you must contact the system administrator for
            your business account.
          </CardContent>
        </Card>
      </div>
      <Card className="h-full lg:col-span-2">
        <CardHeader>
          <CardTitle>Protect Yourself from Scams</CardTitle>
        </CardHeader>
        <CardContent>
          Fraudsters often use spoofed websites—fake sites that copy an official
          site's design—to trick unsuspecting victims into giving up personal or
          financial information.
          <Card className="mt-4 bg-gold-500/10 shadow-lg">
            <CardHeader className="block p-4 pb-0">
              <Badge className="bg-gold-500 hover:bg-gold-500/80 text-foreground">
                Remember
              </Badge>
            </CardHeader>
            <CardContent className="p-4 pt-3 text-sm text-muted-foreground">
              CDLE will never send you a text message with a link to log into
              your account. To ensure you access the official portal and not a
              fake site, access your MyUI Employer+ account via CDLE's official
              website at ColoradoUI.gov.
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
