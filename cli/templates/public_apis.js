exports.entityPublicAPI = name => `export { ${name}Schema } from './model/types/${name.toLowerCase()}'
export { ${name.toLowerCase()}Reducer, ${name.toLowerCase()}Actions } from './model/slice/${name.toLowerCase()}Slice'
`

exports.widgetPublicAPI = name => `import { ${name} } from './ui/${name}'
export { ${name} }
`

exports.pagePublicAPI = name => `export { ${name}PageAsync as ${name}Page } from './ui/${name}Page.async'
`