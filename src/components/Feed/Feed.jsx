import React , {useState , useEffect} from 'react';
import './Feed.scss';
import { Sidebar , Videos } from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';

const Feed = ({isSidebar}) => {
  const [selectedCategory , setSelectedCategory] = useState('');
  const [videos , setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => {setVideos(data.items)})
  }, [selectedCategory])
  
  return (
    <div className='app__feed'>
      <div className='app__feed-sidebar'>
        {isSidebar ? <Sidebar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/> : ''}
      </div>
      <div className='app__feed-videos'>
        <h4 className='app_feed-videos-text'>
          New <span>{selectedCategory}</span>
        </h4>
          <div className="app__feed-videos-box">
            <Videos videos={videos}/>
          </div>
      </div>
    </div>
  )
}

export default Feed;