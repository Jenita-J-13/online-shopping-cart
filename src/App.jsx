import { useEffect } from "react";
import Product from "./Product";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("Shopping Cart System Loaded");
  }, []);

  return (
    <div className="app">
      <h1>Online Shopping Cart</h1>

      <Product productName="Laptop" price={50000} />
      <Product productName="Headphones" price={2000} />
      <Product productName="Keyboard" price={1500} />
    </div>
  );
}

export default App;