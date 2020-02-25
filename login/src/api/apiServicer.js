export default {
  login() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          user: { name: "Andrii" },
          token: "tckkksdcds12321bnbjh32gvg"
        });
      }, 300);
    });
  },
  loginError() {
    return new Promise(reject => {
      setTimeout(() => {
        reject({
          error: "ERRRRRRROR",
        });
      }, 300);
    });
  }
};