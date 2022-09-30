import type { NextPage } from 'next'
import Input from '../components/Input'
import Layout from '../components/Layout'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import DeleteAccountModal from '../components/DeleteAccountModal'
import Button from '../components/Button'

const Profile: NextPage = () => {

    const { data: session } = useSession()
    const [deleteAccountModal, setDeleteAccountModal] = useState(false)

    function closeModal() {
        setDeleteAccountModal(false)
    }

    return (
        <Layout>
            <div className="max-w-5xl w-full mx-auto px-8">
            <h2 className="text-lg font-semibold my-4">Profile</h2>
                <form className="max-w-2xl rounded-lg shadow bg-white">
                    <div className="px-4 py-3">
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">Name</label>
                            <Input value={session?.user?.name} className="px-3 py-2 w-full" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">Email</label>
                            <Input value={session?.user?.email} className="px-3 py-2 w-full" />
                        </div>
                    </div>

                    <footer className="rounded-b-lg px-6 py-3 bg-gray-50">
                        <div className="flex items-center justify-end space-x-2">
                            <Button 
                            variant="danger" 
                            type='button' 
                            onClick={() => setDeleteAccountModal(true)} 
                            className="inline-flex items-center text-sm">
                                Delete Account
                                </Button>
                            <Button variant="primary" className="inline-flex items-center text-sm">Update Profile</Button>
                        </div>
                    </footer>
                </form>
            </div>

            <DeleteAccountModal show={deleteAccountModal} onClose={closeModal} />

        </Layout>
    )
}

export default Profile

