import React from 'react'
import pic1 from '../../assets/intro1-pic1.jpg'
import pic2 from '../../assets/intro1-pic2.jpg'

const Intro1 = () => (
  <section className='intro1 container'>
    <div className='text-center heading'>
      <h5>Lorem Ipsum, Lorem Ipsum</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="row text-block-1">
      <div className="col-xs-12 col-sm-6">
        <p><strong>Lorem Ipsum, Lorem Ipsum.</strong></p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </div>
      <div className="col-xs-12 col-sm-6">
        <img src={pic1} alt="intro1" className="img-fluid"/>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-6 push-sm-6">
        <p><strong>Lorem Ipsum, Lorem Ipsum.</strong></p>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
        as opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </div>
      <div className="col-xs-12 col-sm-6 pull-sm-6">
        <img src={pic2} alt="intro1" className="img-fluid"/>
      </div>
    </div>
  </section>
)

export default Intro1