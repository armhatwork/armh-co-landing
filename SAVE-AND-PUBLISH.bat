@echo off
title ARMH and Co - Save and Publish to Live Site
cd /d "%~dp0"
echo.
set /p MSG=Type a short note about what you changed: 
git add .
git commit -m "%MSG%"
git push
echo.
echo  Done! Your live website will update in 1-2 minutes on Vercel.
pause
