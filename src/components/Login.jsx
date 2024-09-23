import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Info } from "lucide-react";

export function EmployerLogin() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <h1 className="text-3xl font-bold tracking-tight">Account Login</h1>
        <div className="grid gap-4">
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
            className="w-full bg-blue-950 hover:bg-blue-950/90"
          >
            Login
          </Button>
        </div>
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="text-lg flex gap-2 items-center">
              <Info />
              New Users
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-pretty">
            If you are an employer with an active UI account, and have not yet
            activated your MyUI Employer+ account with a mailed code, emailed
            link, or otherwise; or need to register a business for a UI account:
            <a
              className={`${buttonVariants({
                variant: "outline",
              })} mt-4 w-full hover:bg-gold-50`}
              href="#"
            >
              Create an Employer User Account &rarr;
            </a>
          </CardContent>
        </Card>
        <div className="mt-4 text-sm text-muted-foreground text-pretty">
          This system is for Official Use Only and contains Personally
          Identifiable Information (PII). Any misuse or unauthorized disclosure
          of information may result in both Civil and Criminal penalties.
        </div>
      </div>
    </div>
  );
}

export function AgentLogin() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[350px] gap-6">
        <h1 className="text-3xl font-bold tracking-tight">TPA Login</h1>
        <div className="grid gap-4">
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
            className="w-full bg-blue-950 hover:bg-blue-950/90"
          >
            Login
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="underline">
            Create one
          </a>
        </div>
        <div className="mt-4 text-sm text-muted-foreground text-pretty">
          This system is for Official Use Only and contains Personally
          Identifiable Information (PII). Any misuse or unauthorized disclosure
          of information may result in both Civil and Criminal penalties.
        </div>
      </div>
    </div>
  );
}
