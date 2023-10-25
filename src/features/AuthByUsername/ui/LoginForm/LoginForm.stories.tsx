import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

import { StringDecoder } from 'string_decoder';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <StoreDecorator
                    state={{
                        loginForm: { username: 'Senez', password: 'Senez' },
                    }}
                >
                    <Story />
                </StoreDecorator>
            </ThemeDecorator>
        ),
    ],
};
export const Primary: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <StoreDecorator
                    state={{
                        loginForm: { username: 'Senez', password: 'Senez' },
                    }}
                >
                    <Story />
                </StoreDecorator>
            </ThemeDecorator>
        ),
    ],
};
export const WithError: Story = {
    args: {},
    decorators: [
        (Story) => {
            return (
                <ThemeDecorator theme={Theme.DARK}>
                    <StoreDecorator
                        state={{
                            loginForm: {
                                error: 'Error',
                            },
                        }}
                    >
                        <Story />
                    </StoreDecorator>
                </ThemeDecorator>
            );
        },
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        (Story) => {
            return (
                <ThemeDecorator theme={Theme.DARK}>
                    <StoreDecorator
                        state={{
                            loginForm: {
                                isLoading: true,
                            },
                        }}
                    >
                        <Story />
                    </StoreDecorator>
                </ThemeDecorator>
            );
        },
    ],
};
