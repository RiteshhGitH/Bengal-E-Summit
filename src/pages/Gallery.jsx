import React from 'react'
import bridge from '../assets/bridge.png'
import './Gallery.css'
import g2 from '../assets/gallery/4.jpg'
import g3 from '../assets/gallery/3.jpg'
import g4 from '../assets/gallery/2.jpg'
import g5 from '../assets/gallery/1.jpg'
import g11 from '../assets/logos/web dev.png'
// import g10 from "../assets/gallery/10.png";

export default function Gallery() {
  return (
    <div>
  <img id="bridge" src={bridge} alt=""/>
  <div class="text">GALLERY</div>
  <div class="gallery-image">
    <div class="img-box">
    <img src={g2} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={g3} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={g4} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={g5} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={g11} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={g11} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
  </div>
  <div class="gallery-image">
    <div class="img-box">
      <img src={g4} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={g11} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={g11} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src={g11} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={g11} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src={g11} alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p></p>
          <p class="opacity-low"></p>
        </div>
      </div> 
    </div>
  </div>

    </div>
  )
}
