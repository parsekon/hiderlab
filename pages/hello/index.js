import Image from "next/image";
import Layout from "../../components/Layout";

const Hello = () => {
  return (
    <Layout>
      <div className="flex md:flex-row flex-col pt-8 md:px-16 md:pt-16">
        <div className="basis-1/2 ">
          <h1 className="text-[48px] leading-[64px] mb-8">
            разрабатываем и<br /> продвигаем<br /> blockchain проекты
          </h1>
          <h2>Cмарт-контракты, web3 DApp приложения, токены, NFT.</h2>
          <h2 className="font-bold">Hачнем с идеи, доведем до результата.</h2>
        </div>
        <div className="basis-1/2 flex justify-end">
          <Image
            src="/abstract.png"
            alt="abstraction"
            width={557}
            height={557}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Hello;
