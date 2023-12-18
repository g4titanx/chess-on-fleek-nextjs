"use client";

import Link from "next/link";
import React from "react";
import { FaChessKnight, FaNewspaper } from "react-icons/fa6";
import { IoPeople, IoSettingsOutline } from "react-icons/io5";
import { useDisclosure } from "@nextui-org/react";
import { SettingsModal } from ".";
import Image from "next/image";

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-36 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 overflow-y-auto bg-slate-950">
          <Link href="/" className="flex items-center ps-2 mb-5">
            <Image
              src="/images/horse.png"
              alt="Knightly Logo"
              width={28}
              height={28}
            />
            <span className="self-center text-xl font-bold">Knightly</span>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-white hover:bg-slate-900 group"
              >
                <FaChessKnight size={20} />
                <span className="ms-3">Play</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.chess.com/today"
                target="_blank"
                className="flex items-center p-2 text-white hover:bg-slate-900 group"
              >
                <FaNewspaper size={20} />
                <span className="ms-3">News</span>
              </Link>
            </li>
            <li>
              <Link
                href="/social"
                className="flex items-center p-2 text-white hover:bg-slate-900 group"
              >
                <IoPeople size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Social</span>
              </Link>
            </li>
            <li>
              <Link
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  onOpen();
                }}
                className="flex items-center p-2 text-white hover:bg-slate-900 group"
              >
                <IoSettingsOutline size={20} />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <SettingsModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default SideBar;
