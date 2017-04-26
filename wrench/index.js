const wrench = require('wrench');

var files = wrench.readdirSyncRecursive('demo')
console.log(files)
