import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    closeHandler: { action: 'Closed' },
    children: { control: 'text' },
    title: { control: 'text' },
    width: { control: 'select', options: ['sm', 'md', 'lg'] },
    position: { control: 'select', options: ['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right'] }
  }
}

export default meta;

type Story = StoryObj<typeof Modal>;

export const Playground: Story = {
  args: {
    open: false,
    children: 'Modal body text',
    title: 'Modal Title',
    width: 'sm',
    position: 'center'
  }
}
