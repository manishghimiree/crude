import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
