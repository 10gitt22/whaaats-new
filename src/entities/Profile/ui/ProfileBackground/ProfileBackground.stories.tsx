import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ProfileBackground } from './ProfileBackground'

const component = {
  title: 'entities/Profile/ProfileBackground',
  component: ProfileBackground,
  args: {
    backgroundPhoto: 'https://wallpaper.dog/large/20501895.jpg'
  }
}

export default component as ComponentMeta<typeof ProfileBackground>

const Template: ComponentStory<typeof ProfileBackground> = (args) => <ProfileBackground {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
