import Hero from "./components/Hero";
import Demo from "./components/Demo";

import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
        <Navbar />
      </div>
    </main>
  );
};

export default App;