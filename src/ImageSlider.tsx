import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { useState } from "react";

interface Props {
	images: string[];
  title: string;
}

const ImageSlider = ({ images, title }: Props) => {
  const [imageIndex, setImageIndex] = useState(0);
  
  const goForwards = () => imageIndex === images.length - 1 ? setImageIndex(0) : setImageIndex(imageIndex + 1);
  
  const goBackwards= () => imageIndex === 0 ? setImageIndex(images.length - 1): setImageIndex(imageIndex - 1);

	return (
    <>
      <h1 className='mb-2'>{ title }</h1>
          <div className='max-w-screen-xl w-96 mb-0 mt-0 mr-auto ml-auto relative'>
              <img className='w-full object-fit h-72 block' src={images[imageIndex]} onClick={goForwards}/>
          <div className='flex justify-between'>
            <button className={`${btnStyles} left-0 bg-transparent image-slider-btn`} onClick={goBackwards}><ArrowBigLeft/></button>
            <button className={`${btnStyles} right-0 bg-transparent image-slider-btn`} onClick={goForwards}><ArrowBigRight/></button>
          </div>
          
          </div>
    </>
	);
};

export default ImageSlider;

const btnStyles = 'block absolute top-0 bottom-0 cursor-pointer'