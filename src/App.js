import Portfolio from "./pages/Portfolio/Portfolio";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Portfolio />
      </div>
    </Router>
  );
}

export default App;
