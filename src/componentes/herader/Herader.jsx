import Avatar from "./avatar";
import Logo from "./Logo";
import Pesquisar from "./Pesquisar";

export default function Herader(){
    return(
        <header className="dark:bg-slate-950 bg-slate-500 w-full px-4 h-16 flex items-center justify-between">
        <Logo/>
        <Pesquisar/>
        <Avatar/>
        </header>
    )
}