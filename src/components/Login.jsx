import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function EmployerLogin() {
  return (
    <div className="isolate relative overflow-hidden p-12 w-[500px] grid place-items-center bg-gold-200 lg:w-auto">
      <div className="absolute w-full h-full [mask:radial-gradient(black_10%,transparent_80%)] pattern"></div>
      <Card className="z-10 px-8 py-6 grid w-[350px] gap-6 shadow-xl">
        <CardHeader className="p-0 pb-4">
          <h1 className="text-lg font-bold tracking-tight">Account Login</h1>
        </CardHeader>
        <CardContent className="p-0 grid gap-6">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="user_id">User ID</Label>
              <a
                href="#"
                className="ml-auto inline-block text-xs underline text-muted-foreground"
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
                className="ml-auto inline-block text-xs underline text-muted-foreground"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button
            type="submit"
            className="mt-2 w-full font-semibold bg-blue-950 shadow-md transition duration-150 hover:bg-blue-950/80"
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
  );
}
