import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { hash } from "bcryptjs"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method !== 'POST') {
    return
  }

  const data = req.body

  const existingUser = await prisma.user.findFirst({
    where: {
      email: data.email
    }
  })

  if(existingUser) {
    
    return res.status(422).json({ message: 'Email already taken!' })
  }


  const hashedPassword = await hash(data.password, 12)
  
  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword
    }

  })
  
  res.status(201).json({ message: 'user created'  })

}
