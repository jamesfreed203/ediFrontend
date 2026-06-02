'use client';

import Image from "next/image";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaRocket } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function Header(){
    return (
        <header className="bg-white shadow-sm border-b">
            <div className="mx-auto flex h-16 items-center justify-between px-6">
                <Link href="/" className="flex items-center">
                <Image
                    src="/assets/img/logo.svg"
                    width={150}
                    height={27}
                    alt="Logo"
                    priority
                />
                </Link>

                <div className="flex items-center gap-5">
                    <button className="text-gray-600 hover:text-black transition">
                        <IoMdSettings size={24} />
                    </button>

                    <button className="relative text-gray-600 hover:text-black transition">
                        <IoIosNotifications size={24} />
                        <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
                    </button>

                    <button className="text-gray-600 hover:text-black transition">
                        <FaRocket size={20} />
                    </button>

                    <button className="text-gray-600 hover:text-black transition">
                        <FaUserCircle size={28} />
                    </button>
                </div>

            </div>
        </header>
    );
}