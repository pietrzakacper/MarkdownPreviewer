import React from 'react';

class RawInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
      this.props.update(event.target.value);
    }

    render() {
        return (
            <textarea rows="27" className="form-control" type="text" defaultValue={this.props.default} onChange={this.handleChange}></textarea>
        );
    }
}

export default RawInput;
