## Hooks-Demo

Simple app designed to practice using various React hooks

This function will be called the first time the random number is generated, but will not update the data object when a new number is provided
const {data} = useQuery("pokemon", () => getPokemonData(num));


This function will replace the data when a new number is generated
    const {data} = useQuery(["pokemon", {num}], () => getPokemonData(num));

However, the page breaks because if the API call is still loading, then the data will be undefined and won't render properly

use isLoading from useQuery like so:
const {data, isLoading} = useQuery

to prevent the page from breaking.

Adding this in here:
 { isLoading ? <p>Loading...</p>
        :
        data.name
        }

        Will provide Loading text when the API is fetching the data, and otherwise display the name of the Pokemon

        