import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import PasswordInput from '@/components/PasswordInput';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

export default function LoginCard({ children = null, title }) {
  return (
    <Card className='z-10 px-6 py-6 grid max-w-[350px] gap-6 shadow-xl sm:px-8'>
      <CardHeader className='p-0 pb-4'>
        <h1 className='text-lg font-bold tracking-tight'>{title}</h1>
      </CardHeader>
      <form className='group'>
        <CardContent className='p-0 grid gap-6'>
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='user-id'>User ID</Label>
              <a
                href='#'
                className='ml-auto inline-block text-xs underline text-muted-foreground'
              >
                Forgot your user id?
              </a>
            </div>
            <Input
              id='user-id'
              type='text'
              placeholder=''
              autoComplete='username'
              required
            />
          </div>
          <div className='mb-2 grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='pass'>Password</Label>
              <a
                href='#'
                className='ml-auto inline-block text-xs underline text-muted-foreground'
              >
                Forgot your password?
              </a>
            </div>
            <PasswordInput
              id='pass'
              placeholder=''
              autoComplete='current-password'
            />
          </div>
          <button type='submit' className='button-20'>
            Login
          </button>
          {children}
          <div className='mt-3 text-xs text-muted-foreground text-pretty'>
            This system is for Official Use Only and contains Personally
            Identifiable Information (PII). Any misuse or unauthorized
            disclosure of information may result in both Civil and Criminal
            penalties.
          </div>
        </CardContent>
      </form>
    </Card>
  );
}
