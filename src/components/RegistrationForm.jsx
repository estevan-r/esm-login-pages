import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import HoverInfo from '@/components/HoverInfo';
import { Checkbox } from '@/components/ui/checkbox';
import ValidationMessage from '@/components/ValidationMessage';
import { buttonVariants } from '@/components/ui/button';

export default function RegistrationForm({ isTPA = false }) {
  return (
    <Card className='p-8 shadow-md w-full max-w-[450px] lg:max-w-[600px]'>
      <h2 className='text-lg font-bold tracking-tight pb-6'>
        Personal Information
      </h2>
      <form noValidate className='group'>
        <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
          {/* Title */}
          <div className='col-span-2'>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              type='text'
              className='peer'
              autoComplete='organization-title'
              placeholder=''
              required
            />
            <ValidationMessage>Please enter your title</ValidationMessage>
          </div>
          {/* First Name */}
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='first-name'>First Name</Label>
            <Input
              id='first-name'
              type='text'
              autoComplete='given-name'
              placeholder=' '
              required
            />
          </div>
          {/* Last Name */}
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='last-name'>Last Name</Label>
            <Input
              id='last-name'
              type='text'
              autoComplete='family-name'
              placeholder=' '
              required
            />
          </div>
          {/* User ID */}
          <div className='col-span-2'>
            <div className='flex items-center mb-1 space-x-1'>
              <Label htmlFor='user-id'>User ID</Label>
              <HoverInfo>
                Must be alphanumeric and 6-12 characters. Letters must come
                before numbers.
              </HoverInfo>
            </div>
            <Input
              id='user-id'
              type='text'
              className='peer'
              placeholder='ExampleName08'
              autoComplete='username'
              required
              pattern='[a-zA-Z][a-zA-Z0-9]{6,12}'
            />
            <ValidationMessage>
              Must be alphanumeric and 6-12 characters. Letters must come before
              numbers.
            </ValidationMessage>
          </div>
          {/* Email */}
          <div className='col-span-2 sm:col-span-1'>
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
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='confirm-email'>Confirm Email</Label>
            <Input id='email-conf' type='email' placeholder=' ' required />
          </div>
          {/* Phone Number */}
          <div>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input
              id='phone'
              type='tel'
              autoComplete='tel'
              placeholder=''
              required
              pattern='\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})'
            />
          </div>
          {/* Ext */}
          <div>
            <Label htmlFor='extension'>Ext</Label>
            <Input id='extension' type='text' autoComplete='tel-extension' />
          </div>
          {/* Password */}
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='pass'>Password</Label>
            <Input
              id='pass'
              type='password'
              minLength='14'
              autoComplete='new-password'
              placeholder=' '
              required
              pattern='.[a-zA-Z0-9][^\n\r\s]{14,}'
            />
            <div className='text-xs italic text-muted-foreground mt-1'>
              Minimum 14 characters. Must contain upper and lower case
              characters, numbers (0–9), and special characters:
              ~!@#$%^&*_-+=`|\(){}[]:;"',.?/
            </div>
          </div>
          {/* Confirm Password */}
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='confirm-pass'>Confirm Password</Label>
            <Input
              id='pass-conf'
              type='password'
              minLength='14'
              autoComplete='new-password'
              placeholder=' '
              required
              pattern='.[a-zA-Z0-9][^\n\r\s]{14,}'
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
