# Netlify Forms Testing Guide

## Issues Fixed

1. **Added `data-netlify="true"` to the actual form element** - This is required for Netlify Forms to work
2. **Added `method="POST"` to the form** - Explicitly set the form method
3. **Improved error handling** - Better logging and error messages
4. **Updated `__forms.html`** - Static form detection file now matches actual form fields

## Testing Steps

### 1. Local Testing

```bash
# Start dev server
npm run dev

# In browser, open:
# http://localhost:3000/contact

# Open browser console (F12)
# Fill out and submit the form
# Check console for any errors
```

### 2. Test Script

```bash
# Make sure dev server is running on port 3000
node scripts/test-netlify-form.js

# Or test production URL
node scripts/test-netlify-form.js https://your-site.netlify.app
```

### 3. Netlify Dashboard

1. Go to Netlify Dashboard → Your Site → Forms
2. Check if "contact" form appears in the list
3. Submit a test form
4. Check if submission appears in the Forms section

## Common Issues

### Form not detected by Netlify
- Ensure `data-netlify="true"` is on the form element
- Check that `__forms.html` exists in `public/` directory
- Verify form fields match between hidden form and actual form

### Form submission fails
- Check browser console for errors
- Verify Content-Type header is `application/x-www-form-urlencoded`
- Check Netlify Functions logs in dashboard
- Ensure `form-name` field matches the form name

### Form submits but no data
- Check Netlify Forms settings
- Verify field names match exactly
- Check spam filter settings

## Form Fields

The contact form uses these fields:
- `form-name`: "contact" (hidden, required)
- `bot-field`: honeypot field (hidden)
- `name`: text input
- `email`: email input
- `phone`: tel input (optional)
- `subject`: select dropdown
- `message`: textarea
