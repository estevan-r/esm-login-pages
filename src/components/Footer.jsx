import {
  PrivacyStatement,
  ViewingTips,
  SystemAvailability,
} from '@/components/FooterDialogs';

export default function Footer({ isForm = false }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='px-4 pt-4 pb-6 w-full text-xs text-pretty text-muted-foreground'>
      <div className='mx-auto max-w-[500px] lg:max-w-[936px]'>
        <div
          className={`flex flex-col gap-6 ${
            isForm
              ? 'justify-center items-center'
              : 'lg:flex-row lg:gap-0 lg:justify-between lg:items-center'
          }`}
        >
          <div className='flex gap-4 sm:gap-6'>
            <PrivacyStatement />
            <a
              href='https://cdle.colorado.gov/accessibility'
              className='underline transition duration-200 hover:text-foreground'
            >
              Accessibility
            </a>
            <ViewingTips />
            {isForm && <SystemAvailability />}
          </div>
          <div className='flex flex-col sm:flex-row gap-2 sm:items-center text-balance'>
            <img
              src='src/assets/cdle-emblem-solid.svg'
              alt='CDLE Emblem'
              width='48px'
              height='auto'
              decoding='async'
              loading='lazy'
            />
            &copy;{currentYear} Colorado Department of Labor and Employment
          </div>
        </div>

        <div className={`mt-6 flex flex-col gap-2 ${isForm && 'items-center'}`}>
          {isForm ? (
            <p className='text-center font-semibold text-pretty'>
              This system is for Official Use Only and contains Personally
              Identifiable Information (PII). <br />
              Any misuse or unauthorized disclosure of information may result in
              both Civil and Criminal penalties.
            </p>
          ) : (
            <>
              <span className='tracking-widest font-semibold'>WARNING</span>
              <p>
                This system may contain U.S. Government information, which is
                restricted to authorized users ONLY. Unauthorized access, use,
                misuse, or modification of this computer system or of the data
                contained herein or in transit to/from this system constitutes a
                violation of Title 18, United States Code, Section 1030, and may
                subject the individual to Criminal and Civil penalties pursuant
                to Title 26, United States Code, Sections 7213, 7213A (the
                Taxpayer Browsing Protection Act), and 7431.
              </p>
              <p>
                This system and equipment are subject to monitoring to ensure
                proper performance of applicable security features or
                procedures. Such monitoring may result in the acquisition,
                recording and analysis of all data being communicated,
                transmitted, processed or stored in this system by a user. If
                monitoring reveals possible evidence of criminal activity, such
                evidence may be provided to Law Enforcement Personnel.
              </p>
              <p className='font-semibold tracking-wide text-balance'>
                ANYONE USING THIS SYSTEM EXPRESSLY CONSENTS TO SUCH MONITORING.
              </p>
            </>
          )}
        </div>
      </div>
    </footer>
  );
}
