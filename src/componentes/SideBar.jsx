import { Send } from "lucide-react";
import { Mail } from "lucide-react";
import { Pencil } from "lucide-react";
import { FileClock } from "lucide-react";
import { OctagonAlert } from "lucide-react";
import { Trash } from "lucide-react";

export default function SideBar() {
  return (
    <div className="relative pl-2 text-base flex-1 gap-4 grow max-w-40 text-left ">
      <div
        className="
            hover:dark:bg-cyan-400 transition-colors
            hover:bg-slate-400
            hover:dark:text-cyan-950
            text-slate-100 bg-cyan-500 rounded-md p-2 pl-3 h-17
            "
      >
        <button className="first-letter:uppercase">
          <Pencil className="inline mr-1 " width={17} />
          Escrever
        </button>
      </div>

      <div
        className="
            hover:dark:bg-cyan-600 transition-colors
            hover:bg-slate-400
            text-slate-100 bg-slate-950 rounded-md mt-3 p-1 pl-3 h-17
            "
      >
        <button className="first-letter:uppercase text-left">
          <Mail className="inline mr-1 " width={17} />
          Caixa de mensagens
        </button>
      </div>

      <div
        className="
            hover:dark:bg-cyan-600 transition-colors
            hover:bg-slate-400
            text-slate-100 bg-slate-900 rounded-md mt-3 p-1 pl-2 h-17
            "
      >
        <button className="text-left">
          <Send className="inline mr-1  " width={17} />
          Enviados
        </button>
      </div>

      <div
        className="
            hover:dark:bg-cyan-600 transition-colors
            hover:bg-slate-400
            text-slate-100 bg-slate-900 rounded-md mt-3 p-1 pl-2 h-17
            "
      >
        <button className="first-letter:uppercase text-left">
          <FileClock className="inline mr-1 items-start " width={17} />
          Rascunhos
        </button>
      </div>

      <div
        className="
            hover:dark:bg-cyan-600 transition-colors
            hover:bg-slate-400
            text-slate-100 bg-slate-900 rounded-md mt-3 p-1 pl-3 h-17
            "
      >
        <button className="first-letter:uppercase text-left">
          <OctagonAlert className="inline mr-1 " width={17} />
          Spam
        </button>
      </div>

      <div
        className="
            hover:dark:bg-cyan-600 transition-colors
            hover:bg-slate-400
            text-slate-100 bg-slate-900 rounded-md mt-3 p-1 pl-3 h-17
            "
      >
        <button className="first-letter:uppercase text-left">
          <Trash className="inline mr-1 pb-1" width={17} />
          Lixeira
        </button>
      </div>
    </div>
  );
}
