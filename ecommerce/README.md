# E-Commerce Music Shop

A React e-commerce application with Test-Driven Development (TDD) and CI/CD pipeline.

## 🔗 Links

**Live Application:** [https://ci-cd-react-app.vercel.app/]

**GitHub Repository:** [https://github.com/01dbryant/ci_cd_react_app.git]

## 📋 Project Requirements Met

### Test-Driven Development (TDD)
- ✅ **2 Unit Tests:** ProductCard and Cart components
- ✅ **1 Integration Test:** Cart updates when adding products
- ✅ Tests component rendering, state changes, and user interactions
- ✅ All tests are focused, independent, and deterministic

### Continuous Integration (CI)
- ✅ GitHub Actions workflow in `.github/workflows/main.yml`
- ✅ Automatically triggers on push to `main` branch
- ✅ Runs build and Jest tests
- ✅ Workflow fails if any tests fail (prevents deployment of faulty code)

### Continuous Deployment (CD)
- ✅ Automated deployment to Vercel
- ✅ Deploys only after CI tests pass successfully
- ✅ Configured in GitHub Actions workflow

## 🛠️ Tech Stack

- React 19 + Vite
- Jest + React Testing Library
- GitHub Actions (CI/CD)
- Vercel (Deployment)
- ESLint

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
ecommerce/
├── src/
│   ├── __tests__/          # Test files
│   ├── components/         # React components
│   ├── context/           # State management
│   └── App.jsx
└── .github/workflows/
    └── main.yml           # CI/CD pipeline
```

## ✨ Features

- Shopping cart with add/remove functionality
- Real-time cart count updates
- Product catalog display
- Responsive design
- Total price calculation
