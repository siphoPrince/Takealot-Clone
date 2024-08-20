import Header from "./Header.jsx";
import Search from "./Search.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
