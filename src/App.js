import "./App.css";
import { Inicio } from "./pages/inicio";
import { Loading } from "./pages/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Windows } from "./pages/windows";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/jeronimorobalino" element={<Inicio />} exact={true} />
              <Route path="/loading" element={<Loading />} />
              <Route path="/windows" element={<Windows />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
