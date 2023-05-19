import "./App.css";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import PostsTable from "./Components/Table/PostsTable";
import Department from "./Components/Department/Department";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Layout />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/table" element={
          <>
              <PostsTable/>
              <Department/>
          </>
        } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
