export default function Content({ children }) {
  return (
    <div className="py-12 px-4 flex flex-col justify-center max-w-[500px] gap-12 md:px-6">
      {children}
    </div>
  );
}
