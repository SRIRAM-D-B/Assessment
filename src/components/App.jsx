import {useState, useEffect} from 'react';

import Fetch from './Fetch';

function App() {
  const [api, setApi] = useState(`https://www.breakingbadapi.com/api/characters?limit=5`);
  return (
    <div><Fetch url={api}/></div>
  )
}

export default App