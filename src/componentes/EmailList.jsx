import { useState } from "react";
import emails from "../../DB.json";
export default function EmailList() {
  const [emailShow, setEmailShow] = useState(null);

  return (
    <div className="flex gap-6 pl-4 dark:text-slate-50 text-lg ">
      <div>
        {emails.users.map((user) => (
          <button
            key={user.id}
            type="button"
            className="pr-36 block cursor-pointer text-center text-nowrap gap-9 flex-col hover:text-sky-400"
            onClick={() => setEmailShow(user)}
          >
            {user.name}
          </button>
        ))}
      </div>
      {emailShow && (
        <section aria-live="polite" className="bg-cyan-900 p-10 max-w-xl max-h-lvh h-[calc(100vh_-_7rem)] whitespace-pre-wrap rounded-lg ">
          <h2 className="text-2xl pb-2">{emailShow.name}</h2>
          <p >{emailShow.email}</p>
          <p>{emailShow.role}</p>
          <p className="pt-10 text-xl flex-wrap ">{emailShow.body}</p>
        </section>
      )}
    </div>
  );
}
