---
title: "Postings by date"
layout: single
permalink: /postings/
author_profile: true
---
<ul>
    {% for post in site.posts %}
    {% assign currentdate = post.date | date: "%B %Y" %}
    {% if currentdate != date %}
        <h4> {{ currentdate }} </h4>
        {% assign date = currentdate %} 
    {% endif %}
        <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>