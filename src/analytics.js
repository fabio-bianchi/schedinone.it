import React from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from "react-ga4";

export function useAnalytics() {
    const location = useLocation()

    React.useEffect(() => {
        ReactGA.initialize("G-ZCFJBFT28F");
    }, [])

    React.useEffect(() => {
        const path = location.pathname + location.search;
        ReactGA.send({
            hitType: 'pageview',
            page: path
        })
    }, [location])
}

export default useAnalytics
