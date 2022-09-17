import React , {useEffect , useState} from 'react';
import './ChannelDetails.scss';
import { useParams } from 'react-router-dom';
import {Videos , ChannelCard} from '../../components';
import { fetchFromApi } from '../../utils/fetchFromApi';


const ChannelDetails = () => {
  const [channelDetail,setChannelDetail]  = useState(null)
  const [videos,setVideos]  = useState([])
  const {id} = useParams();

  useEffect(() => {

    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data) => { setChannelDetail(data?.items[0])})

    fetchFromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    .then((data) => { setVideos(data.items) })
  
  }, [id])  
  



  return (
    <div
      style={{
        minHeight:'90vh'
      }}
    >
      <div>
      <div style={{
          height:'250px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />
      <ChannelCard channelDetail={channelDetail} Margintop='-110px' />
      </div>
      <div>
        <Videos videos={videos} />
      </div>
    </div>
  )
}

export default ChannelDetails