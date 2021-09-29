// 校验规则
export const accountRules = {
  name: [
    {
      required: true,
      message: '帐号未填写',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '帐号必须是5-10位的字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码未填写',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,16}$/,
      message: '密码必须是6-16位的字母或数字',
      trigger: 'blur'
    }
  ]
}
