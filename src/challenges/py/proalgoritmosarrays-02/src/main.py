def merge_lists(nums1, m, nums2, n):
   p1 = m - 1
   p2 = n - 1
   p = len(nums1) - 1

   while 0 <= p1 and 0 <= p2:
      if nums1[p1] < nums2[p2]:
         nums1[p] = nums2[p2]
         p2 -= 1
      else:
         nums1[p] = nums1[p1]
         p1 -= 1
      p -= 1

   if n != m:
      nums1[ : p2 + 1] = nums2[ : p2 + 1]

   return nums1

# Arrays de prueba 1
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
response = merge_lists(nums1, m, nums2, n)
print(response)

# Arrays de prueba 2
nums1 = [1,2,3,0,0,0,0]
m = 3
nums2 = [-4,2,3,9]
n = 4
response = merge_lists(nums1, m, nums2, n)
print(response)
