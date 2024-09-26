import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function EmployerLogin() {
  return (
    <div className="isolate sticky min-h-screen min-w-[720px] flex flex-col items-center justify-center bg-blue-950">
      <div className="absolute w-full h-full [mask:radial-gradient(black_30%,transparent)] pattern"></div>
      <div className="z-10 -translate-y-8">
        <div className="w-[400px] mx-auto mb-12">
          <a href="https://coloradoui.gov">
            <img
              src="/assets/cdle-logo-white.svg"
              alt="CDLE Logo"
              width="236px"
              height="auto"
            />
          </a>
        </div>
        <Card className="mx-auto mb-16 grid w-[400px] gap-4 border-none shadow-lg">
          <CardHeader>
            <h1 className="text-3xl font-bold tracking-tight">Account Login</h1>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="user_id">User ID</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline text-muted-foreground"
                >
                  Forgot your user id?
                </a>
              </div>
              <Input id="user_id" type="text" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline text-muted-foreground"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              type="submit"
              className="mt-2 w-full font-semibold bg-blue-950 shadow-md transition duration-150 hover:bg-blue-950/90"
            >
              Login
            </Button>
            <div className="mt-6 text-xs text-muted-foreground text-pretty">
              This system is for Official Use Only and contains Personally
              Identifiable Information (PII). Any misuse or unauthorized
              disclosure of information may result in both Civil and Criminal
              penalties.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
