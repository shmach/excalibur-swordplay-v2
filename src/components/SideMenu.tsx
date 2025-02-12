import { routes } from "@/utils/routes";
import { BookUser, Calendar, Home, MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./Sheet";

interface SideMenuButtonProps {
  to: string;
  children: React.ReactNode;
}

function SideMenuLinkButton({ to, children }: SideMenuButtonProps) {
  return (
    <Button
      variant='default'
      className="text-white text-lg border w-full h-12 hover:bg-white hover:text-primary"
      asChild
    >
      <Link href={to} scroll>
        {children}
      </Link>
    </Button>
  )
}

export function SideMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="text-white" size={35} />
      </SheetTrigger>
      <SheetContent className="bg-primary">
        <SheetHeader>
          <SheetTitle className="text-white">O que deseja acessar?</SheetTitle>
        </SheetHeader>
        <ul className="w-full flex flex-col gap-4 justify-between items-center p-4">
          <li className="w-full">
            <SideMenuLinkButton to={routes.home}>
              <Home className="mr-2" /> Início
            </SideMenuLinkButton>
          </li>
          <li className="w-full">
            <SideMenuLinkButton to={routes.events}>
              <Calendar className="mr-2" /> Eventos
            </SideMenuLinkButton>
          </li>
          <li className="w-full">
            <SideMenuLinkButton to={routes.about}>
              <BookUser className="mr-2" /> Contato
            </SideMenuLinkButton>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
