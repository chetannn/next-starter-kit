import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

const prisma = new PrismaClient()


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, token, user }) {
      return session // The return type will match the one returned in `useSession()`
    },
  },
  providers: [

  ],
  pages: {

  },
  events: {

  },
  debug: false
})
