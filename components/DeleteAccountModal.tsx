import React, { Fragment } from "react"
import { Dialog, Transition } from '@headlessui/react'
import Input from "./Input";
import Button from "./Button";

interface Props {
    show?: boolean;
    onClose: () => void;
}

export default function DeleteAccountModal({ show, onClose }: Props) {
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-10 font-nunito" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className='transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all'>
                                <div className="w-full max-w-xl p-6">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Delete Account
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
                                        </p>

                                        <div className="mt-4">
                                            <Input type="password" placeholder='Password' className="w-full px-3 py-2" />
                                        </div>

                                    </div>

                                </div>

                                <div className="mt-4 flex flex-row justify-end px-6 py-4 bg-gray-100 text-right">
                                    <Button variant="secondary" type='button' onClick={onClose} className="inline-flex items-center text-sm">Cancel</Button>
                                    <Button variant="danger" type='button' className="ml-3 inline-flex items-center text-sm">Delete Account</Button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}