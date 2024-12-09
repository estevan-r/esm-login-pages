import { CircleHelp } from 'lucide-react';

export default function AlertContent() {
  return (
    <div className='space-y-4'>
      <ul className='italic space-y-1'>
        <li>
          This is an example of the closeable alert dialog. The following are
          notes about this demo site.
        </li>
        <li>
          Design and build by{' '}
          <Link uri='mailto:estevan.ruiz@state.co.us'>Estevan Ruiz</Link> |
          Source code:{' '}
          <Link uri='#'>
            <GitHub />
          </Link>
        </li>
      </ul>
      <div>
        <div className='font-bold'>Routes</div>
        <ul className='flex flex-wrap items-baseline pl-4 space-x-6 space-y-1 list-disc'>
          <li>
            <Link uri='/'>Employer Login (home)</Link>
          </li>
          <li>
            <Link uri='/tpa'>TPA Login</Link>
          </li>
          <li>
            <Link uri='/employer-registration'>Employer Registration</Link>
          </li>
          <li>
            <Link uri='/tpa-registration'>TPA Registration</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className='font-bold'>Behaviors</div>
        <ul className='pl-[14px] space-y-1 list-disc'>
          <li>Skip to content button added (hit tab)</li>
          <li>
            Alert's display is set to 'hidden' when closed (refresh page to view
            again)
          </li>
          <li>Nav turns into menu dropdown at tablet view (768px)</li>
          <li>
            Footer links, except for the Accessibility statement, trigger a
            pop-over with content
          </li>
        </ul>
      </div>
      <div>
        <div className='font-bold'>Forms</div>
        <ul className='pl-[14px] space-y-1 list-disc'>
          <li>
            <span className='font-semibold'>Password Input</span> - Eye icons
            show and hide password value
          </li>
          <li>
            <span className='font-semibold'>User ID and Password</span> - Input
            rules/text is displayed while hovering over{' '}
            <CircleHelp className='inline size-[14px]' /> icon
          </li>
          <li>
            <span className='font-semibold'>Messaging</span> - Custom invalid
            messages added (e.g. email, password) but will have to be adjusted
            to vendor's form method and backend/validation rules
          </li>
        </ul>
      </div>
    </div>
  );
}

function Link({ uri = '', children }) {
  return (
    <a href={uri} className='underline opacity-70 hover:opacity-100'>
      {children}
    </a>
  );
}

function GitHub() {
  return (
    <img
      src='src/assets/github.svg'
      alt='GitHub Logo'
      className='inline size-4'
    />
  );
}
