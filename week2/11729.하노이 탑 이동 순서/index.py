# n개의 원 판 옮기기
# 2^N - 1 

# 입력 처리
n = int(input())  # 원판의 개수

def hanoi(i, start, end, temp):
    if i == 1:
        # 원판 하나를 start에서 end로 옮기기
        print(start, end)
    else:
        # i-1개의 원판을 start에서 temp로 옮기고
        hanoi(i - 1, start, temp, end)
        # n번째 원판을 start에서 end로 옮기기
        print(start, end)
        # temp에 있는 i-1개의 원판을 temp에서 end로 옮기기
        hanoi(i - 1, temp, end, start)

# 하노이 탑 최소 이동 횟수
print(2 ** n - 1)

# 하노이 탑 이동 과정 출력
hanoi(n, 1, 3, 2)