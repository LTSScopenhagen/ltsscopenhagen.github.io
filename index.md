---
title: "LTSS Copenhagen 2026"
map_enabled: true
---

<div
  class="hero"
  data-hero-images="{{ '/assets/img/copenhagen/cph-01.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-02.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-03.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-04.jpg' | relative_url }}, {{ '/assets/img/copenhagen/cph-05.jpg' | relative_url }}"
>
  <div class="hero-grid">
    <div class="hero-copy">
      <h1>
        <span class="hero-title-main">Learning Theory</span>
        <span class="hero-title-track">
          Summer School ({{ site.data.event.summer_school.dates_short }})
        </span>
        <span class="hero-title-track">
          Workshop ({{ site.data.event.workshop.dates_short }})
        </span>
      </h1>
      <div class="hero-meta">
        <div class="pill">{{ site.data.event.location }}</div>
      </div>
      <div class="actions">
        <a class="btn primary btn-schedule" href="{{ '/summer-school/' | relative_url }}">Summer school schedule</a>
        <a class="btn" href="{{ '/workshop/day-1/' | relative_url }}">Workshop schedule</a>
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
    <p class="muted">
      The <strong>summer school</strong> (June 22–25) is aimed at PhD students, masters students, early-career researchers, and industry professionals, who want to acquire a strong foundation in modern learning theory and responsible machine learning. Over four days, participants will study core themes, such as generalization, optimization for ML, online and reinforcement learning, and responsible ML topics including privacy and robustness.
    </p>
    <p class="muted">
      The <strong>workshop</strong> (June 26–27) brings together the learning theory community for scientific exchange and discussion through invited talks, contributed talks, and posters. Summer school participants are very welcome to join the workshop to interact with leading researchers and hear about cutting-edge research in learning theory.
    </p>
  </div>
</section>

<section>
  <h2>Invited Speakers</h2>
  {% assign summer_invited = site.data.summer_school_speakers %}
  {% assign workshop_invited = site.data.workshop_speakers %}
  <div class="card speaker-card">
    <p class="muted">
      More speakers will be announced soon.
    </p>
    <div class="speaker-line">
      <p class="speaker-line-title">Summer School</p>
      <div class="speaker-carousel-list" aria-label="Summer school invited speakers">
        {% for s in summer_invited %}
          <div class="speaker-tile">
            {% if s.url %}
              <a href="{{ s.url }}" target="_blank" rel="noopener noreferrer" class="speaker-photo-link" aria-label="Open profile of {{ s.name }}">
                <div class="speaker-tile-photo">
                  <img src="{{ s.photo | relative_url }}" alt="Portrait of {{ s.name }}" loading="lazy" width="160" height="160" />
                </div>
              </a>
            {% else %}
              <div class="speaker-tile-photo">
                <img src="{{ s.photo | relative_url }}" alt="Portrait of {{ s.name }}" loading="lazy" width="160" height="160" />
              </div>
            {% endif %}
            <p class="speaker-tile-name">{{ s.name }}</p>
          </div>
        {% endfor %}
      </div>
    </div>
    <div class="speaker-line">
      <p class="speaker-line-title">Workshop</p>
      <div class="speaker-carousel-list" aria-label="Workshop invited speakers">
        {% for s in workshop_invited %}
          <div class="speaker-tile">
            {% if s.url %}
              <a href="{{ s.url }}" target="_blank" rel="noopener noreferrer" class="speaker-photo-link" aria-label="Open profile of {{ s.name }}">
                <div class="speaker-tile-photo">
                  <img src="{{ s.photo | relative_url }}" alt="Portrait of {{ s.name }}" loading="lazy" width="160" height="160" />
                </div>
              </a>
            {% else %}
              <div class="speaker-tile-photo">
                <img src="{{ s.photo | relative_url }}" alt="Portrait of {{ s.name }}" loading="lazy" width="160" height="160" />
              </div>
            {% endif %}
            <p class="speaker-tile-name">{{ s.name }}</p>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<section>
  <h2>Organizers</h2>
  <div class="people-grid" style="margin-top: 12px;">
    {% for o in site.data.organizers %}
      <div class="person-card">
        <div class="avatar">
          <a href="{{ o.url }}" target="_blank" rel="noopener noreferrer" aria-label="Open profile of {{ o.name }}">
            <img src="{{ o.photo | relative_url }}" alt="Photo of {{ o.name }}" loading="lazy" width="220" height="220" />
          </a>
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
