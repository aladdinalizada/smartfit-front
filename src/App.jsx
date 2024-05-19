import "./App.css";
import Footer from "./layout/footer";
import Hero from "./components/Hero";
import TryItNow from "./components/TryItNow";
import Props from "./components/Section";
import Innovation from "./components/Innovation";
import TrustedPeople from "./components/TrustedPeople";
import StartDemo from "./components/StartDemo";
import FAQ from "./components/FAQ";
import { Helmet } from "react-helmet";
function App() {
  return (
    <main className="main">
      <Helmet>
        <title>SmartFit </title>
        <meta
          name="description"
          content="SmartFit is a smart fitness app that helps you to stay fit and healthy. It provides you with a personalized workout plan and diet plan."
        />
      </Helmet>
      <Hero />
      <TryItNow />
      <Props />
      <Innovation />
      <TrustedPeople />
      <StartDemo />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
