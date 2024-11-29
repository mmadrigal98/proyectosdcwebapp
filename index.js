import Fastify from 'fastify'
import UserRoutes from './src/routes/user.route.js'
import AuthRoutes from './src/routes/auth.route.js'
import { db } from './src/db/instance.js'
import { createInitialData } from './src/db/scripts.js'

const API_PREFIX = '/api'

const fastify = Fastify({
  logger: true,
})

// register routes
fastify.register(UserRoutes, { prefix: API_PREFIX + '/users' })
fastify.register(AuthRoutes, { prefix: API_PREFIX + '/auth' })

// sync db
await db.sync()

// create initial data
await createInitialData()

try {
  fastify.listen({ port: process.env.PORT || 3000})
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}
