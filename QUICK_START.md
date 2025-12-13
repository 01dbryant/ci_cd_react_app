# Quick Start Guide

## 🚀 Running the Project

### Development Mode
```bash
cd ecommerce
npm run dev
```
Visit: http://localhost:5173

### Build for Production
```bash
cd ecommerce
npm run build
```

### Preview Production Build
```bash
cd ecommerce
npm run preview
```

## 🧪 Running Tests

### Run All Tests
```bash
cd ecommerce
npm test
```

### Run Tests in Watch Mode
```bash
cd ecommerce
npm run test:watch
```

### Run Tests with Coverage (CI Mode)
```bash
cd ecommerce
npm run test:ci
```

### Run Specific Test File
```bash
cd ecommerce
npx jest src/__tests__/ProductCard.test.jsx
```

## 🔍 Code Quality

### Run Linter
```bash
cd ecommerce
npm run lint
```

## 📝 Test Files

| Test File | Purpose | Type |
|-----------|---------|------|
| ProductCard.test.jsx | Tests product display and add to cart | Unit Test |
| Cart.test.jsx | Tests cart display and initial state | Unit Test |
| App.integration.test.jsx | Tests full cart workflow | Integration Test |

## 🔄 CI/CD Pipeline

### View Workflow Runs
1. Go to your GitHub repository
2. Click "Actions" tab
3. View workflow execution logs

### Monitor Deployments
1. Visit https://vercel.com/dashboard
2. Select your project
3. View deployment history and logs

## 🐛 Troubleshooting

### Tests Not Running
```bash
cd ecommerce
npm install
npm test -- --clearCache
```

### Build Failures
```bash
cd ecommerce
npm run lint    # Check for lint errors
npm run build   # Check for build errors
```

### Deployment Issues
1. Verify GitHub Secrets are set correctly
2. Check Vercel project is linked: `vercel link`
3. View workflow logs in GitHub Actions tab

## 📚 Component Structure

### ProductCard Component
- **Props**: `product` (object with id, name, price)
- **Features**: Display product info, Add to cart button
- **Location**: [src/components/ProductCard.jsx](ecommerce/src/components/ProductCard.jsx)

### Cart Component
- **Props**: None (uses CartContext)
- **Features**: Display item count, Clear cart button
- **Location**: [src/components/Cart.jsx](ecommerce/src/components/Cart.jsx)

### CartContext
- **Provides**: `items`, `addToCart()`, `clearCart()`
- **Location**: [src/context/CartContext.jsx](ecommerce/src/context/CartContext.jsx)

## 🎯 Next Steps

1. ✅ Tests are written
2. ✅ CI/CD pipeline is configured
3. ⏭️ Link project to Vercel
4. ⏭️ Add GitHub Secrets
5. ⏭️ Push to GitHub and watch deployment!

## 📖 Documentation

- [Complete Setup Guide](CI_CD_SETUP.md)
- [Project Summary](PROJECT_SUMMARY.md)
- [CI/CD Workflow](.github/workflows/main.yml)
