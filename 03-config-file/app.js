// import moduleLog from './module.js';
import('./module.js').then(module=>{
  module.log();
}).catch(error =>'An error occurred while loading the module')

import './style.css'
document.write('app.js loaded.');