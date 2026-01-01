import { fetchPaginatedData } from "@/common/dataFetcher"

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?
	`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
	: "https://zo.glass"

async function fetchPaginatedRoutes(path, itemsPerPage) {
	try {
		const { totalPages } = await fetchPaginatedData(path, 1, itemsPerPage, 3600)
		const routes = []

		for (let page = 2; page <= totalPages; page++) {
			routes.push({
				url: `${baseUrl}/${path}?page=${page}`,
			})
		}

		return routes

	} catch (error) {
		console.error(`Error loading paginated routes for ${path}:`)
		return []
	}
}

export default async function sitemap() {
	const staticRoutes = [
		{
			url: `${baseUrl}`,
		},
		{
			url: `${baseUrl}/about`,
		},
		{
			url: `${baseUrl}/discography`,
		},
		{
			url: `${baseUrl}/gallery`,
		},
		{
			url: `${baseUrl}/news`,
		},
		{
			url: `${baseUrl}/profile`,
		},
		{
			url: `${baseUrl}/schedule`,
		},
		{
			url: `${baseUrl}/video`,
		},
		{
			url: `${baseUrl}/privacy`,
		},
		{
			url: `${baseUrl}/terms`,
		},
	]

	const [discographyPages, galleryPages] = await Promise.all([
		fetchPaginatedRoutes("discography", 4),
		fetchPaginatedRoutes("gallery", 12),
	])

	return [...staticRoutes, ...discographyPages, ...galleryPages]
}
