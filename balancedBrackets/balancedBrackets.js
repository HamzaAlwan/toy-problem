//Given a string, return true if its arrangement of parenthesis (), 
//curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).
//Examples:
//Input:"(x + y) - (4)"
//output:true
//input:"(((10 ) ()) ((?)(:)))"
//output:true
//input:"[{()}]"	
//output:true
//input:"(50)("
//output:false
//input:"[{]}"	
//output:false

function isBalanced (str) {
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;
  for(i = 0; character = str[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if(bracePosition === -1) {
      continue;
    }
    if(bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if(stack.length === 0 || stack.pop() !== bracePosition) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

