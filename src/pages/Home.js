import React, { useEffect, useState } from "react";
import PageDesign from "../layout/PageDesign";
import FormSearch from "../molecules/FormSearch";
import ShowAndFilterNames from "../organisms/ShowAndFilterNames";
import getPokemons from "../service/service";
import home from "./home.css";
import PreviousAndNext from "../molecules/PreviousAndNext";

export default function Home() {
  const [originalPokemonNames, setOriginalPokemonNames] = useState([]);
  const [pokemonNames, setPokemonNames] = useState(originalPokemonNames);

  const handleInputTxt = (txt) => {
    if (txt.length) {
      const results = originalPokemonNames.filter((nameSearch) => {
        return nameSearch.toUpperCase().includes(txt.toUpperCase());
      });
      setPokemonNames(results);
      return results;
    } else {
      setPokemonNames(originalPokemonNames);
    }
  };
  useEffect(() => {
    getPokemons().then((names) => {
      setOriginalPokemonNames(names);
      setPokemonNames(names);
    });
  }, []);

  return (
    <div className="home">
      <PageDesign />
      <FormSearch onInputChange={pokemonNames} handleInputTxt={handleInputTxt} />
      {pokemonNames.length ? 
        <ShowAndFilterNames
          pokemonNames={pokemonNames}
          handleInputTxt={handleInputTxt}
        /> : <h3>No se encontraron coincidencias..</h3>
      }
    </div>
  );
}
