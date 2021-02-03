---
layout: single
title: "Coursera ML, Lecture 5 : Octave Tutorial"
categories: ml-study
tags:
  - machine-learning
  - linear-regression
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

Octave는 Matlab의 Open-source 버전 정도로 생각할 수 있는 프로그래밍 언어로, Coursera의 이 코스에서는 octave를 이용하여 과제를 해결한다. 이 강의가 2013년? 쯤에 처음 Coursera에 올라와서 그렇다고 불평하는 사람들이 많이 있지만, 그냥 뭐 matlab 구경도 해볼겸 해서 따라가 보기로 했다.

- 사칙연산은 python이랑 똑같이 굴러간다.
    ```matlab
    a + b
    a - b
    a * b
    a / b
    ```
- 차이가 있다면, `pow`를 `**`가 아닌 `^`를 쓴다. 이건 (특히 C++를 쓰던 나같은 사람한테는) 많이 헷갈릴 듯...
- 논리연산에서, octave는 not equal에 `~=`를 쓴다.
- 주석은 python처럼 `%`를 쓴다.
