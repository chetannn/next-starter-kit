import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "../../../lib/prisma"
import { compare } from "bcryptjs"

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    session({ session, token, user }) {
      return session
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`
      else if (new URL(url).origin === baseUrl) return url

      return baseUrl
  }
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
            email: credentials?.email?.toLowerCase()
          }
        })

        const isCorrectPassword = await compare(credentials?.password, user?.password)

        if(!isCorrectPassword) {
          throw new Error('Incorrect Password')
        }

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
