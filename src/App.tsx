import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Introduction from "./components/introduction/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <>
      <header className="p-5 sticky left-0 top-0 right-0 bg-white shadow-lg z-50">
        <Navbar />
      </header>
      <main className="space-y-10">
        {/* INTRODUCTION SECTION */}
        <Introduction />
        {/* ABOUT SECTION */}
        <About />
        {/* SKILLS SECTION */}
        <Skills />
        {/* Projects SECTION */}
        <Projects />
        {/* WORK SECTION */}
        <Work />
        {/* CONTACT SECTION */}
        <Contact />
      </main>
    </>
  );
}

export default App;
