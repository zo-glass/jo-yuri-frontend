import "./globals.css"
import Header from "@/components/layout/Header/Header"
import Footer from "@/components/layout/Footer/Footer"

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
})

export const metadata = {
	metadataBase: new URL(
		process.env.VERCEL_PROJECT_PRODUCTION_URL ?
			`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
			: "https://zo.glass"
	),
	title: "Jo Yuri",
	description: "Jo Yuri",
	keywords: [
		"Yuri",
		"Jo Yuri",
		"조유리",
	],
	openGraph: {
		title: "Jo Yuri",
		description: "Jo Yuri",
		images: ["/assets/profile.jpg"],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={montserrat.className}>
			<body>
				<Header />
				<main className="page">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	)
}
