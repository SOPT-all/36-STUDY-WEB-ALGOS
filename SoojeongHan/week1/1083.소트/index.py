# 난 바보야 모르겠어ㅠㅠ

# 입력 받을 수의 개수
n = int(input())

# 입력
arr = list(map(int, input().split()))

# 몇 번할지
s = int(input())

# 버블 정렬 -> 노션 참고
def bubble_sort(arr, n):
    for _ in range(n):
        swapped = False  # 최적화
# 수행.. 
        if not swapped:
            break
    return arr

# 정렬
sorted_arr = bubble_sort(arr, n)

# 결과
print(*sorted_arr)
