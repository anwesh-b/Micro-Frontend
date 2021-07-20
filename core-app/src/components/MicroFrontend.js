import React from 'react';

const MFE1Button = React.lazy(
    () => import('ApplicationOne/App')
);

const MFE1NextComponent = React.lazy(
    () => import('ApplicationOne/NextComp')
);

const MicroFrontend = () => {
    return(
    <div>
        <React.Suspense fallback='Loading Button'>
            <MFE1Button/>
        </React.Suspense>
        <React.Suspense fallback='Loading Arko'>
            <MFE1NextComponent/>
        </React.Suspense>

    </div>)
}

export default MicroFrontend;