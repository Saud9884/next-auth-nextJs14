"use client";
import { signIn, useSession } from 'next-auth/react';
import React from 'react'

export default function Dashboard() {

    const {data : session} = useSession();
  return (
    <>
    {session ? (
        <>
        <img src={session.user?.image as string} className='rounded-full w-20 h-20'></img>
        <h1 className='text-3xl text-green-300 font-bold'>Welcome Back, {session.user?.name}</h1>
        <p>{session.user?.email}</p>
        </>
    ) : (
        <>
        <h1 className='text-3xl text-red-300 font-bold'>You are not logged in</h1>
        <button onClick={() => signIn("google")} className='border border-black rounded-lg px-5 py-1'>Sign in using Google Account</button>
        </>
    )}
    </>
  )
}
