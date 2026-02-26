---
title: "LTSS Copenhagen 2026"
---

<div
  class="hero"
  data-hero-images="{{ '/assets/img/cph-01.svg' | relative_url }}, {{ '/assets/img/cph-02.svg' | relative_url }}, {{ '/assets/img/cph-03.svg' | relative_url }}"
>
  <div class="hero-grid">
    <div class="hero-copy">
      <h1>Learning Theory Summer School & Workshop</h1>
      <p class="lead muted">
        Four days of lectures and exercises, followed by a two-day research workshop.
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
      <p class="tiny muted hero-note">Rotating generated illustration of Copenhagen (no tracking, no cookies).</p>
    </div>
    <div class="hero-media" aria-hidden="true">
      <img class="hero-img is-a is-visible" src="{{ '/assets/img/cph-01.svg' | relative_url }}" alt="" />
      <img class="hero-img is-b" src="{{ '/assets/img/cph-02.svg' | relative_url }}" alt="" />
    </div>
  </div>
</div>

<section id="about">
  <h2>About</h2>
  <div class="grid two">
    <div class="card">
      <p>
        A <strong>{{ site.data.event.summer_school.days }}-day</strong> summer school on learning theory, followed by a
        <strong>{{ site.data.event.workshop.days }}-day</strong> research workshop.
      </p>
      <ul class="muted">
        <li>Summer school: lectures + exercises</li>
        <li>Workshop: invited + contributed sessions</li>
        <li>Location: Copenhagen (details TBA)</li>
      </ul>
    </div>
    <div class="card">
      <p><strong>Organizers</strong></p>
      <p class="muted">{{ site.data.organizers | map: "name" | join: ", " }}</p>
      <p class="tiny muted">
        This site is designed to be easy to update: edit `index.md`, `_data/event.yml`, `_data/organizers.yml`, and `_data/schedule.yml`.
      </p>
    </div>
  </div>
</section>

<section id="programme">
  <h2>Programme</h2>
  <p class="muted">
    We maintain the schedules on separate pages (linked below). Timings are a placeholder until speakers are finalized.
  </p>
  <div class="grid two" style="margin-top: 12px;">
    <div class="card">
      <p><strong>Summer School (Jun 22–25)</strong></p>
      <p class="muted tiny">Lectures + exercises (4 days).</p>
      <a class="btn" href="{{ '/summer-school/' | relative_url }}">View summer school schedule</a>
    </div>
    <div class="card">
      <p><strong>Workshop (Jun 26–27)</strong></p>
      <p class="muted tiny">Invited + contributed talks, posters, and social.</p>
      <a class="btn primary" href="{{ '/workshop/' | relative_url }}">View workshop schedule</a>
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
            <img src="{{ o.photo | relative_url }}" alt="Photo of {{ o.name }}" loading="lazy" width="120" height="120" />
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
      Full list (with links and photo credits): <a href="{{ '/organizers/' | relative_url }}">Organizers page</a>.
    </p>
  </div>
</section>

<section id="contact">
  <h2>Contact</h2>
  <div class="card">
    <p class="muted">Email: <strong>{{ site.data.event.contact_email }}</strong></p>
    <p class="muted tiny">If you want a submissions page, speaker list, or separate workshop CFP page, we can add it.</p>
  </div>
</section>
