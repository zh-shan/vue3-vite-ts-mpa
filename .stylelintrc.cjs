module.exports = {
  // 继承规则
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss'
  ],
  overrides: [
    // 扫描 .vue/html 文件中的 <style> 标签内的样式
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ],
  // 规则设置
  rules: {
    'at-rule-no-unknown': null,
    'block-no-empty': true, // 禁止空块
    'color-named': 'never', // 禁止使用颜色名称作为值
    'color-no-invalid-hex': true, // 禁止使用无效的十六进制颜色
    'comment-no-empty': true, // 禁止空注释
    'declaration-block-no-duplicate-properties': true, // 禁止在声明块中使用重复的属性
    'declaration-block-no-redundant-longhand-properties': [true, { ignoreShorthands: ['/flex/'] }], // 尽可能的使用缩写格式
    'font-family-no-missing-generic-family-keyword': null, // 字体系列缺失通用系列关键字
    'function-url-quotes': 'always', // 要求网址使用引号
    'no-duplicate-at-import-rules': true, // 禁止@import在样式表中使用重复规则
    'no-duplicate-selectors': true, // 禁止在样式表中使用重复的选择器
    'no-empty-source': true, // 禁止空源
    'no-extra-semicolons': true, // 禁止使用多余的分号
    'number-no-trailing-zeros': true, // 禁止在数字中尾随零
    // 'max-nesting-depth': 3, // 限制最大嵌套层数
    'property-no-unknown': true, // 禁止未知属性
    'scss/at-function-parentheses-space-before': 'always', // @function括号前需要有空格
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$', // 指定 @function 函数名称的格式
    'scss/at-import-no-partial-leading-underscore': true, // 不允许 @import 引入有下划线开头的文件
    'scss/at-mixin-argumentless-call-parentheses': 'always', // 使用无参数的 @mixin 调用要使用括号
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$', // 指定 @mixin 混合名称的格式
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen', 'layer'] }], // 禁止使用未知规则
    'scss/declaration-nested-properties-no-divided-groups': true, // 不允许将同一“名称空间”的嵌套属性分为多个组
    'scss/dollar-variable-colon-space-after': 'always', // 在 $ 变量的冒号声明后必须有一个空格
    'scss/dollar-variable-colon-space-before': 'never', // 禁止在 $ 变量的冒号声明前有一个空格
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-zA-Z0-9-]+[a-zA-Z0-9]+)?$', // $ 变量命名格式
    'scss/no-duplicate-mixins': true, // 禁止在样式表中使用重复的 @minix
    'scss/no-duplicate-dollar-variables': true, // 禁止在样式表中使用重复的变量
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$', // % 占位符选择器的命名格式
    // 'scss/selector-no-redundant-nesting-selector': true, // 禁止使用多余的嵌套选择器 &
    'selector-attribute-quotes': 'always', // 要求对属性值使用引号
    'selector-class-pattern': [ // 类选择器命名规则
      '^[a-z0-9\\-]+$',
      {
        'message': '类选择器必须是小写加中横线格式 (selector-class-pattern)'
      }
    ],
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }], // 不允许选择器后直接链接到另一个选择器，如a.foo，属性除外
    'selector-max-id': 0, // 禁用ID选择器
    'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep'] }], // 禁用未知的伪类选择器
    'shorthand-property-no-redundant-values': true, // 禁止在速记属性中使用冗余值
    'string-no-newline': true, // 禁止在字符串中使用（未转义的）换行符
    'string-quotes': 'single', // 在字符串周围指定单引号，如content:"", a[title=""]
    'value-keyword-case': ['lower', { ignoreKeywords: ['currentColor'], ignoreFunctions: ['v-bind'] }]
  },
  ignoreFiles: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"]
}
