module.exports = {
  // 可选类型
  types: [
    { value: 'dev', name: 'dev: 业务或功能模块的阶段性提交' },
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复一个bug' },
    { value: 'docs', name: 'docs: 文档变更' },
    { value: 'style', name: 'style: 代码格式(不影响代码运行的变动)' },
    { value: 'conflict', name: 'conflict: 修复代码冲突' },
    { value: 'font', name: 'font: 字体文件更新' },
    { value: 'refactor', name: 'refactor: 重构(既不是增加feature，也不是修复bug)'},
    { value: 'perf', name: 'perf: 性能优化' },
    { value: 'test', name: 'test: 增加测试' },
    { value: 'chore', name: 'chore: 构建过程或辅助工具或配置工具修改' },
    { value: 'merge', name: 'merge: 合并其他分支的代码' },
    { value: 'revert', name: 'revert: 回退' },
    { value: 'build', name: 'build: 影响构建系统或外部依赖项的更改(如:webpack、npm)' }
  ],
  // 交互式消息提示步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选):',
    breaking: '请输入非兼容性说明(可选):',
    footer: '请输入要关闭的issue(可选):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  // 跳过问题
  skipQuestions: ['breaking', 'footer'],
  // subject文字长度默认是72
  subjectLimit: 72,
  // 只有我们 type 选择了 feat 或者是 fix，才会询问我们 breaking message
  allowBreakingChanges: ['feat', 'fix']
}
