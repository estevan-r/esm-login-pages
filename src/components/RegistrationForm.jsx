import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import HoverInfo from '@/components/HoverInfo';
import { Checkbox } from '@/components/ui/checkbox';
import PasswordInput from '@/components/PasswordInput';
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
              autoComplete='organization-title'
              placeholder='Title'
            />
          </div>
          {/* First Name */}
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='first-name'>First Name</Label>
            <Input
              id='first-name'
              type='text'
              className='peer'
              autoComplete='given-name'
              placeholder='First Name'
              required
            />
            <ValidationMessage />
          </div>
          {/* Last Name */}
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='last-name'>Last Name</Label>
            <Input
              id='last-name'
              type='text'
              className='peer'
              autoComplete='family-name'
              placeholder='Last Name'
              required
            />
            <ValidationMessage />
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
              className='peer'
              placeholder='example@mail.com'
              autoComplete='email'
              required
            />
            <ValidationMessage>Please enter a valid email</ValidationMessage>
          </div>
          {/* Confirm Email */}
          <div className='col-span-2 sm:col-span-1'>
            <Label htmlFor='confirm-email'>Confirm Email</Label>
            <Input
              id='email-conf'
              type='email'
              className='peer'
              placeholder='example@mail.com'
              required
            />
            <ValidationMessage>Email doesn't match</ValidationMessage>
          </div>
          {/* Phone Number */}
          <div>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input
              id='phone'
              type='tel'
              className='peer'
              autoComplete='tel'
              placeholder='303-555-1234'
              required
              pattern='\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})'
            />
            <ValidationMessage />
          </div>
          {/* Ext */}
          <div>
            <Label htmlFor='extension'>Ext</Label>
            <Input
              id='extension'
              type='text'
              autoComplete='tel-extension'
              placeholder='123'
            />
          </div>
          {/* Password */}
          <div className='col-span-2 sm:col-span-1'>
            <div className='flex items-center mb-1 space-x-1'>
              <Label htmlFor='pass'>Password</Label>
              <HoverInfo>
                Minimum 14 characters. Must contain upper and lower case
                characters, numbers (0–9), and special characters:
                ~!@#$%^&*_-+=`|\(){}[]:;"',.?/
              </HoverInfo>
            </div>
            <PasswordInput invalidText='Please enter a qualifying password' />
          </div>
          {/* Confirm Password */}
          <div className='col-span-2 sm:col-span-1'>
            <div className='flex items-center mb-1 space-x-1'>
              <Label htmlFor='pass-conf'>Confirm Password</Label>
            </div>
            <PasswordInput
              id='pass-conf'
              invalidText="Password doesn't match"
            />
          </div>
          {/* Certify */}
          <div className='col-span-2 flex space-x-2 py-4'>
            <Checkbox id='terms' required />
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
