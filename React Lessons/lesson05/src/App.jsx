import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import CourseInner from "./pages/CourseInner";
import CategoryInner from "./pages/CategoryInner";

function App() {
  // const routes = [
  //   {
  //     url: "/",
  //     element: <Home />,
  //   },
  //   {
  //     url: "/about",
  //     element: <About />,
  //   },
  //   {
  //     url: "/contact",
  //     element: <Contact />,
  //   },
  //   {
  //     url: "/courses",
  //     element: <Courses />,
  //   },
  // ];
  return (
    <>
      <Navbar />
      <Routes>
        {/* {routes.map((route, index) => {
          return (
            <Route key={index} path={route.url} element={route.element} />
          );
        })} */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/courses">
          <Route index element={<Courses />} />
          <Route path=":id" element={<CourseInner />} />
          <Route path="category">
            <Route index element={<h1>Course category page</h1>} />
            <Route path=":name" element={<CategoryInner />} />
          </Route>
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
