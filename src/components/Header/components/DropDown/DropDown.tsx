import React, {useRef} from 'react';
import cn from "classnames";
import styles from './DropDown.module.scss';
import {FiChevronDown, FiChevronUp, FiFilm, FiPlay, FiSearch, FiTv, FiVideo} from 'react-icons/fi';
import {useTypedSelector} from "../../../../_hooks/useTypedSelector";
import {useActions} from "../../../../_hooks/useActions";
import {useOnClickOutside} from "usehooks-ts";

interface Option {
    icon?: JSX.Element;
    label: string;
    value: string;
}

const options = [
    {icon: <FiSearch/>, label: 'Все', value: "ALL"},
    {icon: <FiFilm/>, label: 'Фильмы', value: "FILM"},
    {icon: <FiTv/>, label: 'Сериалы', value: "TV_SERIES"},
    {icon: <FiPlay/>, label: 'Мини-сериалы', value: "MINI_SERIES"},
    {icon: <FiVideo/>, label: 'Шоу', value: "TV_SHOW"},
];

export const DropDown: React.FC = () => {
    const {currentOption, isOpen} = useTypedSelector(state => state.dropDownReducer);
    const {changeCurrentOption, toggleMenu} = useActions();
    const divRef = useRef<HTMLDivElement>(null);
    useOnClickOutside(divRef, () => toggleMenu(false))

    const toggle = () => toggleMenu(!isOpen);

    const onOptionClicked = (option: Option) => () => {
        changeCurrentOption({label: option.label, value: option.value});
        toggle();
    };

    return (
        <div className={styles.dropdown_main}>
            <div className={styles.dropdown_header} onClick={toggle}>
                {currentOption.label}
                {isOpen ? <FiChevronUp/> : <FiChevronDown/>}
            </div>
            {isOpen && (
                <div ref={divRef} className={styles.dropdown_list_container}>
                    <ul className={styles.dropdown_list}>
                        {options.map((option: Option) => {
                            const isCurrentOption = currentOption.label === option.label;

                            return (
                                <li className={styles.dropdown_list_item} onClick={onOptionClicked(option)} key={option.label}>
                                    <span className={cn(styles.option_icon, isCurrentOption && styles.active_item)}>{option.icon}</span>
                                    <span className={cn(styles.option_label, isCurrentOption && styles.active_item)}>{option.label}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropDown;