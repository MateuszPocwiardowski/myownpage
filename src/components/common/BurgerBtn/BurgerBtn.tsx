import './BurgerBtn.scss'

const BurgerBtn = ({ onClick, isOpened }: { onClick: () => void; isOpened: boolean }) => {
	return (
		<button className={isOpened ? 'burgerBtn burgerBtn--opened' : 'burgerBtn burgerBtn--closed'} onClick={onClick}>
			<div
				className={
					isOpened ? 'burgerBtn__inner burgerBtn__inner--opened' : 'burgerBtn__inner burgerBtn__inner--closed'
				}></div>
		</button>
	)
}

export default BurgerBtn
