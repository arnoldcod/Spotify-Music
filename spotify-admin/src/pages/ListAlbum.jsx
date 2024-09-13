// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import React, { useEffect } from 'react'
import { url } from '../App';

const ListAlbum = () => {

  const [data, setData] = useState([]);

  const fetchAlbums = async ()=>{

    try {
      const response = await axios.get(`${url}/api/album/list`);

      if (response.data.success) {
        setData(response.data.albums);
      }
    } catch (error) {
      console.error('Error fetching albums:', error);
      toast.error('Error fetching albums');  // Display error message    
    }
  }

  useEffect(() => {
    fetchAlbums();
  }, [])

  return (
    <div>
       
    </div> 
  )
}


export default ListAlbum