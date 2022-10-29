import articles from 'data'
import Article from './Article'
import Text from 'components/common/Text/Text'

import styles from './Articles.styles'

const Articles = () => {
	return (
		<div style={styles.articles}>
			<Text type='h4' sx={styles.heading}>
				Articles
			</Text>
			{articles.map(article => (
				<Article {...article} />
			))}
		</div>
	)
}

export default Articles
