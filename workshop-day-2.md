---
title: "Workshop — Day 2"
permalink: /workshop/day-2/
map_enabled: true
---

<section>
  <h1>Workshop — Day 2</h1>
  <p class="muted">
    Venue: <strong>{{ site.data.event.workshop.venue_name }}</strong>, {{ site.data.event.workshop.venue_room }}, {{ site.data.event.workshop.venue_address }}.
  </p>

  {% include workshop-tabs.html active="day2" %}

  {% assign day = site.data.schedule.days | where: "date", "2026-06-27" | first %}
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
            <td>
              {% if item.speaker %}
                <strong>{{ item.speaker }}</strong><br>
                <em>Title: {{ item.talk_title }}</em>
              {% else %}
                {{ item.title }}
              {% endif %}
            </td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</section>

{% include workshop-venue-map.html %}
