# LTSS Copenhagen 2026 website

Static website for the **Learning Theory Summer School & Workshop** in Copenhagen, **June 22–27, 2026**.

## Edit content

Most content lives in:

- `index.md` (main page copy)
- `_data/event.yml` (title, dates, organizers, contact)
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

