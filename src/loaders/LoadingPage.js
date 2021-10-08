import React from 'react'
import Loader from "react-loader-spinner";

function LoadingPage() {
    return (
        <div className = "loading__page">
            <h1>Stars World</h1>
            <Loader
                type="Bars"
                color="#00BFFF"
                height={150}
                width={150}
            />
        </div>
    )
}

export default LoadingPage
