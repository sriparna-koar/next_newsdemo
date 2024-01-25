// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MdAccountCircle } from "react-icons/md";

// const Navbar = ({ user, logout, cart }) => {
//   const [dropdown, setDropdown] = useState(false);
//   const dropdownRef = useRef();

//   const handleDropdownToggle = () => {
//     setDropdown(!dropdown);
//   };

//   const handleMouseLeave = (e) => {
//     // Check if the cursor is leaving from the MdAccountCircle or the dropdown
//     if (
//       (dropdownRef.current && !dropdownRef.current.contains(e.relatedTarget)) ||
//       (e.relatedTarget && e.relatedTarget.id !== "mdAccountIcon")
//     ) {
//       setDropdown(false);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-2 shadow-md sticky top-0 z-10">
//       <div className="logo mr-auto md:mx-5">
//         <Link href={"/"}>
//           <a>
//             <Image height={40} width={100} src="/logo3r.jpg" alt="" />
//           </a>
//         </Link>
//       </div>
//       <div className="nav">
//         <ul className="flex items-center space-x-6 font-bold md:text-md"></ul>
//       </div>
//       <div className="cursor-pointer items-center absolute right-0 top-4 mx-5 flex">
//         <span
//           onMouseEnter={handleDropdownToggle}
//           onMouseLeave={handleMouseLeave}
//           className="relative"
//         >
//           {user && user.value && (
//             <span
//               className="cursor-pointer text-xl"
//               onClick={handleDropdownToggle}
//               id="mdAccountIcon"
//             >
//               <MdAccountCircle />
//             </span>
//           )}
//           {dropdown && (
//             <div
//               ref={dropdownRef}
//               className="absolute right-0 mt-2 w-48 bg-yellow border rounded-lg shadow-lg"
//               onMouseEnter={handleDropdownToggle}
//               onMouseLeave={handleMouseLeave}
//             >
//               <ul>
//                 {user && user.value ? (
//                   <li
//                     onClick={logout}
//                     className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
//                   >
//                     Logout
//                   </li>
//                 ) : (
//                   <Link href={"/login"}>
//                     <a>
//                       <li className="py-2 px-4 hover:bg-gray-100 cursor-pointer">
//                         Login
//                       </li>
//                     </a>
//                   </Link>
//                 )}
//               </ul>
//             </div>
//           )}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MdAccountCircle } from 'react-icons/md';

// const Navbar = ({ user, logout }) => {
//   const [dropdown, setDropdown] = useState(false);
//   const ref = useRef();

//   const handleDropdownToggle = () => {
//     setDropdown(!dropdown);
//   };

//   return (
//     <div className="bg-white border-b border-gray-200">
//       <div className="container mx-auto flex justify-between items-center py-4">
//         <div className="logo">
//           <Link href={"/"}>
//             <a>
//               <Image height={40} width={100} src="/logo3r.jpg" alt="" />
//             </a>
//           </Link>
//         </div>

//         <div className="flex items-center space-x-4">
//           {!user?.value && (
//             <Link href={'/login'}>
//               <a className="text-yellow-600 hover:text-yellow-800">Login</a>
//             </Link>
//           )}

//           {user?.value && (
//             <div className="relative">
//               <span
//                 className="cursor-pointer text-xl"
//                 onClick={handleDropdownToggle}
//               >
//                 <MdAccountCircle />
//               </span>

//               {dropdown && (
//                 <div className="absolute right-0 mt-2 w-48 bg-yellow-200 border rounded-lg shadow-lg">
//                   <ul className="py-2 px-4">
//                     <li
//                       onClick={logout}
//                       className="hover:bg-yellow-300 cursor-pointer"
//                     >
//                       Logout
//                     </li>
//                   </ul>
                  
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



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


// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import {
//   AiOutlineShoppingCart,
//   AiFillCloseCircle,
//   AiOutlinePlusCircle,
//   AiOutlineMinusCircle,
 
// } from "react-icons/ai";
// import {  MdAccountCircle } from "react-icons/md";
// import { BsFillBagCheckFill } from "react-icons/bs";
// import user from "../models/user";
// const Navbar = ({user,logout,cart,addTocart,removeFromcart,clearcart,subtotal}) => {
//   const [dropdown, setdropdown] = useState(false);
 
//   const ref = useRef();
//   const [cartOpen, setCartOpen] = useState(false);


//   return (
//     <div className="flex flex-col md:flex-row md:justify-startjustify-between items-center py-2 shadow-md sticky top-0 z-10 bg-white">
//       <div className="logo mr-auto md:mx-5">
//         <Link href={"/"}>
//           <a>
//             <Image height={40} width={100} src="/logo3r.jpg" alt="" />
//           </a>
//         </Link>
//       </div>
//       <div className="nav">
//         <ul className="flex items-center space-x-6 font-bold md:text-md">
//           <li className="hover:text-yellow-600">
//             <Link href={"/"}>
//               <a>Home</a>
//             </Link>
//           </li>
//           <li className="hover:text-yellow-600">
//             <Link href={"/phone"}>
//               <a>Phones</a>
//             </Link>
//           </li>
//           <li className="hover:text-yellow-600">
//             <Link href={"/jacket"}>
//               <a>Jackets</a>
//             </Link>
//           </li>
//           <li className="hover:text-yellow-600">
//             <Link href={"/watch"}>
//               <a>Watches</a>
//             </Link>
//           </li>
//           <li className="hover:text-yellow-600">
//             <Link href={"/mugs"}>
//               <a>Mugs</a>
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="cursor-pointer items-center absolute right-0 top-4 mx-5 flex">
//         <span onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}} >
//      {dropdown && <div onMouseOver={()=>{setdropdown(true)}} onMouseLeave={()=>{setdropdown(false)}} 
//      className="absolute right-8 rounded-md top-6 py-4 bg-yellow-300 px-5 w-32">
//         <ul>
//        <Link href={'/myaccount'}><a><li className="py-1 hover:text-yellow-600 text-sm font-bold">My Account</li></a></Link>
//        <Link href={'/orders'}><a><li className="py-1 hover:text-yellow-600 text-sm font-bold">Orders</li></a></Link>
//      <li onClick={logout} className="py-1 hover:text-yellow-600 text-sm font-bold">Logout</li>
//         </ul>
//       </div>}
//       {user && user.value && <MdAccountCircle className="text-xl md:text-3xl" />}

//       </span>
//   {!user?.value && <Link href={'/login'}><a>
// <button className="bg-yellow-600 px-2 py-1 rounded-md text-sm text-white mx-2">Login</button>
//     </a>
//   </Link>}
//       <button>
//           <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-3xl" />
//         </button>
// </div>

    
      
    
  
     
//     </div>
//   );
// };

// export default Navbar;
