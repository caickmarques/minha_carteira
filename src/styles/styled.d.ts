import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primary: string,
            secondary: string,
            tertiary: string,

            white: string,
            black: string,
            gary: string,

            sucess: string,
            info: string,
            warning: string,
        },
    };
}