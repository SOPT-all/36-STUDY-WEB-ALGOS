def get_next(num, p):
    return sum(int(digit) ** p for digit in str(num))

def main():
    A, P = map(int, input().split())
    
    visited = dict()  # 숫자: 몇 번째에 등장했는지
    sequence = []
    
    current = A
    idx = 0
    
    while current not in visited:
        visited[current] = idx
        sequence.append(current)
        current = get_next(current, P)
        idx += 1
    
    # 반복되기 시작한 숫자의 위치가 반복 전 수열 길이
    print(visited[current])

main()
