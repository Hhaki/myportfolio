import logo from './logo.svg';
import './App.css';
import BeanApp from './Page/BeanApp';
import { Route,BrowserRouter, Routes } from "react-router-dom";
import HomePage from './Page/HomePage';

function App() {
  return (
    <div >
      {/* <BeanApp /> */}
      <BrowserRouter> 
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='beanapp' element={<BeanApp/>} />
      </Routes>
      </BrowserRouter>
     
    
    </div>
  );
}

export default App;
