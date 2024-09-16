import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {

  const [userData, setUserData] = useState({
    name: "Joseph Mukama",
    image:assets.profile_pic,
    email:'josephmukama67@gmail.com',
    phone:'+256 706807724',
    address:{
      line1:"ucu, Mukono, Uganda",
      line2:"Kauga,Mukono, Uganda"
    },
    gender:'Male',
    dob:'2002-01-20'
  })

  const [isEdit, setIsEdit]= useState(true);


  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit
        ? <input type="text" value={userData.name} onChange={e => setUserData(prev =>({...prev,name:e.target.value}))}/>
        : <p>{userData.name}</p>
      }
    </div>
  )
}

export default MyProfile
