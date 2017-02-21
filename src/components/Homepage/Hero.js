import React from 'react'
import image from '../../assets/hero.jpg'

const Hero = () => (
  <section className='hero text-center container-fluid'>
      <h4>Lorem Ipsum</h4>
      <h4>Lorem Ipsum, Lorem Ipsum</h4>
      <div className='call-of-action'>
        <button type="button" className="btn btn-primary">Get started</button>
        <div className="separator"></div>
        <button type="button" className="btn btn-outline-secondary">Documentation</button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img src={image} alt="hero image"/>
          </div>
        </div>
      </div>
  </section>
)

export default Hero