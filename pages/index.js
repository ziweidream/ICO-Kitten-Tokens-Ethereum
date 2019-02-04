import React, { Component } from 'react'
import { Container, Grid, Card, Button, Image, List } from 'semantic-ui-react'
import Link from 'next/link'
import token from '../ethereum/token'
import Layout from '../components/Layout'

class TokenIndex extends Component {
    static async getInitialProps() {
        const name = await token.methods.name().call()
        const symbol = await token.methods.symbol().call()
        const totalSupply = await token.methods.totalSupply().call()

        return { name, symbol, totalSupply }
    }

    render() {
        return (
            <Layout>
                <div>
                    <div style={{ width: '68%', margin: '0 auto' }}>
                        <Card.Group>
                            <Card fluid color='green' style={{ textAlign: 'center' }}>
                                <Card.Content>
                                    <Image floated='right' size='mini' src='https://res.cloudinary.com/dpjg3yr24/image/upload/v1548944190/cat-1-.jpg' />
                                    <Card.Header>Name: {this.props.name}</Card.Header>
                                    <Card.Meta>Symbol: {this.props.symbol}</Card.Meta>
                                    <Card.Meta>Since: 2018</Card.Meta>
                                    <Card.Description>
                                        Total Supply: <strong>{this.props.totalSupply}</strong>
                                    </Card.Description>
                                </Card.Content>
                            </Card>

                            <Card fluid color='green' style={{ textAlign: 'center' }}>
                                <Card.Content extra>
                                    <div className='ui two buttons'>
                                        <Link href={{ pathname: '/actions/approve' }}>
                                            <Button basic color='olive'>
                                                Approve
                                        </Button>
                                        </Link>
                                        <Link href={{ pathname: '/actions/transferfrom' }}>
                                            <Button basic color='green'>
                                                Transfer from
                                        </Button>
                                        </Link>
                                    </div>
                                    <div className='ui two buttons'>
                                        <Link href={{ pathname: '/actions/transfer' }}>
                                            <Button basic color='green'>
                                                Transfer
                                        </Button>
                                        </Link>
                                        <Link href={{ pathname: '/actions/allowance' }}>
                                            <Button basic color='olive'>
                                                View Allowance
                                        </Button>
                                        </Link>
                                    </div>
                                    <div className='ui two buttons'>
                                        <Link href={{ pathname: '/actions/balance' }}>
                                            <Button basic color='olive'>
                                                View Balance
                                        </Button>
                                        </Link>
                                        <Link href={{ pathname: '/actions/buy' }}>
                                            <Button basic color='green'>
                                                Buy/Sell (with ether)
                                        </Button>
                                        </Link>
                                    </div>
                                </Card.Content>
                            </Card>

                            <Card fluid color='green'>
                                <Card.Content>
                                    <Card.Description>
                                        <List>
                                            <List.Item>
                                                <List.Icon name='heart outline' />
                                                <List.Content>
                                                    <List.Header>Approve</List.Header>
                                                    <List.Description>
                                                        Apporve another account to have an allowance.
                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='heart outline' />
                                                <List.Content>
                                                    <List.Header>Transfer from</List.Header>
                                                    <List.Description>
                                                        Transfer Kitten Tokens in allowance.
                                                    </List.Description>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='heart outline' />
                                                <List.Content>
                                                    <List.Header>Transfer</List.Header>
                                                    <List.Description>Transfer Kitten Tokens to another account.</List.Description>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default TokenIndex