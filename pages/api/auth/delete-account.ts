import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession, comparePassword } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return
    }

  const session = await getSession({ req, res })

    if(!session || !session.user || !session.user.email) {
       return res.status(401).json({ message: 'Not authenticated' })
    }

    const user = await prisma.user.findFirst({
        where: {
            email: session.user.email
        }
    })

    const hasMatchedPassword = await comparePassword(req.body.password, user?.password!)

    if(!hasMatchedPassword) {
        return res.status(400).json({ error: 'Incorrect Password.' })
    }


    await prisma.user.delete({
        where: {
            email: session.user.email
        }
    })

    res.json({ message: 'Account deleted successfully.' })

}