import SignIn from './components/SignIn/SignIn';
import Tabs from './components/Tabs/Tabs';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Tabs></Tabs>
      <SignIn></SignIn>
      <Modal></Modal>
    </div>
  );
}

export default App;
