import React , {useState} from 'react';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { Navbar , Feed , VideoDetails , ChannelDetails , SearchFeed} from './components';


const App = () => {
  const [isSidebar , setIsSidebar] = useState(true);

  return (
    <Router>
      <Navbar setIsSidebar={setIsSidebar} isSidebar={isSidebar}/>
      <Routes>
        <Route path='/' exact element={<Feed isSidebar={isSidebar} />} />
        <Route path='/video/:id' exact element={<VideoDetails />} />
        <Route path='/channel/:id' exact element={<ChannelDetails />} />
        <Route path='/search/:searchTerm' exact element={<SearchFeed />} />
      </Routes>
    </Router>
    )
}

export default App;