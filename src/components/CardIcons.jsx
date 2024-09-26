import {
  Newspaper,
  Siren,
  BadgeInfo,
  BadgeCheck,
  ArrowRight,
  UserPlus,
  UserCog,
  Shield,
  ShieldCheck,
} from "lucide-react";

const color = "#ffd100";

export function NewsIcon() {
  return (
    <div className="flex mb-4 isolate">
      <div className="grid place-items-center bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative top-0.5 -rotate-6 shadow-lg group-hover:-translate-x-2 group-hover:-rotate-12 transition duration-500 group-hover:duration-200">
        <Newspaper color={color} strokeWidth={1.5} />
      </div>
      <div className="grid place-items-center bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative right-2 top-0.5 rotate-6 shadow-lg group-hover:translate-x-2 group-hover:rotate-12 transition duration-500 group-hover:duration-200">
        <Siren color={color} strokeWidth={1.5} />
      </div>
    </div>
  );
}

export function CreateIcon() {
  return (
    <div className="flex mb-4 isolate">
      <div className="grid place-items-center overflow-hidden bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative shadow-lg">
        <div className="group-hover:-translate-y-6 group-hover:scale-50 group-hover:opacity-0 transition duration-500 group-hover:duration-200">
          <BadgeInfo color={color} strokeWidth={1.5} />
        </div>
        <div className="absolute opacity-0 translate-y-6 scale-50 group-hover:-translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition duration-500 group-hover:duration-200">
          <BadgeCheck color={color} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export function ContactIcon() {
  return (
    <div className="mb-4 isolate flex items-center gap-2">
      <div className="grid place-items-center z-10 bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative left-1 shadow-lg group-hover:-translate-x-1 transition duration-500 group-hover:duration-200">
        <div className="translate-x-[1.5px]">
          <UserPlus color={color} strokeWidth={1.5} />
        </div>
      </div>
      <div className="-translate-x-7 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300 group-hover:duration-500">
        <ArrowRight color="#d4d4d4" size={20} />
      </div>
      <div className="grid place-items-center bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative -translate-x-20 opacity-0 shadow-lg group-hover:translate-x-0 group-hover:opacity-100 transition duration-500 group-hover:duration-250">
        <div className="translate-x-[1.5px]">
          <UserCog color={color} strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}

export function ProtectIcon() {
  return (
    <div className="mb-4 isolate flex">
      <div className="grid place-items-center bg-gradient-to-b from-blue-950/80 to-blue-900 size-12 rounded-xl relative shadow-lg">
        <div className="opacity-100 group-hover:[transform:rotateY(360deg)] group-hover:opacity-0 transition duration-300 group-hover:duration-700">
          <Shield color={color} strokeWidth={1.5} size={26} />
        </div>
        <div className="absolute opacity-0 group-hover:[transform:rotateY(360deg)] group-hover:opacity-100 transition duration-300 group-hover:duration-700">
          <ShieldCheck color={color} strokeWidth={1.5} size={26} />
        </div>
      </div>
    </div>
  );
}
