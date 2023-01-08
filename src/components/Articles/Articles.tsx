import { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { Link } from 'react-router-dom'
import articles from 'data'
import Article from './Article'
import Button from 'components/common/Button/Button'
import './Articles.scss'

const Articles = () => {
	const AuthCtx = useContext(AuthContext)
	const { isLoggedIn } = AuthCtx

	return (
		<div className='articles'>
			{isLoggedIn && (
				<Button sx={{ alignSelf: 'center' }} type='contained'>
					<Link className='articles__new-article-btn' to='/blog/new-article'>
						New article
					</Link>
				</Button>
			)}

			{articles.map(({ id, title, entry }) => (
				<Article key={id} id={id} title={title} entry={entry} />
			))}
		</div>
	)
}

export default Articles
