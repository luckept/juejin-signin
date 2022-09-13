module.exports = {
  email: {
    provider: {
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
      host: "smtp.qq.com",
      secure: true,
      port: 465,
      secureConnection: true,
    },
  },
  juejin: {
    login: "https://juejin.cn/login",
    loginApi: "/passport/web/user/login",
    verifyApi: "verify.snssdk.com/captcha/verify",
  },
  user: {
    mobile: process.env.USER_MOBILE, //你的掘金登录手机号
    password: process.env.USER_PASSWORD, // 你的掘金登录密码
    email: process.env.USER_EMAIL, // 你的接收通知的邮箱
  },
}
