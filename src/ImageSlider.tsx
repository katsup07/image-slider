import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { useState } from 'react';

interface Props {
	images: {url: string; alt: string}[];
	title: string;
}

const ImageSlider = ({ images, title }: Props) => {
	const [imageIndex, setImageIndex] = useState(0);

	const goForwards = () =>
		imageIndex === images.length - 1
			? setImageIndex(0)
			: setImageIndex(imageIndex + 1);

	const goBackwards = () =>
		imageIndex === 0
			? setImageIndex(images.length - 1)
			: setImageIndex(imageIndex - 1);

	return (
		<section aria-label="image-slider">
			<h1 className='mb-2'>{title}</h1>
			<div className='max-w-screen-xl w-96 mb-0 mt-0 mr-auto ml-auto relative'>
				<div className='flex w-full h-full overflow-hidden '>
					{images.map(({url, alt}, index) => (
						<img
							key={url}
							className='w-full object-fit h-72 block transition-all duration-500 shrink-0 grow-0'
							style={{ translate: `${-100 * imageIndex}%` }}
              aria-hidden={ imageIndex !== index }
							src={url}
              alt={alt}
							onClick={goForwards}
						/>
					))}
				</div>
				<div className='button-actions flex justify-between'>
					<button
						className={`${btnStyles} left-0 bg-transparent image-slider-btn`}
            aria-label="view previous image"
						onClick={goBackwards}>
						<ArrowBigLeft aria-hidden/>
					</button>
					<button
						className={`${btnStyles} right-0 bg-transparent image-slider-btn`}
            aria-label="view next image"
						onClick={goForwards}>
						<ArrowBigRight aria-hidden/>
					</button>
          <div className='flex items-center justify-center absolute bottom-4 left-12 translate-y-1/4'>
            { images.map((_, index) => <button className='bg-transparent text-center text-xs hover:bg-orange-600/30 focus:bg-orange-600/30 rounded-lg' key={index} aria-label={`view image ${index}`} onClick={() => setImageIndex(index)}>{index + 1}</button>)}
          </div>
				</div>
			</div>
   
		</section>
	);
};

export default ImageSlider;

const btnStyles = 'block absolute top-0 bottom-0 cursor-pointer';
