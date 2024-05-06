import './App.css';
import Header from "./Header.js"
import Post from "./Post.js"
import Layout from "./Layout";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Post />}/>
        <Route path={'/login'} element={<div>login</div>}/>
      </Route>
    </Routes>
  );
}

export default App;
