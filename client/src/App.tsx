import Navigation from "./layout/Navigation";
import CodedTextHelper from "./widgets/CodedTextHelper";
import MainArea from "./layout/MainArea";
import WordleHelper from "./widgets/WordleHelper";
import { CrosswordHelperContextProvider } from "./contexts/CrosswordHelperContext";
import CrosswordHelper from "./widgets/CrosswordHelper";
import Footer from "./layout/Footer";

function App() {

  return (
    <div className="w-full p-6 m-3">
      <Navigation />
      <MainArea>
        <WordleHelper />
        <hr className="" />
        <CrosswordHelperContextProvider>
          <CrosswordHelper />
        </CrosswordHelperContextProvider>
        <CodedTextHelper />
      </MainArea>
      <Footer />
    </div>
  );
}

export default App;
