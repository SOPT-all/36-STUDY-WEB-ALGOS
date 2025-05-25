import sys
from collections import Counter

input = sys.stdin.readline

# 상근이가 가진 숫자 카드
N = int(input())
cards = list(map(int, input().split()))
counter = Counter(cards)

# 확인할 숫자
M = int(input())
targets = list(map(int, input().split()))

# 결과 출력
result = [str(counter[target]) for target in targets]
print(' '.join(result))
