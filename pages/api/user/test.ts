import { prisma } from '../../../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {
    
    const users = await prisma.user.findMany()

    res.json(users)
  }

  catch(error) {
    res.status(400).json({ error })
  }
}
