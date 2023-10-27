import "./App.css";
import Login from "./components/Login";
import Course from "./components/course/Course";
import AddCourse from "./components/course/AddCourse";
import { Courses } from "./components/course/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/Signup";
import Appbar from "./components/AppBar";

function App() {
  return (
    <div>
      <Router>
        <Appbar />
        <Routes>
          <Route path={"/addcourse"} element={<AddCourse />} />
          <Route path={"/course/:courseId"} element={<Course />} />
          <Route path={"/courses"} element={<Courses />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
