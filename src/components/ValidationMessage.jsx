export default function ValidationMessage({ children }) {
  return (
    <div className='mt-2 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
      {children}
    </div>
  );
}
