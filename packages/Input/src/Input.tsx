import React, { ChangeEvent, InputHTMLAttributes, ReactElement, useRef, useState } from 'react'
import classNames from 'classnames'
import { ISzie } from '@t-ui/types/types';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
    disabled?: boolean; //禁用
    prepend?: string | ReactElement; //输入框前面
    append?: string | ReactElement; //输入框后面
    callback?: (e: ChangeEvent<HTMLElement>) => void; //受控输入框的回调事件 用来取值
    refcallback?: (e: any) => void; //ref回调 可以拿到输入框实例
    defaultValue?: string; //默认值
    setValueCallback?: (v: string) => void; //父组件接管受控组件 父组件value属性做state
    value?: string | undefined; //父组件接管状态是状态
    height?: string; //组件高度
    size?: ISzie
}
/**
* @desc: 文本输入框
* @author:  zhangyunajiang
* @creatDate 2021-05-08 00:32:45
* @param {Object} {}
* @return  {*}
*/
function Input(props: InputProps) {
    const {
        disabled,
        prepend,
        append,
        style,
        callback,
        defaultValue,
        refcallback,
        setValueCallback,
        value,
        height,
        className,
        size,
        ...restProps
    } = props;
    const [inputvalue, setValue] = useState(defaultValue || '')
    let ref = useRef(null);
    const clasess = classNames('i-input', className, {
        ['is-disabled']: disabled,
        [`i-input-${size}`]: size
    })
    return (
        <div className={clasess} style={style}>
            {
                prepend && (
                    <div className="i-input-group-prepend" >
                        {prepend}
                    </div>
                )
            }
            <input 
                ref={ref} disabled={disabled}
                value={setValueCallback ? value : inputvalue}
                onChange={(e) => {
                    setValueCallback ? setValueCallback(e.target.value) : setValue(e.target.value);
                    if (callback) callback(e);
                }}
                {...restProps}
            />
            {append && (
                <div className="i-input-group-append">
                    {append}
                </div>
            )}
        </div>
    )
}
interface ItextAreaProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'> {
    disabled?: boolean;
    style?: React.CSSProperties;
    callback?: (e: ChangeEvent<HTMLElement>) => void;
    refcallback?: (e: any) => void;
    setValueCallback?: (v: string) => void;
    defaultValue?: string,
    value?: string | undefined,
    height?: string; //组件高度
    className?: string,
    width?: string;
    rows?: number;
    size?: ISzie
    
}
/**
* @desc: 富文本输入框
* @author:  zhangyunajiang
* @creatDate 2021-05-08 00:33:02
* @param {Object} {}
* @return  {*}
*/
const TextArea = (props: ItextAreaProps) => {
    const {
        disabled,
        style,
        callback,
        defaultValue,
        refcallback,
        setValueCallback,
        value,
        height,
        className,
        width,
        ...restProps
    } = props;
    let ref = useRef(null);
    const [TextAreaValue,setValue] = useState(defaultValue|| '')
    const clasess = classNames('i-input', className, {
        ['is-disabled']: disabled
    })
    return (
        <div className={`i-input-textarea ${disabled ? 'is-disabled' : ''}`} style={style}>
            <textarea className={clasess} style={{ width }} disabled={disabled}
                value={setValueCallback ? value : TextAreaValue}
                ref={ref}
                onChange={(e)=>{
                    setValueCallback ? setValueCallback(e.target.value) : setValue(e.target.value);
                    if(callback) callback(e);
                }}
                {...restProps}
            ></textarea>
        </div>

    )
}

// visibilityToggle
interface IPassword extends ItextAreaProps{
    visibilityToggle?:boolean
}
/**
* @desc: 密码框
* @author:  zhangyunajiang
* @creatDate 2021-05-08 00:33:15
* @param {Object} {}
* @return  {*}
*/
const Password: React.FC<IPassword> = (props) => {
    const {
        disabled,
        style,
        callback,
        defaultValue,
        refcallback,
        setValueCallback,
        value,
        height,
        className,
        size,
        visibilityToggle,
        ...restProps
    } = props;
    let ref = useRef(null);
    const [passwordValue,setValue] = useState(defaultValue || '');
    const clasess = classNames('i-input', className, {
        ['is-disabled']: disabled,
        [`i-input-${size}`]: size
    })
    return (
        <div className={`i-input-passowrd ${disabled ? 'is-disabled' : ''}`}  style={style}>
            <input type="password" defaultValue="33" className={clasess} 
            value={setValueCallback ? value : passwordValue}
            ref={ref}
            onChange = {(e)=>{
                setValueCallback? setValueCallback(e.target.value) : setValue(e.target.value);
                if(callback) callback(e)
            }}
            {...restProps}
            />
            {
                visibilityToggle && (
                    <>
                        <i className="i-ui-icons i-icon-yif">2</i>
                    </>
                )
            }
        </div>
    )
}
TextArea.defaultProps = {
    width: 300,
    rows: 3,
    disabled: false
}
Input.TextArea = TextArea;
Input.Password = Password;
Password.defaultProps = {
    visibilityToggle: false
}
Input.defaultProps = Password.defaultProps = {
    disabled: false, //默认不禁用
    size: 'small', //默认大小
}
export default Input

