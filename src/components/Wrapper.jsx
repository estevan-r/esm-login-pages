export default function Wrapper({ children }) {
  return (
    <main className="relative mx-auto py-0 lg:py-5 flex flex-1 w-full max-w-[1024px] justify-center flex-wrap">
      {children}
    </main>
  );
}
