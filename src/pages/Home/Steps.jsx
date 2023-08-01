import React from 'react'
import './Steps.css'
import howToImage from '../../assets/howto.png';
import LineDiv from '../../assets/Line3.png'

function Steps() {
  return (
    <div className="section">
      <div className="group-wrapper">
        <div className="group">
          <img className="line" alt="Line" src={LineDiv} />
          <div className="div">
            <h1 className="text-wrapper">Find the best scholarships for you.</h1>
            <div className="text-wrapper-2">How Does Scholar.ly Work?</div>
            <img className="uclm-library" alt="Uclm library" src={howToImage} />
          </div>
          <div className="group-2">
            <p className="p">After signing up, you may then personalize your profile.</p>
            <p className="using-your-unique">
              Using your unique profile, you&#39;ll be given a list of scholarships that matches your preferences.
            </p>
            <p className="text-wrapper-3">
              After setting up your profile, you submit a scholarship application and obtain funds.
            </p>
            <p className="text-wrapper-2">Step 1. Set up a profile</p>
            <p className="text-wrapper-4">Step 2. Receive scholarships that fits you</p>
            <p className="text-wrapper-5">Step 3. Submit an application</p>
            <div className="overlap-group">
              <button type="button" className="steps-join-btn">JOIN NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps