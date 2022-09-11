import Image from "next/image";
import Layout from "../../components/Layout";

const Hello = () => {
  return (
    <Layout>
      <div className="flex md:flex-row flex-col pt-8 md:px-16 md:pt-16">
        <div className="basis-1/2 ">
          <h1 className="text-[48px] leading-[64px] mb-8">
            Разрабатываем и<br /> продвигаем<br /> blockchain проекты
          </h1>
          <h2>Cмарт-контракты, web3 приложения, токены, NFT, <br />маркетинговые стратегии</h2>
          <button className="w-80 h-14 rounded-lg bg-lightGreen drop-shadow-2xl hover:scale-95 my-16">получить предложение</button>
        </div>
        <div className="basis-1/2 flex justify-end drop-shadow-xl">
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
