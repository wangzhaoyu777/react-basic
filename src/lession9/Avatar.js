import React, {Component} from 'react';

class Avatar extends Component {
    render() {
        return (
            <img src={this.props.url}  className={"rounded-circle"} />
        );
    }
}

export default Avatar;
