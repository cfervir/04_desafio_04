const Search = ( { setCharSearch } ) => {

  return (
    <header className="header">
      <div className="container">
        <input className="header__search" type="text" onChange={ (e) => setCharSearch(e.target.value) } placeholder="Look for someone!"></input>
      </div>
    </header>
  )
}

export default Search;