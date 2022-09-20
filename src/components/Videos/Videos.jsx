import React from 'react';
import './Videos.scss';
import {VideoCard , ChannelCard} from '../../components';



const Videos = ({videos , direction , width}) => {
  
  return (
    <div className='app__videos' style={{flexDirection : direction || 'row'}}>
      {
        videos.map((item,index) => (
          <div key={index} className={width ? 'app__video-related' :'app__videos-container'}>
            {item.id.videoId ? <VideoCard video={item} /> : <ChannelCard channelDetail={item}/>}
          </div>
        ))
      }
    </div>
  )
}

export default Videos;