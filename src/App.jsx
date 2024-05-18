import "./App.css";
import Footer from "./layout/footer";
import Hero from "./components/Hero";
import TryItNow from "./components/TryItNow";
import Props from "./components/Section";
import Innovation from "./components/Innovation";

function App() {
  return (
    <main className="main">
      <Hero />
      <TryItNow />
      <Props />
      <Innovation />
      <Footer />
    </main>
  );
}

export default App;
