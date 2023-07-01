import { Route, Routes } from "react-router-dom";
import "../src/assets/css/main.css";
import Home from "./Pages/Home";
import IframeView from "./Pages/IframeView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demo-iframe" element={<IframeView />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default App;
