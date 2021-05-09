
import React from 'react'
import classNames from 'classnames'
interface IIconProps {
    classNmae?: string;
    style?: React.CSSProperties;
    icon?:string;
}
const Icon = (porps) => {
    let {
        classNmae,
        style,
        icon
    } = porps
    let classe = classNames(`i-icon i-ui-icons i-icon-${icon}`, classNmae)
    return (
        <>
            <i className={classe} style={style}></i>
        </>
    )

    return(<>icon</>)
}
Icon.defaultProps ={
    icon: 'xiangqing'
}
export default  Icon