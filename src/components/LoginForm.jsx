export default function LoginForm({ children }) {
  return (
    <div className='isolate relative p-4 w-full max-w-[500px] grid place-items-center sm:p-8'>
      <div className='hidden absolute w-full h-full [mask:radial-gradient(black_60%,transparent_75%)] bg-login-pattern bg-repeat bg-[length:40px_40px] md:block'></div>
      {children}
    </div>
  );
}
