import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Layout from '../components/Layout'
import { getSession } from '../lib/auth';

 export default function Dashboard(){
  return (
    <Layout>
     <h1>Dashboard</h1>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
   const session = await getSession(context)

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