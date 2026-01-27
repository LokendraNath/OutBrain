import Dashboard from "../Pages/Dashboard";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="bg-blue-100">
      {/* Header */}
      <div className="fixed mb-5 w-full">
        <Header />
      </div>
      <div className="flex h-screen overflow-hidden gap-3 pt-10">
        <aside className="fixed top-20 h-full bg-blue-600 text-white shrink-0 rounded-tr-[50px] pt-7 px-5">
          <Sidebar />
        </aside>
        {/* Main */}
        <main className="ml-54 mt-18">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};
export default Layout;
