import { revalidateTag } from 'next/cache'
import { clear } from '@/common/redisCache'

export async function POST(request) {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get('tag')
    const key = searchParams.get('key')
    const mode = searchParams.get('mode')

    if (key !== process.env.REVALIDATE_KEY) {
        return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 403 })
    }

    if (!tag) {
        return new Response(JSON.stringify({ message: 'Missing tag' }), { status: 400 })
    }

    if (mode === 'hard') {
        clear(tag)
        revalidateTag(tag, 'max')
    } else if (mode === 'soft') {
        revalidateTag(tag, 'max')
    } else {
        return new Response(JSON.stringify({ message: 'Invalid mode' }), { status: 400 })
    }

    revalidateTag(tag, 'max')

    return new Response(JSON.stringify({ message: `Tag '${tag}' revalidated` }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    })
}
