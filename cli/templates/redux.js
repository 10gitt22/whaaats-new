exports.schema = name => `export interface ${name}Schema {}
`

exports.slice = name => `import { createSlice } from '@reduxjs/toolkit'
import { ${name}Schema } from '../types/${name.toLowerCase()}'

const initialState: ${name}Schema = {}

export const ${name.toLowerCase()}Slice = createSlice({
  name: '${name.toLowerCase()}',
  initialState,
  reducers: {}
})

export const { actions: ${name.toLowerCase()}Actions } = ${name.toLowerCase()}Slice
export const { reducer: ${name.toLowerCase()}Reducer } = ${name.toLowerCase()}Slice
`