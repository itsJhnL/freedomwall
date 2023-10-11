import React from 'react'
import Image from "next/image"
import google from './google.png'

export default function Login() {
    return (
        <div className='flex flex-col items-center justify-center space-y-24'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold'>FREEDOMWALL</h1>
            </div>
            <div className='relative flex items-center justify-center px-5 rounded-lg border border-4 hover:bg-gray-300 text-lg font-semibold'>
                <span className='absolute left-4'>
                    <Image
                        src={google}
                        width={24}
                        height={24}
                        alt="Google"
                    />
                </span>
                <button className='m-5 pl-10'>Login With Google</button>
            </div>
        </div>
    )
}
