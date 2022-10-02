import type { NextApiRequest, NextApiResponse } from 'next'
import { hashPassword } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'
import z from "zod"

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8, "Please enter atleast 8 characters"),
  confirmPassword: z.string().min(8, "Please enter atleast 8 characters")
})
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password should match"
  })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return
  }

  const parsedSchema =  userSchema.safeParse(req.body)

  if(!parsedSchema.success) {
     return res.status(422).json({ message: parsedSchema.error.message })
  }

  const data = parsedSchema.data

  const existingUser = await prisma.user.findFirst({
    where: {
      email: data.email
    }
  })

  if (existingUser) {

    return res.status(422).json({ message: 'Email already taken!' })
  }


  const hashedPassword = await hashPassword(data.password)

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword
    }

  })

  res.status(201).json({ message: 'user created' })

}
