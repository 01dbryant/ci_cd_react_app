# E-Commerce React App with CI/CD Pipeline

A modern e-commerce application built with React, featuring Test-Driven Development (TDD) and a complete CI/CD pipeline with GitHub Actions and Vercel deployment.

## 🎯 Project Overview

This project demonstrates professional software development practices including:
- ✅ **Test-Driven Development (TDD)** with comprehensive test coverage
- ✅ **Continuous Integration (CI)** with automated testing and building
- ✅ **Continuous Deployment (CD)** with automatic deployment to Vercel
- ✅ **React 19** with modern hooks and context
- ✅ **Vite** for fast development and optimized builds
- ✅ **ESLint** for code quality

## 🏗️ Tech Stack

- **Frontend**: React 19, Vite
- **Testing**: Jest, React Testing Library
- **Linting**: ESLint
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Transpiler**: Babel

## 📁 Project Structure

```
ci_cd_react_app/
├── .github/workflows/
│   └── main.yml                    # CI/CD workflow
├── ecommerce/
│   ├── src/
│   │   ├── __tests__/              # Test files
│   │   ├── components/             # React components
│   │   ├── context/                # State management
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── babel.config.js
│   ├── jest.config.js
│   └── package.json
├── CI_CD_SETUP.md                  # Detailed setup guide
├── DEPLOYMENT_CHECKLIST.md         # Pre-deployment checklist
├── PIPELINE_DIAGRAM.md             # Visual workflow
├── PROJECT_SUMMARY.md              # Complete overview
└── QUICK_START.md                  # Quick reference
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd ecommerce
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Visit: http://localhost:5173

### 3. Run Tests
```bash
npm test
```

### 4. Build for Production
```bash
npm run build
```

## 🧪 Testing

### Test Coverage

#### Unit Tests (2 components)
1. **ProductCard Component** - Tests rendering, state, and user interactions
2. **Cart Component** - Tests rendering and initial state

#### Integration Test
- **App Integration** - Tests cart updates when adding products

### Running Tests

```bash
npm test                    # Run all tests once
npm run test:watch         # Run tests in watch mode
npm run test:ci            # Run with coverage (CI mode)
```

## 🔄 CI/CD Pipeline

### Continuous Integration (CI)
Automatically runs on every push and pull request to `main`:
1. ✅ Code checkout
2. ✅ Dependency installation
3. ✅ ESLint code quality checks
4. ✅ Project build
5. ✅ Jest test execution with coverage
6. ✅ Artifact uploads (coverage & build)

### Continuous Deployment (CD)
Automatically deploys after CI passes on `main` branch:
1. ✅ Vercel production deployment
2. ✅ Only runs after successful tests
3. ✅ Pull requests do NOT deploy

**Pipeline guarantees:** No code with failing tests can be deployed! 🛡️

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [CI_CD_SETUP.md](CI_CD_SETUP.md) | Complete setup instructions for GitHub Actions and Vercel |
| [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) | Step-by-step checklist before deployment |
| [PIPELINE_DIAGRAM.md](PIPELINE_DIAGRAM.md) | Visual diagrams of CI/CD workflow |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Comprehensive project overview |
| [QUICK_START.md](QUICK_START.md) | Quick reference guide |

## 🎯 Features

### E-Commerce Functionality
- ✅ Product display with name and price
- ✅ Add products to cart
- ✅ View cart item count
- ✅ Clear cart functionality
- ✅ Context-based state management

### Development Features
- ✅ Hot Module Replacement (HMR) with Vite
- ✅ Fast refresh for instant updates
- ✅ ESLint for code quality
- ✅ Modern ES6+ syntax

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm test           # Run tests
npm run test:watch # Run tests in watch mode
npm run test:ci    # Run tests with coverage
npm run lint       # Check code quality
```

## 🌐 Deployment

### Prerequisites
1. GitHub account and repository
2. Vercel account
3. GitHub Secrets configured:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

### Deploy
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The CI/CD pipeline handles the rest automatically! 🚀

See [CI_CD_SETUP.md](CI_CD_SETUP.md) for detailed deployment instructions.

## 📊 Workflow Status

After setup, add this badge to your README:
```markdown
![CI/CD Pipeline](https://github.com/YOUR_USERNAME/YOUR_REPO/workflows/CI/CD%20Pipeline/badge.svg)
```

## 🏆 Best Practices Implemented

### Test-Driven Development (TDD)
- ✅ Tests written before implementation
- ✅ Focused, independent, deterministic tests
- ✅ Comprehensive coverage (unit + integration)

### Code Quality
- ✅ ESLint for consistent code style
- ✅ Component-based architecture
- ✅ Context API for state management
- ✅ Proper separation of concerns

### DevOps
- ✅ Automated testing in CI
- ✅ Automated builds
- ✅ Automated deployments
- ✅ Fail-fast on errors
- ✅ Artifact preservation

## 🐛 Troubleshooting

### Tests Failing?
```bash
npm test -- --verbose
```

### Build Issues?
```bash
npm run lint
npm run build -- --debug
```

### Deployment Problems?
See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for detailed troubleshooting.

## 📖 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Write tests for your feature (TDD!)
4. Implement the feature
5. Ensure all tests pass (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

The CI pipeline will automatically run tests on your PR!

## 📝 License

This project is created for educational purposes.

## ✨ Acknowledgments

- React team for the amazing framework
- Vite team for lightning-fast builds
- Testing Library team for excellent testing tools
- GitHub for Actions platform
- Vercel for seamless deployments

## 🎉 Project Status

**Status:** ✅ Complete and Production Ready

All TDD requirements and CI/CD pipeline components have been successfully implemented and tested.

---

**Need Help?** Check out the comprehensive documentation files or review the [QUICK_START.md](QUICK_START.md) guide.

**Ready to Deploy?** Follow the [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md)!
