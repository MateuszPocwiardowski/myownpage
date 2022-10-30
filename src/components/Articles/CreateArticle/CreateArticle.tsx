import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import Input from 'components/common/Input/Input'
import Text from 'components/common/Text/Text'
import TextField from 'components/common/TextField/TextField'
import Button from 'components/common/Button/Button'
import articles from 'data'

import styles from './CreateArticle.styles'

const AuthForm = () => {
	const history = useHistory()

	const [isLoading, setIsLoading] = useState(false)

	const [title, setTitle] = useState('')
	const [entry, setEntry] = useState('')

	const [errorTitle, setErrorTitle] = useState('')
	const [errorEntry, setErrorEntry] = useState('')

	const onChangeTitleHandler = (event: any) => {
		setTitle(event?.target?.value)
	}

	const onChangeEntryHandler = (event: any) => {
		setEntry(event?.target?.value)
	}

	const submitHandler = (event: any) => {
		event?.preventDefault()

		articles.push({
			id: articles.length + 1,
			title,
			entry,
		})

		history.replace('/')
	}

	if (isLoading) {
		return (
			<div style={styles.progressContainer}>
				<CircularProgress sx={styles.progress} size={80} thickness={3} />
			</div>
		)
	}

	return (
		<Box sx={styles.form} component='form'>
			<Text type='h4' sx={styles.heading}>
				New article
			</Text>
			<Text sx={styles.caption}>Lorem ipsum dolor sit amet.</Text>
			<Input
				sx={styles.input}
				required
				id='title'
				label='Title'
				type='text'
				value={title}
				onChange={onChangeTitleHandler}
			/>
			<Text sx={styles.errorMessage}>{errorTitle}</Text>
			<TextField
				sx={styles.input}
				required
				id='entry'
				label='Entry'
				minRows={10}
				value={entry}
				onChange={onChangeEntryHandler}
			/>
			<Text sx={styles.errorMessage}>{errorEntry}</Text>
			<Button sx={styles.button} type='contained' onClick={submitHandler}>
				Add new article
			</Button>
		</Box>
	)
}

export default AuthForm
