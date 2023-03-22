"use client"
import * as React from 'react'
import { useState } from 'react'
import { Button } from './Button'
import {toast} from './toast'
import {signOut} from 'next-auth/react'

interface SignOutButtonProps {}

const SignOutButton: React.FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)
    const signUserOut = async () => {
        setIsLoading(true)

        try {
            await signOut()
        } catch (error) {
            // toast({
            //     title: 'Error Signing In',
            //     message: 'Please try again Later',
            //     type: 'error'
            // })
        }
    }
    return (
        <Button onClick={signUserOut} isLoading={isLoading}>
            Sign Out
        </Button>
    )
}


export default SignOutButton