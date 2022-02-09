import React, { Component } from 'react'

export class Count extends Component {
    constructor() {
        super()
        this.state = {
            data: 0 * 5
        }
    }

    Count() {
        this.setState({ data: this.state.data + 1 * 5 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={() => this.Count()}>Count</button>
            </div>
        )
    }
}

export default Count
