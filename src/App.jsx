import Header from "./components/Header";
import Chat from "./components/Chat";
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";

function App() {
  return (
    <div className="overflow-y-auto flex justify-center items-center">
    <PopUp /> 
    <Header />
    <Chat />
    <Footer />
    </div>
  );
}

export default App;
