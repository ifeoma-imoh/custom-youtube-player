import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import data from './data.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Link to="/">
          <h1>React Blog</h1>
        </Link>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/blogpost/:id" element={<BlogPost data={data} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
