import Carousel from 'react-bootstrap/Carousel'
export default function Slider(){
 return(
<Carousel variant="dark" interval={900} >
 <Carousel.Item>
  <img
    className=""
    src="https://svgshare.com/i/hrA.svg"
    alt="First slide"
  />
 </Carousel.Item>
 <Carousel.Item>
  <img
    className=""
    src=" https://svgshare.com/i/hrB.svg"
    alt="Second slide"
  />
</Carousel.Item>
<Carousel.Item>
<img
    className=""
    src="https://svgshare.com/i/hrV.svg"
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
)
}