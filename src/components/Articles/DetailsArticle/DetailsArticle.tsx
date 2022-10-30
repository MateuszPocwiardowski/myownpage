import Text from 'components/common/Text/Text'
import Button from 'components/common/Button/Button'
import styles from '../Articles.styles'

const DetailsArticle = ({ id, title, entry }: { id: number; title: string; entry: string }) => {
	return (
		<div key={id} style={styles.article}>
			<Text type='h5' sx={styles.title}>
				{title}
			</Text>
			<Text sx={styles.entry}>{entry}</Text>
			<Button type='text' sx={styles.button}>
				Read more ➞
			</Button>
		</div>
	)
}

export default DetailsArticle
