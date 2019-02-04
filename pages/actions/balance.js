import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import token from '../../ethereum/token'
import web3 from '../../ethereum/web3'

class Balance extends Component {

    state = {
        address: '',
        accountBalance: 0,
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault()

        this.setState({
            loading: true,
            accountBalance: 0,
            errorMessage: ''
        })

        try {
            const accounts = await web3.eth.getAccounts()
            const res = await token.methods
                .balances(this.state.address).call()        
         
            this.setState({ accountBalance: res })
        } catch (err) {
            this.setState({ errorMessage: err.message })
        }
        this.setState({ loading: false })
    }
    render() {
        return (
            <Layout>
                <div style={{ width: "68%", margin: "0 auto" }} >
                    <h3 style={{ textAlign: "center", margin: "30px" }}>View Balance</h3>
                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.accountBalance}>
                        <Form.Field>
                            <label>Account Address</label>
                            <Input
                                label="account address"
                                labelPosition="right"
                                value={this.state.address}
                                onChange={event => this.setState({ address: event.target.value })}
                            />
                        </Form.Field>

                        <Message
                            success
                            header= 'Kitten Tokens in this account'
                            content={this.state.accountBalance}
                        />
                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary type='submit'>View Balance</Button>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default Balance