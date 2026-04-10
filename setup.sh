#!/bin/bash

# Bravo.Ai Next.js Setup Script
# Run this after cloning to get everything ready

echo "🚀 Setting up Bravo.Ai Next.js Project..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Start dev server: npm run dev"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Edit components in /components to see changes"
echo ""
echo "📚 Documentation:"
echo "- README.md - Project overview"
echo "- MIGRATION_GUIDE.md - Migration details"
echo ""
echo "🚀 Ready to build!"
