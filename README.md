# 🔀 Merge Three Arrays (RSA-Free)

This TypeScript project merges three arrays (two sorted in ascending order and one in descending order) into a single ascending array without using any sort function. Includes unit tests using Jest.

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SStepz/TSMergeSort.git
cd TSMergeSort
```

### 2. Install Dependencies

```bash
npm install typescript jest ts-jest @types/jest --save-dev
```

- `typescript`: TypeScript compiler
- `jest`: Testing framework
- `ts-jest`: TypeScript preprocessor for Jest
- `@types/jest`: TypeScript definitions for Jest

### 3. Initialize TypeScript and Jest Config

```bash
npx tsc --init
npx ts-jest config:init
```

This creates:

- `tsconfig.json`: TypeScript config
- `jest.config.js`: Jest config for TS

### 4. Add Scripts to `package.json`

Edit the `"scripts"` section:

```json
"scripts": {
  "build": "tsc",
  "test": "jest"
}
```

### 5. Run the Code

If you want to manually test code:

- Create `src/index.ts` and write sample function calls.
- Install `ts-node` (if not installed):

```bash
npm install ts-node --save-dev
```

- Run:

```bash
npx ts-node src/index.ts
```

### 6. Run Unit Tests

```bash
npm test
```

Jest will automatically detect files in `test` or ending in `.test.ts` and execute them.
