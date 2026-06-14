# APILearn - Educational API Testing Platform

APILearn is a specialized API testing platform designed for IT students and self-learners, focusing on the educational aspect of API requests and responses. It uses a **Neobrutalist** design aesthetic to provide a high-energy, engaging learning experience.

## Project Overview

- **Purpose**: To teach beginners how APIs work by providing plain-language explanations of status codes and request/response patterns.
- **Tech Stack**: 
  - **Framework**: React 19 (Vite)
  - **Styling**: Tailwind CSS 4
  - **Icons**: Lucide React
  - **Typography**: Hanken Grotesk (General), JetBrains Mono (Code)
- **Design System**: Neobrutalism (3px black borders, 4px hard shadows, high contrast, 90-degree angles).
- **Target Audience**: IT Students and Beginner Developers.
- **Language**: UI and educational content are in **Indonesian**.

## Architecture

The project follows a standard React directory structure:

- `src/components/`: Modular UI components.
  - `RequestPanel/`: Components for building API requests (URL, Method, Headers, Body).
  - `ResponsePanel/`: Components for viewing API responses (Status, JSON, Explanations).
  - `GuidedScenario/`: Components for interactive learning paths.
  - `Tooltip/`: Educational tooltips for technical concepts.
- `src/pages/`: Top-level page components (`Home.jsx` for the tester, `GuidedScenario.jsx` for learning paths).
- `src/hooks/`: Custom hooks for managing API requests and scenario state.
- `src/data/`: Static datasets for status codes, scenarios, and educational tips.
- `src/index.css`: Tailwind configuration and custom Neobrutalist utility classes.

## Building and Running

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Linting** | `npm run lint` |
| **Preview** | `npm run preview` |

## Development Conventions

### Styling (Neobrutalism)
Always use the custom utility classes defined in `src/index.css` for consistent styling:
- **Borders**: `neo-border` (3px), `neo-border-sm` (2px).
- **Shadows**: `neo-shadow` (6px), `neo-shadow-sm` (3px).
- **Interactions**: Use `neo-active` or `neo-active-lg` for button press effects (simulates physical push).
- **Corners**: Strictly **0px** radius (sharp corners) for all structural elements.

### Color Palette
- **Primary**: `#ffe600` (Yellow) - Main actions.
- **Secondary**: `#8f4fed` (Purple) - Secondary features.
- **Success**: `#46eb74` (Green).
- **Error**: `#ff6b6b` (Coral).
- **Background**: `#f9f9f9` (Off-white).

### UI Labels
- All labels, placeholders, and educational content must be in **Indonesian**.
- Use uppercase for button labels and section headers to match the aesthetic.

### Best Practices
- **Components**: Prefer functional components and hooks.
- **Responsiveness**: Ensure layouts are responsive (split-panel on desktop, stacked on mobile).
- **Performance**: Use Vite's HMR for fast development cycles.

## Key Files
- `apilearn_project_prd.md`: Original Project Requirements Document.
- `DESIGN.md`: Detailed Design System documentation.
- `src/index.css`: Core styling and Neobrutalist theme definitions.
- `src/pages/Home.jsx`: The main API tester implementation.
