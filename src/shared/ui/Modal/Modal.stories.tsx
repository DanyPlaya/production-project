import type { Meta, StoryObj } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente vero laudantium voluptas a dolorum vel suscipit modi voluptatum delectus, blanditiis quidem, eius exercitationem enim reiciendis laborum unde quas aliquam.00',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
export const PrimaryDark: Story = {
    args: {

        isOpen: true,
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente vero laudantium voluptas a dolorum vel suscipit modi voluptatum delectus, blanditiis quidem, eius exercitationem enim reiciendis laborum unde quas aliquam.00',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
