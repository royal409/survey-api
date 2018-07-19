import React, { Component } from 'react';
import { connect } from 'react-redux'
import Input from './form/Input';
import ManageOptionField from './ManageOptionField';
import ManageInputField from './ManageInputField';
import { setQuestion } from '../actions/manageSurveyActions'

class ManageField extends Component {
    render() {
        const { fieldType, question, index, removeField } = this.props;
        const { setQuestion } = this.props;
        return (
            <div className="field is-horizontal">
                <div className="field-label is-normal" />
                <div className="field-body columns is-centered" style={{ padding: '1rem 0' }}>
                    <div className="box column is-three-quarters" style={{ position: 'relative' }}>
                        <button className="button is-danger is-inverted" style={{ position: 'absolute', top: 0, left: 0 }} onClick={removeField}>
                            <span className="icon has-text-danger">
                                <i className="fas fa-ban"></i>
                            </span>
                        </button>

                        <div className="field field-label is-normal" style={{ textAlign: 'center' }}>
                            <label className="label">Field Type: <em>{fieldType}</em></label>
                        </div>

                        <Input label={`Field: ${index}`} placeholder='What Question would you like to ask?' value={question} onChange={setQuestion} />
                        <br />
                        {fieldType === 'TextInput' ?
                            <ManageInputField fieldIndex={index} /> :
                            <ManageOptionField fieldIndex={index} />}
                    </div >
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    setQuestion: ({ target: { value } }) => dispatch(setQuestion(ownProps.index, value))
}
)

const mapStateToProps = (state, ownProps) => {
    return { ...state.manageSurvey.fields[ownProps.index] }
}


export default connect(mapStateToProps, mapDispatchToProps)(ManageField);

