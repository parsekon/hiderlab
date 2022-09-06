import Menu from "./Menu";

const Header = () => {
  return (
    <div className="h-[80px] w-full bg-gray-50 flex flex flex-col 2xl:px-64 xl:px-32 md:px-16 px-8 justify-center border-1rem border-white">
        <Menu />
      {/* <h1 className="text-3xl text-gray-800 font-bold uppercase">
        Hider<span className="text-lightGreen">Lab</span>
      </h1> */}
    </div>
  );
};

export default Header;
