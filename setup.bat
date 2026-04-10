@echo off
REM Bravo.Ai Next.js Setup Script (Windows)
REM Run this after cloning to get everything ready

echo ============================================
echo Bravo.Ai Next.js Project Setup
echo ============================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed.
    echo Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)

echo Node.js version: 
node --version
echo npm version: 
npm --version
echo.

REM Install dependencies
echo Installing dependencies...
call npm install

if errorlevel 1 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo SUCCESS: Setup complete!
echo.
echo Next steps:
echo 1. Start dev server: npm run dev
echo 2. Open http://localhost:3000 in your browser
echo 3. Edit components in /components to see changes
echo.
echo Documentation:
echo - README.md - Project overview
echo - MIGRATION_GUIDE.md - Migration details
echo.
echo Ready to build!
pause
