
const merge = require('deepmerge')

module.exports = neutrino => {
  neutrino.config.module
    .rule('compile')
      .use('babel')
        .tap(options => merge(options, { plugins: ['babel-plugin-react-require'] }))
}
