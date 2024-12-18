---
layout: layout.njk
title: Home
---
# Welcome to My Eleventy Site

<h2>Posts</h2>

<ul>
{% for post in collections.post reversed %}
<li><a href="{{post.url}}">{{ post.data.title }}</a> - {{ post.date }}</li>
{% endfor %}
</ul>
