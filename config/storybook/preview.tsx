import { type Preview, StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (

            <StoreDecorator>
                <RouteDecorator>
                    <StyleDecorator>
                        <ThemeDecorator theme={Theme.LIGHT}>
                            <Story />
                        </ThemeDecorator>
                    </StyleDecorator>
                </RouteDecorator>
            </StoreDecorator>

        ),
    ],
};

export default preview;
