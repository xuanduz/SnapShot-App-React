import './SearchBar.css'
import { useState } from 'react'


const SearchBar = (props) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleClick(text)
  }

  return (
    <div className="search-bar">
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id="input"
          className="input"
          placeholder="Search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="button" className="button" onClick={(e) => handleSubmit(e)} >Search</button>
      </form>
    </div>
  )
}

export default SearchBar