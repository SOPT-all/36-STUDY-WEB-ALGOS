# N개 입력받기
N = int(input())

# 입력 받은 N개 수 저장
arr = []
for _ in range(N):
    arr.append(int(input()))

# 선택 정렬 -> 노션 참고
def selection_sort(arr):
    for i in range(len(arr)):
        min_idx = i
        for j in range(i + 1, len(arr)):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr

# 정렬
sorted_arr = selection_sort(arr)

# 결과
for num in sorted_arr:
    print(num)