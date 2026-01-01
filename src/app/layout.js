import "./globals.css"
import Header from "@/components/layout/Header/Header"
import Footer from "@/components/layout/Footer/Footer"

import { Montserrat, Noto_Sans_KR, Noto_Sans_SC, Noto_Sans_JP } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

const notoSansKR = Noto_Sans_KR({
	subsets: ['korean'],
	weight: '100',
	variable: '--font-noto-kr',
})

const notoSansSC = Noto_Sans_SC({
	subsets: ['chinese-simplified'],
	weight: '100',
	variable: '--font-noto-sc',
})

const notoSansJP = Noto_Sans_JP({
	subsets: ['japanese'],
	weight: '100',
	variable: '--font-noto-jp',
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
		<html lang="en" className={`${montserrat.variable} ${notoSansKR.variable} ${notoSansSC.variable} ${notoSansJP.variable} ${montserrat.className}`}>
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
