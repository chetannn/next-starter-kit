import { hash, compare } from 'bcryptjs'
import { unstable_getServerSession } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export async function hashPassword(password: string) {
   return await hash(password, 12)
}

export async function comparePassword(password: string, hashedPassword: string) {
 return await compare(password, hashedPassword)
}

export async function getSession(req: NextApiRequest, res: NextApiResponse) {
    const session = await unstable_getServerSession(req, res, authOptions)
    return session
}