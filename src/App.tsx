import React from 'react';
import HomePage from "./components/HomePage";
import {Route, Routes} from 'react-router-dom'
import LoginPage from "./components/LoginPage";
import PrivatePage from "./components/PrivatePage";
function App() {
    return (
        <Routes>
            <Route path ="/" element={<HomePage />} />
            <Route path ="/login" element={<LoginPage />}/>
            <Route path ="/private" element={<PrivatePage />}/>
            <Route path="*" element={<HomePage />} />
        </Routes>
    );
}
export default App;
