import {
  BoltIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftEllipsisIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <nav className="max-w-screen-xl m-auto flex flex-wrap gap-2 justify-between items-center">
        <h1 className="text-2xl">Dixit's Portfolio</h1>
        <button
          className="px-1 py-2 rounded md:hover:bg-slate-300 md:hidden"
          onClick={handleToggleMenu}>
          <span className="sr-only">Open main menu</span>
          <Bars3BottomLeftIcon className="size-6" />
        </button>

        <ul
          className={`w-full ${
            toggleMenu ? "block" : "hidden"
          } md:w-auto md:flex md:gap-2`}>
          <li>
            <a
              className="flex items-center gap-1 px-1 py-2 rounded hover:bg-slate-200"
              href="#about">
              <UserCircleIcon className="size-6" />
              About
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 px-1 py-2 rounded hover:bg-slate-200"
              href="#skills">
              <BoltIcon className="size-6" />
              Skills
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 px-1 py-2 rounded hover:bg-slate-200"
              href="#projects">
              <ClipboardDocumentListIcon className="size-6" />
              Projects
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 px-1 py-2 rounded hover:bg-slate-200"
              href="#work">
              <BuildingOffice2Icon className="size-6" />
              Work
            </a>
          </li>
          <li>
            <a
              className="flex items-center gap-1 px-1 py-2 rounded hover:bg-slate-200"
              href="#contact">
              <ChatBubbleLeftEllipsisIcon className="size-6" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
