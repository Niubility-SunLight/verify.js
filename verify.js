    export default class VerifyInput {
      constructor(data) {
        this.value = data;
        this.errorMessage = "通过校验"; // 错误信息
        this.pass = true; // 校验是否通过
      }
      //数据输入
      data(data) {
        if (!this.pass) return this;
        this.value = data;
        return this;
      }
      //必填数据
      isRequire(message = "数据不能为空") {
        if (!this.pass) return this;
        if (
          /^\s*$/g.test(this.value) ||
          this.value === null ||
          this.value === undefined
        ) {
          this.errorMessage = message;
          this.pass = false;
        }
        return this;
      }

      // 最小长度
      minLength(length, message = "最小长度不足") {
        if (!this.pass) return this;

        if (this.value.length < length) {
          this.errorMessage = message;
          this.pass = false;
        }
        return this;
      }

      // 最大长度
      maxLength(length, message = "超过最大长度") {
        if (!this.pass) return this;

        if (this.value.length > length) {
          this.errorMessage = message;
          this.pass = false;
        }
        return this;
      }

      // 邮箱校验
      isEmail(message = "邮箱格式不正确") {
        if (!this.pass) return this;

        const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        if (!emailReg.test(this.value)) {
          this.errorMessage = message;
          this.pass = false;
        }
        return this;
      }

      // 正则 手机号
      isMobile(message = "手机格式不正确") {
        if (!this.pass) return this;
        const mobileReg = /^1(3|4|5|6|7|8|9)\d{9}$/;
        if (!mobileReg.test(this.value)) {
          this.errorMessage = message;
          this.pass = false;
        }
        return this;
      }

      // ulr校验
      isURL(message = "链接格式不正确") {
        if (!this.pass) return this;

        const urlReg = new RegExp(
          "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
          "i"
        );
        if (!urlReg.test(this.value)) {
          this.errorMessage = message;
          this.pass = false;
        }
        return this;
      }

      // 自定义正则校验
      requireRegexp(reg, message) {
        if (!this.pass) return this;

        if (!reg.test(this.value)) {
          this.errorMessage = message;
          this.pass = false;
        }
        return this;
      }
    }
