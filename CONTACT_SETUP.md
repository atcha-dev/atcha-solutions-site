# Contact Setup

This project now matches the same logic as `/home/atchaw/dev/awinextgen/web`:

- frontend form on `/contact`
- Cloudflare Turnstile in the browser
- submission sent directly to a worker endpoint
- worker handles delivery

## Local env

`.env.local` has already been created with the minimal setup:

```bash
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAACiiFjP86L3l0bPA
NEXT_PUBLIC_CONTACT_TO=atchasolutions@pm.me
NEXT_PUBLIC_CONTACT_ENDPOINT=PASTE_YOUR_WORKER_ENDPOINT_HERE
```

You only need to replace:

- `PASTE_YOUR_WORKER_ENDPOINT_HERE`

with the URL of the worker you are going to create.

## Notes

- `NEXT_PUBLIC_CONTACT_TO` already points to `atchasolutions@pm.me`
- the worker should receive the form payload and handle the email sending
- no Brevo API key is needed in this Next project
- no Turnstile secret is needed in this Next project

## Expected flow

1. visitor fills `/contact`
2. Turnstile creates the verification token in the browser
3. browser posts to `NEXT_PUBLIC_CONTACT_ENDPOINT`
4. worker validates Turnstile and sends the email
5. message arrives at `atchasolutions@pm.me`
