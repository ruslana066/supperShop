import React from 'react'
import '../app/globals.css';
import { Loyaolt } from '@/components'

import { Toaster } from 'react-hot-toast';

import { StateContext } from '@/contecst/StateContext';

function myApp({Component, pageProps}) {
    return(
        <StateContext>
            <Loyaolt>
                <Toaster/>
                <Component {...pageProps} />
            </Loyaolt>
        </StateContext>
    )
}

export default myApp