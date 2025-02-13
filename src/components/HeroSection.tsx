import { cn } from "@/lib/utils";

interface HeroSectionProps {
  children: React.ReactNode;
  className: string;
  background: "dark" | "white";
}

export function HeroSection({ background, className, children }: HeroSectionProps) {
  return (
    <div className={cn(
      background === 'dark' ? 'bg-gradient-to-r from-primary to-slate-900' : 'bg-transparent',
      className, "relative"
    )}>
      {children}
      <div className={cn(
        background === 'dark' ? 'border-t-primary' : 'border-t-white',
        "absolute -bottom-12 left-0 right-0 m-auto h-0 w-0 border-t-[50px] border-l-[35px] border-l-transparent border-r-[35px] border-r-transparent z-10"
      )}
      />
    </div>
  )
}
