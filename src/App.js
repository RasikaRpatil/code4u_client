import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/Blog/BlogList";
import DetailsBlog from "./components/Blog/DetailsBlog";
import CodehacksList from "./components/Codehacks/CodehacksList";
import CodehacksDetails from "./components/Codehacks/CodehacksDetails";
import BookList from "./components/StudyMaterial/BookList";
import TechQAList from "./components/StudyMaterial/TechQAList";
import NotesList from "./components/StudyMaterial/NotesList";
import PseudoCodeD from "./components/PseudoCode/PseudoCodeD";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/details/:idB" element={<DetailsBlog />} />
          <Route path="/codehacks" element={<CodehacksList />} />
          <Route path="/codehacks/details" element={<CodehacksDetails />} />
          <Route path="/book" element={<BookList />} />
          <Route path="/techqa" element={<TechQAList />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/pseudoCode" element={<PseudoCodeD />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
