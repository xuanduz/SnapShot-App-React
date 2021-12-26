import { Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css';

import Animal from './components/pages/Animal'
import City from './components/pages/City'
import Nature from './components/pages/Nature'
import SearchBar from './components/SearchBar';
import ListPhoto from './components/ListPhoto';

function App() {
  const [search, setSearch] = useState('')

  const handleSearch = (text) => {
    setSearch(text)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar handleClick={handleSearch} />
        <ul>
          <li>
            <Link to='/' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link' >Home</Link>
          </li>
          <li>
            <Link to='/animal' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link'>Animal</Link>
          </li>
          <li>
            <Link to='/city' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link'>City</Link>
          </li>
          <li>
            <Link to='//nature' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link'>Nature</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<ListPhoto searched={search} />}></Route>
          <Route path='/animal' element={<Animal />}></Route>
          <Route path='/city' element={<City />}></Route>
          <Route path='/nature' element={<Nature />}></Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;
