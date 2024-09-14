/* eslint-disable no-unused-vars */

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from '../App';
import { toast } from 'react-toastify';

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

     const removeAlbum = async (id)=>{

      try {
        
        const response = await axios.post(`${url}/api/album/remove`, {id});

        if (response.data.success) {
          toast.success(response.data.message);
          fetchAlbums();
        }
      } catch (error) {
        toast.error("Error occurred while removing the album.");
        console.error('Error removing album:', error);  
      }
     
    }
  return (
    <div>
      <p>All Albums List</p>
      <br />

      <div>
         <div className='sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100' >
           <b>Image</b>
           <b>Name</b>
           <b>Description</b>
           <b>Album Colour</b>
           <b>Action</b>
         </div>

         {data.map((item, index)=>{
                return (
                  <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 '>
                    <img className='w-12' src={item.image} alt="" />
                     <p>{item.name}</p>
                     <p>{item.desc}</p>
                     <input type="color" value={item.bgColour} />
                     <p onClick={()=> removeAlbum(item._id)} className='cursor-pointer'>x</p>
                  </div>
                )
          })}
      </div>
       
    </div> 
  )
}


export default ListAlbum