export default function ValidationMessage({
  children = 'Please fill out this field',
  className = '',
}) {
  return (
    <div
      className={`${className} mt-2 hidden text-xs text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block`}
    >
      {children}
    </div>
  );
}
