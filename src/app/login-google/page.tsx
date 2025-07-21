'use client'

import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useRouter } from 'next/navigation';

 export default function GoogleLogInPage() {

    const handleLoginSuccess = async (CredentialResponse: any) => {
        console.log("Login successful with Google:", CredentialResponse);
        const router = useRouter();
        if (!CredentialResponse.credential) {
            console.error("No credential received from Google");
            return;
        }
        localStorage.setItem("jwt", CredentialResponse.credential);
        router.push('/');
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/google`, 
                {
                    idToken: CredentialResponse.credential
                }
            );
            const jwt = response.data.token;
            localStorage.setItem("jwt" , jwt );
            }
            catch (err) {
            console.error("Login failed:", err)
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold">Login</h1>
            <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.error("Login failed")}
                logo_alignment="left"
            />
        </main>
    )
 }