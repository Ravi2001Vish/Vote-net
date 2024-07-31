import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Uservotepage from './components/Uservotepage';
import Candidateslist from './components/Candidateslist';
import Login from './components/Login';
import Signup from './components/Signup';
import Appbar from './components/Appbar';
import VotePage from './components/Uservotepage';


function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Appbar/>
        <Routes>

          <Route path='/uservote' element={<VotePage/>}/>
          <Route path='/admin' element={<Candidateslist/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login"element={<Login/>}/>

          <Route/>







        </Routes>
      </Router>
      </>
    </div>
  );
}

export default App;
