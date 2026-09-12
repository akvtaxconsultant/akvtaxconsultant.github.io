# AKV Tax Consultant — Website

A free, static website for AKV Tax Consultant (serving Delhi, Haryana, Uttar Pradesh, Rajasthan, Gujarat and Madhya Pradesh), built with plain HTML/CSS/JS and hosted free on GitHub Pages.

## Structure

- `index.html` — Home page
- `services.html` — Services overview
- `services/*.html` — One dedicated page per service (Income Tax, GST, TDS, Accounting, Business Advisory) for better search ranking
- `about.html`, `contact.html`
- `css/style.css`, `js/main.js`
- `images/favicon.svg` — placeholder logo mark (replace with the real AKV logo — see below)
- `robots.txt`, `sitemap.xml` — for search engine crawling
- `404.html` — custom not-found page

## Replacing the logo

Right now the header/favicon use a text-based "AKV" placeholder. To use the real logo:

1. Save the logo image as `images/logo.png` (and a square version as `images/favicon.png` for the browser tab icon, ideally 512x512).
2. In each HTML file's `<head>`, change:
   ```html
   <link rel="icon" type="image/svg+xml" href="images/favicon.svg">
   ```
   to:
   ```html
   <link rel="icon" type="image/png" href="images/favicon.png">
   ```
3. In the header, replace:
   ```html
   <span class="brand-mark">AKV</span>
   ```
   with:
   ```html
   <img src="images/logo.png" alt="AKV Tax Consultant" style="height:40px;">
   ```
   (adjust the relative path to `../images/logo.png` on pages inside `services/`)

## Editing content

Every page is plain HTML — open any `.html` file in a text editor and edit the text directly. There's no build step.

## Local preview

Just double-click any `.html` file to open it in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment (GitHub Pages — free)

This repo is set up to deploy automatically to GitHub Pages from the `main` branch. Once pushed, the site is live at:

`https://akvtaxconsultant.github.io/`

To update the live site after making changes:

```bash
git add .
git commit -m "Update site content"
git push
```

Pages usually updates within a minute or two of a push.

## Adding a custom domain later (optional, paid)

If you later want a custom domain (e.g. `akvtaxconsultant.com`) instead of the free `github.io` subdomain:

1. Buy the domain from any registrar (GoDaddy, Namecheap, etc.)
2. In the repo's GitHub Pages settings, add the custom domain
3. Point the domain's DNS to GitHub Pages per [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
4. Update `sitemap.xml`, `robots.txt`, and the `canonical`/`og:url` tags in every HTML file to the new domain

## SEO notes

- Each service page has a unique title, meta description, and FAQ schema (JSON-LD) targeting Delhi, Haryana, Uttar Pradesh, Rajasthan, Gujarat and Madhya Pradesh local/regional search.
- Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console) after the site goes live, and verify ownership, to get indexed faster.
- Keep NAP (Name, Address, Phone) consistent across this site, Google Business Profile, and Instagram.
