/**
 * parseInt(string, radix)
 * 参数一 字符串
 * 参数二 指定基数 2-36
 * 返回值 十进制的整数
 */

let a = Number.parseInt(10) // 10 不是字符串转为字符串
a = Number.parseInt('321', 2) // NAN
a = Number.parseInt('321', 3) // NAN
a = Number.parseInt('321', 4) // 57
a = Number.parseInt('321', 16) // 801
a = Number.parseInt('16', 16) // 801

// console.log('a', a)

let str = '012345678901234567891234'

// console.log(parseInt(str.length / 2))

const halfStrLen = parseInt(str.length / 2)

console.log('halfStrLen', halfStrLen)

function intNum2hexStr(byte) {
  let hexByteMap = '0123456789abcdef'
  const a = byte >> 4
  console.log('a', a)
  const b = byte & 0x0f
  console.log('b', b)
  let str = ''
  str += hexByteMap.charAt(a)
  str += hexByteMap.charAt(b)
  console.log('--', typeof str, str)
  return str
}

intNum2hexStr(14)

const hex = '02' + '0c' + '012345678901234567891234'

console.log('===', hex.length / 2)
