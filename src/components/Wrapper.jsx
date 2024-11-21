export default function Wrapper({ children }) {
  return (
    <main className='relative mx-auto py-3 sm:py-4 flex flex-col lg:flex-row flex-1 w-full max-w-[1024px] justify-center items-center flex-wrap'>
      {children}
    </main>
  );
}
