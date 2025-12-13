# Deployment Checklist

Use this checklist to ensure your CI/CD pipeline is ready for deployment.

## ✅ Pre-Deployment Checklist

### 1. Local Development Setup
- [ ] Node.js 20+ installed
- [ ] All dependencies installed (`npm install` in ecommerce/)
- [ ] Project builds successfully (`npm run build`)
- [ ] All tests pass locally (`npm test`)
- [ ] No linting errors (`npm run lint`)
- [ ] App runs in development mode (`npm run dev`)

### 2. Code Quality
- [ ] All components are in correct directories
  - [ ] Components in `src/components/`
  - [ ] Tests in `src/__tests__/`
  - [ ] Context in `src/context/`
- [ ] Test files have correct imports
- [ ] No console errors in browser
- [ ] Code follows React best practices

### 3. Testing Requirements
- [ ] ✅ Unit Test 1: ProductCard component
  - [ ] Tests rendering
  - [ ] Tests add to cart functionality
  - [ ] Tests user interactions
- [ ] ✅ Unit Test 2: Cart component
  - [ ] Tests rendering
  - [ ] Tests initial state
- [ ] ✅ Integration Test: Full cart workflow
  - [ ] Tests product addition updates cart
  - [ ] Simulates user interactions

### 4. GitHub Setup
- [ ] Code is in a GitHub repository
- [ ] Repository has `main` branch
- [ ] `.github/workflows/main.yml` exists
- [ ] Workflow file is valid YAML
- [ ] You have push access to repository

### 5. Vercel Setup
- [ ] Vercel account created (https://vercel.com)
- [ ] Vercel CLI installed (`npm install -g vercel`)
- [ ] Logged into Vercel (`vercel login`)
- [ ] Project linked to Vercel (`vercel link` in ecommerce/)
- [ ] Noted your credentials:
  - [ ] VERCEL_TOKEN
  - [ ] VERCEL_ORG_ID
  - [ ] VERCEL_PROJECT_ID

### 6. GitHub Secrets Configuration
- [ ] Navigated to: Repository → Settings → Secrets and variables → Actions
- [ ] Added `VERCEL_TOKEN` secret
- [ ] Added `VERCEL_ORG_ID` secret
- [ ] Added `VERCEL_PROJECT_ID` secret
- [ ] Verified all three secrets are set

## 🚀 Deployment Process

### Step 1: Final Verification
```bash
cd ecommerce
npm test          # All tests should pass
npm run lint      # No errors
npm run build     # Build succeeds
```

### Step 2: Commit and Push
```bash
git add .
git commit -m "Add TDD tests and CI/CD pipeline"
git push origin main
```

### Step 3: Monitor GitHub Actions
1. Go to: `https://github.com/YOUR_USERNAME/YOUR_REPO/actions`
2. Watch the workflow run
3. Verify all steps complete successfully:
   - [ ] Checkout code
   - [ ] Setup Node.js
   - [ ] Install dependencies
   - [ ] Run linter
   - [ ] Build project
   - [ ] Run tests
   - [ ] Upload coverage
   - [ ] Upload artifacts
   - [ ] Deploy to Vercel

### Step 4: Verify Deployment
- [ ] Deployment job completes successfully
- [ ] Visit Vercel dashboard
- [ ] Check deployment URL works
- [ ] Test app functionality in production:
  - [ ] Product displays correctly
  - [ ] Add to cart works
  - [ ] Cart count updates
  - [ ] Clear cart works

## ✅ Post-Deployment Verification

### GitHub Actions
- [ ] Workflow shows green checkmark
- [ ] All jobs completed successfully
- [ ] Coverage report uploaded
- [ ] Build artifacts uploaded
- [ ] Deployment to Vercel succeeded

### Vercel Dashboard
- [ ] Deployment status is "Ready"
- [ ] Production URL is accessible
- [ ] No build errors in logs
- [ ] Environment variables are set (if any)

### Live Application
- [ ] Website loads without errors
- [ ] All components render correctly
- [ ] Cart functionality works
- [ ] No console errors in browser
- [ ] Responsive design works on mobile

## 🔄 Future Workflow

### For New Features
```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Write tests first (TDD)
# 3. Implement feature
# 4. Verify tests pass locally
npm test

# 5. Create pull request
git push origin feature/new-feature
# Open PR on GitHub

# 6. CI runs automatically on PR
# 7. Review and merge to main
# 8. CD deploys automatically
```

### For Bug Fixes
```bash
# 1. Write failing test that reproduces bug
# 2. Fix the bug
# 3. Verify test now passes
npm test

# 4. Push to main (or create PR)
git push origin main

# 5. Watch CI/CD pipeline
```

## 🐛 Troubleshooting

### If Tests Fail in CI but Pass Locally
- [ ] Check Node.js version matches (20)
- [ ] Verify all dependencies in package.json
- [ ] Clear npm cache: `npm cache clean --force`
- [ ] Delete node_modules and reinstall

### If Build Fails
- [ ] Check for ESLint errors
- [ ] Verify all imports are correct
- [ ] Check for missing dependencies
- [ ] Review GitHub Actions logs

### If Deployment Fails
- [ ] Verify all 3 Vercel secrets are set correctly
- [ ] Check Vercel project is linked
- [ ] Ensure VERCEL_PROJECT_ID matches your project
- [ ] Review deployment logs in Vercel dashboard
- [ ] Verify CI tests passed first

### If App Doesn't Work in Production
- [ ] Check browser console for errors
- [ ] Verify all files were built correctly
- [ ] Check network tab for failed requests
- [ ] Ensure environment variables are set (if needed)

## 📋 Quick Reference

### Test Commands
```bash
npm test                    # Run all tests once
npm run test:watch         # Run tests in watch mode
npm run test:ci            # Run tests with coverage
```

### Build Commands
```bash
npm run dev                # Start dev server
npm run build              # Build for production
npm run preview            # Preview production build
npm run lint               # Check code quality
```

### Git Commands
```bash
git status                 # Check changed files
git add .                  # Stage all changes
git commit -m "message"    # Commit changes
git push origin main       # Push to GitHub
```

### Vercel Commands
```bash
vercel login               # Login to Vercel
vercel link                # Link project
vercel                     # Deploy manually (optional)
```

## 📚 Documentation Links

- [Setup Guide](CI_CD_SETUP.md) - Detailed setup instructions
- [Project Summary](PROJECT_SUMMARY.md) - Complete project overview
- [Quick Start](QUICK_START.md) - Quick reference guide
- [Pipeline Diagram](PIPELINE_DIAGRAM.md) - Visual workflow

## ✨ Success Criteria

Your deployment is successful when:
- [x] All tests pass in CI
- [x] Build completes without errors
- [x] Deployment to Vercel succeeds
- [x] Live site is accessible
- [x] All features work in production
- [x] No console errors
- [x] Workflow badge shows passing

## 🎉 You're Done!

Once all checkboxes are complete, your CI/CD pipeline is fully operational!

Every push to `main` will now:
1. ✅ Run all tests
2. ✅ Build the project
3. ✅ Deploy to Vercel (if tests pass)

Happy coding! 🚀
