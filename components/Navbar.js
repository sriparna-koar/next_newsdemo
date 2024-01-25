


import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle } from 'react-icons/md';

const Navbar = ({ user, logout }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  const handleDropdownToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="logo">
          <Link href={"/"}>
            <a>
              <Image height={40} width={100} src="/logo3r.jpg" alt="" />
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {user?.value && (
            <div className="relative">
              <span
                className="cursor-pointer text-xl"
                onClick={handleDropdownToggle}
              >
                <MdAccountCircle />
              </span>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-yellow-200 border rounded-lg shadow-lg">
                  <ul className="py-2 px-4">
                    <li
                      onClick={logout}
                      className="hover:bg-yellow-300 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}

          {!user?.value && (
            <Link href={'/login'}>
              <a className="text-yellow-600 hover:text-yellow-800">Login</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

