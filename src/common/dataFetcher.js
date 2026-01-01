'use server'

import { create, read } from '@/common/redisCache'
import { getData } from '@/common/apiService'

export async function fetchPaginatedData(path, page, itemsPerPage, revalidate=0) {

    const offset = (page - 1) * itemsPerPage
    let params = {}
    let token = null

    if (Number(page) === 1) {
        params = { limit: itemsPerPage, offset: offset }
    } else {
        token = await read(path, page)
        if (token.token) {
            params = { limit: itemsPerPage, pageToken: token.token }
        } else {
            params = { limit: itemsPerPage, offset: offset }
        }
    }

    const res = await getData(path, {
        params: params,
        revalidate: revalidate,
        tags: [path]
    })

    if (res?.nextPageToken) {
        await create(path, String(Number(page) + 1), res?.nextPageToken)
    }

    const items = res?.items || []

    const totalPages = Math.ceil(res?.pageInfo?.totalResults / itemsPerPage) || 1

    return { items, totalPages }
}

export async function fetchMoreData(path, token, itemsPerPage, revalidate=0) {

    const params = { limit: itemsPerPage, pageToken: token }

    const res = await getData(path, {
        params: params,
        revalidate: revalidate,
        tags: [path]
    })

    const items = res?.items || []

    const nextToken = res?.nextPageToken

    return { items, nextToken }
}
