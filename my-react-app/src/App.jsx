import {Route,Routes} from 'react-router-dom';
import './App.css';
import ReactLogin from './components/ReactLogin/ReactLogin';
import Signup from './components/ReactLogin/Signup';
import Chatbot from './components/ReactLogin/Chatbot';

function App() {
  return (
    // <div className="App">
    //   <Chatbot />
    // </div>
    <div>
      <Routes>
        <Route path='/' element={<ReactLogin/>}/>
        <Route path='/signin' element={<Signup/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes>
    </div>
  );
}

export default App;
