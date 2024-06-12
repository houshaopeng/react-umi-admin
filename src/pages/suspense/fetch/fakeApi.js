function fetchUser() {
  return new Promise((resole) => {
    setTimeout(() => {
      resole({
        name: '1111111'
      })
    }, 1500)
  })
}

function fetchPost() {
  return new Promise((resole) => {
    setTimeout(() => {
      resole([
        {
          id:0,
          text:'测试11111111111111'
        },
        {
          id:1,
          text:'测试222222222222222222'
        },{
          id:0,
          text:'测试333333333333333'
        }
      ])
    }, 5000)
  })
}