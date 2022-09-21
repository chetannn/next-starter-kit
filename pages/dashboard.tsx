import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import { useSession } from "next-auth/react"

const Dashboard: NextPage = () => {

  const { data: session } = useSession()

  return (
    <div className='flex min-h-screen antialiased'>
    <Sidebar />
      <main className='flex-1 px-4 pt-4'>{JSON.stringify(session)}</main>
    </div>
  );
}

export default Dashboard
