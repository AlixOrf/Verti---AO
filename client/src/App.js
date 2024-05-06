import './App.css';
import Header from "./Header.js"
import Post from "./Post.js"
import LoginPage from "./pages/LoginPage.js"
import Layout from "./Layout";
import Articles from "./pages/Accueil.js"
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Articles />}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
