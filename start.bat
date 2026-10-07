@echo off
chcp 65001 >nul 2>&1
title DnD AI Dungeon Master
color 0E

echo.
echo ================================================================
echo           DnD AI Dungeon Master - Menu
echo ================================================================
echo.

REM Auto-find game file
set "GAME_FILE="

if exist "game.html" (
    set "GAME_FILE=game.html"
    goto found
)

if exist "dist\index.html" (
    set "GAME_FILE=dist\index.html"
    goto found
)

if exist "index.html" (
    set "GAME_FILE=index.html"
    goto found
)

echo [!] Game file not found.
echo.
echo Choose action:
echo.
echo   1. Build app automatically
echo   2. Exit
echo.
set /p choice="Enter number (1-2): "

if "%choice%"=="1" goto build
if "%choice%"=="2" goto exit

echo [!] Invalid choice
pause
exit /b

:found
echo [OK] Found file: %GAME_FILE%
echo.
echo Choose mode:
echo.
echo   1. Open app in browser
echo   2. Start dev server (for developers)
echo   3. Rebuild app
echo   4. Exit
echo.
set /p choice="Enter number (1-4): "

if "%choice%"=="1" goto open
if "%choice%"=="2" goto dev
if "%choice%"=="3" goto build
if "%choice%"=="4" goto exit

echo [!] Invalid choice
pause
exit /b

:open
echo.
echo [*] Opening app in browser...
start "" "%GAME_FILE%"
echo [OK] App opened!
echo.
pause
exit /b

:dev
echo.
echo [*] Starting dev server...
echo [*] App will be available at: http://localhost:3000
echo.
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Node.js not found. Install from https://nodejs.org/
    pause
    exit /b
)
npm run dev
exit /b

:build
echo.
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Node.js not found. Install from https://nodejs.org/
    pause
    exit /b
)
echo [*] Installing dependencies...
call npm install
echo.
echo [*] Building app...
call npm run build
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [OK] Build complete!
    if exist "game.html" (
        start "" "game.html"
    ) else if exist "dist\index.html" (
        start "" "dist\index.html"
    )
) else (
    echo.
    echo [!] Build error
)
echo.
pause
exit /b

:exit
echo.
echo [*] See you in the dungeons!
timeout /t 2 >nul
exit /b
