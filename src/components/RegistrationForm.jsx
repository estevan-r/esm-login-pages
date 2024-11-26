import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button, buttonVariants } from '@/components/ui/button';

export default function RegistrationForm({ isTPA = false }) {
  return (
    <Card className='p-8 shadow-md w-full max-w-[600px]'>
      <h2 className='text-lg font-bold tracking-tight pb-6'>
        Personal Information
      </h2>
      <form>
        <div className='grid grid-cols-2 gap-4'>
          {/* Title */}
          <div className='col-span-2'>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              type='text'
              autoComplete='organization-title'
              required
            />
          </div>
          {/* First Name */}
          <div>
            <Label htmlFor='first-name'>First Name</Label>
            <Input
              id='first-name'
              type='text'
              autoComplete='given-name'
              required
            />
          </div>
          {/* Last Name */}
          <div>
            <Label htmlFor='last-name'>Last Name</Label>
            <Input
              id='last-name'
              type='text'
              minLength='6'
              maxLength='12'
              autoComplete='family-name'
              required
            />
          </div>
          {/* User ID */}
          <div className='col-span-2'>
            <Label htmlFor='user-id'>User ID</Label>
            <Input id='user-id' type='text' autoComplete='username' required />
          </div>
          {/* Email */}
          <div>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='example@mail.com'
              autoComplete='email'
              required
            />
          </div>
          {/* Confirm Email */}
          <div>
            <Label htmlFor='confirm-email'>Confirm Email</Label>
            <Input id='email' type='email' required />
          </div>
          {/* Phone Number */}
          <div>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input id='phone' type='tel' autoComplete='tel' required />
          </div>
          {/* Ext */}
          <div>
            <Label htmlFor='extension'>Ext</Label>
            <Input id='extension' type='text' autoComplete='tel-extension' />
          </div>
          {/* Password */}
          <div>
            <Label htmlFor='pass'>Password</Label>
            <Input
              id='pass'
              type='password'
              minLength='14'
              autoComplete='new-password'
              required
            />
          </div>
          {/* Confirm Password */}
          <div>
            <Label htmlFor='confirm-pass'>Confirm Password</Label>
            <Input
              id='password'
              type='password'
              minLength='14'
              autoComplete='new-password'
              required
            />
          </div>
          {/* Certify */}
          <div className='col-span-2 flex space-x-2 py-4'>
            <Checkbox id='terms' />
            <Label
              htmlFor='terms'
              className='leading-normal text-xs font-medium text-pretty'
            >
              By checking this box, I certify that I am authorized by the
              owner/officer of this organization to enter employer information.
              I also certify that I am authorized to function as an
              Administrator on this employer account.
            </Label>
          </div>
        </div>

        <div className='flex gap-4 mt-6'>
          <button type='submit' className='button-20'>
            Create Account
          </button>
          <a
            href={isTPA ? '/tpa' : '/'}
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
