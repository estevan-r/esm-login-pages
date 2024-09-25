import { Card } from "@/components/ui/card";
import { Newspaper, OctagonAlert, Siren } from "lucide-react";

export function NewsIcon() {
  return (
    <div className="flex isolate">
      <div className="mb-4 grid place-items-center bg-gradient-to-b from-blue-950/75 to-blue-950/95 size-12 rounded-xl relative left-2.5 top-1.5 -rotate-6 shadow-lg group-hover:-translate-x-5 group-hover:-rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
        <Newspaper color="#ffd100" strokeWidth={1.5} />
      </div>
      <div className="mb-4 grid place-items-center bg-gradient-to-b from-blue-950/75 to-blue-950/95 size-12 rounded-xl relative right-2.5 top-1.5 rotate-6 shadow-lg group-hover:translate-x-5 group-hover:rotate-12 group-hover:-translate-y-0.5 transition duration-500 group-hover:duration-200">
        <Siren color="#ffd100" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export function NewsIcon2() {
  return (
    <div className="mb-4 grid place-items-center bg-gradient-to-b from-blue-950/75 to-blue-950/95 size-12 rounded-xl relative shadow-lg hover:-translate-y-1 transition duration-300">
      <Newspaper color="#ffd100" strokeWidth={1.5} />
    </div>
  );
}
