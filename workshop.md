---
title: "Workshop"
permalink: /workshop/
map_enabled: true
---

<section>
  <h1>Workshop schedule</h1>
  <p class="muted">
    Two-day research workshop with <strong>8 invited talks</strong> (45 min incl. Q&amp;A) and
    <strong>8 contributed talks</strong> (30 min incl. Q&amp;A), two coffee breaks per day, and one lunch.
    Day 1 includes a poster session; Day 2 includes a social event.
  </p>
  <p class="muted">
    Venue: <strong>{{ site.data.event.workshop.venue_name }}</strong>, {{ site.data.event.workshop.venue_room }}, {{ site.data.event.workshop.venue_address }}.
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
