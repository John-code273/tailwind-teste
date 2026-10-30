import { Search } from "lucide-react";
export default function Pesquisar() {
  return (
    <div>
      <form
        className="flex-grow flex min-w-0 p-2 max-w-full"
        onSubmit={
          (ev) => ev.preventDefault()
        }
      >
        <input
          type="text"
          className=" min-w-0 p-2 max-w-full text-slate-300 rounded-l-lg bg-slate-600 dark:bg-slate-700  focus:outline-none"
        />
        <button>
          <Search
            className="pr-2 bg-slate-600 dark:bg-slate-700 rounded-r-lg"
            width={30}
            height={40}
          />
        </button>
      </form>
    </div>
  );
}
