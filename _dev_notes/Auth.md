# Auth

https://zoom.us/web/sso/login?en=signin&continue=https%3A%2F%2Fzmail.zoom.us%2Fmail%2Fhome%2FINBOX

[New service integrate login authentication](https://zoomvideo.atlassian.net/wiki/spaces/ZW/pages/2971539884/New+service+integrate+login+authentication)

[Zoom Access Token](https://zoomvideo.atlassian.net/wiki/spaces/SDKPlatform/pages/2359099527/ZAK+Token)

- NAK (Network Authentication Key):
  Purpose: Web session authentication
  Expiration: 1 hour
  Used for: Web UI operations

- EAK (Email Authentication Key):
  Purpose: Email service authentication
  Expiration: 2 hours
  Used for: All email operations (ZMAIL APIs)

- ZPNS Token:
  Purpose: Push notification service
  Used for: Real-time notifications

- Scheduler Token:
  Purpose: Calendar/scheduling operations
  Used for: Meeting/calendar APIs

// User opens app, makes first API call
API.mails.listThread() // Triggers configureToken
→ ZMail token missing
→ await API.initAPI() // Initialize all tokens
→ Token ready
→ Request proceeds with authentication
