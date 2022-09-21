import { memo, useState, useCallback } from "react";

const Kelas = memo(({ list, setList }) => {
  const sList = useCallback(
    (dk) => () => {
      setList(dk);
    },
    [list]
  );

  return (
    <div className="bg-blue-200 flex flex-row items-center gap-x-4 overflow-x-scroll w-full p-4 rounded-xl">
      <div
        className={`p-2 duration-500 flex-none ${
          list === "ab" ? "bg-black text-white rounded-xl" : ""
        }`}
      >
        <button onClick={sList("ab")}>Kelas AB</button>
      </div>

      <div
        className={`p-2 duration-500 flex-none ${
          list === "ad" ? "bg-black text-white rounded-xl" : ""
        }`}
      >
        <button onClick={sList("ad")}>Kelas AD</button>
      </div>
      <div
        className={`p-2 duration-500 flex-none ${
          list === "ae" ? "bg-black text-white rounded-xl" : ""
        }`}
      >
        <button onClick={sList("ae")}>Kelas AE</button>
      </div>
      <div
        className={`p-2 duration-500 flex-none ${
          list === "af" ? "bg-black text-white rounded-xl" : ""
        }`}
      >
        <button onClick={sList("af")}>Kelas AF</button>
      </div>
      <div
        className={`p-2 duration-500 flex-none ${
          list === "ac" ? "bg-black text-white rounded-xl" : ""
        }`}
      >
        <button onClick={sList("ac")}>Kelas AC</button>
      </div>
      <div
        className={`p-2 duration-500 flex-none ${
          list === "ag" ? "bg-black text-white rounded-xl" : ""
        }`}
      >
        <button onClick={sList("ag")}>Kelas AG</button>
      </div>
    </div>
  );
});

Kelas.displayName = "Kelas";
export default Kelas;
