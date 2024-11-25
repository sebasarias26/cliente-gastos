import React from 'react'
import './Home.css'
import SingIn from '../SingIn/SingIn'
import { useState } from 'react'

function Home() {
  return (
    <div>
        <main>
        <div className="left">
          <SingIn />
        </div>
        <div className="right">

        </div>
      </main>
    </div>
  )
}

export default Home