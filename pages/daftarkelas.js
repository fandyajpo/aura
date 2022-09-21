import Kelas from "../components/Kelas";
import { useState } from "react";
import { me, other } from "../lib/kelasJSON";
import Love from "../components/loveModal";
export default function DaftarKelas() {
  const [list, setList] = useState("ab");

  const [modal, setModal] = useState(false);

  return (
    <>
      <Love modal={modal} setModal={setModal} />
      <div className="p-2">
        <div className="flex flex-col gap-y-4 ">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-violet-500 to-red-500">
            Tebak aku ada di kelas apa, nanti kak Aura bakal tau
          </p>
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-800 to-orange-800">
            Coba aja kaka switch ke masing masing kelas malam, terus klik nama
            aku kalo ketemu
          </p>
          <Kelas list={list} setList={setList} />
          <div>
            {list === "ac" ? (
              <>
                {me.map((a, i) => {
                  return (
                    <div
                      key={i}
                      className={`bg-white border ${
                        a.name !== "-" && "bg-yellow-500 text-orange-800"
                      }`}
                      onClick={() => a.name !== "-" && setModal((a) => !a)}
                    >
                      {a.name}
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                {other.map((a, id) => {
                  return (
                    <div key={id} className="bg-white border">
                      {a.name}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
