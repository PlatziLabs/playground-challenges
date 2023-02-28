def isValid(s):
   openParenthesis = 0
   closedParenthesis = 0

   for x in s:
      if x == '(':
         openParenthesis += 1
      if x == ')':
         if closedParenthesis < openParenthesis:
            closedParenthesis += 1
         else:
            return False
   
   return openParenthesis == closedParenthesis
   

response = isValid('()()()')
print(response)

response = isValid(')(')
print(response)

response = isValid('((()())())')
print(response)

response = isValid('(1 + 2) * (3-4')
print(response)
