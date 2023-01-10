import Button from 'components/common/Button/Button'
import './Hero.scss'

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__img-container'>
				<img className='hero__img' src='' alt='Lorem ipsum' />
			</div>
			<div className='hero__title-container'>
				<h4 className='hero__title'>Helping people make the world a better place through quality software.</h4>
				<Button type='contained'>Learn more</Button>
			</div>
		</div>
	)
}

export default Hero
