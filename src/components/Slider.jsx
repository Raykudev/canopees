import { useState, useEffect, useRef } from 'react'
import slides from '../data/slider.json'
import './Slider.css'

function Slider() {

  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)
  const stopRef = useRef(false)

  function nextImage() {
    setIndex((index + 1) % slides.length)
  }

  function prevImage() {
    setIndex((index - 1 + slides.length) % slides.length)
  }

  function handlePrevClick() {
    stopRef.current = true
    clearInterval(timerRef.current)
    prevImage()
  }

  function handleNextClick() {
    stopRef.current = true
    clearInterval(timerRef.current)
    nextImage()
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timerRef.current)
  }, [])

  const actuelSlide = slides[index]

  return (
    <div className="slider">
      <button className="btn-prev" onClick={handlePrevClick}>⬅</button>
      <img src={actuelSlide.image} alt={actuelSlide.alt} />
      <button className="btn-next" onClick={handleNextClick}>➡</button>
    </div>
  )
}

export default Slider