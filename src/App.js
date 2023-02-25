import './App.css';
import NavigationBar from './components/NavigationBar';
import {Routes, Route} from "react-router-dom"
import Outside from './components/Outside'
import Inside from './components/Inside';
import QA from './components/QA'
import Licensing from './components/Licensing';
import Shows from './components/Shows';
import QAimg from './components/images/Q+Aimg.jpg'

// app component
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route exact path='/' element={<Outside/>}/>
        <Route path='/outside' element={<Outside/>}/>
        <Route path='/inside' element={<Inside/>}/>
        <Route path='/q+a' element={<QA props={QAimg}/>}/>
        <Route path='/licensing' element={<Licensing/>}/>
        <Route path='/shows' element={<Shows/>}/>
      </Routes>
    </div>
  );
}

export default App;
