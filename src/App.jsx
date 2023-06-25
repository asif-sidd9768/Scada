import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Header";
import HomePage from "./pages/Homepage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import { Route, Routes } from "react-router-dom";
import { data } from "./db/data";

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage data={data} />} />
        <Route path="/dash/:dashId" element={<DetailPage data={data} />} />
      </Routes>
      {/* <HomePage data={data} /> */}
      {/* <DetailPage data={data} /> */}
    </>
  );
}

export default App;
