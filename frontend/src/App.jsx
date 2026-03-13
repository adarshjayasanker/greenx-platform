import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;