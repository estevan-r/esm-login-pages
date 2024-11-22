// focus:left-[50%] focus:translate-x-[-50%] focus:opacity-100

export default function SkipContent() {
  return (
    <a
      href='#user_id'
      className='absolute top-[6px] left-[-9999px] z-50 opacity-0 px-4 py-3 bg-white text-foreground  font-medium underline text-sm rounded-md shadow-xl focus:left-[50%] focus:translate-x-[-50%] focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-400/80'
    >
      Skip to login
    </a>
  );
}
