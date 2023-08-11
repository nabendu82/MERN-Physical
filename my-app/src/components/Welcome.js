import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, type, children } = this.props;

        return (
            <>
                <h1>Welcome {name} which is {type}</h1>
                <p>{children}</p>
            </>
        )
    }
}

export default Welcome