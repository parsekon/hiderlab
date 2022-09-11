import Image from "next/image";
import Layout from "../../components/Layout";

const Hello = () => {
  return (
    <Layout>
      <div className="flex md:flex-row flex-col pt-8 md:px-16 md:pt-16 -z-10">
        <div className="basis-1/2">
          <h1 className="text-[28px] leading-[48px] md:text-[48px] md:leading-[64px] mb-8">
            Разрабатываем и<br /> продвигаем
            <br /> blockchain проекты
          </h1>
          <h2>
            <span className="mr-4 md:mr-8 text-gray-600">Cмарт-контракты</span>{" "}
            <span className="mr-4 md:mr-8 text-gray-600">Web3 приложения</span>{" "}
            <br /> <span className="mr-4 md:mr-8 text-gray-600">Токены</span>{" "}
            <span className="mr-4 md:mr-8 text-gray-600">NFT</span>
            <span className="mr-4 md:mr-8 text-gray-600">
              {" "}
              Маркетинговые стратегии
            </span>
          </h2>
          <button className="w-80 h-14 text-gray-800 rounded-lg bg-lightGreen drop-shadow-2xl hover:scale-95 my-8 hover:text-gray-500 absolute md:relative">
            Обсудить проект
          </button>
        </div>
        <div className="basis-1/2 flex justify-end drop-shadow-xl absolute md:relative h-[280px] md:h-[480px] w-[280px] bottom-0 left-4 md:top-2 md:left-0">
          <Image
            src="/abstract.png"
            alt="abstraction"
            width={480}
            height={480}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hello;
