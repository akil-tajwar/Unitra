import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import MentorProfile from "./pages/MentorProfile";
import MentorPage from "./pages/MentorPage";
import NavBar from "./components/Navbar/NavBar";
import RegisterPage from "./pages/Registerpage";
import Footer from "./components/Footer/Footer";
import Courses from "./pages/Courses";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="mentor" element={<MentorPage />} />
        <Route path="/mentor/:username" element={<MentorProfile />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
