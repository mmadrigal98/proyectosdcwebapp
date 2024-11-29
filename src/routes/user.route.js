async function UserRoutes(fastify, options) {
  fastify.get('/', async (request, reply) => {
    const users = [
      { name: 'Papoi Chavarria', username: 'papoicr', password: '12345' },
    ]

    return { users }
  })
}

export default UserRoutes