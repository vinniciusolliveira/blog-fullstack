import Link from "next/link";
import SearchBar from "./SearchBar";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "./themeComponent";


const Nav: React.FC = () => {
  return (
    <header className="flex justify-center sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="w-10/12 h-14 flex flex-row">
        <div className="h-full w-2/12 flex justify-center items-center">
        <p className="transition-colors text-foreground font-semibold">LogoMarca</p></div>
        <div className="h-full w-5/12 flex flex-row justify-start items-center gap-4 text-sm font-semibold">
        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="">Docs</Link>
        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="">Components</Link>
        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="">Blocks</Link>
        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="">Charts</Link>
        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="">Themes</Link>
        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="">Examples</Link>
        <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="">Colors</Link>
        </div>
        <div className="h-full w-4/12">
        <SearchBar/>
        </div>
        <div className="h-full w-2/12 flex flex-row">
        <div className="h-full w-full flex justify-center items-center">
              <Link className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground py-2 h-8 w-8 px-0" href="https://github.com/vinniciusolliveira" target="_blank" rel="noopener noreferrer">
                  <GitHubLogoIcon className="h-4 w-4"/>
              </Link>
        </div>
        <div className="h-full w-10 flex justify-center items-center">
        <ModeToggle/>
        </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
