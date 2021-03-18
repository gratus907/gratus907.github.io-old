---
layout: single
title: "정수론 : 2장 1절 Congruences"
categories: mathematics
tags:
  - number-theory
sidebar:
  nav: "sidepost"
comment: true
comments : true
toc : true
---
<div id="toc">
Contents
</div>
* TOC
{:toc}
----------

## Congruence
- $a, b, m \in \Z$, $m \neq 0$에 대해, $a \equiv b \mod m \iff m \di (a - b)$.  
  이때, $a$를 $m$으로 나눈 나머지를 $[a]_m$으로 나타낸다.
  - 이 Congruence relation은 equivalence이다.
  - 덧셈, 뺄셈, 곱셈은 잘 보존된다. 즉, $a \equiv b, c \equiv d$이면 $a + b \equiv c + d$이고, $ab \equiv cd$.
  - $ac \equiv bc$이고, $(c, m) = 1$이면 $a \equiv b$.
    - $m \di (bc - ac)$, $(c, m) = 1$이면 유클리드 보조정리에 의해 $m \di (b-a)$.
- Cor) 정수계수 다항식 $f$에 대해, $a \equiv b$ 이면 $f(a) \equiv f(b)$. 
- Def) $y$가 $x$의 $\mod m$에 대한 residue : $y \equiv x \mod m$
  - $\Set{x_1, \dots x_n}$ complete residue system : 임의의 정수 $y$에 대해, $y \equiv x_i \mod m$인 $x_i$가 유일하게 존재
  - Complete residue system $\Set{0, 1, \dots m-1}$
  - $\Setcond{a - km}{k \in \Z}$ 를 residue class(잉여류) 라고 부른다.
  - $m$과 서로소인 수들의 residue system $\Set{x_1, \dots x_{\phi(m)}}$을 reduced residue system이라고 부른다. 즉, $x_i \neq x_j$, $(x_i, m) = 1$.
  - 이때, $m$과 서로소이면서 $m$ 이하인 자연수의 개수를 $\phi(m)$ 이라고 쓰고,  
  이를 Euler totient function이라고 부른다.
- Thm) **[페르마의 소정리]**  
  $p$가 소수일 때, $a^{p-1} \equiv 1 \mod p$이다.
- Thm) **[오일러 정리 (페르마 소정리의 일반화)]**  
  $(a, m) = 1$ 일 때, $a^{\phi(m)} \equiv 1$ 이다.
  - RRS(Reduced residue system)의 성질을 이용한다.
  - RRS $\Set{r_1, \dots r_\phi(m)}$ 에 대해, $\Set{ar_1, ar_2, \dots ar_{\phi(m)}}$ 이 RRS임을 쉽게 알 수 있다. 
  - 이때, $r_i = ar_j$인 $j$가 각 $i$에 대해 유일하게 존재한다. 이를 이용하여 reindexing하자.
  - mod m의 세상에서, 자명하게 $\prod_{j = 1}^{\phi(m)} ar_j = \prod_{i = 1}^{\phi(m)} r_i$
  - 따라서, $a^{\phi(m)} \equiv 1$.
- Thm) **[합동 선형 방정식]**
  $(a, m) = 1$ 이면, $^\exists x, ax \equiv 1 \mod m$. 특히, 이러한 $x$들은 반드시 mod $m$에서 같은 잉여류에 속한다. $(a, m) > 1$ 이면, 그러한 $x$가 존재하지 않는다. 
  - Case를 나눠서 보이자.
  - $(a, m)$ 이 1이면, $^\exists x, y \in \Z$, $ax + my = 1$. 이때 $ax \equiv 1 \mod m$ 이다. 
  - $ax \equiv 1$ 인 $x$가 존재하면, $ax + my = 1$ 인 $y$가 존재하므로, $(a, m) = 1$ 이다.
- Lem) $p$가 소수일 때, $x^2 \equiv 1 \mod p$ if and only if $x \equiv \pm 1 \mod p$
  - 자명한 보조정리.
- Thm) **[윌슨의 정리]**  
  $p$가 소수일 때, $(p-1)! \equiv -1 \mod p$ 
  - 앞서의 정리에 의해, $1 < a < p-1$ 인 $a$에 대해 $^{\exists!} \overline{a}$, $a\overline{a} \equiv 1 \mod p$. 이를 이용하여, $p$가 odd prime인 경우에는 $(p-1)!$을 순서를 바꾸어 rearrange함으로써 $(p-1)! = 1 \times \prod_{i = 2}^{p-2}a \times (p-1) \equiv -1 \mod p$.
- Cor) 소수 $p$에 대해 $x^2 \equiv -1 \mod p$ 는 $p = 2$ 또는 $p = 4k + 1$일 때 해를 갖는다.
  - $p = 2$일 때의 해는 $x = 1$로 자명하다. $p > 2$가 홀수 소수일 때, $p$는 $4k + 1$ 또는 $4k + 3$ 이다. 이때 $4k+3$의 경우 $\frac{p-1}{2}$가 홀수인데, $x^2 \equiv -1$ 이면 $(x^{p-1}) \equiv (x^2)^{\frac{p-1}{2}} \equiv -1$ 이므로 페르마의 소정리에 모순이다.
  - $p = 4k + 1$ 이면, 윌슨의 정리로부터 $-1 \equiv (p-1)! = \prod_{j = 1}^{\frac{p-1}{2}} j(p-j)$. 이는 $(-1)^{\frac{p-1}{2}}\prod_{j = 1}^{\frac{p-1}{2}} j^2$ 이므로, $\prod_{j = 1}^{\frac{p-1}{2}} j$ 가 $x^2 \equiv -1$을 만족하는 해가 된다. 따라서, 주어진 정리가 성립한다.
- Lem) $p \equiv 1 \mod 4$ 인 소수 $p$에 대해서는, $p = a^2 + b^2$ 인 정수 $a, b$가 존재한다.
  - 앞서의 theorem에 의해, $x^2 + 1 \equiv 0 \mod p$ 인 $x$가 존재한다. 만약 $\abs{x} < \sqrt{p}$ 이면, $x^2 + 1 < p + 1$ 에서, $x^2 + 1 = p$ 임을 안다. 이때, mod $p$에서 $a^2 + b^2 \equiv (a + xb) (a - xb)$ 임을 알 수 있고, $^\exists a, b \in (-\sqrt{p}, \sqrt{p})$ such that $a + xb \equiv 0 \mod p$ 라 하면, $0 < a^2 + b^2 < 2p$, $a^2 + b^2 \equiv 0 \mod p$ 이므로, $a^2 + b^2 = p$ 임을 안다. 
  - $f(u, v) = u + xv, 0 \leq u, v < \sqrt{p}$ 라고 하자. 비둘기집의 원리에 따라, $u, v$의 순서쌍의 개수가 $p$보다 크기 때문에, $f(u_1, v_1) \equiv f(u_2, v_2) \mod p$ 인 순서쌍이 존재한다. 이때 $a = \abs{u_1 - u_2}, b = \abs{v_1 - v_2}$ 라 하면, $a, b \in (-\sqrt{p}, \sqrt{p})$, $a + xb \equiv 0 \mod p$ 인 순서쌍 $a, b$를 얻었다.
- Thm) **[페르마의 두 제곱수 정리]**  
  $n = 2^{\alpha} \prod_{p \equiv 1(4)} p^\beta \prod_{q \equiv 3(4)} q^\gamma$ 로 쓸 때, $n$이 두 제곱수의 합으로 나타내어질 필요충분조건은 $\gamma$ 부분의 exponent가 모두 짝수인 것이다. 
  - 두 제곱수의 합의 곱 $(a^2 + b^2) (c^2 + d^2)$ 은 $(ac - bd)^2 + (ad + bc)^2$ 이므로, $n$이 두 제곱수의 합인 수들의 곱으로 나타내어지는지를 확인하면 충분하다. Lem 3.11에 의해, $4k + 1$ 형태 소수들에 대해서는 두 제곱수의 합 표현이 가능하고, $2$는 $1^2 + 1^2$ 이다. $q$들에 대해 $q^2$는 $q^2 + 0$으로 나타낼 수 있지만 $q$는 제곱수의 합 표현이 불가능하므로 주어진 정리가 성립한다.