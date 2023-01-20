import { ComponentMeta, Story } from '@storybook/react'
import Button, { ButtonProps } from ".";

export default{
  title: 'Buttons/Button',
  component: Button,
  argTypes:{
    variant:{
      defaultValue: 'primary',
      control:{
        type: 'select',
        values:['primary', 'secondary', 'outline']
      }
    }
  }
} as ComponentMeta<typeof Button>

export const Primary: Story<ButtonProps> = (args) =>(
<Button {...args}>Hello World</Button>
)

export const Secondary: Story<ButtonProps> = (args) =>(
  <Button {...args}>Hello World</Button>
  )

  export const Outline: Story<ButtonProps> = (args) =>(
    <Button {...args}>Hello World</Button>
    )

    Secondary.args = {
      variant: 'secondary'
    }

    Outline.args = {
      variant: 'outline'
    }
