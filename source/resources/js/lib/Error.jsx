import React, {Component} from 'react';

export default class Error extends Component {
    buildAttrElement(errors) {
        const errorsElement = errors.map((error, i) => {
            return (<h4 key={i}>{error}</h4>);
        });
        return errorsElement;
    }

    render() {
        return (
            <div>
                {this.buildAttrElement(this.props.errors)}
            </div>
        );
    }
}

