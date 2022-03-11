import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import ActionProvider from './modules/ActionProvider';
import MessageParser from './modules/MessageParser';
import config from './modules/config';
import 'react-chatbot-kit/build/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
      </header>
    </div>
  );
}

export default App;
