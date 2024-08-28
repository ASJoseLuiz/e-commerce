import { fastify, FastifyInstance } from 'fastify'
import { PORT } from './env'


export const createServer = (): FastifyInstance => {
    const app = fastify({
        logger: true
    })

    return app
}

export const initiateServer = async (app: FastifyInstance) => {
    try {
        await app.listen({port: PORT})
        console.log(`Server running on port ${PORT}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}
