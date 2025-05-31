// https://www.acmicpc.net/problem/1012

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]); // 테스트 케이스 수
let line = 1;

const dx = [0, 0, -1, 1]; // 상, 하, 좌, 우
const dy = [-1, 1, 0, 0];

for (let t = 0; t < T; t++) {
  const [M, N, K] = input[line++].split(" ").map(Number); // 가로, 세로, 배추 개수
  const field = Array.from({ length: N }, () => Array(M).fill(0));
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  // 배추 위치에 1 표시
  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(" ").map(Number);
    field[y][x] = 1;
  }

  let wormCount = 0;

  // DFS 함수 정의
  function dfs(x, y) {
    visited[y][x] = true;

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        field[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        dfs(nx, ny);
      }
    }
  }

  // 전체 배추밭을 돌면서 DFS 실행
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (field[y][x] === 1 && !visited[y][x]) {
        dfs(x, y); // 새로운 그룹 발견 → DFS 시작
        wormCount++; // 지렁이 한 마리 추가
      }
    }
  }

  console.log(wormCount);
}
