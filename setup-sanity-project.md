# Sanity Project Setup Instructions

## Current Issue
You're getting a "Page Not Found" error when trying to access the Sanity Studio because the project ID `rwpb957l` either doesn't exist or you don't have access to it.

## Solution: Create a New Sanity Project

### Step 1: Visit Sanity.io Management
1. Go to https://sanity.io/manage
2. Log in with your Google account
3. Click "Create new project"

### Step 2: Create Project
1. **Project name**: "Newport Pitstop CMS"
2. **Use schema**: Choose "Clean project with no predefined schemas"
3. **Dataset**: "production" 
4. Click "Create project"

### Step 3: Get Your Project ID
After creating the project, you'll see a project ID (looks like `abc123xyz`). Copy this ID.

### Step 4: Update Configuration Files
Replace the project ID in these files:

**1. Update `.env.local`:**
```
NEXT_PUBLIC_SANITY_PROJECT_ID="YOUR_NEW_PROJECT_ID"
```

**2. Update `sanity.json`:**
```json
{
  "api": {
    "projectId": "YOUR_NEW_PROJECT_ID",
    "dataset": "production"
  }
}
```

### Step 5: Restart Development Server
```bash
npm run dev
```

### Step 6: Access Studio
Visit: http://localhost:3001/studio

## Alternative: Use Existing Project
If you have an existing Sanity project:

1. Go to https://sanity.io/manage
2. Find your project
3. Copy the Project ID
4. Update the configuration files as shown above

## Need Help?
If you continue having issues:
1. Make sure you're logged into the correct Google account
2. Check that you have admin access to the Sanity project
3. Verify the project ID is correct
4. Clear your browser cache and try again

## Next Steps After Login
Once you can access the studio:
1. The Newport Pitstop schemas are already configured
2. Start creating content for services, packages, and specials
3. Use the CMS components we created to display the content

Your Sanity schemas include:
- Services
- Service Packages  
- Special Offers
- Testimonials
- Warranties
- Business Information