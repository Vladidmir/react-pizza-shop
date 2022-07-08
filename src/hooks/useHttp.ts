import { useState } from "react";


export const useHttp = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | unknown>()

    const request = async (url: RequestInfo | URL, method: string = 'GET' , body: any, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true)

        try {

            const response = await fetch(url, {method, body, headers})

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`)
    
            }

            const data = await response.json()

            setLoading(false)
            return data

        } catch (error) {
            setLoading(false)   
            setError(error) 
            throw error
        }

    }

    const clearError = () => setError(undefined)

    return {
        loading,
        request,
        error,
        clearError,
    }

}