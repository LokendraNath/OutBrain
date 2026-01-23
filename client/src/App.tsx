import Header from "./components/Layout/Header";
import Main from "./components/Layout/Main";

const App = () => {
  return (
    <div className="bg-blue-100">
      {/* Header */}
      <div className="mb-10">
        <Header />
      </div>
      {/* Main */}
      <Main />
    </div>
  );
};
export default App;
