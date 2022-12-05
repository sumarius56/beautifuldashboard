import React from "react";
import { Sidebar } from "flowbite-react";
import Image from "next/image";
import { motion } from "framer-motion";

function NavNext() {
  return (
    <div className="bg-[#064273] relative ">
      <div className="absolute bg-black/10 w-full h-screen" />
      <div className="w-full flex  bg-[#064273]">
        <div className="w-fit h-screen flex p-2 bg-[#7fcdff]">
          <Sidebar aria-label="Sidebar with logo branding ">
            <div className="flex p-2  relative flex-col">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}
                className="w-[250px] flex flex-col  rounded-lg"
              >
                <img
                  src="https://www.blueoceanglobaltech.com/wp-content/uploads/2022/01/conclusion.png"
                  loading="lazy"
                  alt="bogt"
                  className=" rounded-lg "
                />
                <div className="-skew-y-[130deg] absolute left-0 right-[-100px] top-[120px] z-0   bg-[#7fcdff]/30 w-[270px] h-[50px] animate-pulse " />
              </motion.div>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                    className="space-y-10 mt-10 items-center  justify-center align-middle flex flex-col   p-2   "
                  >
                    <Sidebar.Item
                      className="hover:bg-[#064273]  hover:scale-110 transition duration-300 ease-in-out font-bold text-l text-[#7fcdff]"
                      href="#"
                    >
                      Web Crawler
                    </Sidebar.Item>
                    <Sidebar.Item
                      className="hover:bg-[#064273]  hover:scale-110 transition duration-300 ease-in-out font-bold text-l text-[#7fcdff] "
                      href="#"
                    >
                      Search Engine Optimisation
                    </Sidebar.Item>
                  </motion.div>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </div>
          </Sidebar>
        </div>
        <div className="flex p-10 w-full h-screen space-y-10 flex-col">
          <div className="flex ">
            <motion.img
              src="https://image.slidesharecdn.com/b6279628-2159-4ccd-bc75-c7173a52c432-150531192512-lva1-app6891/95/blue-ocean-global-technology-brochure-1-638.jpg?cb=1433100425"
              alt="bogt"
              className="w-full  h-[45vh]  rounded-lg"
              width={1000}
              height={300}
              loading="lazy"
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            />
            <motion.p
              initial={{ opacity: 0, x: +200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              className="text-white p-10 mt-20 text-2xl font-bold"
            >
              Blue Ocean Global Technology is a New York based company that
              proactively builds stellar reputations. We create and promote top
              digital assets that accelerate the growth of brand equity. We
              provide best comprehensive reputation management services, which
              often includes search engine optimization (SEO), social media
              marketing (SMM), and web development. When an individual or
              organization faces crisis, legal or PR issues that reach the
              internet, we specialize in mitigating the impact of the defamatory
              content and repairing the negative reputation. Blue Ocean Global
              Technology serves both clients directly and an exclusive group of
              PR, Law, Digital Marketing, and Web-Development agency partners.
            </motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0, y: +200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            src="https://i.ytimg.com/vi/g3q3IMmUpIA/maxresdefault.jpg"
            alt="bogt"
            className="w-full h-[45vh]   rounded-lg"
            loading="lazy"
            width={1000}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default NavNext;
