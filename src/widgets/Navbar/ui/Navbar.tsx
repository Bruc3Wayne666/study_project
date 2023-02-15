import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {FC} from "react";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = () => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={cls.links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to='/'
                    className={cls.mainLink}
                >
                    Main
                </AppLink>
                <AppLink to='about'>
                    About
                </AppLink>
            </div>
        </div>
    );
};
