import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { comparePassword, hashPassword, getSession } from '../../../lib/auth'
import z from "zod"

const changePasswordSchema = z.object({
    currentPassword: z.string(),
    newPassword: z.string().min(8, "Please enter atleast 8 characters"),
    confirmNewPassword: z.string().min(8, "Please enter atleast 8 characters")
})
.refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New Password and Confirm New Password should be equal"
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== 'POST') {
        return
    }

    const session = await getSession({ req, res })

    if(!session || !session.user || !session.user.email) {
       return res.status(401).json({ message: 'Not authenticated' })
    }

    const parsedSchema = changePasswordSchema.safeParse(req.body)

    if(!parsedSchema.success) {
        return res.status(422).json({ message: parsedSchema.error.message })
    }

    const user = await prisma.user.findFirst({
        where: {
            email: session?.user?.email || undefined
        }
    })

    if(!user) {
       return res.status(404).json({ message: 'User not found!' })
    }

   const { currentPassword, newPassword, confirmNewPassword } =  parsedSchema.data

   const hasMatchedPassword = await comparePassword(currentPassword, user.password)

   if(!hasMatchedPassword) {
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
