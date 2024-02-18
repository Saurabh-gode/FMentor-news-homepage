import "./App.css";
import Header from "./components/Header";
import DarkCard from "./components/molecules/DarkCard";
import HeroCard from "./components/molecules/HeroCard";
import HorizontalCard from "./components/molecules/HorizontalCard";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col sm:flex-row mt-10">
        <HeroCard />
        <DarkCard />
      </div>
      <HorizontalCard />
    </>
  );
}

export default App;
