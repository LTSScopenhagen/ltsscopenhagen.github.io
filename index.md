---
title: "LTSS Copenhagen 2026 | Summer School Jun 22-25, Workshop Jun 26-27"
map_enabled: true
---

<div
  class="hero"
  data-hero-images="{{ '/assets/img/copenhagen/cph-01.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-02.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-03.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-04.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-05.jpg' | relative_url }}"
>
  <div class="hero-grid">
    <div class="hero-copy">
      <h1>
        Learning Theory Summer School & Workshop
        <span class="hero-title-dates">
          Summer School: {{ site.data.event.summer_school.dates_short }} | Workshop: {{ site.data.event.workshop.dates_short }}
        </span>
      </h1>
      <div class="hero-meta">
        <div class="pill"><strong>{{ site.data.event.dates_full }}</strong></div>
        <div class="pill">{{ site.data.event.location }}</div>
      </div>
      <div class="actions">
        <a class="btn primary" href="{{ '/workshop/day-1/' | relative_url }}">Workshop schedule</a>
        <a class="btn" href="{{ '/summer-school/' | relative_url }}">Summer school</a>
      </div>
    </div>
    <div class="hero-media" aria-hidden="true">
      <img class="hero-img is-a is-visible" src="{{ '/assets/img/copenhagen/cph-01.jpg' | relative_url }}" alt="" />
      <img class="hero-img is-b" src="{{ '/assets/img/copenhagen/cph-02.jpg' | relative_url }}" alt="" />
    </div>
  </div>
</div>

<section>
  <h2>About</h2>
  <div class="card">
    <p class="muted"></p>
    <p class="muted">
      The summer school (June 22–25) is designed for PhD students, masters students, and early-career researchers who want a strong foundation in modern learning theory and responsible machine learning. Over four days, participants will study core themes such as generalization, optimization for ML, online and reinforcement learning, and responsible ML topics including privacy and robustness with a focus towards modern ML.
    </p>
    <p class="muted">
      The workshop (June 26–27) brings the broader community together for exchange and discussion through <strong>invited talks</strong> and <strong>contributed talks</strong>, together with a poster session. Together, the school and workshop offer both structured learning and opportunities to share current research.
    </p>
  </div>
</section>

<section>
  <h2>Invited Speakers</h2>
  {% assign summer_invited = site.data.summer_school_speakers %}
  {% assign workshop_invited = site.data.workshop_speakers %}
  <div class="card speaker-card">
    <p class="muted">
      Invited speakers will be announced soon. Placeholder lines shown below.
    </p>
    <div class="speaker-line">
      <p class="speaker-line-title">Summer School</p>
      <div class="speaker-carousel-list" aria-label="Summer school invited speaker placeholders">
        {% for s in summer_invited %}
          <div class="speaker-tile">
            <div class="speaker-tile-photo">
              <img src="{{ s.photo | relative_url }}" alt="Placeholder portrait of {{ s.name }}" loading="lazy" width="160" height="160" />
            </div>
            <p class="speaker-tile-name">{{ s.name }}</p>
          </div>
        {% endfor %}
      </div>
    </div>
    <div class="speaker-line">
      <p class="speaker-line-title">Workshop</p>
      <div class="speaker-carousel-list" aria-label="Workshop invited speaker placeholders">
        {% for s in workshop_invited %}
          <div class="speaker-tile">
            <div class="speaker-tile-photo">
              <img src="{{ s.photo | relative_url }}" alt="Placeholder portrait of {{ s.name }}" loading="lazy" width="160" height="160" />
            </div>
            <p class="speaker-tile-name">{{ s.name }}</p>
          </div>
        {% endfor %}
      </div>
    </div>
    <p class="tiny muted">
      Placeholder lists (10 + 10): replace names and photos in
      <code>_data/summer_school_speakers.yml</code> and <code>_data/workshop_speakers.yml</code>.
    </p>
  </div>
</section>

<section>
  <h2>Organizers</h2>
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
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<section>
  <h2>Location</h2>
  <div class="location-layout">
    <div class="card">
      <div
        id="venue-map"
        class="venue-map"
        data-summer-name="Summer School: {{ site.data.event.summer_school.venue_name }}"
        data-summer-address="{{ site.data.event.summer_school.venue_address }}, {{ site.data.event.summer_school.venue_room }}"
        data-summer-lat="{{ site.data.event.summer_school.venue_lat }}"
        data-summer-lng="{{ site.data.event.summer_school.venue_lng }}"
        data-workshop-name="Workshop: {{ site.data.event.workshop.venue_name }}"
        data-workshop-address="{{ site.data.event.workshop.venue_address }}, {{ site.data.event.workshop.venue_room }}"
        data-workshop-lat="{{ site.data.event.workshop.venue_lat }}"
        data-workshop-lng="{{ site.data.event.workshop.venue_lng }}"
      ></div>
    </div>
    <div class="location-details">
      <div class="card">
        <p class="muted">
        </p>
        <div class="location-list">
          <div class="location-item">
            <p class="location-label"><span class="location-dot is-summer"></span>Summer School</p>
            <p class="location-name">{{ site.data.event.summer_school.venue_name }}</p>
            <p class="location-meta">{{ site.data.event.summer_school.venue_address }}</p>
            <p class="location-meta">{{ site.data.event.summer_school.venue_room }}</p>
          </div>
          <div class="location-item">
            <p class="location-label"><span class="location-dot is-workshop"></span>Workshop</p>
            <p class="location-name">{{ site.data.event.workshop.venue_name }}</p>
            <p class="location-meta">{{ site.data.event.workshop.venue_address }}</p>
            <p class="location-meta">{{ site.data.event.workshop.venue_room }}</p>
          </div>
        </div>
        <p class="tiny muted">
          Map data: OpenStreetMap contributors.
        </p>
      </div>
    </div>
  </div>
</section>
