import { lazy, Suspense } from 'react';
import { GlobalStyles } from '../components/globalStyles/Global.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import PrivateRouter from './PrivateRouter';

const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));
const About = lazy(() => import('../pages/about/About'));
const Detail = lazy(() => import('../pages/detail/Detail'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />

      <Suspense fallback={<div>Loading ...🐧</div>}   >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          <Route path='about' element={<PrivateRouter />}>
            <Route path='' element={<About />} />
          </Route>

          <Route path='detail' element={<PrivateRouter />}>
            <Route path='' element={<Detail />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
