// https://www.acmicpc.net/problem/1260

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 정점 개수(n), 간선 개수(m), 시작 정점(v)
const [n, m, v] = input[0].split(" ").map(Number);

// 그래프를 저장할 배열 선언 (0번은 사용 x)
const graph = new Array(n + 1);

// 각 정점에 대해 빈 배열 초기화
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}

// 간선 정보 입력 받아 양방향 그래프 구성
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

// 정점 인접 리스트를 오름차순 정렬 (작은 번호부터 탐색하기 위해!)
graph.forEach((g) => {
  g.sort((a, b) => a - b);
});

// 방문 여부 체크 배열
let visited = new Array(n + 1).fill(0);
let dfsAnswer = [];
let bfsAnswer = [];

function DFS(v) {
  if (visited[v]) return; // 이미 방문했으면 종료
  visited[v] = 1; // 방문 처리
  dfsAnswer.push(v); // 현재 정점을 결과에 추가

  // 인접 정점들에 대해 재귀적으로 DFS 호출
  for (const next of graph[v]) {
    if (!visited[next]) {
      DFS(next);
    }
  }
}
DFS(v);

console.log(dfsAnswer.join(" "));

visited.fill(0); // visited 배열 초기화

function BFS(v) {
  let queue = [v]; // 시작 정점을 큐에 넣기
  while (queue.length) {
    let x = queue.shift(); // 큐에서 하나 꺼냄
    if (visited[x] === 1) {
      continue; // 이미 방문했으면 패스
    }
    visited[x] = 1; // 방문
    bfsAnswer.push(x); // 현재 정점을 결과에 추가
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];
      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
}
BFS(v);
console.log(bfsAnswer.join(" "));
