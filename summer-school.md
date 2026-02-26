---
title: "Summer School"
permalink: /summer-school/
---

<section>
  <h1>Summer School</h1>
  <p class="muted">
    Four days of lectures and exercise/discussion sessions.
  </p>

  <div class="card" style="margin-top: 12px;">
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

  {% assign school_days = site.data.schedule.days | where_exp: "d", "d.track contains 'Summer School'" %}
  {% for day in school_days %}
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
