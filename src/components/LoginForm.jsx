export default function LoginForm({ children }) {
  return (
    <div className="isolate relative p-4 w-full max-w-[500px] grid place-items-center sm:p-12">
      <div className="hidden absolute w-full h-full [mask:radial-gradient(black_60%,transparent_75%)] pattern2 md:block"></div>
      {children}
    </div>
  );
}
