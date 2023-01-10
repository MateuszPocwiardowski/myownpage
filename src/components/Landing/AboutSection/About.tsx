import CodeIcon from '@mui/icons-material/Code'
import AboutCard from './AboutCard'
import Text from '../../common/Text/Text'
import './About.scss'

const aboutCardItems = [
	{
		icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
		title: 'Lorem ipsum',
		message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae.`,
	},
	{
		icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
		title: 'Lorem ipsum',
		message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae.`,
	},
	{
		icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
		title: 'Lorem ipsum',
		message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae.`,
	},
	{
		icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
		title: 'Lorem ipsum',
		message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae.`,
	},
	{
		icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
		title: 'Lorem ipsum',
		message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae.`,
	},
	{
		icon: <CodeIcon sx={{ fontSize: '2rem' }} />,
		title: 'Lorem ipsum',
		message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae.`,
	},
]

const About = () => {
	return (
		<div className='about'>
			{aboutCardItems.map(({ icon, title, message }) => (
				<AboutCard key={title} icon={icon} title={title} message={message} />
			))}
		</div>
	)
}

export default About
