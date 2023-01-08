import { Link, useLocation } from 'react-router-dom'
import WestIcon from '@mui/icons-material/West'
import Text from 'components/common/Text/Text'
import './DetailsArticle.scss'

const DetailsArticle = () => {
	const location = useLocation<{ id?: number; title?: string; entry?: string }>()
	const { id, title, entry } = location.state

	return (
		<div className='article' key={id}>
			<Link className='article__back' to={`/blog`}>
				<WestIcon /> Back
			</Link>

			{!!title && (
				<Text type='h5' sx={{ color: '#fff', marginY: '1rem' }}>
					{title}
				</Text>
			)}
			{!!entry && <Text sx={{ textAlign: 'justify' }}>{entry}</Text>}
		</div>
	)
}

export default DetailsArticle
