@echo off
title ARMH and Co - Get Latest from GitHub
cd /d "%~dp0"
echo.
echo  Downloading latest version from GitHub...
git pull
git lfs pull
echo.
echo  Done!
pause
