---
title: "Workshop — Day 1"
permalink: /workshop/day-1/
map_enabled: true
---

<section>
  <h1>Workshop — Day 1</h1>
  <p class="muted">
    <!-- Invited talks are 45 min (incl. Q&amp;A). Contributed talks are 30 min (incl. Q&amp;A). -->
  </p>

  {% include workshop-tabs.html active="day1" %}

  {% assign day = site.data.schedule.days | where: "date", "2026-06-26" | first %}
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
</section>

{% include workshop-venue-map.html %}
