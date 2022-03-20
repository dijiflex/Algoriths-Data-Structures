# Java program to Find the Largest Alphabetic
# Character present in the string of both
# uppercase and lowercase English characters

# Function to find the Largest Alphabetic Character
def largestCharacter(str):
	
	uppercase = [False] * 26
	lowercase = [False] * 26
	
	arr = list(str)
	for charr in arr:
		if (charr.islower()):
			lowercase[ord(charr) - ord('a')] = True
		if (charr.isupper()):
			uppercase[ord(charr) - ord('A')] = True
			
	for i in range(25,-1,-1):
		
		if (uppercase[i] and lowercase[i]):
			return chr(i + ord('A')) + ""
	return "NO"

# Driver code

str = "Codility"
print(largestCharacter(str))
	

# This code is contributed by shivanisinghss2110
