import React from 'react'
import "./Services.css"
import {BiCheck} from "react-icons/bi"

function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Service 1</h3>
          </div>
          <ul className='service__list'> 
          <li>
            <BiCheck className='service__list-icon'/>
            <p className='service__list-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          </ul>
        </article>


        {/* service 2 */}


        <article className='service'>
          <div className="service__head">
            <h3>Service 2</h3>
          </div>
          <ul className='service__list'> 
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          </ul>
        </article>

        {/* service 3 */}

        <article className='service'>
          <div className="service__head">
            <h3>Service 3</h3>
          </div>
          <ul className='service__list'> 
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services
