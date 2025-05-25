# https://www.acmicpc.net/problem/2231

import sys
from collections import Counter

input = sys.stdin.readline

n = int(input())
card = list(map(int, input().split()))

m = int(input())
tg = list(map(int, input().split()))

counter = Counter(card)

result = [str(counter[tg]) for tg in tg]
print(' '.join(result))
