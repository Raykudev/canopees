import { useState } from 'react'
import slides from '../data/slider.json'
import './Slider.css'

function Slider(){

    const [ index, setIndex ]= useState(0)

    function nextImage() {
        setIndex((index + 1) % slides.length)
    }
    function prevImage() {
        setIndex ((index - 1 + slides.length) % slides.length)
    }

    const actuelSlide = slides[index]




  return (
    <div className="slider">
        <button className='btn-prev' onClick={prevImage}>⬅</button>
      <img src={actuelSlide.image} alt={actuelSlide.alt} />
      <button className='btn-next' onClick={nextImage}>⮕</button>
    </div>
  )
}

export default Slider