import { Admin } from '../models/admin.js'
import { User } from '../models/user.js'

export async function createInitialData() {
  await User.create({
    name: 'Lionnel Messi',
    username: 'messicr',
    password: '12345'
  })

  await Admin.create({
    name: 'Jorge Chavarria',
    username: 'papoicr',
    password: '12345',
    code: '1313'
  })
}