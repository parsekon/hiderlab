import { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import MenuMobile from "./MenuMobile";

export default function Menu() {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 ml-8 text-gray-800 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 align-middle">
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a
          onClick={() => router.push("/about")}
          className="flex items-center cursor-pointer hover:text-gray-500"
        >
          О нас
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-gray-500">
          Команда
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-gray-500">
          Услуги
        </a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal">
        <a href="#" className="flex items-center hover:text-gray-500">
          Контакты
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="max-w-screen-xl lg:py-1 md:px-16">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/hello"
          variant="small"
          className="mr-4 cursor-pointer py-1.5 font-normal"
        >
          <h1 className="text-[64px] text-gray-800">
            hider<span className="text-lightGreen">lab.</span>
          </h1>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto text-gray-800 hover:text-gray-400 hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {openNav ? <MenuMobile list={navList} /> : null}
    </Navbar>
  );
}
