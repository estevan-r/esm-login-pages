import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CreateIcon } from '@/components/CardIcons';

export default function RegistrationInfo({ title, children }) {
  return (
    <Card className='group max-w-[600px] shadow-md'>
      <CardHeader className='flex-row space-x-2 items-center'>
        <CreateIcon />
        <CardTitle className='pb-1'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4 text-pretty'>{children}</CardContent>
    </Card>
  );
}
