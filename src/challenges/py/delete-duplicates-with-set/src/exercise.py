def remove_repeated_countries(am, northAm, centralAm, southAm):
   countries = ( am | northAm | centralAm | southAm )
   return countries


response = remove_repeated_countries({"MX", "COL", "ARG", "USA"}, {"USA", "CANADA"}, {"MX", "GT", "BZ"}, {"COL", "BZ", "ARG"})
print(response)