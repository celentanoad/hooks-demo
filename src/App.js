import { QueryClient, QueryClientProvider } from 'react-query';

import PokemonList from './components/PokemonList';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <header className="App-header"> Pokemon Collector
      </header>
      <h3> Collect your Pokemon here!</h3>
      <QueryClientProvider client={queryClient}>
        <PokemonList />
      </QueryClientProvider>
    </div>
  );
}

export default App;
