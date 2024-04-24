'use client'

import { useState } from 'react';
import backend from '../../../lib/axios';
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    const router = useRouter()

    const handleRegister = async (e: any) => {
        e.preventDefault();
        try {
            const response = await backend.post('/auth/signup', {
                email,
                password,
                name
            })
            Cookie.set('token', response.data.token)
            router.push('/')

        }
        catch (error: any) {
            console.log(error.response.data)
        }

    };

    return (
        <main className="w-full h-screen bg-bg_primary p-8 flex flex-col gap-[2rem] justify-center items-center z-50">
            <h1 className="text-6xl text-center font-coperHead text-black">Register</h1>
            <form
                onSubmit={handleRegister}
                className="w-full md:w-[75%] bg-white p-[1rem] rounded-[1rem] border-2 border-outline text-primary_text font-coperHead z-50"
            >
                <div className="flex flex-col gap-[1rem]">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="px-[1rem] py-[0.5rem] bg-white border-outline rounded-2xl border-2 active:border-outline outline-none text-primary_text z-100"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-[1rem] py-[0.5rem] bg-white border-outline rounded-2xl border-2 active:border-outline outline-none text-primary_text z-100"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="px-[1rem] py-[0.5rem] bg-white border-outline rounded-2xl border-2 active:border-outline outline-none text-primary_text z-100"
                    />

                    <button
                        type="submit"
                        className="bg-btn cursor-pointer p-3 rounded-xl text-white z-100"
                    >
                        Register
                    </button>
                </div>
            </form>
        </main>
    );
}