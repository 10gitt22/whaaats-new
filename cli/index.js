const fs = require('fs')
const clc = require('cli-color')
const { 
  pageComponent,
  pageComponentAsync,
  component, 
  style, 
  story, 
  test } = require('./templates/components')
const { schema, slice } = require('./templates/redux')
const { 
  entityPublicAPI,
  widgetPublicAPI, 
  pagePublicAPI 
} = require('./templates/public_apis')

const log = console.log

function writeFileErrorHandler(err) {
  if (err) throw err;
}

function checkExists(dir, type) {
  if (fs.existsSync(dir)) throw new Error(clc.red(`${type} component with that name already exists.`)); 
}

function generationSuccess(dir, name) {
  log(clc.green(`\n${name} was successfully created at `) + clc.green.underline(`${dir}`))
}

// FOLDER CREATORS //

function createModelFolder(dir, name) {
  const selectorsDir = `${dir}/model/selectors`
  const sliceDir =  `${dir}/model/slice`
  const typesDir = `${dir}/model/types`

  // CREATE FOLDERS
  fs.mkdirSync(`${dir}/model`)
  fs.mkdirSync(selectorsDir)
  fs.mkdirSync(sliceDir)
  fs.mkdirSync(typesDir)

  //CREATE FILES
  fs.writeFile(`${sliceDir}/${name.toLowerCase()}Slice.ts`, slice(name), writeFileErrorHandler);
  fs.writeFile(`${typesDir}/${name.toLowerCase()}.ts`, schema(name), writeFileErrorHandler);

  log(
    clc.yellow(`1: Do not forget to add ${name.toLowerCase()}Reducer to rootReducer at `) + 
    clc.yellow.underline('./src/app/providers/StoreProvider/config/store.ts')
  )
  log(
    clc.yellow('2: Do not forget add') + 
    clc.green(` ${name}Schema `) + 
    clc.yellow('to') + 
    clc.green(' StateSchema ') + 
    clc.yellow('at ') + 
    clc.yellow.underline('./src/app/providers/StoreProvider/config/StateSchema.ts')
  )  
}

function createUiFolder(dir, name) {
  const uiDir = `${dir}/ui`
  fs.mkdirSync(uiDir)

  fs.writeFile(`${uiDir}/${name}.tsx`, component(name), writeFileErrorHandler);
  fs.writeFile(`${uiDir}/${name}.module.scss`, style(name), writeFileErrorHandler);
  fs.writeFile(`${uiDir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);

}

// MODULE GENERATORS //

function generatePage(name) {
  const dir = `./src/pages/${name}Page`
  const uiDir = `${dir}/ui`

  checkExists(dir, 'Page')
  
  fs.mkdirSync(dir)
  fs.mkdirSync(uiDir)

  fs.writeFile(`${uiDir}/${name}.tsx`, pageComponent(name), writeFileErrorHandler)
  fs.writeFile(`${uiDir}/${name}Page.async.tsx`, pageComponentAsync(name), writeFileErrorHandler)

  fs.writeFile(`${dir}/index.ts`, pagePublicAPI(name), writeFileErrorHandler)

  log(clc.yellow(`1: Do not forgot add `) + clc.green(`${name}`) + clc.yellow(' page to config at ') + clc.yellow.underline('./src/app/providers/router/config/index.tsx'))
  generationSuccess(dir, name)
}

function generateWidget(name) {
  const dir = `./src/widgets/${name}`

  checkExists(dir, 'Widget')

  fs.mkdirSync(dir)
  createUiFolder(dir, name)
  fs.writeFile(`${dir}/index.ts`, widgetPublicAPI(name), writeFileErrorHandler)

  generationSuccess(dir, name)
}

function generateEntity(name) {
  const dir = `./src/entities/${name}`;

  checkExists(dir, 'Entity')

  fs.mkdirSync(dir)
  createModelFolder(dir, name)
  fs.writeFile(`${dir}/index.ts`, entityPublicAPI(name), writeFileErrorHandler)

  generationSuccess(dir, name)
}

function generateUI(name) {
  const dir = `./src/shared/ui/${name}`;

  checkExists(dir, 'UI')

  // create the folder
  fs.mkdirSync(dir);
  
  fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
  fs.writeFile(`${dir}/${name}.module.scss`, style(name), writeFileErrorHandler);
  fs.writeFile(`${dir}/${name}.stories.tsx`, story(name), writeFileErrorHandler);
  fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler);

  generationSuccess(dir, name)
}

const generateByType = (type, name) => {
  switch (type) {
    case 'ui':
      generateUI(name)
      break;
    case 'entity':
      generateEntity(name)
      break;
    // TO DO 
    case 'feature':
      log(clc.yellow('FUNCTIONALITY NOT READY YET :D'))
      break;
    case 'widget':
      generateWidget(name)
    case 'page':
      generatePage(name)
      break;
    
    default:
      break;
  }
}


const args_length = process.argv.length
const name = process.argv[args_length - 1];
if (!name) throw new Error('You must include a component name.');

const type = process.argv[args_length - 2];
generateByType(type, name)