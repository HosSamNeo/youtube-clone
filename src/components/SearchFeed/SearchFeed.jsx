import React , {useState , useEffect} from 'react';
import './SearchFeed.scss';
import { Videos } from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos , setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => {setVideos(data.items)})
  }, [searchTerm])
  
  return (
          <>
            <h4 className='app_searchfeed-text'>
              Search Results for <span>{searchTerm}</span> Videos
            </h4>
            <div>
              <Videos videos={videos}/>
            </div>
          </>
  )
}

export default SearchFeed;