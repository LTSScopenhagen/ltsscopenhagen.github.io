---
title: "Organizers"
permalink: /organizers/
---

<section>
  <h1>Organizers</h1>
  <p class="muted">
    For questions, see the Registration page.
  </p>

  <div class="card organizers-box">
    <div class="people-grid">
      {% for o in site.data.organizers %}
        <div class="person-card">
          <div class="avatar">
            <img src="{{ o.photo | relative_url }}" alt="Photo of {{ o.name }}" loading="lazy" width="220" height="220" />
          </div>
          <div class="person-body">
            <div class="person-name">
              <a href="{{ o.url }}" target="_blank" rel="noopener noreferrer">{{ o.name }}</a>
            </div>
            {% if o.affiliation %}
              <div class="person-meta">{{ o.affiliation }}</div>
            {% endif %}
          </div>
        </div>
      {% endfor %}
    </div>
  </div>
</section>
