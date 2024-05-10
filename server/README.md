
## Steps for Google login 

1. Create a Project
2. Open Google Developer Console
3. Create New Project
4. Enter a name for your project and click "Create"
5. Enable APIs and Services: 

- In the Google Developer Console, select your project 
- In the left sidebar, Click on "Dashboard"
- Click on "+ ENABLE APIS AND SERVICES" at the top of the page
- Search for "Google+ API" and select it
- Click the "Enable" button
- Create OAuth 2.0 Credentials

- In the Google Developer Console, go to "Credentials" in the left sidebar
- Click on "Create Credentials" and select "OAuth Client ID"
- Choose "web application" as the application type
- Sset the authorized JavaScript origins (e.g., http://localhost, http://localhost:3000 for development )
- Set the authorized redirect URIs (e.g., http://localhost:6000/auth/google/callback for development)
- Click "Create"

Save the generated Client ID and Client Server