import React from "react"
import cn from "classnames";
import styles from './SliderButton.module.scss'
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

interface SliderButtonProps {
    dir: 'left' | 'right';
    style: string
}

export const SliderButton:React.FC<SliderButtonProps> = ({dir,style}) => {
    return (
        <div className={cn(styles.button, style)}>
            {dir === 'left' ? <FaChevronLeft/> : <FaChevronRight/>}
        </div>
    )
}
