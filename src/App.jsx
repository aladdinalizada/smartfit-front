import "./App.css";
import Footer from "./layout/footer";
import Hero from "./components/Hero";
import TryItNow from "./components/TryItNow";
import Props from "./components/Section";

function App() {
  return (
    <main className="main">
      <Hero />
      <TryItNow />
      <Props />
      <Footer />
    </main>
  );
}

export default App;
