import React from 'react'
import Navbar from '../../component/user/navbar/Navbar'
import Userhome from '../../component/user/home/Userhome'
import Viewproduct from '../../component/admin/viewproduct/Viewproduct'

function Home() {
  return (
    <div>
      <Navbar/>
      <Userhome/>
      <Viewproduct/>
    </div>
  )
}

export default Home
