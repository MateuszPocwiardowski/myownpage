import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import WestIcon from '@mui/icons-material/West'
import Input from 'components/common/Input/Input'
import Text from 'components/common/Text/Text'
import TextField from 'components/common/TextField/TextField'
import Button from 'components/common/Button/Button'
import articles from 'data'
import './CreateArticle.scss'

const CreateArticleForm = () => {
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
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<CircularProgress sx={{ marginY: '10rem' }} size={80} thickness={3} />
			</div>
		)
	}

	return (
		<Box className='form' component='form'>
			<Link className='form__back' to={`/blog`}>
				<WestIcon /> Back
			</Link>

			<Text type='h5' sx={{ color: '#fff', marginY: '1rem' }}>
				Lorem ipsum dolor sit amet.
			</Text>
			<Input
				sx={{
					width: '100%',
					borderRadius: '3rem',
				}}
				required
				id='title'
				label='Title'
				type='text'
				value={title}
				onChange={onChangeTitleHandler}
			/>
			<Text sx={{ color: 'red' }}>{errorTitle}</Text>
			<TextField
				sx={{
					width: '100%',
					borderRadius: '3rem',
				}}
				required
				id='entry'
				label='Entry'
				minRows={10}
				value={entry}
				onChange={onChangeEntryHandler}
			/>
			<Text sx={{ color: 'red' }}>{errorEntry}</Text>
			<Button sx={{ marginTop: '.5rem ' }} type='contained' onClick={submitHandler}>
				Add new article
			</Button>
		</Box>
	)
}

export default CreateArticleForm
