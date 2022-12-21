import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login';
import Sign from './pages/sign';
import Main from './pages/main';
import NotFound from './pages/notfound';
import DetailProducts from './pages/details-products';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route  path='/sign' exact element={<Sign/>}/>
          <Route  path='/login' exact element={<Login />}/>
          <Route  path='/' exact element={<Main />}/>
          <Route  path='/detail-product' exact element={<DetailProducts/>} />
          <Route  path='*' exact element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;