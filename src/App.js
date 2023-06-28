import './App.css';
import Page from './components';
import {  Route, Routes } from "react-router-dom";
import Stock from './pages/Stock';
import Setting from './pages/Setting';
import Report from './pages/Report';
import Notifications from './pages/Notifications';
function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/setting" element={<Setting/> } />
          <Route path="/stock" element={<Stock/> } />
          <Route path="/report" element={<Report/> } />
          <Route path="/notifi" element={<Notifications/> } />
        </Routes>
    </div>
  );
}

export default App;
