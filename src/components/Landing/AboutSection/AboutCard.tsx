import Text from 'components/common/Text/Text'
import { AboutCardProps } from './About.types'
import './AboutCard.scss'

const AboutCard = ({ icon, title, message }: AboutCardProps) => {
	return (
		<div className='about-card'>
			{icon}
			<Text type='h6' sx={{ fontWeight: 700 }}>
				{title}
			</Text>
			<Text>{message}</Text>
		</div>
	)
}

export default AboutCard
