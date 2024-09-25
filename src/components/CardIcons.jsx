import { Newspaper, Siren, BadgeInfo, BadgeCheck } from "lucide-react";

export function NewsIcon() {
  return (
    <div className="flex isolate">
      <div className="mb-4 grid place-items-center bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative top-0.5 -rotate-6 shadow-lg group-hover:-translate-x-2 group-hover:-rotate-12 transition duration-500 group-hover:duration-200">
        <Newspaper color="#ffd100" strokeWidth={1.5} />
      </div>
      <div className="mb-4 grid place-items-center bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative right-2 top-0.5 rotate-6 shadow-lg group-hover:translate-x-2 group-hover:rotate-12 transition duration-500 group-hover:duration-200">
        <Siren color="#ffd100" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export function CreateIcon() {
  return (
    <div className="flex isolate">
      <div className="mb-4 grid place-items-center overflow-hidden bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative shadow-lg">
        <div className="group-hover:-translate-y-6 group-hover:scale-50 group-hover:opacity-0 transition duration-500 group-hover:duration-200">
          <BadgeInfo color="#ffd100" strokeWidth={1.5} />
        </div>
        <div className="absolute opacity-0 translate-y-6 scale-50 group-hover:-translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition duration-500 group-hover:duration-200">
          <BadgeCheck color="#ffd100" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
