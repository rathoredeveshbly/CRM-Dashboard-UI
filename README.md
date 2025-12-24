# 📊 CRM Dashboard UI (Next.js + Tailwind)

A modern **CRM Dashboard UI** built using **Next.js (App Router)** and **Tailwind CSS**, inspired by real-world SaaS dashboard designs.  
The project supports **multiple dashboard layouts** (`dashboard-2`, `dashboard-3`) with a shared, scalable architecture.

---

## 🚀 Tech Stack

- Next.js 14+ (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Next/Image (optimized images)

---

## 📦 Prerequisites

Make sure you have the following installed:

- Node.js **v18 or above**
- npm / yarn / pnpm

---

## ⚙️ Project Setup & Installation

```bash
# Clone the repository
git clone git@github.com:rathoredeveshbly/CRM-Dashboard-UI.git

# Navigate to project directory
cd CRM-Dashboard-UI

# Install dependencies
npm install

npm run dev
```
---
Open the app in your browser:

Home (Dashboard Selector)
http://localhost:3000

Dashboard 2
http://localhost:3000/dashboard/dashboard-2

Dashboard 3
http://localhost:3000/dashboard/dashboard-3
---
app/
 ├─ page.tsx                     # Home page (dashboard links)
 ├─ dashboard/
 │   ├─ dashboard-2/page.tsx     # Dashboard variant 2
 │   └─ dashboard-3/page.tsx     # Dashboard variant 3
 │
components/
 ├─ layout/
 │   ├─ DashboardLayout.tsx      # Sidebar + Topbar layout
 │   ├─ DashboardShell.tsx       # Left panel + main content wrapper
 │   ├─ Sidebar.tsx
 │   └─ Topbar.tsx
 │
 ├─ cards/                       # KPI & stat cards
 ├─ charts/                      # Orders / income charts
 ├─ tables/                      # Sales & invoice tables
 ├─ lists/                       # Activity & events lists
 │
data/
 └─ data.ts                      # Mocked dashboard data
---
## 🧠 Architectural Decisions
-App Router & Layouts

Used Next.js App Router for clean routing and layout composition

Sidebar and Topbar are handled at layout level for consistency

-DashboardShell Pattern

Introduced DashboardShell to support flexible left panels

Same layout works for both dashboard variants without duplication

-Component Reusability

Reusable components like:

KpiRow

SectionHeader

Tables and chart cards

Reduces repetition and improves maintainability

-Client vs Server Components

Server Components by default for performance

Client Components only where interactivity is required (tabs, buttons)

-Styling

Tailwind CSS utility-first approach

No global CSS overrides

Design closely follows the Figma-style layout
---
## ⚖️ Assumptions & Trade-offs
Assumptions

UI-focused project (no backend integration yet)

Data is static / mocked

Desktop-first layout

Trade-offs

No authentication or API layer

Charts are static

Minimal state management to keep complexity low
---
## 🚧 Possible Improvements

API integration

Authentication & role-based access

Responsive mobile layout

Dark mode

Real-time charts

Unit & integration tests