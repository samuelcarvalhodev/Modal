
import Modal from './modal'
import './App.css';
import Home from './home';

import { ModalProvider } from "./Hooks/modal.context";

function App() {
  return (
    <ModalProvider>
      <div className="App">
      <Home/>
      <Modal/>
      </div>
    </ModalProvider>
    
  );
}

export default App;
