import React from 'react'

class ErrorBoundary extends React.PureComponent
{
    constructor(props){
        super(props)
        this.state = { isError: false}
    }
    static getDerivedStateFromError(error){
        return { isError: true }
    }

    render(){
        if(this.state.isError)
            return <h1>Something went wrong :(</h1>
        return this.props.children
    }
}

export default ErrorBoundary