import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const main = async () => {

  const newUser = await prisma.user.create({
    data: {
      email: 'chetankharel7@gmail.com',
      password: 'Chetan@55'
    }
  })

}
