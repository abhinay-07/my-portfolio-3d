import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSkills from "./components/AllSkills";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const MainContent = () => (
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      {/* Footer directly below Contact, above StarsCanvas */}
     <footer
  className="w-full text-center py-6 mt-8"
  style={{
    background: "rgba(10,10,19,0.3)",
    backdropFilter: "blur(2px)",
    color: "#fff",
    fontWeight: 600,
    letterSpacing: "0.03em",
    fontSize: "1.1rem"
  }}
>
  <span
    className="text-white/70"
    style={{ display: "inline-block", marginBottom: "16px" }} // Add this line
  >
    Copyright &copy; {new Date().getFullYear()} <span style={{fontWeight:700}}>Abhinay Manikanti</span>. All rights reserved.
  </span>
</footer>
      <StarsCanvas />
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/all-skills" element={<AllSkills />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;