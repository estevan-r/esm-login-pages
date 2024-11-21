import { useState } from 'react';
import { TriangleAlert, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertDialog() {
  const [hidden, setHidden] = useState(false);

  function closeAlert() {
    setHidden(true);
  }

  return (
    <Alert
      className={
        hidden
          ? `hidden`
          : `bg-gold-500/30 text-gold-900 border-gold-500/50 shadow-md`
      }
    >
      <TriangleAlert className='h-4 w-4' color='#74450f' />
      <AlertTitle className='font-bold flex justify-between items-center'>
        Attention Unemployment Claimants and Employers
        <button type='button' onClick={closeAlert}>
          <X className='h-4 w-4 text-gold-900 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2' />
        </button>
      </AlertTitle>
      <AlertDescription className='font-medium mt-4 text-pretty'>
        <ul className='pl-[14px] space-y-2 list-disc'>
          <li>
            MyUI+ and MyUI Employer+ will go down at 8 PM on Friday, November
            22, for scheduled maintenance. The system will be available again
            the morning of Saturday, November 23.
          </li>
        </ul>
      </AlertDescription>
    </Alert>
  );
}
