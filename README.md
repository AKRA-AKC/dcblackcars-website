# DC Black Cars — dcblackcars.com
## Deployment Guide: GitHub + Cloudflare Pages (FREE)

---

## What's In This Folder

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `airport-transportation.html` | Airport car service page |
| `corporate-car-service.html` | Corporate car service page |
| `private-aviation.html` | Private aviation / FBO page |
| `long-distance.html` | DC to NYC long distance page |
| `wine-tours.html` | Virginia wine tours page |
| `fleet.html` | Fleet page |
| `service-areas.html` | Service areas page |
| `reservations.html` | Online booking page (Limo Anywhere) |
| `css/style.css` | All styles |
| `js/main.js` | Navigation & animations |
| `sitemap.xml` | Google sitemap |
| `robots.txt` | Search engine instructions |
| `_headers` | Cloudflare security headers |
| `_redirects` | Cloudflare URL redirects |

---

## Step 1: Create GitHub Account
1. Go to **github.com**
2. Sign up for a free account
3. Verify your email

## Step 2: Create a New Repository
1. Click the **+** button → **New repository**
2. Name it: `dcblackcars`
3. Set to **Public**
4. Click **Create repository**

## Step 3: Upload All Files
1. On the repository page, click **uploading an existing file**
2. Drag and drop ALL files from this folder (including the `css` and `js` folders)
3. Click **Commit changes**

## Step 4: Connect to Cloudflare Pages
1. Go to **cloudflare.com** — create a free account
2. In the dashboard, go to **Workers & Pages** → **Pages**
3. Click **Connect to Git**
4. Select your GitHub account and the `dcblackcars` repository
5. Click **Begin setup**

## Step 5: Configure Build Settings
- **Project name:** dcblackcars
- **Production branch:** main
- **Build command:** *(leave blank — this is pure HTML)*
- **Build output directory:** `/` (root)
- Click **Save and Deploy**

## Step 6: Connect Your Domain (dcblackcars.com)
1. In Cloudflare Pages → your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `dcblackcars.com`
4. Cloudflare will walk you through DNS setup
5. If domain is registered at GoDaddy:
   - Change GoDaddy nameservers to Cloudflare's nameservers (Cloudflare provides these)
   - OR add a CNAME record pointing to your Cloudflare Pages URL

## Step 7: Submit to Google Search Console
1. Go to **search.google.com/search-console**
2. Add property: `https://www.dcblackcars.com`
3. Verify via Cloudflare DNS TXT record
4. Submit sitemap: `https://www.dcblackcars.com/sitemap.xml`

## Step 8: Set Up Google Business Profile
1. Go to **business.google.com**
2. Search for "DC ExecLimo" or "DC Black Cars"
3. Claim or create the listing
4. Add: address, phone (202-972-0003), website (dcblackcars.com)
5. Add all services, hours (24/7), photos
6. THIS IS FREE and drives more calls than almost anything else

---

## Future Updates
To update the site:
1. Edit the file on your computer
2. Go to GitHub → find the file → click the pencil icon → paste updated content → commit
3. Cloudflare automatically redeploys in ~60 seconds

---

## Total Monthly Cost: $0
- GitHub: Free
- Cloudflare Pages: Free
- Domain renewal (dcblackcars.com): ~$15/year at GoDaddy

---

*Built for DC ExecLimo / DC Black Cars by Adeel Khalid*
*Phone: 202-972-0003 | Email: info@dcexeclimo.com*
