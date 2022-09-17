import React from 'react';
import './ChannelCard.scss';
import { CheckCircle } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../../utils/constants';

const ChannelCard = ({channelDetail , Margintop}) => {
  return (
    <div className='app__channelcard' style={{marginTop:Margintop}}>
      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
        <div className="app__channelcard-info">
          <img
            src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture } alt={channelDetail?.snippet?.title}
            className='app__channelcard-img'
          />
        </div>
        <h6 className='app__channelcard-title'>
          {channelDetail?.snippet?.title}
          <CheckCircle className='app__channelcard-title-verified' />
        </h6>
        {channelDetail?.statistics?.subscriberCount ? <p className='app__channelcard-subscribers'>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
        </p> : ''}
      </Link>
    </div>
  )
}

export default ChannelCard;