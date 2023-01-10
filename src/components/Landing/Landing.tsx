import Hero from 'components/Landing/HeroSection/Hero'
import About from 'components/Landing/AboutSection/About'
import './Landing.scss'

const Landing = () => {
	return (
		<div className='landing'>
			<Hero />
			<About />
		</div>
	)
}

export default Landing
