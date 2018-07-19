import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import ManageField from './ManageField';
import { addField, removeField } from '../actions/manageSurveyActions';
import NewFieldButtons from './form/NewFieldButtons'

const ManageFieldList = ({ manageSurvey: { fields }, addField, removeField }) => (
    <Fragment>
        {fields.map((field, index) => (
            <ManageField key={index} index={index} removeField={() => removeField(index)} />
        ))}
        <NewFieldButtons addField={addField} />
    </Fragment>
)

const mapStateToProps = state => ({ manageSurvey: state.manageSurvey })

const mapDispatchToProps = dispatch => ({
    addField: (fieldType) => dispatch(addField(fieldType)),
    removeField: (fieldIndex) => dispatch(removeField(fieldIndex))
})

export default connect(mapStateToProps, mapDispatchToProps)(ManageFieldList);
