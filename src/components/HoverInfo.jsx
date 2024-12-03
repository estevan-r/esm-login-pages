import { CircleHelp } from 'lucide-react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export default function HoverInfo({ children }) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className='hover:cursor-pointer'>
        <CircleHelp
          size={12}
          strokeWidth={1.25}
          absoluteStrokeWidth
          color='#737373'
        />
      </HoverCardTrigger>
      <HoverCardContent className='text-sm'>{children}</HoverCardContent>
    </HoverCard>
  );
}
