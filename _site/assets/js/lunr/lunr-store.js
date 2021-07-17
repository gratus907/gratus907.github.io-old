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
      },{
        "title": "Graph Algorithms, Lecture 1 : Fixed subgraph Isomorphism",
        "excerpt":"Contents Subgraph Isomorphism Finding Triangles $O(mn)$ 알고리즘 $O(n^w)$ 알고리즘 $O(m^{(w + 1)/2})$ 알고리즘 Why triangles? Nesetril-Poljak Subgraph isomorphism 참고 : Stanford CS267 lecture note Subgraph Isomorphism 그래프 $G(V_G, E_G)$와, 다른 그래프 $H = (V_H, E_H)$ 에 대해, subgraph isomorphism $f : V_H \\to V_G$ 는 $(u, v) \\in E_H$ 이면...","categories": ["algorithms"],
        "tags": ["graph"],
        "url": "http://localhost:4000/algorithms/graph-algorithms-lec1/",
        "teaser": null
      },{
        "title": "BOJ 18600, Ptz Camp Summer 2019 Day 3, Valentine's Day",
        "excerpt":"난이도 : Platinum 1 출처 : Petrozavodsk Summer 2019 Day 3 C Contents 풀이 코드 풀이 $n$개의 확률이 주어지고, 이들을 모두 더해서 1이라고 할 때, 적당한 subset을 골라서 사건이 단 한 번만 일어날 확률을 최대화하는 문제이다. 사건이 한 번 일어날 확률은 다음과 같이 계산할 수 있다. $S$라는 subset을 골랐을 때,...","categories": ["algorithms"],
        "tags": ["probability","greedy"],
        "url": "http://localhost:4000/algorithms/BOJ18600/",
        "teaser": null
      },{
        "title": "BOJ 19693, Singapore NOI 2018 Safety",
        "excerpt":"난이도 : Diamond 4 출처 : Singapore National Olympiad in Informatics, 2018 - 5번 Contents 풀이 Subtask 1, 2, 5 (+13점) Subtask 4 (+5점) Full solution 구현 코드 Thinking 파트가 끝난 후에도 어떻게 구현할지 정말 많은 고민을 했고, 결국 구현을 성공하지 못해서 다른 사람 구현을 참고했다. 구현 트릭이 상당히 배울점이...","categories": ["algorithms"],
        "tags": ["algorithm","dp"],
        "url": "http://localhost:4000/algorithms/BOJ19693/",
        "teaser": null
      },{
        "title": "SOLVED.AC exp 300,000,000",
        "excerpt":"   300,000,000점을 찍었다. 겨울방학 중 D2 찍는게 목표.   클래스 7을 쭉 풀고 있다.  ","categories": ["misc"],
        "tags": ["misc"],
        "url": "http://localhost:4000/misc/solvedAC-300M-exp/",
        "teaser": null
      },{
        "title": "Coursera Machine Learning 수강 시작",
        "excerpt":"이제 CS 전공자에게 딥러닝/머신러닝에 대한 이해는 있으면 좋은게 아니라 없으면 안되는 정도라는 생각이 든다. 대표적으로, 우리 학교의 경우 소프트웨어 개발의 원리 및 실제 강의에서 머신러닝 사용을 강제 하며, 창의적 통합 설계 과목은 팀별로 주어진 프로젝트중 하나를 골라서 수행하는 과목이지만 주어진 프로젝트의 80% 이상이 머신러닝 관련이기 때문에 사실상 선택권이 없다. 이런...","categories": ["ml-study"],
        "tags": ["machine-learning"],
        "url": "http://localhost:4000/ml-study/Starting-coursera-ml/",
        "teaser": null
      },{
        "title": "BOJ 13548, 수열과 쿼리 6",
        "excerpt":"Solved AC Platinum 1 SAC Class 7 Essential Contents 풀이 코드 풀이 수열과 쿼리 5 링크 와 거의 같은데, 조금 덜 자명한 문제이다. 먼저, 수열과 쿼리 5를 어떻게 푸는지 모른다면 이 글 을 권한다. Mo’s Algorithm이라는 마법의 알고리즘이 있어서, 쿼리당 $O(N)$ 이 걸리는 구간 쿼리를 오프라인에 처리함으로써 쿼리당 평균 $O(\\sqrt{n})$...","categories": ["algorithms"],
        "tags": ["data-structures","algorithms"],
        "url": "http://localhost:4000/algorithms/BOJ13548/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 1 : Introduction",
        "excerpt":"Contents What is Machine Learning? 응용 분야 Supervised Learning Unsupervised Learning What is Machine Learning? A. Samuel (1959) : 컴퓨터가 explicitly program 되지 않은 내용을 학습하게 하는 분야 T. Mitchell (1998) : Task T, Performance measure P, Experience E가 있고, E에 의해 P가 발전하는 Learning problem. Supervised / Unsupervised Learning...","categories": ["ml-study"],
        "tags": ["machine-learning"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec1/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 2 : Linear Regression, Gradient Descent",
        "excerpt":"Contents Linear Regression Cost funtion Gradient Descent Gradient Descent on Linear Regression 강의 기준 1주차 Linear regression - Gradient Descent. Linear Regression Regression Problem에 대한 Linear Fitting $m$개의 Training data 들이 $(x_i, y_i)$ 형태로 주어지고, 이 data로부터 best-predicting line 찾기. Learning Algorithm을 만들어서, hypothesis $h$ 를 만든다. 이 $h$는, $x$를...","categories": ["ml-study"],
        "tags": ["machine-learning","linear-regression"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec2/",
        "teaser": null
      },{
        "title": "BOJ 20176, ICPC Seoul 2020 Needle",
        "excerpt":"Contents 풀이 코드 풀이 결국 문제의 요점은, 위 / 중간/ 아래를 $u_i, m_i, l_i$ 라고 할 때, $u_i + l_j = 2m_k$ 인 순서쌍 $(i, j, k)$의 개수를 세는 문제이다. 이 문제는 매우 잘 알려진 Convolution 문제로, 수열을 카운팅 다항식으로 인코딩하면 쉽게 풀 수 있다. 수열이 1, 3, 4, 5,...","categories": ["algorithms"],
        "tags": ["algorithms","fast-fourier-transform"],
        "url": "http://localhost:4000/algorithms/BOJ20176/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 3 : Multivarite Linear Regression",
        "excerpt":"Contents Multivariate Linear Regression Multivariate Gradient Descent Feature Scaling Learning Rate More on features / Regression Multivariate Linear Regression 다수의 Feature $(x_1, x_2, x_3, \\dots)$ 로부터, output variable $y$ 를 predict하고 싶다. Notation 정리: Data $i$번째의 $j$번째 feature를 $x^{(i)}_j$ 로 쓰기로 하자. 이제, $x^{(i)}$ 는 하나의 training data인데, 이는 n-vector...","categories": ["ml-study"],
        "tags": ["machine-learning","linear-regression"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec3/",
        "teaser": null
      },{
        "title": "BOJ 15977, KOI 2018 고등부 3번 조화로운 행렬",
        "excerpt":"Contents 풀이 29점 풀이 100점 풀이 Dynamic Segment Tree 코드 풀이 29점 풀이 서브태스크 1과 3만 먼저 해결하자. 즉, $n = 2$ 인 경우. 문제를 잘 해석해 보면, 다음 풀이에 도달하는 것은 어렵지 않다. 1행의 원소를 기준으로 전체 배열을 정렬한 다음 2행에서 Longest Increasing Subseqeunce를 찾으면 정답이 된다. 이 풀이는...","categories": ["algorithms"],
        "tags": ["data-structures","segment-tree"],
        "url": "http://localhost:4000/algorithms/BOJ15977/",
        "teaser": null
      },{
        "title": "BOJ 4002, APIO 2012 닌자배치(Dispatching)",
        "excerpt":"Contents 풀이 문제 해석 Algorithm Small-to-Large Technique 코드 풀이 문제 해석 번역이 상당히 난해하게 작성되어 있다. 요점을 정리하자면 루트 있는 트리가 주어진다. 각 노드에는 $L_i, C_i$ 값이 주어진다. 트리의 어떤 노드 하나 (매니저) 를 고른다. 그 트리를 루트로 하는 서브트리에서 몇 개의 노드(닌자)를 고른다. 매니저를 닌자로 삼을 수 있다. 이때,...","categories": ["algorithms"],
        "tags": ["algorithms","graph"],
        "url": "http://localhost:4000/algorithms/BOJ4002/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 4 : Analytic Computation",
        "excerpt":"Contents Normal Equation Noninvertible Case Normal Equation Iteration을 통해 극소점에 수렴하는 것이 아니라, Analytically 최적해 $\\theta$를 구하는 방법. ex) $J(\\theta) = a\\theta^2 + b\\theta + c$ ($a &gt; 0$) 를 최소화하는 $\\theta$ 는 $-\\frac{b}{2a}$ 임을 쉽게 알 수 있다. How to do for vector parameter $J$? =&gt; Vector Calculus. $\\pdv{}{\\theta_i}...","categories": ["ml-study"],
        "tags": ["machine-learning","linear-regression"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec4/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 5 : Logistic Regression",
        "excerpt":"Contents Classification Multiple Features Logistic Regression Advanced Optimization Ideas Multiclass Classification Classification Binary 하게 (또는 Discrete하게) 뭔가를 결정하는 형태의 문제. ex) 종양의 양성/음성, 메일이 스팸이다/아니다 등등… Idea : Linear Regression + Threshold. Linear하게 hypothesis를 잡고, 어떤 값 (0.5) 이상이면 1로 예측하는 형태. 한계점 : 예를 들어, 양성 데이터가 (3, 4,...","categories": ["ml-study"],
        "tags": ["machine-learning","logistic-regression"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec5/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 6 : Overfitting / Regularization",
        "excerpt":"Contents Overfitting Issue How to deal with? Regularization Regularized Linear Regression Regularized Logistic Regression Overfitting Issue Underfitting : 데이터가 Linear하지 않음에도 불구하고, Linear function fitting을 하는 등의 이유로 fitting되지 않는 현상 Overfitting : 5개의 데이터를 4차함수로 fitting한다면? 데이터에 대해서는 100%의 정확도를 갖지만, 실제로 좋은 모델링은 아님. 이를 High-variance라고 한다. High-order...","categories": ["ml-study"],
        "tags": ["machine-learning","logistic-regression"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec6/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 7 : Neural networks",
        "excerpt":"Contents Motivation Background Neuron Model Motivation Complex, nonlinear hypothesis 많은 수의 polynomial feature을 쓸 수도 있겠지만… 여러 개의 feature를 가진 문제에 적용하기는 어렵다. 100개의 feature가 있다면? 그 이상이라면? 적절한 고차항을 쓰기는 매우 어려운 일. ex) Computer Vision. 이 이미지는 차량인가? Pixel intensity matrix를 보고 원래의 이미지를 인식할 수 있는가? Classification...","categories": ["ml-study"],
        "tags": ["machine-learning","neural-networks"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec7/",
        "teaser": null
      },{
        "title": "BOJ 8904, ICPC Korea 2011 가구 공장",
        "excerpt":"Contents 풀이 코드 풀이 전형적인 형태의 Maximum Flow 문제로 생각할 수 있다. Source와 사람 을 용량 무한대의 간선으로 잇는다. 사람 은 각 시간에 항상 1만큼씩 일을 할 수 있으므로, 용량 1의 간선으로 사람 $m$개 노드와 시간 노드들을 모두 잇는다. 시간 에는 가구가 1만큼 만들어질 수 있지만, 각 가구는 $[S_i, E_i]$...","categories": ["algorithms"],
        "tags": ["flow"],
        "url": "http://localhost:4000/algorithms/BOJ8904/",
        "teaser": null
      },{
        "title": "BOJ 9373, ICPC-BAPC 2013 복도 뚫기(Getting Through)",
        "excerpt":"Contents 풀이 코드 풀이 반지름 $r_i$인 원을 커버하는 센서 들이 주어진다. 이때 최대한의 반지름 $x$를 가진 원형 로봇을 보내서, 이 센서들에 하나도 걸리지 않고 통과해야 한다. 벽과 각 센서를 모두 정점으로 생각하고, 각 센서들 (벽을 포함) 간의 거리를 길이로 갖는 간선으로 이들 모두를 잇자. 이제, 어떤 경로가 양쪽 벽 정점을...","categories": ["algorithms"],
        "tags": ["graph","mst"],
        "url": "http://localhost:4000/algorithms/BOJ9373/",
        "teaser": null
      },{
        "title": "Coursera ML, Lecture 8 : Neural Network Application",
        "excerpt":"Contents 예시 : XOR / XNOR Classification Multiclass Classification 예시 : XOR / XNOR Classification XOR (0, 0 / 1, 1) 과 XNOR (1, 0 / 0, 1)로 구분하는 classification 문제. 먼저, AND를 $(x_1, x_2)$ 를 받아서 값을 출력하는 네트워크로 표현하자. 적당히 Logistic classification하면 잘 돌아간다. $g(20 x_1 + 20...","categories": ["ml-study"],
        "tags": ["machine-learning","neural-networks"],
        "url": "http://localhost:4000/ml-study/Coursera-ML-Lec8/",
        "teaser": null
      },{
        "title": "BOJ 15907, Shake 2018 Acka의 리듬 세상",
        "excerpt":"Contents 풀이 코드 풀이 문제를 간단히 요약하면, 자연수들이 주어질 때 $f(k, I)$ 를 $k$로 나눈 나머지가 $I$인 수들로 정의한다. 이때 이 값을 최대한 크게 하는 문제이다. 단순하게 접근한다면 한 $(k, I)$ 값이 주어졌을 때 $O(n)$에 $f$값을 계산해 볼 수 있지만, 어차피 계속 $k$로 나눈 모듈러값을 쓸 것이므로 잘 계산하면 $O(n)$에...","categories": ["algorithms"],
        "tags": ["number-theory","algorithms"],
        "url": "http://localhost:4000/algorithms/BOJ15907/",
        "teaser": null
      },{
        "title": "BOJ 16532, ICPC Latin 2018 Looking for the Risk Factor",
        "excerpt":"Contents 풀이 코드 풀이 문제를 요약하자면, 매 쿼리 $(x, y)$ 마다, 2부터 $x$까지의 수 중 소인수가 모두 $y$ 이하인 수의 개수를 세는 문제이다. 두가지 서로 다른 웰노운 문제를 잘 해결할 수 있다면 합쳐서 어렵지 않게 해결할 수 있다. 에라토스테네스의 체를 살짝 응용하면, 2부터 $M$ 까지의 주어진 수들에 대해서 가장 큰...","categories": ["algorithms"],
        "tags": ["number-theory","data-structures","merge-sort-tree","algorithms"],
        "url": "http://localhost:4000/algorithms/BOJ16532/",
        "teaser": null
      },{
        "title": "Google Hash Code 2021 : Global #211 (2%) 후기",
        "excerpt":"이 글은 올해 해시코드 대회 과정에 대한 후기이고, 준비 과정은 앞 글(링크)에 있습니다. Contents 결과 문제 설명 데이터 설명 대회 전략의 실패 Algorithm : Demand - Proportional - Scheduling Fine Tuning 결과 / Discussion 앞으로를 위해 결과 A - An Example 2,000 B - By the Ocean 4,566,842 C -...","categories": [],
        "tags": ["algorithms","competition"],
        "url": "http://localhost:4000/Hashcode-2021-prelim/",
        "teaser": null
      },{
        "title": "Google Hash Code 2021 : Team Little Piplup 준비과정",
        "excerpt":"이 글은 올해 해시코드를 준비하는 과정 등에 대한 이야기이고, 해시코드 2021에 Specific한 (문제 등) 은 다음 글(링크에서 다룹니다. 내년에 해시코드를 준비하려는 분들이 읽었을때 재밌게 쓰고 싶었는데 어떤지 모르겠네요. :( Contents Google Hashcode Team Little Piplup Preperation 전략 작년 팀연습들 팀연습 : 2020 Hashcode WF Google Hashcode Google Hashcode는 구글에서 개최하는...","categories": [],
        "tags": ["algorithms","competition"],
        "url": "http://localhost:4000/Hashcode-2021-prep/",
        "teaser": null
      },{
        "title": "폴라드-로 소인수분해 알고리즘",
        "excerpt":"Contents Motivation 생일 문제 (Birthday Problem) 가정 Algorithm 예시 구현 시간 복잡도 Motivation 소인수분해는 매우 어려운 과정이다. 실제로 소인수분해는 (입력 비트 수에 대해) 다항 시간에 결정론적으로 풀 수 있는 방법이 알려져 있지 않다. 그러나, 약간의 랜덤성 (확률에 대한 의존) 을 허용한다면 상당히 clever한 알고리즘을 통해 빠르게 소인수분해를 할 수 있는데,...","categories": ["algorithms"],
        "tags": ["number-theory","algorithms"],
        "url": "http://localhost:4000/algorithms/Pollards-Rho/",
        "teaser": null
      },{
        "title": "2021 1학기 중간점검",
        "excerpt":"블로그 포스팅 오랜만이네요. 기록상 3월 19일에 폴라드-로 알고리즘에 대해 쓴 게 마지막이니, 대략 한달 만입니다. 과제랑 중간고사에 치여서 나름대로 바쁜 삶을 살고 있습니다. 잠깐 이번학기 중간점검 하는 느낌으로, 쭉 적어보려고 합니다. Major Updates 수리과학부 복수전공을 (원래도 계획하고 있었지만) 시작하게 되었습니다. 원래는 부전공 중이었는데 조금더 제대로 수학공부를 해보고 싶기도 했고 원래...","categories": ["retrospects-and-plans"],
        "tags": [],
        "url": "http://localhost:4000/retrospects-and-plans/halfway-through-2021-spring/",
        "teaser": null
      },{
        "title": "Iterative methods : Jacobi, GS, SOR",
        "excerpt":"Contents Iterative methods Convergence Richardson method Convergence Jacobi method Gauss-Seidel Method SOR (Successive OverRelaxation) Iterative methods 수치선형대수 수업에서 배운 내용을 조금 정리해 보려고 한다. 구체적으로, 행렬 $A$와 벡터 $b$에 대해, $Ax = b$를 푸는 여러 방법들 중 iterative methods를 몇 포스팅에 걸쳐 다루어 본다. 우선, 행렬 $A$ 의 inverse를 구하기가...","categories": ["numerical-analysis"],
        "tags": ["algorithms","mathematics"],
        "url": "http://localhost:4000/numerical-analysis/im-1/",
        "teaser": null
      },{
        "title": "5월 1주차 Weekly PS",
        "excerpt":"Contents Google Codejam 2021, Round 1B Broken Clock, Small-Middle Subtransmutation, Full Problems BOJ 20191 줄임말 (KOI 2020) BOJ 3006 터보소트 (COCI 2007) Apr 26 - May 09, 2021. 이번 주차는 4월 말 것들도 포함되어 있다. 이전 블로그에서 했었던 weekly PS를 다시 써보려고 한다. 알고리즘 공부도 요새 너무 못한거 같아서… 시험기간...","categories": ["algorithms"],
        "tags": ["weekly-ps"],
        "url": "http://localhost:4000/algorithms/ps-weekly-21may1/",
        "teaser": null
      },{
        "title": "5월 2주차 Weekly PS",
        "excerpt":"Contents Google Codejam 2021, Round 2 [Virtual] Google Codejam 2018, Round 2 Falling Balls Graceful Chainsaw Jugglers (small) Costume Change May 10 - May 17, 2021. Google Codejam 2021, Round 2 PS를 시작하고 세 번째 Codejam이다. 처음으로 Round 3에 진출하고 Codejam 티셔츠를 얻었다. 순위는 855등으로, 거의 막차를 탔지만 아무튼 티셔츠를...","categories": ["algorithms"],
        "tags": ["weekly-ps"],
        "url": "http://localhost:4000/algorithms/ps-weekly-21may2/",
        "teaser": null
      },{
        "title": "Codejam 2021 Round 2",
        "excerpt":"Contents Preperation Preliminary &amp; Round 1 Problem 1 : Minimum Sort Problem 2 : Matrygons Problem 3 : Hidden Pancakes Round 총평 올해 Codejam의 (나한테 있어) 사실상 마지막 round이므로 (R3 는 재밌게 하겠지만 competition으로써는 얻을게 없다) Hashcode 때처럼 prep과 과정을 좀 적어보려고 한다. 앞으로 메이저한 대회는 이렇게 적어볼 생각이다. Preperation...","categories": ["algorithms"],
        "tags": ["competitive-programming"],
        "url": "http://localhost:4000/algorithms/Codejam-2021-R2/",
        "teaser": null
      },{
        "title": "2021 1학기 종강",
        "excerpt":"이번학기도 무사히…ㅋㅋㅋㅋ 학기에 뭘 배웠는지도 돌아보고, 공부했던거에 대한 생각을 적어보려고 합니다. Academic Spring Semester Courses Hardware System Design (CSE, 3) Verilog를 이용하여 행렬곱셈 하드웨어 가속기를 만들고, CNN을 빨리돌리는..뭐 그런걸 배우는 과목입니다. 저는 베릴로그 코딩을 굉장히 힘들어하기 때문에 팀원이 좀 많이 고생했습니다. 논리설계때 좀 열심히 들을걸 하는 깊은 후회와 미안함을 느끼고...","categories": ["retrospects-and-plans"],
        "tags": [],
        "url": "http://localhost:4000/retrospects-and-plans/finishing-2021-spring/",
        "teaser": null
      },{
        "title": "7월 1-2주차 Weekly PS",
        "excerpt":"Contents Recent Updates Rounds Atcoder Beginner Round 208 (Virtual) Codeforces Round 490 (Div.3) Problems ICPC Mid Atlantic 2006, BOJ 1849 순열 CERC 2010D, BOJ 3429 방어선 UCPC 2018 예선F, BOJ 15899 트리와 색깔 BOJ 14287 회사 문화 3 BAPC 2005E, BOJ 5419 북서풍 SCCC 2019E, BOJ 17131 여우가 정보섬에 올라온...","categories": ["algorithms"],
        "tags": ["weekly-ps"],
        "url": "http://localhost:4000/algorithms/ps-weekly-21Jul1/",
        "teaser": null
      },{
        "title": "논문읽기 : DELTACON",
        "excerpt":" Contents     Introduction    처음으로 정리해볼 논문은 2013년 SDM(SIAM International Conference on Data Mining)에 발표된 DeltaCon입니다.   Introduction  두 그래프 $G_1 = (V_1, E_1), G_2 = (V_2, E_2)$ 가 주어졌을 때, 우리는 두 그래프의 유사도 를 측정하는 어떤 좋은 메트릭을 갖고 싶습니다. 이 메트릭이 있으면  ","categories": ["cs-adventure"],
        "tags": ["graph theory"],
        "url": "http://localhost:4000/cs-adventure/deltacon/",
        "teaser": null
      },{
        "title": "2021 UCPC 팀연습 #1 : 서강대학교 2020 Div 1",
        "excerpt":"Contents Our Team Practice : Sogang 2020 Div1 Phase 0 : Start Phase 1 : Easy Problems A. 파일 정리 F. 폰친구 C. 연료가 부족해 B. 컨설팅 Phase 2 : 3 Graph Problems E. 사탕 배달 D. 에어컨 설치 G. Confuzzle Phase 3 : Pizza Madness 후기 Our Team 이번...","categories": ["cp_practice"],
        "tags": [],
        "url": "http://localhost:4000/cp_practice/team_practice_1/",
        "teaser": null
      },{
        "title": "삼성 SCPC 예선 1라운드 풀이 / 후기",
        "excerpt":"Contents SCPC 문제 풀이 / 후기 Problem 1. 친구들 Problem 2. 이진수 SCPC SCPC는 삼성전자 (정확히는 Samsung Research) 가 주관하는 알고리즘 문제풀이 대회로, 한국에서 열리는 기업 대회중 가장 큰 규모를 자랑하는 대회입니다. 한국의 코드잼이라고나 할까요. ICPC, UCPC 등 팀대회와는 달리 개인전이고, 예선 1라운드 - 예선 2라운드 - 본선으로 구성됩니다. 예선...","categories": ["cp_rounds"],
        "tags": ["algorithms"],
        "url": "http://localhost:4000/cp_rounds/SCPC-2021-Round1/",
        "teaser": null
      }]
