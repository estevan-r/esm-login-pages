import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { CreateIcon } from "@/components/CardIcons";
import { ArrowRight } from "lucide-react";

export function EmployerLogin() {
  return (
    <div className="isolate relative p-4 w-full max-w-[500px] grid place-items-center sm:p-12">
      <div className="hidden absolute w-full h-full [mask:radial-gradient(black_60%,transparent_75%)] pattern2 md:block"></div>

      <Card className="z-10 px-6 py-4 grid max-w-[350px] gap-6 shadow-xl sm:px-8 sm:py-6">
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
          <div className="mb-2 grid gap-2">
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
          <button type="submit" className="button-20">
            Login
          </button>
          <div className="mt-3 text-xs text-muted-foreground text-pretty">
            This system is for Official Use Only and contains Personally
            Identifiable Information (PII). Any misuse or unauthorized
            disclosure of information may result in both Civil and Criminal
            penalties.
          </div>
        </CardContent>
      </Card>

      <Card className="z-10 group mt-6 px-6 py-4 max-w-[350px] shadow-xl sm:px-8 sm:py-6">
        <CardHeader className="flex-row gap-x-2 p-0 pb-4">
          <CreateIcon />
          <CardTitle className="pb-1">Need an Account?</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <p>
            If you're an employer with an active UI account, and have not yet
            activated your MyUI Employer+ account, or need to register a
            business for a UI account:
          </p>
          <a
            className={`${buttonVariants({
              variant: "outline",
            })} mt-2 shadow-sm group/btn hover:bg-neutral-100 transition duration-500 hover:duration-200`}
            href="https://myui.clouduim.cdle.state.co.us/Employer/Revenue/Registration/EmployerRegistration/EmployerSignup.ASPX"
          >
            Create an Account &nbsp;
            <div className="relative group-hover/btn:translate-x-1 transition duration-500 group-hover/btn:duration-200">
              <ArrowRight size={16} color="#3d3d3d" />
            </div>
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
