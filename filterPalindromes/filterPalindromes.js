//Given an array of words (array of strings), return all words that are palindromes.
// Example: filterPalindromes([ "word", "Ana", "race car" ])
// output: [ "Ana", "race car" ]








function filterPalindromes (words) {
  // Write your code here, and
  // return your final answer.
  let output = []
  for (let i = 0; i < words.length; i++){
    let word = words[i].length - 1
    if (words[i][0].toLowerCase() === words[i][word].toLowerCase()){
      output.push(words[i])
    }
  }
  return output
}