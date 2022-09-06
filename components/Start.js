import { useRouter } from "next/router";

const Start = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/hello");
  }, 1500);

  return (
    <div className="w-full h-screen">
      <div className="bg-gray-50 h-full flex flex py-16 flex-col h-full w-full 2xl:px-64 xl:px-32 md:px-32 px-32 justify-center min-h-screen border-1rem border-white h-full">
        <h1 className="text-[56px] text-gray-800">
          hider<span className="text-lightGreen">lab</span>
        </h1>
      </div>
    </div>
  );
};

export default Start;
