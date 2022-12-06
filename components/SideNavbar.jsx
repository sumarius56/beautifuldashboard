import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImGooglePlus3 } from "react-icons/im";
import { SiGooglesearchconsole } from "react-icons/si";
import { useRouter } from "next/router";
import Link from 'next/link'

function SideNavbar() {
  // const router = useRouter();
  return (
    <div >
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          {/* <div
            onClick={() => router.push("/")}
            className="flex flex-col justify-start item-center"
          > */}
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Blue Ocean Global Digital
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              {/* <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Homepage
                </h3>
              </div> */}
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <ImGooglePlus3 className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  <Link href='/crawler'>
                  Web Crawler
                  </Link>
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <SiGooglesearchconsole className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  <Link href='/seo'>
                  SEO Report
                  </Link>
                </h3>
              </div>
            </div>
          {/* </div> */}
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
