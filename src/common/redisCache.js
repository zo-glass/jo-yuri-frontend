import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL, {
    lazyConnect: true,
    maxRetriesPerRequest: 1,
})

redis.on('error', (err) => {
    console.error('[Redis] Connection error:', err.message)
})

export async function create(path, page, token) {
    try {
        await redis.hset(path, page, token)
    } catch (err) {
        console.error('[Redis] create error:', err.message)
    }
}

export async function read(path, page) {
    try {
        const [token, next] = await Promise.all([
            redis.hget(path, page),
            redis.hget(path, (Number(page) + 1))
        ])
        return {
            token: token,
            hasNext: next !== null
        }
    } catch (err) {
        console.error('[Redis] read error:', err.message)
        return { token: null, hasNext: false }
    }
}

export async function clear(path) {
    try {
        await redis.del(path)
    } catch (err) {
        console.error('[Redis] clear error:', err.message)
    }
}
