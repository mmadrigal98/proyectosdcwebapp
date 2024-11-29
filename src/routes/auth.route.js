import { User } from '../models/user.js'
import { Admin } from '../models/admin.js'

async function AuthRoutes(fastify, options) {
  fastify.post('/userLogin', async (request, reply) => {
    const { username, password } = request.body
    const user = await User.findOne({ where: { username, password }})
    
    return user
  })

  fastify.post('/adminLogin', async (request, reply) => {
    const { username, code, password } = request.body
    const user = await Admin.findOne({ where: { username, code, password }})

    return user
  })
}

export default AuthRoutes