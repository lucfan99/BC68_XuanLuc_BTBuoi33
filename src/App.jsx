import HomeTemplate from "./components/HomeTemplate";
import RenderShoes from "./components/ProductShoes/RenderShoes";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      {/* <HomeTemplate />
      <RenderShoes /> */}
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<RenderShoes />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
