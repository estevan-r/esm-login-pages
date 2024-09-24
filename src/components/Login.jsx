import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Info, ArrowRight } from "lucide-react";

export function EmployerLogin() {
  return (
    <div className="sticky h-screen w-[600px] py-12 flex items-center justify-center bg-gradient-to-b from-blue-950/80 to-blue-950">
      <Card className="mx-auto grid w-[400px] gap-4 shadow-lg">
        <CardHeader className="space-y-9">
          <img
            src="/assets/cdle-logo.svg"
            alt="CDLE Logo"
            width="192px"
            height="auto"
          />
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
            className="mt-2 w-full font-semibold bg-blue-950 hover:bg-blue-950/90"
          >
            Login
          </Button>
          <Separator className="my-6 mb-3" />
          <div className="space-y-4">
            <div className="flex justify-center">
              <Info color="#3d3d3d" />
            </div>
            <div className="text-sm text-pretty">
              If you are an employer with an active UI account, and have not yet
              activated your MyUI Employer+ account with a mailed code, emailed
              link, or otherwise; or need to register a business for a UI
              account:
              <a
                className={`${buttonVariants({
                  variant: "outline",
                })} mt-4 w-full hover:bg-gold-50`}
                href="#"
              >
                Create an Employer User Account &nbsp;
                <ArrowRight size={16} color="#3d3d3d" />
              </a>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="text-xs text-muted-foreground text-pretty">
            This system is for Official Use Only and contains Personally
            Identifiable Information (PII). Any misuse or unauthorized
            disclosure of information may result in both Civil and Criminal
            penalties.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function AgentLogin() {
  return (
    <div className="h-screen w-[600px] py-12 flex items-center justify-center bg-gradient-to-b from-blue-950/80 to-blue-950">
      <Card className="mx-auto grid w-[400px] gap-9 shadow-lg">
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
            className="mt-2 w-full font-semibold bg-blue-950 hover:bg-blue-950/90"
          >
            Login
          </Button>
          <Separator className="my-6 mb-3" />
          <div className="space-y-4">
            <div className="flex justify-center">
              <Info color="#3d3d3d" />
            </div>
            <div className="text-sm text-pretty">
              If you are an employer with an active UI account, and have not yet
              activated your MyUI Employer+ account with a mailed code, emailed
              link, or otherwise; or need to register a business for a UI
              account:
              <a
                className={`${buttonVariants({
                  variant: "outline",
                })} mt-4 w-full hover:bg-gold-50`}
                href="#"
              >
                Create an Employer User Account &rarr;
              </a>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline">
              Create one
            </a>
          </div>
          <div className="mt-4 text-sm text-muted-foreground text-pretty">
            This system is for Official Use Only and contains Personally
            Identifiable Information (PII). Any misuse or unauthorized
            disclosure of information may result in both Civil and Criminal
            penalties.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
