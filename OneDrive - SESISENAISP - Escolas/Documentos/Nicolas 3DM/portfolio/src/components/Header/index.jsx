import { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="text-2xl font-bold">
            &lt; Nicolas Gomes / &gt;
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:gap-5 lg:flex lg:flex-1 lg:justify-end ">
          <Link
            to="/"
            className="text-lg font-semibold leading-6 px-3 py-2 text-gray-900 hover:scale-110"
          >
            Página inicial
          </Link>
          <Link
            to="/projetos"
            className="text-lg font-semibold leading-6 px-3 py-2 text-gray-900 hover:scale-110"
          >
            Sobre mim
          </Link>
          <Link
            to="/projetos"
            className="text-lg font-semibold leading-6 bg-purple-700 px-3 py-2 rounded-md text-gray-900 hover:scale-110"
          >
            Projetos
          </Link>
        
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold">
              &lt; Nicolas Gomes / &gt;
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Pagina inicial
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sobre mim
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold bg-purple-700 leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Projetos
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
