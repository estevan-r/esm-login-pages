import cdleLogo from '@/assets/cdle-logo.svg';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

function Logo() {
  return (
    <a
      href='https://coloradoui.gov'
      target='_blank'
      className='focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
    >
      <img
        src={cdleLogo.src}
        alt='CDLE Logo'
        width='168px'
        height='auto'
        decoding='async'
      />
    </a>
  );
}

export function MainHeader({ isTPA = false }) {
  const link = `${buttonVariants({
    variant: 'ghost',
  })} tracking-tight text-muted-foreground hover:text-foreground hover:bg-neutral-100 transition duration-300 hover:duration-200`;

  return (
    <header className='top-0 mx-auto flex px-4 md:p-0 max-w-[500px] lg:max-w-[1000px] h-16 justify-between items-center gap-4 bg-background border-b'>
      <Logo />

      <nav className='hidden flex-col text-sm font-medium lg:flex lg:flex-row lg:items-center lg:gap-2'>
        {!isTPA ? (
          <a
            href='https://cdle.colorado.gov/employers/myui-employer/resources'
            target='_blank'
            className={link}
          >
            Resource Guides
          </a>
        ) : null}
        <a
          href='https://cdle.colorado.gov/pay-premiums-and-report-wages'
          target='_blank'
          className={link}
        >
          Premiums Information
        </a>
        {isTPA ? (
          <a
            href='https://cdle.colorado.gov/unemployment/myui-employer/third-party-administrator-tpa-faqs'
            target='_blank'
            className={link}
          >
            FAQs for TPAs
          </a>
        ) : (
          <a
            href='https://cdle.colorado.gov/unemployment/myui-employer/employer-faqs'
            target='_blank'
            className={link}
          >
            FAQs
          </a>
        )}
        <a
          href='https://docs.google.com/forms/d/e/1FAIpQLSfVaXGSESD__IRANrMjpBqkN9qyBGaAhaIVXdg37A46XxuKdg/viewform?usp=sf_link'
          target='_blank'
          className={link}
        >
          Submit Feedback
        </a>
        <a
          href='https://cdle.colorado.gov/fraud-prevention'
          target='_blank'
          className={link}
        >
          Report Fraud
        </a>
      </nav>

      <nav className='lg:hidden text-sm font-medium'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline'>Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-4 md:mr-0 w-48'>
            {!isTPA ? (
              <>
                <DropdownMenuItem>
                  <a
                    href='https://cdle.colorado.gov/employers/myui-employer/resources'
                    target='_blank'
                  >
                    Resource Guides
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
            ) : null}
            <DropdownMenuItem>
              <a
                href='https://cdle.colorado.gov/pay-premiums-and-report-wages'
                target='_blank'
              >
                Premiums Information
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {isTPA ? (
              <>
                <DropdownMenuItem>
                  <a
                    href='https://cdle.colorado.gov/unemployment/myui-employer/third-party-administrator-tpa-faqs'
                    target='_blank'
                  >
                    FAQs for TPAs
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
            ) : (
              <>
                <DropdownMenuItem>
                  <a
                    href='https://cdle.colorado.gov/unemployment/myui-employer/employer-faqs'
                    target='_blank'
                  >
                    FAQs
                  </a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </>
            )}
            <DropdownMenuItem>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSfVaXGSESD__IRANrMjpBqkN9qyBGaAhaIVXdg37A46XxuKdg/viewform?usp=sf_link'
                target='_blank'
              >
                Submit Feedback
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a
                href='https://cdle.colorado.gov/fraud-prevention'
                target='_blank'
              >
                Report Fraud
              </a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
}

export function FormHeader({ uri = '/' }) {
  return (
    <header className='top-0 mx-auto flex px-4 md:p-0 max-w-[500px] lg:max-w-[1000px] h-16 justify-between items-center gap-4 bg-background border-b'>
      <Logo />

      <nav className='text-sm font-medium'>
        <a
          href={uri}
          className={buttonVariants({
            variant: 'outline',
          })}
        >
          Login
        </a>
      </nav>
    </header>
  );
}
