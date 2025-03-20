import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skill from "./pages/Skill";
import Projects from "./pages/Projects";
import GetInTouch from "./pages/GetInTouch";
import Certifications from "./pages/Certifications";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minDuration = 2000;

    const loadContent = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });

    const minDurationPromise = new Promise((resolve) => {
      setTimeout(resolve, minDuration);
    });

    Promise.all([loadContent, minDurationPromise]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className="flex flex-col h-dvh relative">
            <Header className="absolute top-0 w-full" />
            <Routes>
              <Route path="/" element={<Main className="flex-1 flex justify-center items-center" />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<GetInTouch />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer className="absolute bottom-0 w-full" />
          </div>
        </>
      )}
    </div>
  );
};

export default App;