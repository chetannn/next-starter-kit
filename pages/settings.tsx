import Layout from "../components/Layout";
import Input from "../components/Input";
import toast from "react-hot-toast"
import { useState } from "react";
import Button from "../components/Button";

export default function Settings() {

    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function changePassword(e: any) {
        e.preventDefault()

        setLoading(true)

        await fetch('/api/auth/change-password', {
            body: JSON.stringify({
                currentPassword,
                newPassword,
                confirmNewPassword
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((data) => {
                setLoading(false)
                toast.success(data.message)
            })

    }

    return (
        <Layout>
            <div className="max-w-5xl w-full mx-auto px-8">
                <h2 className="text-lg font-semibold my-4">Change Password</h2>
                <form onSubmit={changePassword} className="max-w-2xl rounded-lg shadow bg-white">
                    <div className="px-4 py-3">
                        <div className="mb-4">
                            <label className="block text-sm text-gray-700  mb-1">Current Password</label>
                            <Input type="password" value={currentPassword} onChange={(event: any) => setCurrentPassword(event.target.value)} className="px-3 py-2 w-full" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">New Password</label>
                            <Input type="password" value={newPassword} onChange={(event: any) => setNewPassword(event.target.value)} className="px-3 py-2 w-full" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 mb-1">Confirm New Password</label>
                            <Input type="password" value={confirmNewPassword} onChange={(event: any) => setConfirmNewPassword(event.target.value)} className="px-3 py-2 w-full" />
                        </div>
                    </div>

                    <footer className="rounded-b-lg px-6 py-3 bg-gray-50">
                        <div className="flex items-center justify-end space-x-2">
                            <Button loading={loading} className="inline-flex items-center text-sm">Change Password</Button>
                        </div>
                    </footer>
                </form>
            </div>

        </Layout>
    );
}