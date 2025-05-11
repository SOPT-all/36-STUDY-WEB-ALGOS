# 입력 받아서 리스트로 !
arr = list(input())

# 내림차순 정렬
arr.sort(reverse=True)

# 리스트를 다시 하나로 
print(''.join(arr))