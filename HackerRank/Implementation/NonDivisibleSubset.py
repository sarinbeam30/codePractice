
s_1 = [12 ,6 ,1, 9, 13, 15, 10, 21, 14, 32, 5, 8, 23, 19]
k_1 = 6


def nonDivisibleSubset(k, s):
    # print(k//2)
    count = [0] * k

    for i in s:
        remainder = i % k
        count[remainder] +=1

        # print(remainder, i, k)
        # print(count[remainder])
    
    ans = min( count[0], 1)

    if k % 2 == 0:
        ans += min(count[k//2], 1)
    
    for i in range(1, (k//2)+1 ):
        if (i != k - i):
            ans += max(count[i], count[k-i])
    
    # print(ans)
    return ans
    


if __name__ == '__main__':
    nonDivisibleSubset(k_1, s_1)