//短網址尾碼由英文字母大小寫+阿拉伯數字組成(62種字元)
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperLetters = lowerLetters.toUpperCase()
const numbers = '0123456789'
const words = lowerLetters.concat(upperLetters).concat(numbers).split('')

//產生短網址尾碼
function generateShortenURL() {
  let shortenURL = ''
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * words.length)
    shortenURL += words[randomIndex]
  }
  return shortenURL
}

module.exports = generateShortenURL