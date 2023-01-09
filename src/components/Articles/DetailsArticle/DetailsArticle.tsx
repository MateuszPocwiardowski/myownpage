import { Link, useLocation } from 'react-router-dom'
import WestIcon from '@mui/icons-material/West'
import Button from 'components/common/Button/Button'
import Text from 'components/common/Text/Text'
import './DetailsArticle.scss'

const DetailsArticle = () => {
	const location = useLocation<{ id?: number; title?: string; entry?: string }>()
	const { id, title, entry } = location.state

	return (
		<div className='details-article' key={id}>
			<Button type='text' sx={{ alignSelf: 'flex-start', padding: 0 }}>
				<Link className='details-article__back' to={`/blog`}>
					<WestIcon /> Back
				</Link>
			</Button>

			{!!title && (
				<Text type='h5' sx={{ fontSize: '1.5rem', marginY: '1rem' }}>
					{title}
				</Text>
			)}
			{!!entry && <Text sx={{ textAlign: 'justify' }}>{entry}</Text>}
		</div>
	)
}

export default DetailsArticle
