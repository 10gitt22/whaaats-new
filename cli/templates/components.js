exports.pageComponent = name => `import { useTranslation } from 'react-i18next'

const ${name} = () => {
  const { t } = useTranslation()
  return <div className="page">{t('${name.toLowerCase()}}')}</div>
}

export default ${name}
`

exports.pageComponentAsync = name => `import { lazy } from 'react'

export const ${name}PageAsync = lazy(async () => await import('./${name}'))
`

exports.component = name => `import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './${name}.module.scss'

type ${name}Props = {
  className?: string
}

export const ${name}: FC<${name}Props> = ({ className }) => {
  return (
    <div className={classNames(styles.${name}, {}, [className])}>
    </div>
  )
}
`

exports.style = name => `.${name}{}
`

exports.story = name => `import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import { ${name} } from './${name}'

const component = {
  title: 'shared/${name}',
  component: ${name}
}

export default component as ComponentMeta<typeof ${name}>

const Template: ComponentStory<typeof ${name}> = (args) => <${name} {...args} />

export const Primary = Template.bind({})
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
`
exports.test = name => `describe(${name}, () => {
  test('', () => {
    expect().toEqual()
  })
})
`