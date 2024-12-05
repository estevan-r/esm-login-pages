import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function PrivacyStatement() {
  return (
    <Dialog>
      <DialogTrigger>
        <a className='text-xs underline text-muted-foreground transition duration-200 hover:text-foreground'>
          Privacy Statement
        </a>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Data Privacy</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='text-sm text-pretty space-y-4'>
          <p>
            The Colorado Department of Labor and Employment is interested in
            ensuring that the data privacy rights of users are protected. The
            site does use "cookies" (data stored on a client machine which can
            later be retrieved by the Web Server). The only information the
            cookie contains is a system-generated session identification number.
            This information is used only to maintain continuity and security of
            the pages you access. Additional information collected when you
            access this site is your IP address (source address of the client
            computer) which is used only for analyzing traffic patterns or other
            system maintenance. It is not released to any third parties. No
            private or nonpublic data is collected without your permission.
          </p>
          <p>
            Our pages are continually under development. This site may contain
            hypertext links to information or sites created by other public or
            private organizations that you may also be interested in. Please be
            aware that we do not control the content or quality of these other
            sites or services.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ViewingTips() {
  return (
    <Dialog>
      <DialogTrigger>
        <a className='text-xs underline text-muted-foreground transition duration-200 hover:text-foreground'>
          Viewing Tips
        </a>
      </DialogTrigger>
      <DialogContent className='overflow-auto h-auto max-h-[600px]'>
        <DialogHeader>
          <DialogTitle className='text-balance'>
            Web Page Viewing Tips and Instructions
          </DialogTitle>
          <DialogDescription className='text-balance'>
            To protect your data privacy, remember to select the{' '}
            <strong>Logoff</strong> button on the website when you are finished
            using it.
          </DialogDescription>
        </DialogHeader>
        <div className='mt-2 text-sm text-pretty space-y-8'>
          <div className='space-y-3'>
            <div className='font-bold text-balance'>
              Web Page Settings, Screen Resolution and Text Size
            </div>
            <ol className='pl-4 list-decimal space-y-3'>
              <li>
                This website is designed to work with:
                <ul className='list-disc mt-1 pl-8 space-y-1'>
                  <li>Microsoft Internet Explorer</li>
                  <li>Mozilla Firefox</li>
                  <li>Apple Safari</li>
                  <li>Microsoft Edge</li>
                  <li>Google Chrome</li>
                </ul>
              </li>
              <li>
                Earlier versions of Google Chrome, and other browsers may not
                work well with this application. To check which browser version
                you are using, go to <strong>'Help'</strong> on the menu bar
                then select <strong>'About...'</strong>
              </li>
              <li>
                You may be able to increase or decrease the text size by using
                the zoom in and out functionality built into all browsers. To
                access the functionality, click the widget icon or three dots at
                the top header of each browser and find the zoom in and out
                options as displayed below.
              </li>
            </ol>
          </div>

          <div className='space-y-3'>
            <div className='font-bold'>Instructions for Using the Website</div>
            <ol className='pl-4 list-decimal space-y-3'>
              <li>
                You are responsible for following all instructions carefully
                while using this website. The computer you are using needs to be
                connected to a printer so you can print designated pages as
                necessary.
              </li>
              <li>
                <strong>Fields</strong> are where keyboard characters are
                entered.
                <ul className='list-disc mt-1 pl-8 space-y-1'>
                  <li>
                    Use the mouse to move your cursor over the field. Your
                    cursor will change from an arrow to an <strong>'I'</strong>{' '}
                    beam.
                  </li>
                  <li>
                    Push the button on the mouse to select the field. A blinking
                    bar will appear in the field. You can now enter your
                    information.
                  </li>
                  <li>
                    Use your mouse or the <strong>'Tab'</strong> key on the
                    keyboard to move to the next entry point.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Lists</strong> are used to select from pre-defined
                choices.
              </li>
              <li>
                <strong>Buttons</strong> are used to select from pre-defined
                choices.
                <ul className='list-disc mt-1 pl-8 space-y-1'>
                  <li>
                    Use the mouse to move the cursor over the circle next to
                    your choice.
                  </li>
                  <li>Push the button on the mouse to make a selection.</li>
                  <li>
                    Once you make a selection, a black dot will appear in the
                    circle next to your choice. If a black dot does not appear,
                    make your selection again.
                  </li>
                  <li>
                    To change a selection, simply select a different choice
                    following the above steps.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function SystemAvailability() {
  return (
    <Dialog>
      <DialogTrigger>
        <a className='text-xs underline text-muted-foreground transition duration-200 hover:text-foreground'>
          System Availability
        </a>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Hours of system availability are:</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className='text-pretty space-y-4'>
          4:00 AM – 9:00PM, Sunday–Friday
        </div>
      </DialogContent>
    </Dialog>
  );
}
