import { useState } from 'react';
import { TriangleAlert, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function AlertDialog({ title, children }) {
  const [hidden, setHidden] = useState(false);

  function closeAlert() {
    setHidden(true);
  }

  return (
    <Alert
      className={
        hidden
          ? `hidden`
          : `max-w-[328px] sm:max-w-[350px] lg:max-w-[1000px] mx-4 sm:mx-0 bg-gold-500/30 text-gold-900 border-gold-500/50 shadow-md`
      }
    >
      <TriangleAlert className='h-4 w-4' color='#74450f' />
      <AlertTitle className='font-bold flex justify-between items-center'>
        {title}
        <div className='h-full self-start'>
          <button type='button' onClick={closeAlert}>
            <X className='h-4 w-4 text-gold-900 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2' />
          </button>
        </div>
      </AlertTitle>
      <AlertDescription className='font-medium mt-4 text-pretty'>
        {children}
      </AlertDescription>
    </Alert>
  );
}
