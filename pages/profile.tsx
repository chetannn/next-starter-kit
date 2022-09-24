import type { NextPage } from 'next'
import Input from '../components/Input'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'

const Profile: NextPage = () => {

  const { data: session } = useSession()

    return (
        <Layout>
            <div className="max-w-5xl w-full mx-auto px-8">

                <form className="max-w-2xl rounded-lg shadow bg-white">
                    <div className="px-4 py-3">
                        <div className="mb-4">
                            <label className="block text-gray-700 tracking-wider mb-1">Name</label>
                            <Input value={session?.user?.name} className="px-3 py-2 w-full" />
                        </div>
                         <div className="mb-4">
                            <label className="block text-gray-700 tracking-wider mb-1">Email</label>
                            <Input value={session?.user?.email} className="px-3 py-2 w-full" />
                        </div>
                    </div>

                    <footer className="rounded-b-lg px-6 py-3 bg-gray-50">
                        <div className="flex items-center justify-end space-x-2">
                            <button className="inline-flex items-center px-3 py-2 bg-purple-600 hover:bg-purple-600 rounded text-white text-sm">Update Profile</button>
                        </div>
                    </footer>
                </form>
            </div>

        </Layout>
    )
}

export default Profile

