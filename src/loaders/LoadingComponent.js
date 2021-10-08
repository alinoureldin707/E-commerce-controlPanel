import React from 'react'
import Loader from "react-loader-spinner";

function LoadingComponent() {
    return (
        <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
        />
    )
}

export default LoadingComponent
