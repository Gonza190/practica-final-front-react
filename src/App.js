import "./App.css";
import { Accordion } from "./components/Accordion";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Accordion />
      <Cart />
      <Footer />
    </div>
  );
}

export default App;
