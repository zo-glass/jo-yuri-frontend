import styles from './GridWrapper.module.css'

export default function GridWrapper({ children, columns, mobileColumns, customPadding }) {
	return (
		<>
			<div
				className={styles.container}
				style={{ 
					'--columns': columns,
					'--mobile-columns': mobileColumns,
					'--custom-padding': customPadding ?? null
				}}
			>
				{children}
			</div>
		</>
	)
}
