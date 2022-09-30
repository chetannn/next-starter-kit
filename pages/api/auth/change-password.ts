import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { comparePassword, hashPassword, getSession } from '../../../lib/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return
    }

    const session = await getSession(req, res)

    if(!session || !session.user || !session.user.email) {
       return res.status(401).json({ message: 'Not authenticated' })
    }

    const user = await prisma.user.findFirst({
        where: {
            email: session?.user?.email || undefined
        }
    })

    if(!user) {
       return res.status(404).json({ message: 'User not found!' })
    }

   const { currentPassword, newPassword, confirmNewPassword } = req.body

   if(await !comparePassword(currentPassword, user.password)) {
     return res.status(400).json({ error: 'Incorrect Password' })
   }

   if(newPassword !== confirmNewPassword) {
    return res.status(400).json({ error: 'New Password and Confirm New Password should match.' })
   }

   if(currentPassword === newPassword) {
        return res.status(400).json({ error: 'New password should not match current password.' })
   }

   const hashedPassword = await hashPassword(newPassword)

   await prisma.user.update({
        where: {
            id: user?.id
        },
        data: {
            password: hashedPassword
        }
   })

  res.status(200).json({ message: "Password updated successfully" });

}