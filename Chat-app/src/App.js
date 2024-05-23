import './App.css';
import Layout from './Pages/layout';
import {Routes,Route} from 'react-router-dom'

function App() {






  return (
    <>
    <h1>HEYY</h1>


    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='l' element={"loading..."}/>
      <Route path='*' element={"Error 404"}/>
      </Route>
    </Routes>



    </>
  );
}

export default App;
