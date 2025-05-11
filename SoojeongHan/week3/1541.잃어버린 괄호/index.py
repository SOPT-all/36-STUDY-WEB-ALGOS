# 양수와 +, -, 괄호를 가지고 식 만들기
# 괄호 모두 지우고 다시 괄호 쳐서 최소 만들기

# 그리디

# -가 나오면 그 뒤에 오는 모든 수를 괄호로 묶어 한 번에 빼야 최소값이래 대박

# 입력 받고 - 기준으로 split
exp = input().split('-')

# 첫 번째 그룹은 그냥 더한다.
init = sum(map(int, exp[0].split('+')))

# 나머지 그룹은 다 더한 뒤 뺀다.
res = 0
for part in exp[1:]:
    rest += sum(map(int, part.split('+')))

print(init - res)