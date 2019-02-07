import React, { Component } from 'react'
import { Button, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'

class Buy extends Component {
    render() {
        return (
            <Layout>
                <Message color="green" size="massive" style={{ textAlign: 'center', marginTop: '68px' }}>
                    <Message.Header><h1><b>ICO Crowdsale - Kitten Token</b></h1></Message.Header>
                    <h1><b>Limited Time Offer!</b></h1>
                    <a href="https://ziweidream.github.io/token-sale-react/">
                        <Button color='green' size="massive"><b>Enter</b></Button>
                    </a>
                </Message>
            </Layout>
        )
    }
}

export default Buy
