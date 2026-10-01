# What changed vs. the original HTML site

## Links fixed
| Page | Fix |
|---|---|
| Services | "See ... work" buttons all went to Contact; now go to the matching portfolio (Business Growth -> Testimonials, it has no portfolio page) |
| Services | "Get a quote" buttons were dead (#); now open Book a Meeting (the FAQ says quotes come after a short call) |
| Team | Both founders' "Read the story" links pointed at the Team page itself; now open each founder's own page |
| Mesbah Hasin | "Meet Towsif Khan" card linked back to Mesbah's own page; now goes to Towsif Khan |
| Gallery | Lightbox "View case study" linked back to the Gallery itself; now opens the matching portfolio/page for each category |
| Book a Meeting | "Contact us" button linked back to the booking page itself; now goes to Contact |
| Book a Meeting | Instagram link was dead (#); now opens @shortswiftstudio (same as the other pages) |
| Book a Meeting | "Meet the team" link was dead (#); now goes to Team |
| Portfolio (brand) | Category cards + "Next portfolio" pointed to non-existent files (portfolio-xxx.html); now route correctly |
| Portfolio (web) | Category cards + "Next portfolio" pointed to non-existent files (portfolio-xxx.html); now route correctly |
| Portfolio (social) | Category cards + "Next portfolio" pointed to non-existent files (portfolio-xxx.html); now route correctly |
| Portfolio (video) | Category cards + "Next portfolio" pointed to non-existent files (portfolio-xxx.html); now route correctly |

## Other fixes
- **Footer links**: on most pages the footer links (Pages / Portfolio / Social) were all `#`; they now go to the right pages.
- **Responsive**: no horizontal overflow at 360px or 768px on any page. Touch devices now get 44px tap areas for small links/buttons (`src/styles/responsive-fixes.css`, only active on touch devices).
- **Fonts**: the Bricolage Grotesque `@font-face` was invalid in the old files (so some pages silently showed Inter headings). Fonts are now self-hosted in `/public/fonts` and every page uses the intended heading font.
- **Old URLs** such as `shortswift-home-v5.html` redirect to the new routes.

## Not carried over
- `shortswift-about-v2.html` (old version, nothing linked to it) and `scripts/*.py` (your local patch scripts).

## Still placeholders (unchanged from your originals)
`hello@yourdomain.com`, WhatsApp `+880 1XXX-XXXXXX`, "Project name N", "Client Name" quotes, Calendly link.
