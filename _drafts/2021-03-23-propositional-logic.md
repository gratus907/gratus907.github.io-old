---
layout: single
title: "이산수학 주제 1 : Propositional Logic"
categories: dma2021
tags:
  - logic
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

- Logic : Formal system for describing knowledge, implement reasoning on knowledge.

- Set of rules deducing entailments of a set of sentences.

- Ambiguity 없이 명제를 표현하고 사고를 전개하는 언어 (Syntax, Semantics, Rules).
  
## Propositional Logic
- 기본적인 문장들을 Atomic entity로 간주하고, Boolean connective를 이용하여 복잡한 문장을 전개.
- Boolean Connective : $\land, \lor \dots$
- Proposition : Assertion, declarative sentence with definite meaning. 참/거짓을 명확히 판별할 수 있는 문장.
- Proposition variable ($P, Q, R \dots$) 로 임의의 '명제' 를 기술한다.
- 다음과 같은 Boolean Operator들을 쓴다.
  - $\lnot$ : NOT 
  - $\land$ : AND 
  - $\lor$ : OR 
  - $\lxor$ : XOR
  - $\limply$ : IMPLIES 
  - $\leftrightarrow$ : IFF
- Implication의 Truth table : $P \to Q$ 는 $P$가 참이지만 $Q$가 거짓일 때만 거짓이고, 그 외에는 참이다. $P$가 거짓이면 반드시 참임을 주의하자. 예를 들어...
$(1 = 0) \to (2 = 0)$ 은 $P$가 거짓이므로, 반드시 참이다.
  - $P$를 hypothesis / antecendent / premise 라고 부르고, $Q$를 conclusion / consequence라고 부른다.
- Biconditional Operator의 경우, $P \leftrightarrow Q$는 $P, Q$의 Truth value가 같으면 참이다. $P \leftrightarrow Q = \lnot (P \lxor Q)$.

## 명제의 역/이/대우
- 명제 $P \rightarrow Q$에 대하여 다음과 같이 용어를 정의한다.
  - Converse (이) : $Q \rightarrow P$
  - Inverse (역) : $\lnot P \rightarrow \lnot Q$ 
  - Contrapositive (대우) : $\lnot Q \rightarrow \lnot P$
- 셋 중 Contrapositive만이 원래 명제의 Truth table을 보존한다.

## Well-Formed Formula
다음과 같이 Well-Formed Formula라는 개념을 정의한다. 이하 WFF.
- Proposition variable은 WFF
- WFF $P$에 대해 $\lnot P$ 는 WFF
- WFF $P, Q$에 대해 $(P \lor Q), (P \land Q), (P \rightarrow Q)$ 는 WFF  
- 위 과정으로 만들어진 논리식들 (문자열들) 만이 WFF이다.

## Logical Facts
- **Tautology** : WFF $T$ 가 주어질 때, $T$의 모든 variable의 모든 truth value assignment에 대해서 $T$가 항상 참이면 $T$를 Tautology라고 부른다.
예를 들어, $(P \lor \lnot P)$ 는 tautology. Truth table의 모든 row에서 결과가 T이면 tautology이다.
- **Contradiction** : WFF $T$ 가 주어질 때, $T$의 모든 variable의 모든 truth value assignment에 대해서 $T$가 항상 거짓이면 $T$를 Contradiction이라고 부른다.
- **Contingency** : Tautology나 Contradiction이 아닌 WFF를 Contingency라고 부른다.
- 두 WFF $T, S$가 주어질 때, 모든 variable의 모든 truth value assignment에 대해서 $T$와 $S$의 참/거짓이 같으면 두 식을 Logically Equivalent하다고 부른다. 즉, $T \leftrightarrow S$가 Tautology이면 두 식이 Logically Equivalent.
  - Identity : $P \land T \Leftrightarrow P,\quad P \lor F \Leftrightarrow P$
  - Domination : $P \lor T \Leftrightarrow T,\quad P \land F \Leftrightarrow F$
  - Idempotent : $P \lor P \Leftrightarrow P,\quad P \land P \Leftrightarrow P$
  - Double Negation : $\lnot \lnot P \Leftrightarrow P$
  - Commutatitive : $\land, \lor$ are commutative 
  - Associative : $\land, \lor$ are associative 
  - Distributive : $P \lor (Q \land R) \Leftrightarrow (P \lor Q) \land (P \lor R), \quad$  
    $P \land (Q \lor R) \Leftrightarrow (P \land Q) \lor (P \land R)$ 
  - De Morgan's : $\lnot (P \land Q) \Leftrightarrow \lnot P \lor \lnot Q, \quad$  
    $\lnot (P \land Q) \Leftrightarrow \lnot P \lor \lnot Q$ 
  - Trivial Tautology/Contradiction : $P \lor \lnot P \Leftrightarrow T, \quad P \land \lnot P \Leftrightarrow F$  
- Operator들 간의 동치 관계.
  - XOR : $P \lxor Q \Leftrightarrow (P \lor Q) \land \lnot (P \land Q) \Leftrightarrow (P \land \lnot Q) \lor (\lnot P \land Q)$  
  - Conditional : $P \to Q \Leftrightarrow \lnot P \lor Q$ 
  - Biconditional : $P \leftrightarrow Q \Leftrightarrow (P \to Q) \land (\lnot P \to \lnot Q) \Leftrightarrow \lnot (P \lxor Q)$
