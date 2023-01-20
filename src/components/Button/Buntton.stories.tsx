import { ComponentMeta, Story } from '@storybook/react'
import Button, { ButtonProps } from ".";

export default{
  title: 'Buttons/Button',
  component: Button,
  argTypes:{
    variant:{
      control:{
        defaultValue: 'primary',
        type: 'select',
        values:['primary', 'secondary', 'outline']
      }
    }
  }
} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) =>(
<Button {...args}>Hello World</Button>
)