export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-12 pt-1 pb-6 w-full text-xs text-pretty text-muted-foreground bg-slate-200">
      <div className="mx-auto max-w-[500px] lg:max-w-[936px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex gap-6">
            <a href="/" className="underline">
              Privacy Statement
            </a>
            <a href="/" className="underline">
              Accessibility
            </a>
            <a href="/" className="underline">
              Viewing Tips
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <img
              src="/assets/cdle-emblem.svg"
              alt="CDLE Emblem"
              width="48px"
              height="auto"
            />
            &copy;{currentYear} Colorado Department of Labor and Employment
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <span className="tracking-widest font-semibold">WARNING</span>
          <p>
            This system may contain U.S. Government information, which is
            restricted to authorized users ONLY. Unauthorized access, use,
            misuse, or modification of this computer system or of the data
            contained herein or in transit to/from this system constitutes a
            violation of Title 18, United States Code, Section 1030, and may
            subject the individual to Criminal and Civil penalties pursuant to
            Title 26, United States Code, Sections 7213, 7213A (the Taxpayer
            Browsing Protection Act), and 7431.
          </p>
          <p>
            This system and equipment are subject to monitoring to ensure proper
            performance of applicable security features or procedures. Such
            monitoring may result in the acquisition, recording and analysis of
            all data being communicated, transmitted, processed or stored in
            this system by a user. If monitoring reveals possible evidence of
            criminal activity, such evidence may be provided to Law Enforcement
            Personnel.
          </p>
          <p className="font-semibold tracking-wide">
            ANYONE USING THIS SYSTEM EXPRESSLY CONSENTS TO SUCH MONITORING.
          </p>
        </div>
      </div>
    </footer>
  );
}
