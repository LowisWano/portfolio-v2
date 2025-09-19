import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Zap } from "lucide-react";
import Link from "next/link";
import { bebasNeue } from "@/lib/fonts";
import BorderMagic from "./ui/border-magic";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
    
      <div className="relative z-[1] text-center max-w-screen-md">
        <h1 className={`${bebasNeue.className} text-4xl sm:text-5xl md:text-9xl font-bold !leading-[1.2] tracking-tight`}>
          Luis Andrei Ouano
        </h1>
        <p className="mt-6 text-[17px] md:text-2xl">
          Passionate software engineer and problem solver.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="/pdf/Ouano-Luis_Resume.pdf">
            <BorderMagic className="w-40">
              <p>Resume</p>
              <Download className="h-4" />
            </BorderMagic>
          </Link>
          <Link href="mailto:laeouano@gmail.com">
            <BorderMagic className="w-40">
            <p className="text-sm">Contact Me</p>
            <Mail className="h-4"/>
            </BorderMagic>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
