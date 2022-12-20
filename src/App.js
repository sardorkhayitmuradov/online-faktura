import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import OnlineFactor from './Pages/OnlineFactor/OnlineFactor';
import Create from './Pages/Create/Create';
import Income from './Pages/Income/Income';
import Outcome from './Pages/Outcome/Outcome';
import Save from './Pages/Save/Save';
import Delete from './Pages/Delete/Delete';
import Contact from './Pages/Contact/Contact';
import Settings from './Pages/Settings/Settings';
import LogOut from './Pages/LogOut/LogOut';
import Error from './Pages/Error/Error';
// import Panel from "./pages/Panel";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<OnlineFactor />} />
            <Route path='/create' element={<Create />} />
            <Route path='/income' element={<Income />} />
            <Route path='/outcome' element={<Outcome />} />
            <Route path='/save' element={<Save />} />
            <Route path='/delete' element={<Delete />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/logout' element={<LogOut />} />
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
