import Header from "./components/Header";
import Render from "./components/Render";
import Parameters from "./components/Parameters";

function App() {
  return (
    // main div container
    <div className="flex flex-col h-full w-full justify-center items-center bg-[#030712]">
      {/* Header Component Container */}
        <Header />
      {/* Main page below header container */}
      <div className="flex flex-row w-full justify-center items-center divide-x-2 divide-gray-800">
        {/* 3D renderer component */}
        <Render />
        {/* Parameter display component */}
        <Parameters />
      </div>
    </div>
  );
}

export default App;
