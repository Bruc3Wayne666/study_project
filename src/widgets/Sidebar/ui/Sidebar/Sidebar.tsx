import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {FC, useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import {Button} from "shared/ui/Button/Button";

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prevState => !prevState)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{`${collapsed}`}</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    );
};
