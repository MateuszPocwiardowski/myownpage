import { useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { useHistory } from 'react-router-dom'
import articles from 'data'
import Article from './Article'
import Text from 'components/common/Text/Text'
import Button from 'components/common/Button/Button'

import styles from './Articles.styles'

const Articles = () => {
	const AuthCtx = useContext(AuthContext)
	const { isLoggedIn } = AuthCtx

	const history = useHistory()

	const addNewArticleHandler = () => {
		history.replace('/create-article')
	}

	return (
		<div style={styles.articles}>
			{isLoggedIn && (
				<Button sx={styles.newArticle} type='contained' onClick={addNewArticleHandler}>
					New article
				</Button>
			)}

			<Text type='h4' sx={styles.heading}>
				Articles
			</Text>

			{articles.map(({ id, title, entry }) => (
				<Article key={id} id={id} title={title} entry={entry} />
			))}
		</div>
	)
}

export default Articles
