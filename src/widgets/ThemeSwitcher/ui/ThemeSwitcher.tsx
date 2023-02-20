import React, { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme} theme={ThemeButton.CLEAR}>
            {
                theme === Theme.LIGHT
                    ? <LightIcon width={30} height={30} />
                    : <DarkIcon width={30} height={30} />
            }
        </Button>
    );
};
