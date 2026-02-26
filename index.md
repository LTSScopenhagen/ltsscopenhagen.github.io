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
    <p class="muted">
      The event comprises a <strong>PhD school</strong> (June 22–25) and a <strong>workshop</strong> (June 26–27).
    </p>
    <div class="grid two" style="margin-top: 12px;">
      <div>
        <p><strong>PhD school (June 22–25)</strong></p>
        <p class="muted">
          This PhD school provides a comprehensive introduction to the theoretical foundations of modern machine learning (ML),
          also emphasizing trustworthy ML—including privacy and robustness. Over 4 intensive days, participants will study core
          learning-theoretic principles, optimization and sequential decision-making (online and reinforcement learning), and
          mathematical tools for designing reliable ML systems operating under uncertainty, constraints, and adversarial conditions.
        </p>
        <p class="muted">Topics to be covered:</p>
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
          Two-day research workshop with <strong>8 invited talks</strong> (45 min incl. Q&amp;A) and
          <strong>8 contributed talks</strong> (30 min incl. Q&amp;A), two coffee breaks and one lunch each day.
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
      <a class="btn primary" href="{{ '/workshop/day-1/' | relative_url }}">View workshop schedule</a>
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
