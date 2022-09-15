import React from 'react';
import './Videos.scss';
import {VideoCard , ChannelCard} from '../../components';



const Videos = ({videos}) => {
  
  return (
    <div className='app__videos'>
      {
        videos.map((item,index) => (
          <div key={index} className='app__videos-container'>
            {item.id.videoId ? <VideoCard video={item} /> : <ChannelCard channelDetail={item}/>}
          </div>
        ))
      }
    </div>
  )
}

export default Videos;