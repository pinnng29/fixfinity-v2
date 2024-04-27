import Logo from "./logo";
import MobileSidebar from "./mobile-sidebar";
import { NavigationBar } from "./navigation-bar";

export default function Navbar() {
  return (
    <nav className="z-50 top-0 px-6 w-full h-[64px] border-b shadow-sm bg-muted flex items-center">
      <div className="flex items-center">
        <Logo />
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <MobileSidebar />
        <div className="hidden md:flex">
          <NavigationBar />
        </div>
      </div>
    </nav>
  );
}
