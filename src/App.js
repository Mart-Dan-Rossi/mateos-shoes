import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './componentes/Header';
import Loading from './componentes/Loading';
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
            <Route path='/' element={<Loading />} />
          </Routes>
        </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
