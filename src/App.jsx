import "./App.css";
import Footer from "./layout/footer";
import Hero from "./components/Hero";
import TryItNow from "./components/TryItNow";
import Props from "./components/Section";
import Innovation from "./components/Innovation";
import TrustedPeople from "./components/TrustedPeople";

function App() {
  return (
    <main className="main">
      <Hero />
      <TryItNow />
      <Props />
      <Innovation />
      <TrustedPeople />
      <Footer />
    </main>
  );
}

export default App;
