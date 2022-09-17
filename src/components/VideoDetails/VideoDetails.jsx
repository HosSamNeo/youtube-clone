import React , {useEffect , useState} from 'react';
import {Link , useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './VideoDetails.scss';
import { CheckCircle } from '@mui/icons-material';

import {Video} from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';

const VideoDetails = () => {
  return (
    <div className='app__video app__video-container'>

      <div className="app__video-player">

      </div>
      
      <div className="app__video-related">
        
      </div>

      <div className="app__video-comments">

      </div>
      
    </div>
  )
}

export default VideoDetails