# DAQForge

Next.js SSR website for DAQ product sales, with English and Chinese routes, product schema, FAQ schema, sitemap, robots, and `llms.txt`.

## Vercel deployment

1. Import this repository into Vercel.
2. Framework preset: `Next.js`.
3. Build command: `npm run build`.
4. Install command: `npm install`.
5. Add environment variable after the production domain is known:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The fallback URL is `https://daq-web.vercel.app`, but setting `NEXT_PUBLIC_SITE_URL` keeps canonical URLs, sitemap URLs, and structured data aligned with the deployed domain.

## Content refresh

Run this locally or from a scheduled job to create refresh notes:

```bash
npm run refresh:content
```

The API endpoint `/api/refresh-content` is wired in `vercel.json` as a daily Vercel Cron route. Leave `CONTENT_REFRESH_TOKEN` unset for Vercel Cron, or remove the cron entry and call the endpoint yourself with a bearer token.
