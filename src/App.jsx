import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import PageNotFound from "./Pages/PageNotFound.jsx";
import Contact from "./Pages/Contact.jsx";
import Blogs from "./Pages/Bloging/Blogs.jsx";
import SignIn from "./Pages/Auth/SignIn.jsx";
import LoginOnlyRoute from "./utils/LoginOnlyRoute.jsx";
export default function App() {
  // const api = import.meta.env.VITE_API_URL;
  // console.log(api)

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<LoginOnlyRoute checkIsAdmin={false} />}>
        <Route path="/about" element={<About />} />
        </Route>
          <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/blog/:id" element={<h1> blog id </h1>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
