
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Router from "./router";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Router />
      </main>

      <Footer />
    </div>
  );
};

export default App;