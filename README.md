# LTSS Copenhagen 2026 website

Static website for the **Learning Theory Summer School & Workshop** in Copenhagen, **June 22–27, 2026**.

The summer school (June 22–25) is aimed at PhD students and early-career researchers, with a focused introduction to modern learning theory and trustworthy machine learning. Topics include generalization, optimization for ML, online and reinforcement learning, and responsible ML themes such as privacy and robustness.

The workshop (June 26–27) complements the school with invited and contributed talks, a poster session, and a social event, creating space for both in-depth technical discussion and new collaborations.

## Edit content

Most content lives in:

- `index.md` (main page copy)
- `_data/event.yml` (title, dates, contact)
- `_data/organizers.yml` (organizer list + photos/credits)
- `_data/schedule.yml` (programme/schedule)

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open the printed local URL (usually `http://127.0.0.1:4000`).

## GitHub Pages

This repo is a standard Jekyll site (supported by GitHub Pages).

If you publish it as a *project* site (not `username.github.io`), set `baseurl` in `_config.yml` to the repo name (e.g. `/ltss`).
