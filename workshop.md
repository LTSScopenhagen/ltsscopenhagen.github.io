---
title: "Workshop"
permalink: /workshop/
---

<section>
  <h1>Workshop schedule</h1>
  <p class="muted">
    Two-day research workshop with <strong>8 invited talks</strong> (45 min incl. Q&amp;A) and
    <strong>8 contributed talks</strong> (30 min incl. Q&amp;A), two coffee breaks per day, and one lunch.
    Day 1 includes a poster session; Day 2 includes a social event.
  </p>

  {% include workshop-tabs.html %}

  {% assign workshop_days = site.data.schedule.days | where_exp: "d", "d.track contains 'Workshop'" %}
  {% for day in workshop_days %}
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
