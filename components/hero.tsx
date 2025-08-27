import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Mail, Zap } from "lucide-react";
import Link from "next/link";
import { bebasNeue } from "@/lib/fonts";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
    
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Fullstack Web Developer
        </Badge>
        <h1 className={`${bebasNeue.className} mt-6 text-4xl sm:text-5xl md:text-9xl font-bold !leading-[1.2] tracking-tight`}>
          Luis Andrei Ouano
        </h1>
        <p className="mt-6 text-[17px] md:text-xl">
        Shaping experiences where data, design, and development converge.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href="/pdf/Ouano-Luis_Resume.pdf">
            <Button size="lg" className="rounded-full text-base">
            Resume
            <Download />
            </Button>
          </Link>
          <Link href="https://github.com/LowisWano">
            <Button size="lg"  variant="outline" className="rounded-full text-base">
              Contact Me
              <Mail/>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
