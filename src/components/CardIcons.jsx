import {
  Newspaper,
  BadgeInfo,
  BadgeCheck,
  ArrowRight,
  UserPlus,
  UserCog,
  Shield,
  ShieldCheck,
  CircleAlert,
} from "lucide-react";

const color = "#769eff";
const width = 2;
const size = 24;

export function NewsIcon() {
  return (
    <div className="flex isolate size-6 pt-[2px]">
      <div className="grid place-items-center relative group-hover:-rotate-12 transition duration-500 group-hover:duration-200">
        <Newspaper color={color} strokeWidth={width} size={size} />
      </div>
      <div className="p-[2px] grid place-items-center relative size-5 top-1 right-2 rotate-6 bg-white rounded-full opacity-0 shadow-sm group-hover:-translate-y-3 group-hover:opacity-100 transition duration-500 group-hover:duration-200">
        <CircleAlert color={color} strokeWidth={3} size={16} />
      </div>
    </div>
  );
}

export function CreateIcon() {
  return (
    <div className="flex isolate">
      <div className="grid place-items-center overflow-hidden relative">
        <div className="group-hover:-translate-y-6 group-hover:scale-50 group-hover:opacity-0 transition duration-500 group-hover:duration-200">
          <BadgeInfo color={color} strokeWidth={width} size={size} />
        </div>
        <div className="absolute opacity-0 translate-y-6 scale-50 group-hover:-translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition duration-500 group-hover:duration-200">
          <BadgeCheck color={color} strokeWidth={width} size={size} />
        </div>
      </div>
    </div>
  );
}

export function ContactIcon() {
  return (
    <div className="size-6 isolate relative overflow-hidden">
      <div className="flex items-center gap-2 group-hover:-translate-x-14 transition duration-500 group-hover:duration-700">
        <div className="z-10 relative opacity-100 group-hover:opacity-0 transition duration-500 group-hover:duration-200">
          <UserPlus color={color} strokeWidth={width} size={size} />
        </div>
        <div className="relative opacity-0 group-hover:opacity-100 transition duration-300 group-hover:duration-100">
          <ArrowRight color={color} strokeWidth={2.5} size={16} />
        </div>
        <div className="relative opacity-0 group-hover:opacity-100 transition duration-100 group-hover:duration-700">
          <UserCog color={color} strokeWidth={width} size={size} />
        </div>
      </div>
    </div>
  );
}

export function ProtectIcon() {
  return (
    <div className="isolate flex">
      <div className="grid place-items-center relative">
        <div className="opacity-100 group-hover:[transform:rotateY(360deg)] group-hover:opacity-0 transition duration-300 group-hover:duration-700">
          <Shield color={color} strokeWidth={width} size={size} />
        </div>
        <div className="absolute opacity-0 group-hover:[transform:rotateY(360deg)] group-hover:opacity-100 transition duration-300 group-hover:duration-700">
          <ShieldCheck color={color} strokeWidth={width} size={size} />
        </div>
      </div>
    </div>
  );
}
