<template>
  <div class="view entry signin">
    <p class="welcome">Welcome Back</p>
    <p class="hint">Don't have any account yet? <span>Register here</span></p>
    <div class="form">
      <form>
        <div class="group">
          <p class="title">Email</p>
          <span class="input">
            <input type="text" />
          </span>
        </div>
        <div class="group">
          <p class="title">password</p>
          <span class="input">
            <input type="text" />
          </span>
        </div>
        <div class="prompt">
          Signing in or logging in the platform, you automatically accept our
          <span class="highlight">privacy</span> and
          <span class="highlight">Terms and Conditions</span>
        </div>
        <div class="remember_me">
          <input type="checkbox" name="" id="" />
          <span>Remember me</span>
        </div>
        <button class="btn_signin">Sign in</button>
      </form>
      <div class="forget_password">Forget your password?</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/colors.scss" as color;
@use "sass:color" as sasscolor;
.view.entry.signin {
  width: 70%;
  margin: 0 auto;
  padding: 100px 0 0 30px;
  > .welcome {
    color: color.$darker-black;
    font-size: 35px;
    font-weight: bolder;
    margin-top: 20px;
  }

  > .hint {
    font-size: 14px;
    color: color.$text-black-0;
    cursor: pointer;
    > span {
      color: #696cf1;
    }
  }

  > .form {
    width: 100%;
    > form {
      margin-top: 30px;
      > .group {
        width: 80%;
        &:nth-child(2n) {
          margin-top: 10px;
        }
        > .title {
          font-size: 14px;
          font-weight: 600;
          color: color.$thick-black;
          margin-bottom: 4px;
        }
        > .input {
          input {
            border-radius: 6px;
            overflow: hidden;
            height: 34px;
            width: 100%;
            border-style: none;
            outline: none;
            border: 1px solid color.$border-color;
            padding-left: 14px;
          }
        }
      }

      > .prompt {
        margin-top: 4px;
        font-size: 12px;
        width: 80%;

        > .highlight {
          color: #696cf1;
        }
      }

      > .remember_me {
        margin-top: 30px;
        > span {
          font-size: 14px;
          margin-left: 6px;
        }
      }

      > .btn_signin {
        background-color: color.$main-green;
        padding: 8px 24px;
        width: 80%;
        outline: none;
        border-style: none;
        border-radius: 6px;
        margin-top: 6px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        box-shadow: 0px 3px 6px color.$shadow-color;
        color: color.$white-1;
        &:hover {
          box-shadow: 3px 3px 6px 0
            sasscolor.adjust(color.$ash-3, $lightness: -10%);
        }
      }
    }
    > .forget_password {
      margin-top: 30px;
      width: 80%;
      text-align: center;
      color: #696cf1;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
    }
  }
}
</style>
