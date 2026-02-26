---
title: "Summer School — Day 4"
permalink: /summer-school/day-4/
map_enabled: true
---

<section>
  <h1>Summer School — Day 4</h1>
  <p class="muted">
    Venue: <strong>{{ site.data.event.summer_school.venue_name }}</strong>, {{ site.data.event.summer_school.venue_room }}, {{ site.data.event.summer_school.venue_address }}.
  </p>

  {% include summer-school-tabs.html active="day4" %}

  {% assign day = site.data.schedule.days | where: "date", "2026-06-25" | first %}
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

{% include summer-venue-map.html %}
