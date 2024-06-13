const { types } = require('./.cz-config.js')
const typeList = types.map(item => item.value)

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', typeList],
    'reason-required': [2, 'always']
  },
  plugins: [
    {
      rules: {
        'reason-required': (parsed) => {
          if (parsed.type === 'fix' && !parsed.body) {
            return [false, '请详细描述bug产生原因']
          }
          return [true]
        }
      }
    }
  ]
}
