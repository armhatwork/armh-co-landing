@echo off
title ARMH and Co - First Time Setup
cd /d "%~dp0"
echo.
echo  Setting up your project (one time only)...
echo  This takes about 2-3 minutes.
echo.
git fetch origin
git branch -M main 2>nul
git reset --hard origin/main
git lfs pull
npm install
if not exist .env.local copy .env.example .env.local
echo.
echo  SETUP COMPLETE!
echo  Next: double-click START-WEBSITE.bat
pause
