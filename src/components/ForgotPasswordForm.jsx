import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { buttonVariants } from '@/components/ui/button';
import ValidationMessage from '@/components/ValidationMessage';

export default function ForgotPasswordForm() {
  return (
    <Card className='p-8 shadow-md w-full max-w-[450px] lg:max-w-[600px]'>
      <div className='pb-8'>
        <h2 className='text-lg font-bold tracking-tight'>Forgot Password</h2>
        <p className='text-sm text-muted-foreground'>
          In order to reset your password, you need to provide your User ID
        </p>
      </div>
      <form className='group'>
        <Label htmlFor='user-id'>User ID</Label>
        <Input
          id='user-id'
          type='text'
          className='peer'
          placeholder='User ID'
          autoComplete='username'
          required
        />
        <ValidationMessage>User ID not found</ValidationMessage>
        <div className='flex gap-4 mt-6'>
          <button type='submit' className='button-20'>
            Next
          </button>
          <a
            href='javascript:history.back()'
            className={buttonVariants({
              variant: 'outline',
            })}
          >
            Cancel
          </a>
        </div>
      </form>
    </Card>
  );
}
