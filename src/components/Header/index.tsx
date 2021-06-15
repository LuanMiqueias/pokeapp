import React from 'react';
import styles from './styles.module.css';

import iconSearch from '../../assets/icons/search.svg';
import { PokemonContext } from '../../contexts/PokemonContext';

const Header: React.FC = () => {
  const { search } = React.useContext(PokemonContext);

  const [searchValue, setSearchValue] = React.useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await search(searchValue);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchValue(e.target.value.toLocaleLowerCase());
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <h1>Search for a Pokemon</h1>
        <form className={styles.search_form} onSubmit={e => handleSubmit(e)}>
          <label htmlFor="search">
            <input
              type="text"
              name="search"
              autoComplete="off"
              id="search"
              placeholder="Bulbassar"
              onChange={e => handleChange(e)}
            />
            <button type="submit" className={styles.button_search}>
              <img
                src={iconSearch}
                alt="Pesquisar"
                width="100%"
                height="100%"
              />
            </button>
          </label>
        </form>
      </div>
    </header>
  );
};

export default Header;
