# Descope TanStack Router Sample App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to the **Descope TanStack Router Sample App**, a demonstration of how to integrate Descope's authentication flows into a React application built with TanStack Router.

This project showcases seamless authentication integration with modern routing capabilities.

## Getting Started

You will need:

- **Node.js** (version 16 or higher)
- **pnpm** (recommended) or **npm**
- A [Descope account](https://www.descope.com/sign-up)

### Running the App

1. Clone this repository:

   ```bash
   git clone https://github.com/descope-sample-apps/tanstack-descope-sample-app.git
   cd tanstack-descope-sample-app
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # OR
   npm install
   ```

3. Set up your Descope project:

   - Go to the [Descope Console](https://app.descope.com/home)
   - Create a new project or use an existing one
   - Copy your **Project ID** from the project settings

4. Configure environment variables:

   - Create a `.env` file in the root directory
   - Add your Descope Project ID:
     ```env
     VITE_DESCOPE_PROJECT_ID=your-project-id-here
     ```

5. Start the development server:

   ```bash
   pnpm dev
   # OR
   npm run dev
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:

```bash
pnpm build
# OR
npm run build
```

To preview the production build:

```bash
pnpm serve
# OR
npm run serve
```

## Project Structure

```
src/
├── components/
│   ├── AuthSection.tsx      # Authentication UI component
│   ├── HomePage.tsx         # Main page with auth integration
│   ├── LoadingScreen.tsx    # Loading state component
│   └── SecureContent.tsx    # Protected content component
├── routes/
│   ├── __root.tsx          # Root route configuration
│   ├── index.tsx           # Home route
│   └── about.tsx           # About page route
├── main.tsx                # Application entry point
└── routeTree.gen.ts        # Generated route tree
```

## Authentication Flow

The app demonstrates several key authentication concepts:

### Session Management

- Uses the `useSession` hook for automatic session handling
- Provides loading states during authentication checks
- Handles session persistence across page reloads

### Protected Content

- Shows blurred content for unauthenticated users
- Reveals secure content only after successful authentication
- Demonstrates conditional rendering based on auth state

### Sign-in Flow

- Integrates Descope's hosted authentication flows
- Supports sign-up and sign-in with a single flow
- Handles authentication success and error states

## Customization

### Changing the Authentication Flow

To use a different authentication flow, modify the `flowId` in `AuthSection.tsx`:

```typescript
<Descope
  flowId="sign-up-or-in"
  onSuccess={onSignInSuccess}
  onError={(e) => console.log("Could not log in!", e)}
/>
```

### Adding More Protected Routes

To add additional protected routes, create new route files in `src/routes/` and use the `useSession` hook to check authentication status.

### Styling Customization

The app uses inline styles for demonstration purposes. In a production app, consider using:

- CSS modules
- Styled components
- Tailwind CSS
- Your preferred styling solution

## Learn More

To dive deeper, check out:

- [Descope Documentation](https://docs.descope.com/getting-started/react) – Complete guides and API references
- [TanStack Router Documentation](https://tanstack.com/router) – Modern routing for React
- [Descope Console](https://app.descope.com/home) – Manage your authentication flows

## License

This sample app is licensed under the [MIT License](https://opensource.org/licenses/MIT).
