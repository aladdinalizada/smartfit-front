import "./App.css";
import Footer from "./layout/footer";
import Hero from "./components/Hero";
import TryItNow from "./components/TryItNow";

function App() {
  return (
    <main className="main">
      <Hero />
      <TryItNow />
      <Footer />
    </main>
  );
}

export default App;
