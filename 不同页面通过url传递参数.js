通过url的路径进行获取相应的信息
// 获取id ?id=2$name=肯德基
function info () {
  // 'use strict'
// location   是window对象的属性
  var searchId = location.search
  // 将？截取
  // console.log(searchId);?tc_id=4
  searchId = searchId.slice(1)
  // 变为数组
  var searchArr = searchId.split('$')
  // 转为对象
  var obj = {}
  for (var i = 0; i < searchArr.length; i++) {
    var element = searchArr[i]
    var eleArr = element.split('=')
    // console.log(eleArr);//eleArr[0]=tc_id;eleArr[1]=1  ["tc_id", "3"]
    obj[eleArr[0]] = eleArr[1]; // 以截取后的数组第一项做对象的属性；2做值

  }
  return obj
}
// decodeURI()获取到中文后浏览器会编码要进行解码变成中文
couponTitle = decodeURI(info().couponTitle)
