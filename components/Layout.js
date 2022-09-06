import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1440px] m-auto bg-gray-50 h-screen p-8">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
