import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componentes/Header';
import NavBar from './componentes/NavBar';

import MyProvider from './contexto/contexto';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={mensajeBienvenida}/>} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
