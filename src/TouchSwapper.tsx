import { useState } from 'react';

interface Props {
	images: string[];
}
const TouchSwapper = ({ images }: Props) => {
	const [imageIndex, setImageIndex] = useState(0);

	// Between 0 and 20
	const generateRandomIndex = () => Math.round(Math.random() * 20);

	const getRandomIndex = () => {
		let randomIndex = generateRandomIndex();

		while (randomIndex < 0 || randomIndex > 19) randomIndex = getRandomIndex();

		console.log(randomIndex);
		return randomIndex;
	};

	const setRandomIndex = () => setImageIndex(getRandomIndex());

	return (
		<section className='mt-4'>
			<h1>Touch Me</h1>
			<div onClick={setRandomIndex}>
				<img
					src={images[imageIndex]}
					className='cursor-pointer'
					width='400px'
				/>
			</div>
		</section>
	);
};

export default TouchSwapper;
