import s from './filter.module.css';

function Filter({setCurrentPage, setSearchValue}) {    
  return (
      <header>
          <h1>Emoji Finder</h1>
          <h2>Find emoji by keywords</h2>
      <input type="text" placeholder='Find your emoji...' className={s.inp_filter} onChange={({ target }) => {
          setCurrentPage(1);
          setSearchValue(target.value);
        }} />
    </header>
  )
}

export default Filter