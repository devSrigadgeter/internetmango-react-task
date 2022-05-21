// internal imports
import NavBar from "./components/nav/NavBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";

// stylesheet imports
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
