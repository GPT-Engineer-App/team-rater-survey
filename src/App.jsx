import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Finish from "./pages/Finish.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </Router>
  );
}

export default App;
