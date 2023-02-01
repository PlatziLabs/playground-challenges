def isValid(s):
   open = 0
   close = 0

   for x in s:
      if x == '(':
         open += 1
      if x == ')':
         if close < open:
            close += 1
         else:
            return False
   
   return open == close
   

response = isValid('()()()')
print(response)

response = isValid(')(')
print(response)

response = isValid('((()())())')
print(response)

response = isValid('(1 + 2) * (3-4')
print(response)
