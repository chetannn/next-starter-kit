import { hash, compare } from 'bcryptjs'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'

export async function hashPassword(password: string) {
   return await hash(password, 12)
}

export async function comparePassword(password: string, hashedPassword: string) {
 return await compare(password, hashedPassword)
}

export async function getSession(req: any, res: any) {
    const session = await unstable_getServerSession(req, res, authOptions)
    return session
}