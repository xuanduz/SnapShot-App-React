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
            <Link to='/SnapShot-App-React' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link' >Home</Link>
          </li>
          <li>
            <Link to='/SnapShot-App-React/animal' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link'>Animal</Link>
          </li>
          <li>
            <Link to='/SnapShot-App-React/city' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link'>City</Link>
          </li>
          <li>
            <Link to='/SnapShot-App-React/nature' style={{ textDecoration: 'none', padding: '10px 15px' }} className='link'>Nature</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/SnapShot-App-React/' element={<ListPhoto searched={search} />}></Route>
          <Route path='/SnapShot-App-React/animal' element={<Animal />}></Route>
          <Route path='/SnapShot-App-React/city' element={<City />}></Route>
          <Route path='/SnapShot-App-React/nature' element={<Nature />}></Route>
        </Routes>

      </header>
    </div>
  );
}

export default App;
