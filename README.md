# verify.js
verify.js 便捷的进行表单输入校验，传统校验通过大量if语句嵌套，过程繁琐。所以自己实现个简单的表单校验工具。支持常见的校验规则，也可以自定义正则命令进行匹配。***支持链式调用***。
# Api

* .data(value) value表单输入的内容
* .isRequire(message) 数据必填。 message错误信息提示。message默认：数据不能为空
* .minLength(length,message) 校验最小长度。 length最小长度。message默认：最小长度不足
* .maxLength(length,message) 校验最大长度。 length最大长度。message默认：超过最大长度
* .isEmail(message) 校验邮箱格式。message默认：邮箱格式不正确
* .isMobile(message) 校验手机号。 length最小长度。message默认：手机格式不正确
* .isURL(message) 校验url。message默认：链接格式不正确
* .requireRegexp(reg,message) 自定义校验规则。 reg正则表达式，message错误提示
# Example
校验输入内容是否为空
```
  let verifyInput = new VerifyInput(); //实例化VerifyInput实例
  verifyInput.data().isRequire();
  console.log(verifyInput) //{value: undefined,errorMessage: "数据不能为空",pass: false}
```
校验手机号格式
```
   let verifyInput = new VerifyInput();
   verifyInput.data("1352368855").isRequire().isMobile();
   console.log(verifyInput) //{value: "1352368855",errorMessage: "手机格式不正确",pass: false}
```
# 结语
剩下的例子不在写，比较简单，希望能减轻大家工作量

