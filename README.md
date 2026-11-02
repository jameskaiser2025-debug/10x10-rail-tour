# Kaiser Solzie — The 10 by 10 Rail Tour

A lightweight, responsive static website for the Kaiser Solzie 10×10 Rail Tour concept.

## Files
- `index.html` — page structure and tour copy
- `styles.css` — responsive visual system
- `script.js` — mobile navigation and current footer year

## Local preview
Open `index.html` in a browser, or run a simple static server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Before accepting bookings or publishing
- Confirm the year and final November route dates.
- Confirm actual rail itinerary, local transit, arrival windows, and accessible meeting arrangements.
- Confirm final ticket price, kit contents, audio delivery, cancellation/refund terms, and performance conditions.
- Add a real booking/contact destination and payment provider. No payment is collected by this static site.
- Replace the temporary Replit-hosted artwork URL with an image asset stored in this repository once the original image file is available.
- Verify permissions and any required approvals before using Amtrak or Vans Warped Tour names/logos in a promotional or partnership context. This independent project is not affiliated with either organization.
- Configure hosting and DNS only after explicit approval.

## Deployment
This is a static site and can be deployed to Cloudflare Pages or another static host. Suggested build settings: no build command; output directory: repository root. Do not change domain DNS until the hosting project and domain configuration have been reviewed and approved.