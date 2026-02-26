---
title: "LTSS Copenhagen 2026"
---

<div class="hero">
  <h1>Learning Theory Summer School & Workshop</h1>
  <div class="hero-meta">
    <div class="pill"><strong>{{ site.data.event.dates_full }}</strong></div>
    <div class="pill">{{ site.data.event.location }}</div>
    <div class="pill"><span class="muted">Summer school:</span> {{ site.data.event.summer_school.dates }}</div>
    <div class="pill"><span class="muted">Workshop:</span> {{ site.data.event.workshop.dates }}</div>
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
      <p class="muted tiny">
        This website is intentionally minimal. Most updates are made by editing `index.md`, `_data/event.yml`, and `_data/schedule.yml`.
      </p>
    </div>
    <div class="card">
      <p><strong>Organizers</strong></p>
      <p class="muted">{{ site.data.event.organizers | join: ", " }}</p>
      <p class="tiny muted">More details (speakers, venue, registration) will be posted here.</p>
    </div>
  </div>
</section>

<section id="programme">
  <h2>Programme</h2>
  <p class="muted">Schedule below is a placeholder and will be updated.</p>

  {% for day in site.data.schedule.days %}
    <div class="schedule-day" style="margin-top: 12px;">
      <div class="schedule-head">
        <div><strong>{{ day.label }}</strong></div>
        <div class="track">{{ day.track }}</div>
      </div>
      <table class="schedule-table" aria-label="Schedule for {{ day.label }}">
        <tbody>
          {% for item in day.items %}
            <tr>
              <td class="time">{{ item.time }}</td>
              <td>{{ item.title }}</td>
            </tr>
          {% endfor %}
        </tbody>
      </table>
    </div>
  {% endfor %}
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
    <ul>
      {% for o in site.data.event.organizers %}
        <li>{{ o }}</li>
      {% endfor %}
    </ul>
  </div>
</section>

<section id="contact">
  <h2>Contact</h2>
  <div class="card">
    <p class="muted">Email: <strong>{{ site.data.event.contact_email }}</strong></p>
    <p class="muted tiny">If you want a submissions page, speaker list, or separate workshop CFP page, we can add it.</p>
  </div>
</section>

