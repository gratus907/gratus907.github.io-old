var store = [{
        "title": "Hello, Jekyll!",
        "excerpt":"Jekyll Blog Jekyll은 Markdown을 이용해서 (주로 이런 주제의) 블로그를 쉽게 작성할 수 있도록 해주는 놀라운 툴입니다. Theme을 원하는 대로 적용해서 커스터마이즈 할 수 있고, 저는 아직 잘 모르겠지만 .scss 파일을 잘 만지면 생각보다 많이 손댈 수 있어 보입니다. Why Jekyll? 저는 기존에 네이버 블로그와 지금 쓰고 있는 티스토리 링크 에서...","categories": ["jekyll"],
        "tags": ["jekyll"],
        "url": "http://localhost:4000/jekyll/Hello-Jekyll/",
        "teaser": null
      },{
        "title": "BOJ 18194, 경기과학고 2019 Bad Hair Day와 기댓값",
        "excerpt":"난이도 : Platinum 1 출처 : 경기과학고 프로그래밍 대회 2019 풀이 각 소 $i$ 에 대해, $n!$ 개의 가능한 배치 중 $i$ 가 $j$ 를 볼 수 있는 경우의 수를 센다고 생각하자. 이때 이 값을 $f(i, j)$ 라고 하면, 우리가 구하는 값은 (기댓값의 선형성에 의해) \\(\\frac{1}{n!}\\sum_{i, j} f(i, j)\\) 가...","categories": ["algorithms"],
        "tags": ["boj","경기과학고-2019","combinatorics"],
        "url": "http://localhost:4000/algorithms/BOJ18194/",
        "teaser": null
      },{
        "title": "Fibonacci Heap",
        "excerpt":"참고자료 : CLRS Chapter 19, MIT Lecture Note Motivation Minimum Spanning Tree를 찾는 Prim’s algorithm이나, 최단 거리를 찾는 Dijkstra Algorithm에서 매우 중요한 역할을 하는 자료구조로 Priority queue가 있다. 두 알고리즘의 실행 과정을 보면, 다음 두 연산이 필요함을 알 수 있다. insert(x, e) : 자료구조에 간선 또는 정점과 그 가중치를 넣는다....","categories": ["algorithms"],
        "tags": ["data-structures","advanced-data-structures"],
        "url": "http://localhost:4000/algorithms/Fibonacci-heaps/",
        "teaser": null
      },{
        "title": "다이나믹 프로그래밍 : 분할 정복 최적화",
        "excerpt":"이 글에서는 다이나믹 프로그래밍에 대한 분할 정복 최적화 를 다루고자 한다. 참고 : Koosaga - 동적 계획법 최적화. 무려 9가지의 DP 최적화 방식을 망라해서 다루고 있고, 전체적인 기법에 대한 깊은 insight가 묻어나는 글이다. 갈길이 너무나 멀다는걸 체감하게 한다… Motivation 다음과 같은 형태의 점화식을 생각하자. 여기서 $k$는 1부터 $K$까지, $i$ 는...","categories": ["algorithms"],
        "tags": ["algorithms","dynamic-programming"],
        "url": "http://localhost:4000/algorithms/DP-DnC-Opt/",
        "teaser": null
      },{
        "title": "BOJ 12928 트리와 경로의 길이",
        "excerpt":"난이도 : Platinum 3 solved ac class 8 풀이 주어진 조건은 총 정점의 수 $N$과 2-경로의 수 $S$개이고, 조금만 생각해 보면 2-경로의 수는 트리의 각 정점의 degree를 $d_i$ 라고 할 때 $\\sum \\binom{d_i}{2}$ 임을 쉽게 알 수 있다. 우리가 원하는 것은 $\\sum d_i = 2N-2$, $\\sum \\binom{d_i}{2} = S$이다. Tree의...","categories": ["algorithms"],
        "tags": ["boj","graph"],
        "url": "http://localhost:4000/algorithms/BOJ12928/",
        "teaser": null
      },{
        "title": "BOJ 17371, UCPC 2019 인터넷예선 J번 이사",
        "excerpt":"난이도 : Gold 2 출처 : UCPC 2019 인터넷 예선 J번 solved ac class 6 essential 풀이 주어진 점들 중 하나가 반드시 답이 됨을 보이자. 먼저, 평균을 최소화하는 대신 합을 최소화하는 것으로 생각하자. 답이 되는 점이 $X$ 라고 하고, 주어진 점들 중 $X$에 가장 가까운 점을 $A$, 가장 먼 점을...","categories": ["algorithms"],
        "tags": ["boj","geometry"],
        "url": "http://localhost:4000/algorithms/BOJ17371/",
        "teaser": null
      },{
        "title": "BOJ 2533 사회망 서비스",
        "excerpt":"난이도 : Gold 3 solved ac class 6 essential 풀이 트리에서 최소한의 노드를 골라서, 모든 간선을 커버하도록 하는, minimum vertex cover 문제이다. 일반적인 그래프에서는 NP-Hard이지만, 트리에는 쉽게 해결할 수 있다. 임의로 루트를 잡았을 때, 리프 노드는 반드시 마킹하지 않는 것이 유리함을 알 수 있다. 리프 노드는 바로 그 위 부모...","categories": ["algorithms"],
        "tags": ["boj","graph"],
        "url": "http://localhost:4000/algorithms/BOJ2533/",
        "teaser": null
      },{
        "title": "BOJ 1126 같은 탑",
        "excerpt":"solved ac class 7 essential Contents 풀이 Code 풀이 Dynamic programming 을 이용해서 어렵지 않게 해결할 수 있다. 다음과 같이 정의하자. DP[i][j] : 1번부터 $i$번까지의 블록만 고려할 때, $H_A - H_B = j$ 가 되면서 만들 수 있는 $H_A$의 최대 높이 이렇게 정의하면, 크기가 $h$인 다음 블록을 추가할 때, A에...","categories": ["algorithms"],
        "tags": ["dynamic-programming"],
        "url": "http://localhost:4000/algorithms/BOJ1126/",
        "teaser": null
      }]
