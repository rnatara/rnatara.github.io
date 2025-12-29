---
layout: default
title: "rnatara | Developer Portfolio"
description: "Software Engineer specializing in event-driven architecture, distributed systems, and AI/ML"
---

## About Me

I'm a software engineer with expertise in **event-driven architecture**, **distributed systems**, and **AI/ML** technologies. My work spans from building production-grade developer tools and infrastructure automation to creating innovative AI frameworks and personal projects.

With a strong foundation in **Solace PubSub+** event broker ecosystems, I've developed solutions for Fortune 500 companies and contributed to open-source projects that help developers build scalable, event-driven applications.

---

{% assign work_data = site.data.work %}
{% include category-section.html id="work" category="work" data=work_data %}

---

{% assign academic_data = site.data.academic %}
{% include category-section.html id="academic" category="academic" data=academic_data %}

---

{% assign personal_data = site.data.personal %}
{% include category-section.html id="personal" category="personal" data=personal_data %}
