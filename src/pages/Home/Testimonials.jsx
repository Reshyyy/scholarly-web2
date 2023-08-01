import React from 'react'
import './Testimonials.css'
import amba from '../../assets/amba.png'

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="group-wrapper">
        <div className="group">
          <div className="div">
            <h1 className="test-text-wrapper">Testimonials</h1>
            <p className="p">Check out what others have to say.</p>
          </div>
          <div className="testimonial" />
          <div className="testimonial-2" />
          <div className="div-wrapper">
            <div className="group-2">
              <div className="overlap">
                <div className="rectangle" />
                <img className="mask-group" alt="Mask group" src="https://generation-sessions.s3.amazonaws.com/99b141202e6b1975bc7a490a9a6bbb26/img/mask-group-2@2x.png" />
                <div className="test-text-wrapper-2">JUAN DELA CRUZ</div>
                <p className="test-text-wrapper-3">
                  “I am incredibly grateful for the support and opportunities provided by Scholar.ly. As a student with
                  limited financial resources, pursuing higher education seemed like an uphill battle. However, thanks
                  to the scholarships I received, my dreams turned into reality.”
                </p>
              </div>
              <div className="overlap-group">
                <div className="rectangle" />
                <img className="mask-group" alt="Mask group" src="https://generation-sessions.s3.amazonaws.com/99b141202e6b1975bc7a490a9a6bbb26/img/mask-group-2@2x.png" />
                <div className="test-text-wrapper-4">JUAN DELA CRUZ</div>
                <p className="test-text-wrapper-3">
                  “I am incredibly grateful for the support and opportunities provided by Scholar.ly. As a student with
                  limited financial resources, pursuing higher education seemed like an uphill battle. However, thanks
                  to the scholarships I received, my dreams turned into reality.”
                </p>
              </div>
              <div className="overlap-group-2">
                
                <div className="rectangle" />
                <img className="mask-group" alt="Mask group" src="https://generation-sessions.s3.amazonaws.com/99b141202e6b1975bc7a490a9a6bbb26/img/mask-group-2@2x.png" />
                <div className="test-text-wrapper-2">JUAN DELA CRUZ</div>
                <p className="test-text-wrapper-3">
                  “I am incredibly grateful for the support and opportunities provided by Scholar.ly. As a student with
                  limited financial resources, pursuing higher education seemed like an uphill battle. However, thanks
                  to the scholarships I received, my dreams turned into reality.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials