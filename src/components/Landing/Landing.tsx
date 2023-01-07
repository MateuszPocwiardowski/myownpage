import Button from 'components/common/Button/Button'
import './Landing.scss'

const Landing = () => {
	return (
		<div className='landing'>
			<h3 className='landing__title	'>Helping people make the world a better place through quality software.</h3>
			<Button type='contained' onClick={() => {}}>
				Learn more
			</Button>
		</div>
	)
}

export default Landing
