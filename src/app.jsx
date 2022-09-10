import { useState } from "preact/hooks";
import Header from "./components/header";
import Navbar from "./components/navbar";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
    </>
  );
}
