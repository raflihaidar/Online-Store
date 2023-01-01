import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/login';
import Sign from './pages/sign';
import Main from './pages/main';
import NotFound from './pages/notfound';
import DetailProducts from './pages/details-products';
import ShowByCategorys from './pages/showByCategorys'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route  path='/sign' exact element={<Sign/>}/>
          <Route  path='/login' exact element={<Login />}/>
          <Route  path='/' exact element={<Main />}/>
          <Route  path='/product/:productId' exact element={<DetailProducts/>} />
          <Route path='/:category/:productCategory' exact element={<ShowByCategorys/>} />
          <Route  path='*' exact element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;