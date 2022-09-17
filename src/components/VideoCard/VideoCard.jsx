import React from 'react';
import {Link} from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import './VideoCard.scss';
import {demoThumbnailUrl , demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle} from '../../utils/constants';

const VideoCard = ({video : {id : {videoId} , snippet}}) => {
  return (
    <div className='app__videocard'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img className='app__videocard-img' src={snippet?.thumbnails?.medium?.url || demoThumbnailUrl} alt={snippet?.title} />
      </Link>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} className="app__videocard-title">
        <p>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</p>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} className="app__videocard-channel-title">
        <p>{snippet?.channelTitle || demoChannelTitle}</p>
        <CheckCircle className='app__videocard-channel-title-verified' />
      </Link>
    </div>
  )
}

export default VideoCard;