---
title: "Organizers"
permalink: /organizers/
---

<section>
  <h1>Organizers</h1>
  <p class="muted">
    For questions, see the contact section on the home page.
  </p>

  <div class="people-grid" style="margin-top: 12px;">
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
          {% if o.photo_credit and o.photo_source %}
            <div class="person-credit tiny muted">
              Photo: <a href="{{ o.photo_source }}" target="_blank" rel="noopener noreferrer">{{ o.photo_credit }}</a>
            </div>
          {% endif %}
        </div>
      </div>
    {% endfor %}
  </div>
</section>
