import {useColorScheme} from 'react-native';
import {darkTheme, lightTheme, spacing, typography, radius, shadows, animation, avatarSize} from '../constants/theme';

export const useTheme = () => {
    const scheme = useColorScheme();
    const theme = scheme === 'dark' ? darkTheme : lightTheme;

    return {
        colors: theme.colors,
        isDark: theme.dark,
        spacing,
        typography,
        radius,
        shadows,
        animation,
        avatarSize,
    }
}