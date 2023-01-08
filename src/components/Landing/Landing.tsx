import Button from 'components/common/Button/Button'
import './Landing.scss'

const Landing = () => {
	return (
		<div className='landing'>
			<div className='landing__hero'>
				<img
					className='hero__image'
					src=''
					alt='Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente.'></img>
			</div>
			<h4 className='landing__title'>Helping people make the world a better place through quality software.</h4>
			<Button type='contained' onClick={() => {}}>
				Learn more
			</Button>
		</div>
	)
}

export default Landing
