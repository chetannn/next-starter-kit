import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"

const prisma = new PrismaClient()


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
         email: { label: "Email Address", type: "email", placeholder: "john.doe@example.com" },
         password: { label: "Password", type: "password", placeholder: "Your super secure password" },
      },
      async authorize(credentials) {

        const user = await prisma.user.findUnique({
          where: {
            email: 'chetankharel7@gmail.com'
          }
        })

      if (user) {
        return user
      } else {
        return null
      }
    }
    })
  ],
  pages: {
    signIn: '/auth/login'
  },
  events: {

  },
  debug: false
})
