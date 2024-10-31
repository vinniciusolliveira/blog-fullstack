import Link from "next/link";
import SearchBar from "./SearchBar";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Nav: React.FC = () => {
  return (
    <div className="flex justify-center fixed top-0 w-full z-50 h-16 bg-zinc-900 border-b border-zinc-700">
      <div className="w-10/12 h-full flex flex-row">
        <div className="h-full w-2/12 flex justify-center items-center">
        <p className="text-white font-semibold">LogoMarca</p></div>
        <div className="h-full w-5/12 flex flex-row justify-start items-center gap-4">
        <Link className="text-sm font-semibold text-zinc-400 hover:text-white" href="">Docs</Link>
        <Link className="text-sm font-semibold text-zinc-400 hover:text-white" href="">Components</Link>
        <Link className="text-sm font-semibold text-zinc-400 hover:text-white" href="">Blocks</Link>
        <Link className="text-sm font-semibold text-zinc-400 hover:text-white" href="">Charts</Link>
        <Link className="text-sm font-semibold text-zinc-400 hover:text-white" href="">Themes</Link>
        <Link className="text-sm font-semibold text-zinc-400 hover:text-white" href="">Examples</Link>
        <Link className="text-sm font-semibold text-zinc-400 hover:text-white" href="">Colors</Link>
        </div>
        <div className="h-full w-4/12">
        <SearchBar/>
        </div>
        <div className="h-full w-2/12">
        <div className="h-full flex justify-center items-center">
            <Link href="https://github.com/vinniciusolliveira" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-10 text-white w-auto"/>
            </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
