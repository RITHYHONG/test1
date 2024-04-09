import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <div>
      <nav className=" absolute backdrop-filter backdrop-blur-0 bg-transparent top-0 z-10 block w-full max-w-full px-4 py-2 bg-opacity-0 rounded-none shadow-md h-max lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-900">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
          >
            <img className="w-40" src="./assets/Legend-Cinema.png" alt="" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden mr-4 lg:block">
              <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                <li className="block p-1 font-sans text-3xl antialiased font-normal leading-normal text-white hover:bg-indigo-100 hover:text-black py-2 px-3 rounded-lg">
                  <Link href="/" className="flex items-center">
                    Home
                  </Link>
                </li>
                <li className="block p-1 font-sans text-3xl antialiased font-normal leading-normal text-white hover:bg-indigo-100 hover:text-black py-2 px-3 rounded-lg">
                  <Link href="/products" className="flex items-center">
                    Popular
                  </Link>
                </li>
                <li className="block p-1 font-sans text-3xl antialiased font-normal leading-normal text-white hover:bg-indigo-100 hover:text-black py-2 px-3 rounded-lg">
                  <Link href="/blog" className="flex items-center">
                    Romence
                  </Link>
                </li>
                <li className="block p-1 font-sans text-3xl antialiased font-normal leading-normal text-white hover:bg-indigo-100 hover:text-black py-2 px-3 rounded-lg">
                  <Link href="/setting" className="flex items-center">
                    Anime
                  </Link>
                </li>
              </ul>
            </div>
            <div className="form-control ">
              <input
                type="text"
                placeholder="Type to Search"
                className="input text-xl input-bordered w-24 md:w-auto py-[0.40rem] rounded-md pl-3 bg-white"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
{
  /* <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script> */
}
export default NavbarComponent;
