# choo-reload [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Asset reloading package for choo. Reloads CSS, refreshes the page on JS.

## Usage
```js
var reload = require('choo-reload')
var choo = require('choo')

var app = choo()
app.use(reload())
app.mount('body')
```

## FAQ
### Why not replace all state on JS?
Because you're bound to have memory leaks. Figuring out how to properly close
all handlers is tricky - but perhaps we'll eventually get around to solving
this (probably major version). Until then: here's the second best thing.

## API
### `reload()`
Create a new instance of reload.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/choo-reload.svg?style=flat-square
[3]: https://npmjs.org/package/choo-reload
[4]: https://img.shields.io/travis/yoshuawuyts/choo-reload/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/choo-reload
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/choo-reload/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/choo-reload
[8]: http://img.shields.io/npm/dm/choo-reload.svg?style=flat-square
[9]: https://npmjs.org/package/choo-reload
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
