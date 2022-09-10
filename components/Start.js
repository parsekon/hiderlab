import { useRouter } from "next/router";

const Start = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/hello");
  }, 2000);

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-gray-50 w-full flex flex py-16 flex-col h-full w-full 2xl:px-64 xl:px-32 md:px-32 px-32 justify-center min-h-screen border-1rem border-white h-full">
        <h1 className="text-[64px] text-gray-800">
          hider<span className="text-lightGreen animate-pulse">lab.</span>
        </h1>
      </div>
      <div className="geeks invisible lg:visible"></div>
    </div>
  );
};

export default Start;
