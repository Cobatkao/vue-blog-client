function DateBeautify(dateStr) {
  let dateObj = typeof dateStr === 'object'? dateObj : new Date(dateStr)
  let CreateTime = dateObj.getTime()
  let CurrentTime = Date.now()
  let gap = CurrentTime - CreateTime
  let str = ''

  switch (true) {
    case gap < 60000:
      str = '刚刚'
      break;
    case gap < 1000 * 3600:
      str = Math.floor(gap/60000) + '分钟前'
      break;
    case gap < 1000 * 3600 * 24:
      str = Math.floor(gap/(1000*3600)) + '小时前'
      break;
    default:
      str = Math.floor(gap/(1000*3600*24)) + '天前'
  }

  return str
}

export default {
  install(Vue, options) {
    Vue.prototype.DateBeautify = DateBeautify
  }
}