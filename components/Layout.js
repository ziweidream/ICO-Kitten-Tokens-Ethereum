import React from 'react'
import { Container } from 'semantic-ui-react'
import Head from 'next/head'
import Header from './Header'

export default (props) => {
    return (
        <Container>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            </Head>
            <Header />
            {props.children}
        </Container>
    )
}