"use client"
import * as React from 'react'
import { useState } from 'react'
import { Button } from './ui/Button'
import {toast} from './ui/Toast'
import {signIn, signOut} from 'next-auth/react'

interface SignOutButtonProps {}

const SignOutButton: React.FC<SignOutButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)
    const signUserOut = async () => {
        setIsLoading(true)

        try {
            await signIn()
        } catch (error) {
            toast({
                title: 'Error Signing In',
                message: 'Please try again Later',
                type: 'error'
            })
        }
    }
    return (
        <Button onClick={signUserOut} isLoading={isLoading}>
            Sign In
        </Button>
    )
}


export default SignOutButton