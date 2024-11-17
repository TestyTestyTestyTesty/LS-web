# Livespace Website

Livespace.io is a new website project, built as a monorepo containing multiple micro-apps for better modularity and scalability. This repository contains several packages, including the main application and supporting packages like the CMS and design system.

## Project Overview

This project is the new version of the Livespace.io website, designed to improve maintainability, scalability, and ease of development. It leverages Next.js for the front-end and utilizes a monorepo structure to organize multiple related apps into distinct packages.

### Monorepo Structure

The repository follows a monorepo architecture, containing multiple workspaces for different parts of the project. Each workspace is responsible for specific functionality or features within the project. Below is a breakdown of the key workspaces:

- **app**: The main Next.js application responsible for rendering the Livespace.io website.
- **cms**: A CMS setup to manage the content of the Livespace website.
- **docs**: Contains the Storybook configuration for documenting and testing UI components.
- **design-system**: A design system workspace that houses reusable UI components shared across the project.
- **proof-of-concepts/**: Contains experimental or demo applications for prototyping new features.

### Workspaces and Packages

Each package or workspace within the monorepo serves a specific purpose:

- `app`: The main application, built with Next.js.
- `cms`: Manages content for the website.
- `docs`: Configured with Storybook for documenting and showcasing components.
- `design-system`: Reusable UI components shared between different parts of the app.
- `proof-of-concepts/*`: Prototypes and experimental ideas or implementations.

### Project Architecture (main app)

The main application is organized into the following directory structure:

```md
app/
├── public/ # Static files
├── src/
│ ├── app/ # Main app logic (Next.js Pages, Layouts, etc.)
│ ├── lib/ # Utility functions and helper modules
│ ├── modules/ # Feature-specific modules
│ ├── services/ # API calls and external services
├── package.json # Package configuration for the app workspace
└── tsconfig.json # TypeScript configuration for the app workspace
```

- **`app/`**: Contains the core application logic, including Next.js pages, layouts, and global settings.
- **`lib/`**: General utility functions and helpers.
- **`modules/`**: Feature-specific modules or sections of the app, such as product pages, user management, etc.
- **`services/`**: External service integrations, such as API calls or third-party service wrappers.

### Good code practices

- Wherever it is possible use rem units
- Storybook and next component library must have same structure. Stories directory should reflect next.js structure of components
- Storybook should contain all resuable components so you can preview how certain sections works and looks.
- If any reusable component is missing from Storybook report it to any person that is mentioned in `package.json` author section
- All components should be created with with `export default function (){}`
- All components should export through `index.ts` and import through `@components` alias
- Exports inside `index.ts` should use relative imports, otherwise components throw errors in Storybook
- If the part of the interface definition is reused across different component put this reusable part into `app/src/types` e.g. generic Image interface is a good use case for it.
- Project uses MUI as component library. Project uses custom color palettes which are prefixed with `ls`(abbreviation from `livespace`) e.g. lsPrimary, lsSecondary
- For custom components styling create `componentName.styles.ts` file where you put all styled components defintion and export them. If component has e.g. 6 custom styled components put all of them in `componentName.styles.ts`. Except situation where certain part looks like it could be extracted to design system and reused, then extract this part and leave rest

## Getting Started

### Prerequisites

- **Node.js**: Ensure that Node.js (v20.16.0) is installed on your system.
- **Yarn**: This project uses Yarn v4.4.0 as the package manager. Make sure Yarn is installed.

### Installation

1. Clone the repository:

   ```bash
   git clone git@bitbucket.org:livespace/website.git
   cd website
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

### Running the Project

To start the main application locally in development mode:

1. Run the following command:

   ```bash
   yarn app:dev
   ```

2. Open your browser and go to `http://localhost:3000` to view the Livespace website locally.

### Committing changes

To commit run:

```bash
yarn commit
```

This opens the commitizen CLI for committing changes following conventional changelog conventions.

### Documentation

To view the design system in Storybook:

1. Run the following command:

   ```bash
   yarn docs:dev
   ```

2. Open your browser and go to `http://localhost:6006`.

To build the static Storybook site run:

```bash
yarn docs:build
```

### Linting and Formatting

Linting and formatting are automatically handled by ESLint and Prettier for JavaScript, TypeScript, CSS, and SCSS files. To manually lint and format your files, run:

```bash
yarn lint
```

### Building project

To build the production version of the main application run:

```bash
yarn app:build
```

To start the production build of the main application run:

```bash
yarn app:start
```

## License

This project is **UNLICENSED**.
