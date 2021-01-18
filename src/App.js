import { QueryClient, QueryClientProvider } from 'react-query';
import { useState, useRef } from 'react';
import PokemonList from './components/PokemonList';
import './App.css';

const queryClient = new QueryClient();

function App() {
  const [name, setName] = useState('');
  const inputEl = useRef();

  const handleClick = () => {
    inputEl.current.focus();
  }

  return (
    <div className="App">
      <header className="App-header"> Pokemon Collector</header>
      <h3> Collect your Pokemon here!</h3>
      <h4>{name}</h4>
      
        <input ref={inputEl} type="text" onChange={e => setName(e.target.value)}/>
        
        <button onClick={handleClick}>Change Name</button>
    
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
