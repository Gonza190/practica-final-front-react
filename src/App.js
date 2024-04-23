import "./App.css";

import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

function App() {
  return (
    <div className="App flex flex-col  justify-between">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
