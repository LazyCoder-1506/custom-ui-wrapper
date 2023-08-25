import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    clickHandler: { action: 'Clicked' },
    variant: { control: 'select', options: ['primary', 'secondary', 'primary-outline', 'primary-outline-hover-fill', 'secondary-outline', 'secondary-outline-hover-fill', 'default'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    width: { control: 'select', options: ['normal', 'full'] },
    rounded: { control: 'select', options: ['none', 'normal', 'full'] },
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Button text',
    variant: 'primary',
    size: 'md',
    width: 'normal',
    rounded: 'normal'
  }
}

export const Base: Story = {
  render: () => (
    <>
      <div className="grid grid-cols-3 gap-16 mb-4">
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Primary</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Secondary</p>
          <Button
            clickHandler={action('Clicked')}
            variant='secondary'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Default</p>
          <Button
            clickHandler={action('Clicked')}
          >
            Button
          </Button>
        </div>
      </div>
    </>
  )
}

export const Outline: Story = {
  render: () => (
    <>
      <div className="grid grid-cols-2 gap-16 mb-4">
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Primary Outline</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary-outline'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Secondary Outline</p>
          <Button
            clickHandler={action('Clicked')}
            variant='secondary-outline'
          >
            Button
          </Button>
        </div>
      </div>
    </>
  )
}

export const OutlineHoverFill: Story = {
  render: () => (
    <>
      <div className="grid grid-cols-2 gap-16 mb-4">
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Primary Outline with Hover Fill</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary-outline-hover-fill'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Secondary Outline with Hover Fill</p>
          <Button
            clickHandler={action('Clicked')}
            variant='secondary-outline-hover-fill'
          >
            Button
          </Button>
        </div>
      </div>
    </>
  )
}

export const Size: Story = {
  render: () => (
    <>
      <div className="grid grid-cols-3 gap-16 mb-4">
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Small</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
            size='sm'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Medium (Default)</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Large</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
            size='lg'
          >
            Button
          </Button>
        </div>
      </div>
    </>
  )
}

export const Width: Story = {
  render: () => (
    <>
      <div className="grid grid-cols-2 gap-16 mb-4">
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Normal Width (Default)</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Full Width</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
            width='full'
          >
            Button
          </Button>
        </div>
      </div>
    </>
  )
}

export const Rounded: Story = {
  render: () => (
    <>
      <div className="grid grid-cols-3 gap-16 mb-4">
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">None</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
            rounded='none'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Normal (Default)</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
          >
            Button
          </Button>
        </div>
        <div className='text-center'>
          <p className="text-sm text-gray-500 mb-2">Full</p>
          <Button
            clickHandler={action('Clicked')}
            variant='primary'
            rounded='full'
          >
            Button
          </Button>
        </div>
      </div>
    </>
  )
}