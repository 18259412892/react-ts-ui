import React from 'react';
import FieldContext from './FieldContext'
class Field extends React.Component{
    static contextType = FieldContext;
    getControlled = (childProps) =>{
        let {getFieldValue,setFieldValue} = this.context
        const {name} = this.props;
        console.log('name',this.props,name)
        return{
            ...childProps,
            value: getFieldValue(name),
            defaultValue: getFieldValue(name),
            onChange: event =>{
                setFieldValue(name,event.target.value)
            }
        }
    }
    render(){
        const { children } = this.props;
        return React.cloneElement(children, this.getControlled(children.props))
    }
}

export default Field;