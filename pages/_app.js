import React from 'react'
import '../app/globals.css';
import { Loyaolt } from '@/components'

import { StateContext } from '@/contecst/StateContext';

function myApp({Component, pageProps}) {
    return(
        <StateContext>
            <Loyaolt>
                <Component {...pageProps} />
            </Loyaolt>
        </StateContext>
    )
}

export default myApp