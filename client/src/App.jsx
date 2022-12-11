import { EthProvider } from "./contexts/EthContext";
import Home from "./components/Home";

function App() {
 
 
  return (
    <>
    <EthProvider>
      <Home />
    </EthProvider>
    </>
    
  );
}

export default App;
