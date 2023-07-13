import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "../From/From.css"
import axios from 'axios';
function SingleUser() {
    const [singledata, setsingledata] = useState()
    let ViewID = localStorage.getItem("ViewID");
   


      const getdata = async () => {
        try {
          let res = await axios.get(`https://shuny-eka-systems-server.vercel.app/users/${ViewID}`);
          setsingledata(res.data);
        } catch (err) {
          console.log(err);
        }
      };

useEffect(() => {
    getdata()
}, [])

      
  return (
    <div className='single_data'>
        <img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png" alt="" style={{
            margin:"auto"
           
        }}/>
 
                <div>
                <p className='text'>ID - {singledata?._id}</p>
                <p className='text'>Name - {singledata?.name}</p>
                <p className='text'>Email - {singledata?.email}</p>
                <p className='text'>Contact No - {singledata?.phone}</p>
            </div>
      
    </div>
  )
}

export default SingleUser
