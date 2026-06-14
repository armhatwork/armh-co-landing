@echo off
title ARMH and Co - Start Website
cd /d "%~dp0"
echo.
echo  Starting your website locally...
echo  Wait about 30 seconds, then open: http://localhost:3000
echo.
echo  To STOP the website: close this window or press Ctrl+C
echo.
npm run dev
pause
