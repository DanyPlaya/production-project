import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ChangeEvent, useState } from 'react';
import { Input } from './Input';

const meta = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryDark: Story = {
    args: {
        placeholder: 'Type text...',
        value: '123123',

    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
export const PrimaryLight: Story = {
    args: {
        placeholder: 'Type text...',
        value: '123123',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
