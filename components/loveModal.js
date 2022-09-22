import React from "react";
import { Transition } from "@headlessui/react";

const SuccessModal = ({ modal, setModal }) => {
  return (
    <Transition
      className={`fixed z-20 inset-0 overflow-y-auto`}
      show={modal}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0"
      enterTo="transform opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="transform opacity-100"
      leaveTo="transform opacity-0"
    >
      <div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => setModal(false)}
        ></div>

        <Transition
          className="relative w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          show={modal}
          role="dialog"
          aria-modal="true"
          enter="transition ease-out"
          enterFrom="transform opacity-0 scale-50"
          enterTo="transform scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="flex flex-col gap-y-6 items-center py-8 px-2">
            <p className="text-3xl text-pink-500 font-bold">Kak</p>
            <p className="text-md font-bold text-pink-500">
              Nah, ini kelas ku kak, sekali lagi makasih banyak ya diawal udh
              respon baik waktu aku ga tau kelas, kirain bakal di marahin karena
              ga liat group. Jujur Kaka imut bangetzz, aku suka kakak, jng lupa
              jaga aurat kak.
              <br />
              <br />
              aku buat surat ini langsung kepikiran untuk kasih ke kaka, soalnya
              kaka baik banget waktu di awal, kaka kocak juga. Salam Cinta buat
              kita semua, eitts maksudnya buat kita berdua aja.
              <br />
              <br />
              Aku masih inget banget moment awal masuk kampus
            </p>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded-md font-bold"
              onClick={() => setModal(false)}
            >
              Close
            </button>
          </div>
        </Transition>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 fixed animate-ping text-pink-500 duration-1000 ${
            modal ? "top-8 left-8" : "top-2"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </Transition>
  );
};

export default React.memo(SuccessModal);
