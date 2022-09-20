import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if(req.method !== 'POST') {
    return
  }

  const data = req.body
  
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password
    }

  })
  
  res.status(201).json({ message: 'user created'  })

}
