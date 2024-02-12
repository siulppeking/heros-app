import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import queryString from 'query-string'
import { getHerosByName } from "../helpers/getHerosByName";
import HeroCard from "../components/HeroCard";

const SearchPage = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heros = getHerosByName(q);

  const showSearch = (q.length === 0);

  const showError = (q.length > 0) && heros.length === 0;;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSubmit = (event) => {
    event.preventDefault();

    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1>Search Hero</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSubmit}>
            <input type="text" placeholder="Type hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange} />
            <button className="btn btn-outline-primary mt-3">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            showSearch &&
            <div className="alert alert-primary animate__animated animate__fadeIn">
              Search a hero
            </div>
          }
          {
            showError &&
            <div className="alert alert-danger animate__animated animate__fadeIn">
              No result hero with <b>{q}</b>
            </div>
          }
          {
            heros.map(hero => {
              return <HeroCard key={hero.id} hero={hero} />
            })
          }
        </div>
      </div>

    </>
  )
}

export default SearchPage