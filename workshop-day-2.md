---
title: "Workshop — Day 2 (Provisional)"
permalink: /workshop/day-2/
map_enabled: true
---

<section>
  <h1>Workshop — Day 2 (Provisional)</h1>
  <p class="muted">
    Venue: <strong>{{ site.data.event.workshop.venue_name }}</strong>, {{ site.data.event.workshop.venue_room }}, {{ site.data.event.workshop.venue_address }}.
  </p>
  <p class="schedule-note">
    Accepted contributions are now available:
    <a href="{{ '/workshop/accepted-contributions/' | relative_url }}">view the full list</a>.
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
                <strong>{{ item.title }}</strong>
                {% if item.talks %}
                  <ol class="contributed-talks">
                    {% for talk in item.talks %}
                      <li>
                        <span class="talk-title">{{ talk.title }}</span>
                        <span class="talk-authors">{{ talk.authors }}</span>
                      </li>
                    {% endfor %}
                  </ol>
                {% endif %}
              {% endif %}
            </td>
          </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</section>

{% include workshop-venue-map.html %}
