def lengthOfLongestSubstring(s):
   inicio = 0
   caracteresAposicion = {}
   mayorLongitud = 0

   for fin in range(len(s)):
      if s[fin] in caracteresAposicion and inicio <= caracteresAposicion[s[fin]]:
         inicio = caracteresAposicion[s[fin]] + 1

      caracteresAposicion[s[fin]] = fin
      mayorLongitud = max(mayorLongitud, fin - inicio + 1)

   return mayorLongitud


response = lengthOfLongestSubstring("abcabcbb")
print(response)

response2 = lengthOfLongestSubstring("jdkafnlcdsalkxcmpoiuytfccv")
print(response2)

response3 = lengthOfLongestSubstring("lavacalolatienecabezapeloycola")
print(response3)