import { GetServerSidePropsContext } from 'next';
import Layout from '../components/Layout'
import { getSession } from '../lib/auth';

 export default function Dashboard(){
  return (
    <Layout>
     <h1>Dashboard</h1>
    </Layout>
  );
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
   const { req, res } = context
   const session = await getSession(req, res)

   if(!session?.user) {
      return {
         redirect: {
            permanent: false,
            destination: '/auth/login'
         }
      }
   }

   return {
      props: {

      }
   }
}