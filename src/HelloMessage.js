import store from "./store";
import React from "react";
import { connect } from 'react-redux'
import Header from "./components/Header";

class HelloMessage extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1
                    onClick={this.props.increment}
                >
                    Hello {this.props.name}
                </h1>
            </div>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        name: state.name + ownProps.lal,
        date: new Date()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // dispatching plain actions
        increment: () => dispatch({'type': 'GOSTER', 'name': 'özgür' + new Date()}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HelloMessage)

