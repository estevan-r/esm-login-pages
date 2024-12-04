import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import ValidationMessage from '@/components/ValidationMessage';

export default function PasswordInput({ id = 'pass', invalidText = '' }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      <Input
        id={id}
        type={showPassword ? 'text' : 'password'}
        autoComplete='new-password'
        placeholder='Password'
        className='peer pr-8'
        required
        pattern='.[a-zA-Z0-9][^\n\r\s]{14,}'
      />
      {showPassword ? (
        <EyeIcon
          onClick={() => setShowPassword(false)}
          className='absolute left-[calc(100%-1.5rem)] top-1/2 size-4 -translate-y-1/2 select-none opacity-50'
        />
      ) : (
        <EyeOffIcon
          onClick={() => setShowPassword(true)}
          className='absolute left-[calc(100%-1.5rem)] top-1/2 size-4 -translate-y-1/2 select-none opacity-50'
        />
      )}
      <ValidationMessage className='absolute' children={invalidText} />
    </div>
  );
}
