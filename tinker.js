// Input: A = ["amazon","apple","facebook","google","leetcode"], B = ["ec","oc","ceo"]
// Output: ["facebook","leetcode"]

const words = ["amazon","apple","facebook","google","leetcode"]

const filtration = function (words, substring) {
  let universal = []

  for (let word in words) {
    if(word.includes(substring) 
    || word.includes(substring.split('').reverse().join(''))) {
      universal.push()
    }
  }
}
