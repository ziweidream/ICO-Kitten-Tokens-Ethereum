import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'
import Link from 'next/link'

export default () => {
    return (
        <div style={{ marginTop: '20px', marginBottom: '5px', textAlign: 'center' }}>
            <Header as='h2' >
                <Link href={{ pathname: '/' }}>
                    <Image circular size='mini' src='https://res.cloudinary.com/dpjg3yr24/image/upload/v1548944190/cat-1-.jpg' />
                </Link>
                Kitten Token - An ERC20 Token
                <Link href={{ pathname: '/' }}>
                    <Image circular size='mini' src='https://res.cloudinary.com/dpjg3yr24/image/upload/v1548944190/cat-1-.jpg' />
                </Link>
            </Header>
            <Header>
                <i className="fab fa-ethereum"></i>
            </Header>
        </div>
    )
}