import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import token from '../../ethereum/token'
import web3 from '../../ethereum/web3'


class Transfer extends Component {
    state = {
        fromAddress: '',
        toAddress: '',
        amount: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault()

        this.setState({ loading: true, errorMessage: '' })

        try {
            const accounts = await web3.eth.getAccounts()

            await token.methods
                .transferFrom(this.state.fromAddress, this.state.toAddress, this.state.amount)
                .send({
                    from: accounts[0]
                })
        } catch (err) {
            this.setState({ errorMessage: err.message })
        }

        this.setState({ loading: false })
    }

    render() {
        return (
            <Layout>
                <div style={{ width: "68%", margin: '0 auto' }}>
                    <h3 style={{ textAlign: "center", margin: "30px" }}>Transfer Kitten Tokens in Allowance</h3>

                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                        <Form.Field>
                            <label>transfer tokens from:</label>
                            <Input
                                label="owner's account address"
                                labelPosition="right"
                                value={this.state.fromAddress}
                                onChange={event => this.setState({ fromAddress: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>transfer tokens to:</label>
                            <Input
                                label="spender's account address"
                                labelPosition="right"
                                value={this.state.toAddress}
                                onChange={event => this.setState({ toAddress: event.target.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>amount of tokens</label>
                            <Input
                                label="amount of Kitten Tokens"
                                labelPosition="right"
                                value={this.state.amount}
                                onChange={event => this.setState({ amount: event.target.value })}
                            />
                        </Form.Field>

                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary type='submit'>Transfer From</Button>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default Transfer