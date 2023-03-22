"use client"
import * as React from 'react'
import { useState } from 'react'
import { Button } from './Button'
import {toast} from './toast'
import {signIn} from 'next-auth/react'

interface SignInButtonProps {}

const SignOutButton: React.FC<SignInButtonProps> = ({}) => {
    const [isLoading, setIsLoading] = useState(false)
    const signInWithGoogle = async () => {
        setIsLoading(true)

        try {
            await signIn('google')
        } catch (error) {
            // toast({
            //     title: 'Error Signing In',
            //     message: 'Please try again Later',
            //     type: 'error'
            // })
        }
    }
    return (
        <Button onClick={signInWithGoogle} isLoading={isLoading}>
            Sign In
        </Button>
    )
}


export default SignOutButton