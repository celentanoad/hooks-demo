# Hooks-Demo

## Simple app designed to practice using various React hooks

View the deployed demo here: https://hooks-demo-react.netlify.app/

---

**useQuery hook**

- The `useQuery` hook is used to create a piece of state based on an API call that can be referenced from any component
- One major benefit is that you can use the `useQuery` hook in any component and it won't rerun an API call
- `useQuery` is called once the component is loaded, and in this example we call `useQuery` when a certain piece of state is updated

This demo app uses the Pokemon API to retrieve data for a random pokemon, and the user can choose to add this pokemon to a list.  In this example, the user clicks the "Find a Pokemon" button, which calls the `getRandomNumber` function.  This function returns a number between 1 and 898.  The `useQuery` hook then calls the `getPokemonData` function, which makes an API call and returns the data for that particular Pokemon.  If the user chooses to add the Pokemon to their list, then the image and name of that Pokemon is rendered below.

Let's walk through the process of how we got here:

`const {data} = useQuery("pokemon", () => getPokemonData(num));`

>This is how I originally set up the `useQuery` hook.  It works as intended, but will only be called the first time the random number is generated.  Let's change it so `useQuery` is called whenever we pass a new number into the `getPokemonData` function.  

&nbsp;

`const {data} = useQuery(["pokemon", {num}], () => getPokemonData(num));`

> Now the `useQuery` hook will replace the data when a new number is generated.  However, the page breaks because if the API call is still loading, then the data will be undefined and won't render properly.

&nbsp;

We can use `isLoading` from `useQuery` like so:

`const {data, isLoading} = useQuery(["pokemon", {num}], () => getPokemonData(num));`

and add a conditional to where we render our data:

 ``` 
    { 
        isLoading ? <p>Loading...</p>
        :
        data.name
    }
```

This change will now provide **Loading...** text when the API is fetching the data, and otherwise display the name of the Pokemon.

