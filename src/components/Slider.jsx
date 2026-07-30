import slides from '../data/slider.json'

function Slider(){
    return(
        <div className="slider">
            {slides.map((imgSlide) => (
        <img key={imgSlide.id} src={imgSlide.image} alt={imgSlide.alt} />
     ))}
        </div>
    )
}

export default Slider