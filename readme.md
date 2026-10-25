
# TypeScript Project Setup Guide

A complete guide for setting up a local, project-level TypeScript environment without global dependencies.

---

## Step 1: Initialize Your Project & Install TypeScript Locally

Instead of installing TypeScript globally, install it locally as a development dependency (`-D`) so your project maintains isolated dependencies.

1. Open your terminal and create a new project directory:
```bash
   mkdir ts-learning-project
   cd ts-learning-project
```

2. Initialize a Node.js project:

```bash
npm init -y
```


3. Install TypeScript locally:
```bash
npm install -D typescript
```



---

## Step 2: Configure TypeScript (`tsconfig.json`)

Generate a default configuration file using the locally installed TypeScript compiler:

```bash
npx tsc --init

```

This creates a `tsconfig.json` file in your root directory. Key configuration options to customize:

* **`"target"`**: The JavaScript version your TypeScript compiles to (e.g., `"es2022"`).
* **`"rootDir"`**: The directory containing source `.ts` files (e.g., `"./src"`).
* **`"outDir"`**: The directory where compiled `.js` files are saved (e.g., `"./dist"`).
* **`"strict"`**: Enables strict type-checking options (recommended: `true`).

---

## Step 3: Running TypeScript Files

Standard Node.js executes JavaScript natively, not `.ts` files directly. You can run TypeScript files using two primary workflows:

### Method A: Direct Execution for Development (Recommended)

Use `tsx` to execute TypeScript files directly on the fly during development.

1. Install `tsx` locally:
```bash
npm install -D tsx

```


2. Create an `index.ts` file:
```typescript
const greeting: string = "Hello, TypeScript!";
console.log(greeting);
```


3. Run the TypeScript file directly:
```bash
npx tsx index.ts
```



*(Note: Modern versions of Node.js also support experimental type stripping via `node --experimental-strip-types index.ts`, but `tsx` is recommended for full feature support).*

### Method B: Build & Run Workflow (Production / Traditional)

This is the standard two-step compilation workflow (**Compile $\rightarrow$ Run**).

1. Compile TypeScript to JavaScript:
```bash
npx tsc
```


*This checks types according to `tsconfig.json` and generates output JavaScript files (e.g., inside `./dist/`).*
2. Run the generated JavaScript file with Node.js:
```bash
node dist/index.js
```



---

## Useful `package.json` Scripts

Add these convenience scripts to your `package.json`:

```json
"scripts": {
  "dev": "tsx index.ts",
  "build": "tsc",
  "start": "node dist/index.js"
}

```

Now you can run:

* `npm run dev` to execute your TypeScript code instantly during development.
* `npm run build` to compile code for production.
* `npm run start` to execute the production JavaScript build.
