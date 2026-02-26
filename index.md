---
title: "LTSS Copenhagen 2026"
---

<div
  class="hero"
  data-hero-images="{{ '/assets/img/copenhagen/cph-01.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-02.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-03.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-04.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-05.jpg' | relative_url }}"
>
  <div class="hero-grid">
    <div class="hero-copy">
      <h1>Learning Theory Summer School & Workshop</h1>
      <p class="lead muted">
        PhD school + workshop in Copenhagen.
      </p>
      <div class="hero-meta">
        <div class="pill"><strong>{{ site.data.event.dates_full }}</strong></div>
        <div class="pill">{{ site.data.event.location }}</div>
        <div class="pill"><span class="muted">Summer school:</span> {{ site.data.event.summer_school.dates }}</div>
        <div class="pill"><span class="muted">Workshop:</span> {{ site.data.event.workshop.dates }}</div>
      </div>
      <div class="actions">
        <a class="btn primary" href="{{ '/workshop/day-1/' | relative_url }}">Workshop schedule</a>
        <a class="btn" href="{{ '/summer-school/' | relative_url }}">Summer school</a>
      </div>
      <p class="tiny muted hero-note">
        Rotating Copenhagen photos (CC0). <a href="{{ '/credits/' | relative_url }}">Credits</a>.
      </p>
    </div>
    <div class="hero-media" aria-hidden="true">
      <img class="hero-img is-a is-visible" src="{{ '/assets/img/copenhagen/cph-01.jpg' | relative_url }}" alt="" />
      <img class="hero-img is-b" src="{{ '/assets/img/copenhagen/cph-02.jpg' | relative_url }}" alt="" />
    </div>
  </div>
</div>

<section id="about">
  <h2>About</h2>
  <div class="card">
    <p class="muted"><strong>PhD school:</strong> June 22–25. <strong>Workshop:</strong> June 26–27.</p>
    <div class="grid two" style="margin-top: 12px;">
      <div>
        <p><strong>PhD school (June 22–25)</strong></p>
        <p class="muted">
          A focused introduction to modern learning theory and trustworthy ML (privacy, robustness).
        </p>
        <ul class="muted">
          <li>Generalization in machine learning</li>
          <li>Optimization theory for ML</li>
          <li>Online and reinforcement learning</li>
          <li>Responsible ML — privacy, robustness, and related topics</li>
        </ul>
      </div>
      <div>
        <p><strong>Workshop (June 26–27)</strong></p>
        <p class="muted">
          <strong>8 invited talks</strong> (45 min incl. Q&amp;A) and <strong>8 contributed talks</strong> (30 min incl. Q&amp;A).
        </p>
        <ul class="muted">
          <li>Poster session on Day 1</li>
          <li>Social event on Day 2</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="programme">
  <h2>Programme</h2>
  <div class="grid two" style="margin-top: 12px;">
    <div class="card">
      <p><strong>Summer School (Jun 22–25)</strong></p>
      <a class="btn" href="{{ '/summer-school/' | relative_url }}">Schedule</a>
    </div>
    <div class="card">
      <p><strong>Workshop (Jun 26–27)</strong></p>
      <a class="btn primary" href="{{ '/workshop/day-1/' | relative_url }}">Schedule</a>
    </div>
  </div>
</section>

<section id="registration">
  <h2>Registration</h2>
  <div class="card">
    <p class="muted">Registration: <strong>{{ site.data.event.registration_url }}</strong></p>
    <ul class="muted">
      <li>Fee: TBA</li>
      <li>Application / submission: TBA</li>
      <li>Travel support: TBA</li>
    </ul>
  </div>
</section>

<section id="venue">
  <h2>Venue</h2>
  <div class="card">
    <p class="muted">
      Venue details will be announced (campus building, room, directions, accessibility).
    </p>
    <p class="muted tiny">
      Suggested area for accommodation: TBA.
    </p>
  </div>
</section>

<section id="organizers">
  <h2>Organizers</h2>
  <div class="card">
    <div class="people-grid">
      {% for o in site.data.organizers %}
        <a class="person-card" href="{{ '/organizers/' | relative_url }}" aria-label="View organizers">
          <div class="avatar">
            <img src="{{ o.photo | relative_url }}" alt="Photo of {{ o.name }}" loading="lazy" width="180" height="180" />
          </div>
          <div class="person-body">
            <div class="person-name">{{ o.name }}</div>
            {% if o.affiliation %}
              <div class="person-meta">{{ o.affiliation }}</div>
            {% endif %}
          </div>
        </a>
      {% endfor %}
    </div>
    <p class="tiny muted" style="margin-top: 10px;">
      <a href="{{ '/organizers/' | relative_url }}">Organizers page</a>.
    </p>
  </div>
</section>

<section id="contact">
  <h2>Contact</h2>
  <div class="card">
    <p class="muted">Email: <strong>{{ site.data.event.contact_email }}</strong></p>
  </div>
</section>
