import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className='App__Form_profile'>
                val{this.props.data}
            </div>
        )
    }
}


export default EditForm;
