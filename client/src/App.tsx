import Header from "./components/Layout/Header";
import Main from "./components/Pages/Dashboard";
import Sidebar from "./components/Layout/Sidebar";
import Dashboard from "./components/Pages/Dashboard";

const App = () => {
  return (
    <div className="bg-blue-100">
      {/* Header */}
      <div className="mb-5">
        <Header />
      </div>
      <div className=" flex h-screen overflow-hidden gap-5">
        <aside className="w-54 bg-blue-600 text-white shrink-0 overflow-y-auto rounded-tr-[50px] pt-10 px-5">
          <Sidebar />
        </aside>
        {/* Main */}
        <main>
          <Dashboard />
        </main>
      </div>
    </div>
  );
};
export default App;
