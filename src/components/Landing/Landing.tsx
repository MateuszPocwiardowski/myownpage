import Button from 'components/common/Button/Button'
import About from 'components/About/About'
import './Landing.scss'

const Landing = () => {
	return (
		<div className='landing'>
			<div className='landing__hero'>
				<div className='hero__img-container'>
					<img
						className='hero__img'
						src=''
						alt='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente.'
					/>
				</div>
				<div className='hero__title-container'>
					<h4 className='hero__title'>Helping people make the world a better place through quality software.</h4>
					<Button type='contained'>Learn more</Button>
				</div>
			</div>

			<About />
		</div>
	)
}

export default Landing
