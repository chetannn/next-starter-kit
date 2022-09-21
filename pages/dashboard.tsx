import type { NextPage } from 'next'
import { useSession } from "next-auth/react"
import Layout from '../components/Layout'

const Dashboard: NextPage = () => {

  const { data: session } = useSession()

  return (
    <Layout>
      {JSON.stringify(session)}
    </Layout>
  );
}

export default Dashboard
