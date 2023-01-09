import { Link } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East'
import Text from 'components/common/Text/Text'
import Button from 'components/common/Button/Button'
import './Article.scss'

const Article = ({ id, title, entry }: { id: number; title: string; entry: string }) => {
	return (
		<div className='article'>
			<Text type='h5' sx={{ marginBottom: '1rem', fontSize: '1.5rem', alignSelf: 'flex-start' }}>
				{title}
			</Text>

			<Text sx={{ textAlign: 'justify', fontWeight: 400 }}>{entry.length > 100 ? `${entry.substring(0, 250)}...` : entry}</Text>

			<Button type='text' sx={{ alignSelf: 'flex-end', marginTop: '1rem' }}>
				<Link className='article__read-more-btn' to={{ pathname: `/blog/${id}`, state: { id, title, entry } }}>
					Read more <EastIcon />
				</Link>
			</Button>
		</div>
	)
}

export default Article
