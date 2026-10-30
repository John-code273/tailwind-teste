import { User } from "lucide-react";

export default function Avatar() {
  return (
    <User
      className="
      border-2 rounded-full
     dark:text-indigo-50 dark:bg-slate-700 dark:border-slate-500
     text-indigo-950 bg-slate-300 border-slate-700
     "
      width={35}
      height={35}
    />
  );
}
