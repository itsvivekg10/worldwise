import PropTypes from "prop-types"; // Import PropTypes
import Message from "./Message";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCities } from "../context/CitiesContext";

function CountriesList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add Your First City By Clicking on a city on the  Map" />
    );
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <CountryItem country={country} key={index} />
      ))}
    </ul>
  );
}

// Validate props using PropTypes
CountriesList.propTypes = {
  cities: PropTypes.array.isRequired, // Validate 'cities' as an array
  isLoading: PropTypes.bool.isRequired, // Validate 'isLoading' as a boolean
};

export default CountriesList;
