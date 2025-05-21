
# React Google Auth Template

A simple starter template for implementing Google OAuth 2.0 authentication in a React + Vite + Tailwind v4 project.

## Technologies

- **React 18** with **TypeScript**  
- **Vite** for fast build & HMR  
- **Tailwind CSS v4** (zero-config)  
- **@react-oauth/google** for Google sign-in & sign-out

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/guigx7/react-google-auth-template.git
   cd react-google-auth-template
   ```
2. **Install dependencies**  
   ```bash
   npm install
   or
   yarn
   ```
3. **Set up environment variable**  
   Create a file named `.env.local` in the project root
   
   Add your Google Client ID:
   ```bash
   VITE_GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com  
   ```
   If you don’t have a Google Client ID yet:
	- Go to the Google Cloud Console.
	- Create a new project or select an existing one.
	- Navigate to APIs & Services > Credentials.
	- Click Create credentials > OAuth client ID.
	- Choose Web application as the application type.
	
	Under Authorized JavaScript origins, add:
	```bash
   http://localhost:5173 
   ```
   Under Authorized redirect URIs, add:
	```bash
   http://localhost:5173 
   ```
	-  Click **Create** and copy the **Client ID** shown.
	- Paste this ID into your `.env.local` as `VITE_GOOGLE_CLIENT_ID`.
4. **Start the development server**  
   ```bash
   npm run dev
   or
   yarn dev
   ```
5. **Open in browser**  
Visit [http://localhost:5173](http://localhost:5173), click “Sign in with Google” and see the authenticated user data displayed.

## License
This project is licensed under the MIT License. See [`LICENSE.txt`](https://github.com/guigx7/react-google-auth-template/blob/main/LICENSE) for more information.

## Contact
LinkedIn: https://www.linkedin.com/in/guigx7/

Email: guigo211103@gmail.com

  
