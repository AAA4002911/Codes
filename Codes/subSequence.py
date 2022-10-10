# Subsequence/Subsets
# subsets > subsequence > substring

def subStr(str, result):
    # let's assume input string be 'ab'
    if len(str) == 0:
        ans.append(result)
        return

    # Two choice either we can take a for the nex string or not
    result1 = result
    result2 = result + str[0]
    # Removing choosed item from input string after decision making
    str = str[1:]

    # Doing same thing for both branch
    subStr(str, result1)
    subStr(str, result2)

string_input = input(); 
ans = []
subStr(string_input, '')
print(ans)