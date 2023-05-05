def find_famous_cat(cats):
  famous_stats = {
    "famous_cats": [],
    "max_followers": 0
  }
  
  for cat in cats:
    total_followers = 0
    for num in cat["followers"]:
      total_followers += num
      
    if total_followers > famous_stats["max_followers"]:
      famous_stats["max_followers"] = total_followers
      famous_stats["famous_cats"] = []
      famous_stats["famous_cats"].append(cat["name"])
    elif total_followers == famous_stats["max_followers"]:
      famous_stats["famous_cats"].append(cat["name"])
  
  return famous_stats["famous_cats"]
                                
response = find_famous_cat([
  {
    "name": "Luna",
		"followers": [500, 200, 300]
   },
   {
		"name": "Michi",
		"followers": [100, 500]
   }
])

print(response)