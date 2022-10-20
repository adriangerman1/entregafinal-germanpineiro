import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CardContext from './context/CardContext';
import ItemListContainer from './container/ItemListContainer';
import ItemDetailContainer from './container/ItemDetailContainer';
import Inicio from './container/Inicio';
import CardWidget from './components/Navbar/CardWidget';
import ContatacForm from './container/ContactForm';
import ItemByid from './container/ItemByid';
import CategoryPhones from './pages/CategoryPhones';


function App() {
  return(

    <div className='App'>
      <BrowserRouter>
        <CardContext>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/CardWidget" element={<CardWidget/>}/>
          <Route path="/galeria" element={<ItemListContainer/>}/>
          <Route path="/Item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/Category/:idCategory" element={<CategoryPhones/>}/>
          <Route path="/Form" element={<ContatacForm/>}/>
          <Route path="/ConsultaCompra" element={<ItemByid/>}/>
        </Routes>
        <Footer/>
        </CardContext>
      </BrowserRouter>
    </div>
  ) 
}

export default App;
