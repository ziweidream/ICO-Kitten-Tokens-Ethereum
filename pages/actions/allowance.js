import React, { Component } from 'react'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import Layout from '../../components/Layout'
import token from '../../ethereum/token'
import web3 from '../../ethereum/web3'

class Allowance extends Component {

    state = {
        ownerAddress: '',
        spenderAddress: '',
        accountAllowance: 0,
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault()

        this.setState({
            loading: true,
            accountAllowancce: 0,
            errorMessage: ''
        })

        try {
            const accounts = await web3.eth.getAccounts()

            const res = await token.methods
                .allowance(this.state.ownerAddress, this.state.spenderAddress).call()
            
            console.log(res)
            this.setState({ accountAllowance: res })

        } catch (err) {
            this.setState({ errorMessage: err.message })

        }
        this.setState({ loading: false })
    }
    render() {
        return (
            <Layout>
                <div style={{ width: "68%", margin: "0 auto" }} >
                    <h3 style={{ textAlign: "center", margin: "30px" }}>View Allowance</h3>
                    <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} success={!!this.state.accountAllowance}>
                        <Form.Field>
                            <label>Owner's Account Address</label>
                            <Input
                                label="owner's account address"
                                labelPosition="right"
                                value={this.state.ownerAddress}
                                onChange={event => this.setState({ ownerAddress: event.target.value })}
                            />
                        </Form.Field>

                        <Form.Field>
                            <label>Spender's Account Address</label>
                            <Input
                                label="spender's account address"
                                labelPosition="right"
                                value={this.state.spenderAddress}
                                onChange={event => this.setState({ spenderAddress: event.target.value })}
                            />
                        </Form.Field>

                        <Message
                            success
                            header= "Allowance in the owner's account"
                            content={this.state.accountAllowance}
                        />
                        <Message error header="Oops!" content={this.state.errorMessage} />
                        <Button loading={this.state.loading} primary type='submit'>View Allowance</Button>
                    </Form>
                </div>
            </Layout>
        )    }
}

export default Allowance