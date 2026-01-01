import Redis from 'ioredis'

const redis = new Redis(process.env.REDIS_URL)

export async function create(path, page, token) {
    await redis.hset(path, page, token)
}

export async function read(path, page) {
    const [token, next] = await Promise.all([
        redis.hget(path, page),
        redis.hget(path, (Number(page) + 1))
    ])
    return {
        token: token,
        hasNext: next !== null
    }
}

export async function clear(path) {
    await redis.del(path)
}
