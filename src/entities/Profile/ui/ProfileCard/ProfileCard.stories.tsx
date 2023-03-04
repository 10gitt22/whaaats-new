import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ProfileCard } from './ProfileCard'

const component = {
  title: 'entities/Profile/ProfileCard',
  component: ProfileCard,
  args: {
    profileData: {
      id: '1',
      firstName: 'Yevhen',
      lastName: 'Gitt',
      age: 21,
      country: 'Ukraine',
      username: 'gitt22',
      avatar: 'https://avatars.githubusercontent.com/u/46067435?s=400&u=7320d508b61430bed0ef63868ed28578b208c292&v=4',
      backgroundPhoto: 'https://wallpaper.dog/large/20501895.jpg'
    }
  }
}

export default component as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
