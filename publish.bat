@echo off
chcp 65001 >nul 2>&1
title Publish to GitHub
color 0B

echo.
echo ================================================================
echo           Publish DnD to GitHub
echo ================================================================
echo.

REM Check Git
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Git not found!
    echo [!] Install Git: https://git-scm.com/download/win
    echo.
    pause
    exit /b
)

echo [OK] Git found
echo.

REM Check if Git initialized
if not exist ".git" (
    echo [*] Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit: DnD AI Dungeon Master"
    echo [OK] Repository initialized
    echo.
)

REM Check remote
git remote -v >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Remote not configured
    echo.
    echo Enter your GitHub repository URL:
    echo Example: https://github.com/username/Dnd.git
    echo.
    set /p REPO_URL="URL: "
    
    if "%REPO_URL%"=="" (
        echo [!] URL not entered
        pause
        exit /b
    )
    
    git remote add origin %REPO_URL%
    echo [OK] Remote added: %REPO_URL%
    echo.
) else (
    echo [OK] Remote already configured
    git remote -v
    echo.
)

echo Choose action:
echo.
echo   1. Publish (push)
echo   2. Update existing repository
echo   3. Switch to SSH
echo   4. Clean Git cache
echo   5. Exit
echo.
set /p choice="Enter number (1-5): "

if "%choice%"=="1" goto push
if "%choice%"=="2" goto update
if "%choice%"=="3" goto ssh
if "%choice%"=="4" goto clean
if "%choice%"=="5" goto exit

echo [!] Invalid choice
pause
exit /b

:push
echo.
echo [*] Publishing to GitHub...
echo.

git branch -M main 2>nul
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [OK] Published successfully!
    echo.
    echo Open repository in browser?
    set /p open="y/n: "
    if /i "%open%"=="y" (
        for /f "tokens=*" %%i in ('git remote get-url origin') do start "" "%%i"
    )
) else (
    echo.
    echo [!] Publish error
    echo.
    echo Possible solutions:
    echo 1. Check repository URL
    echo 2. Try SSH instead of HTTPS
    echo 3. Wait and try again (temporary GitHub error)
    echo.
    echo Try SSH?
    set /p try_ssh="y/n: "
    if /i "%try_ssh%"=="y" goto ssh
)
echo.
pause
exit /b

:update
echo.
echo [*] Updating repository...
git add .
git commit -m "Update: %date% %time%"
git push
if %ERRORLEVEL% EQU 0 (
    echo [OK] Repository updated!
) else (
    echo [!] Update error
)
echo.
pause
exit /b

:ssh
echo.
echo [*] Switching to SSH...
echo.
echo Current remote:
git remote -v
echo.

for /f "tokens=2 delims= " %%i in ('git remote get-url origin') do set CURRENT_URL=%%i

set SSH_URL=%CURRENT_URL:https://github.com/=git@github.com:%
set SSH_URL=%SSH_URL:.git=%
set SSH_URL=%SSH_URL%.git

echo New SSH URL: %SSH_URL%
echo.
echo Continue?
set /p confirm="y/n: "
if /i not "%confirm%"=="y" (
    echo Cancelled
    pause
    exit /b
)

git remote remove origin
git remote add origin %SSH_URL%
echo [OK] Remote switched to SSH

echo.
echo Try publishing again?
set /p retry="y/n: "
if /i "%retry%"=="y" goto push

echo.
pause
exit /b

:clean
echo.
echo [*] Cleaning Git cache...
git gc --prune=now
git remote prune origin
echo [OK] Cache cleaned
echo.
pause
exit /b

:exit
echo.
echo [*] Goodbye!
timeout /t 2 >nul
exit /b
