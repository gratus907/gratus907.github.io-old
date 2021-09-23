---
title: "Project Euler Study"
layout: single
permalink: /project-euler/
sidebar:
    nav: "sidepost"
author_profile: true
---

## What is This? 
Project Euler [링크](https://projecteuler.net/archives) 는 PS에서 수학적인 문제들만 따로 떼어서 만들어진 웹사이트입니다. 

프로그램을 제출해서 테스트케이스에 대해 정답을 확인하는 것과는 달리, 정답을 제출하는 형태입니다. 예를 들어, 일반적인 PS문제가 "$N$ 번째 소수를 구하여라. $N \leq 1000$" 이런 식으로 생겼다면, Project Euler의 문제는 "$1000$번째 소수는 무엇인가?" 라고 묻습니다. 또한, 일반적인 PS판에서 다루지 않는 정수론과 조합론의 다양한 내용들을 다루고 있습니다.

많은 문제를 해결하지는 않을 것 같지만, 일부 문제들의 풀이를 여기에 공유해보려고 합니다. 

- PE의 문제는 특성 상, 느린 알고리즘도 충분히 오래 기다리면 정답을 뱉을 수 있습니다. 일반적으로, PE의 문제들은 1분 이내에 작동되는 정해 C++코드가 있다고 합니다.
- 마찬가지로 256MB 이하의 메모리를 소모하는 솔루션이 있다고 합니다. 
- 다만 저는 이 규칙을 엄격하게 지키지는 않을 생각입니다. 대략적인 Rule of Thumb으로 생각하겠습니다.
- 난이도는 5% ~ 100%까지 있고, 5% 단위로 구분됩니다. (즉, 1~20단계)

## Library
기본적인 정수론 함수들은 다양한 문제에서 활용됩니다. 예를 들어 `primes(N)` 이 미리 $N$까지의 모든 소수를 반환하게 해둔다면, 많은 쓸모가 있습니다. 저는 가급적 모든 솔루션을 C++에서 외부 라이브러리 없이 해결하려고 노력할 생각이고, 그러기 위해서는 라이브러리를 관리하는 것은 상당히 유용합니다. 

[링크](https://github.com/gratus907/project-euler-study)에서 제 코드를 확인할 수 있고, 특히 lib/ 디렉토리는 라이브러리 함수들을 구현할 계획입니다. 

라이브러리의 내용은 다음과 같습니다. 
- **Combinatorics** : 팩토리얼과 이항계수. 특히 $\Z_p$ 에서도 팩토리얼을 다룰 수 있게 해두었습니다. 
- **Bigint** : 기본적인 사칙연산이 가능한 빅인트 클래스. Codeforces의 상당히 유명한 `arpa` 라는 분의 라이브러리를 가져왔고, 이 라이브러리는 Karatsuba 곱셈을 사용합니다.
- **Modint** : $\Z_n$ 을 다루는 클래스. $n$이 소수인 경우, $\Z_p$가 체가 됨이 잘 알려져 있고, 이 위에서는 사칙연산이 작동합니다. 일반적인 $n$에 대해서는 나눗셈이 작동하지 않을 것입니다. 
- **PEBasic** : 기본 함수들 (string to int, vector print, timer 등)
- **Primes** : 소수 찾기. 
  - `primes(N)` : $N$ 이하의 모든 소수를 담은 벡터를 반환합니다. Linear Sieve입니다.
  - `is_prime(N)` : $N$의 빠른 소수 판정. $10^{9}$ 이하는 $O(\sqrt{n})$ 소수판정을, 그 이상은 밀러-라빈을 사용합니다. 
- **UnionFind** : DSU 자료구조.

이후 라이브러리의 업데이트는 지속적으로 이루어질 것 같은데, 여기에 기록하려고 합니다. 

## Problems
(난이도는 `●` 가 10%, `◐`가 5%를 의미합니다)

| ID  | Title (with Link to solution post)             | Difficulty |
| --- | ---------------------------------------------- | ---------- |
| 60  | [**Prime pair sets**](/project-euler/pe-060)   | `●●`       |
| 205 | [**Dice Game**](/project-euler/pe-205)         | `●◐`       |
| 425 | [**Prime Connection**](/project-euler/pe-425)  | `●●◐`      |
| 686 | [**Powers of Two**](/project-euler/pe-686)     | `◐`        |
| 725 | [**Digit sum numbers**](/project-euler/pe-725) | `●`        |
