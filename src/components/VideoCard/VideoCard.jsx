import React from 'react';
import {Link} from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import './VideoCard.scss';
import {demoThumbnailUrl , demoVideoUrl , demoVideoTitle , demoChannelUrl , demoChannelTitle} from '../../utils/constants';

const VideoCard = ({video : {id : {videoId} , snippet}}) => {
  return (
    <div className='app__videocard'>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img className='app__videocard-img' src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
      </Link>
    </div>
  )
}

export default VideoCard;