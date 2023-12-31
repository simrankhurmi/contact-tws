
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Create from './components/Create';
import Edit from './components/Edit';



function App() {
  return (
    <>
  <div className='App'>
   <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/edit' element={<Edit/>}/>
    </Routes>
   </Router>
  </div>
    
    </>
  );
}

export default App;
