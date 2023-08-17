import React, { Component } from 'react'

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Lifecycle'
        }
        console.log('Lifecycle constructor')
    }

    componentDidMount(){
        console.log('Lifecycle componentDidMount')
    }

    componentDidUpdate(){
        console.log('Lifecycle componentDidUpdate')
    }

    render() {
        console.log('Lifecycle render')
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.setState({ name: 'TWD' })}>Change State</button>
            </div>
        )
    }
}

export default LifeCycle