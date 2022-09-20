import React , {useEffect , useState} from 'react';
import {Link , useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './VideoDetails.scss';
import { CheckCircle } from '@mui/icons-material';

import {Videos} from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';

const VideoDetails = () => {
  const [videoDetail,setVideoDetail] = useState(null);
  const [videos,setVideos] = useState(null);
  const {id} = useParams();

  useEffect( () => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) =>  setVideoDetail(data.items[0]));

    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))

  },[id]);
  console.log(videoDetail)

  return (
    <div className='app__video app__video-container'>

        <div className="app__video-player">
            <ReactPlayer  controls url={`https://www.youtube.com/watch?v=${id}`} className='app__react-player'/>
            

              <div style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                py:'1',
                px:'2',
                
              }}>
                  <Link style={{
                    display:'flex',
                    marginLeft:'10px'
                  }} to={videoDetail ? `/channel/${videoDetail.snippet.channelId}` : '' }>
                    <p style={{marginTop:'0px'}}>
                    <h5 style={{fontSize:'15px' , marginTop:'0px'}}>{videoDetail ? videoDetail.snippet.title  : ''}</h5>

                      {videoDetail ? videoDetail.snippet.channelTitle  : ''}
                      <CheckCircle style={{
                        fontSize:'12px',
                        color:'gray',
                        marginLeft:'5px',
                      }} />
                    </p>
                  </Link>
                  <div style={{marginRight:'10px'}}>
                    <p style={{opacity:0.7}}>{videoDetail ? parseInt(videoDetail.statistics.viewCount).toLocaleString() : '' } Views</p>
                    <p>{videoDetail ? parseInt(videoDetail.statistics.likeCount).toLocaleString() : '' } Likes</p>
                  </div>
              </div>
        </div>
      
        <div className='app__video-style' style={{
          justifyContent:'center',
          alignItems:'center',
          width:'calc((100% - 20px) * (1/3))',
          height:'100%',
          overflowY:'auto'
        }}>
          {videos ? <Videos  videos={videos} direction={'column'} width={true} /> : ''}
        </div>
      
    </div>
  )
}

export default VideoDetails