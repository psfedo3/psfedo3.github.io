---
layout: archive
permalink: /
title: "Latest Posts"
---
<h1> hello Spruce </h1>
<div class="tiles">
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
