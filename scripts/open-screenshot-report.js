const path = require('path')
const open = require('open')

const pathToHtmlReport = path.join(__dirname, '..', '.loki', 'report.html');
open(pathToHtmlReport)