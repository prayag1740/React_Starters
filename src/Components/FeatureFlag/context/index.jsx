import { createContext, useEffect, useState } from "react";
import fetchFeatureFlagsApiCall from "../data";

export const FeatureFlagsContext = createContext({}) ;

export default function FeatureFlagGlobalState ({children}) {
const [loading, setLoading] = useState(false) ;
const [enabledFlags, setEnabledFlags] = useState({}) ;

async function fetchFeatureFlags () {
    try {
        setLoading(true) ;
        const response = await fetchFeatureFlagsApiCall() ;
        setEnabledFlags(response)
        setLoading(false) ;

    } catch (error) {
        console.log(error) ;
        setLoading(false) ;
        throw new Error(error);
    }
}

useEffect (() => {
    fetchFeatureFlags();
}, [])

return (<FeatureFlagsContext.Provider value={{enabledFlags, loading}}>
    {children}
</FeatureFlagsContext.Provider>
) ;
}



