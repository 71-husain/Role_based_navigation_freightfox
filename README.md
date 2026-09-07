# Role-Based Navigation System

A dynamic sidebar and routing system where visibility and access are entirely controlled by a permissions API response — nothing is hardcoded.

## Problem Statement
Create a dynamic sidebar controlled by permissions, where:
- The sidebar generates itself dynamically from an API response
- Unauthorized modules are hidden
- Routes are protected at the router level, not just hidden in the UI
- Buttons/actions are gated by specific permissions (e.g. VIEW vs CREATE)

## Approach

- **Single source of truth**: `routes/routeConfig.js` defines every page (path, required module, required permission). The Sidebar, route guards, and buttons all read from this same config plus the logged-in user's live permissions — no duplicated access-control logic anywhere in the app.
- **Auth flow**: `auth/AuthContext.jsx` simulates fetching a logged-in user's permissions from an API (`api/mockPermissions.js`), mirroring the exact JSON shape given in the assignment brief (`{ modules: [{ name, permission: [] }] }`).
- **Route protection, not just UI hiding**: `routes/ProtectedRoute.jsx` guards every route at the router level using React Router's `<Route>`. Even if a user manually types a restricted URL (e.g. `/billing` without access), they're redirected to `/unauthorized` — sidebar hiding is a UX nicety, the route guard is the actual security boundary.
- **Reusable permission check**: `utils/permissions.js` exports one pure function, `hasPermission(modules, moduleName, action)`, used identically by the Sidebar, ProtectedRoute, and permission-gated buttons (e.g. the "Create Order" button, which only appears for users with `CREATE` permission on Orders).

## Tech Stack
- React + Vite
- React Router (routing + guards)
- Context API (auth/permission state — no external state library needed at this scope)
- Tailwind CSS (styling)

## Folder Structure

src/
├── api/mockPermissions.js # Simulated API response for two sample users
├── auth/AuthContext.jsx # Auth state, login/logout, permission data
├── routes/
│ ├── routeConfig.js # Single source of truth: path, module, permission
│ └── ProtectedRoute.jsx # Route guard component
├── components/Sidebar/Sidebar.jsx
├── pages/
│ ├── Orders/Orders.jsx # Includes permission-gated Create button
│ ├── Billing/Billing.jsx
│ ├── Login.jsx
│ └── Unauthorized.jsx
├── utils/permissions.js # hasPermission() — pure function, reused everywhere
└── App.jsx


## How to Run
```bash
npm install
npm run dev
```

## Demo
Two sample users are pre-configured in `api/mockPermissions.js`:
- **User A** — Orders (VIEW, CREATE) + Billing (VIEW) → sees both sidebar links and the Create Order button
- **User B** — Orders (VIEW, CREATE) only → Billing link is hidden, and directly visiting `/billing` redirects to `/unauthorized`

Log in as either user from the home screen, use the sidebar to navigate, and use Logout to sign out (redirects to `/unauthorized` if you were on a protected page, with a link back to Login).
