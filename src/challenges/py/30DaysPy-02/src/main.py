def is_leap_year(year):
    if year % 1 != 0 or year <=0:
      return False
    
    if year % 4 == 0:
      if year % 100 == 0 and year % 400 == 0:
         return True

      if year % 100 == 0:
         return False
      
      return True
    
    return False
       

response = is_leap_year(2000)
print(response)