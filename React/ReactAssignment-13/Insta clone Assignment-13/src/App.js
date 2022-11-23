import './App.css';
import LandingPage from './Landing-page/Landing_page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Postview from './PostView/postview';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path='/InstaClone' element={<Postview/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
