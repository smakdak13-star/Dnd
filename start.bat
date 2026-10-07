@echo off
chcp 65001 >nul
title D&D AI Dungeon Master
color 0E

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                                                           ║
echo ║           🐉 D&D AI Dungeon Master 🐉                     ║
echo ║                                                           ║
echo ║              Мастер Подземелий v1.0                       ║
echo ║                                                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

REM Автоматический поиск файла приложения
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

echo [!] Файл приложения не найден.
echo.
echo Выберите действие:
echo.
echo   1. Собрать приложение автоматически
echo   2. Выход
echo.
set /p choice="Введите номер (1-2): "

if "%choice%"=="1" goto build
if "%choice%"=="2" goto exit

echo [!] Неверный выбор
pause
exit /b

:found
echo [✓] Найден файл: %GAME_FILE%
echo.
echo Выберите режим:
echo.
echo   1. Открыть приложение в браузере
echo   2. Запустить dev-сервер (для разработчиков)
echo   3. Пересобрать приложение
echo   4. Выход
echo.
set /p choice="Введите номер (1-4): "

if "%choice%"=="1" goto open
if "%choice%"=="2" goto dev
if "%choice%"=="3" goto build
if "%choice%"=="4" goto exit

echo [!] Неверный выбор
pause
exit /b

:open
echo.
echo [*] Открываю приложение в браузере...
start "" "%GAME_FILE%"
echo [✓] Приложение открыто!
echo.
pause
exit /b

:dev
echo.
echo [*] Запускаю dev-сервер...
echo [*] Приложение будет доступно по адресу: http://localhost:3000
echo.
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Node.js не найден. Установите Node.js с https://nodejs.org/
    pause
    exit /b
)
npm run dev
exit /b

:build
echo.
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Node.js не найден. Установите Node.js с https://nodejs.org/
    pause
    exit /b
)
echo [*] Устанавливаю зависимости...
call npm install
echo.
echo [*] Собираю приложение...
call npm run build
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [✓] Сборка завершена успешно!
    echo [*] Открываю приложение...
    if exist "game.html" (
        start "" "game.html"
    ) else if exist "dist\index.html" (
        start "" "dist\index.html"
    )
) else (
    echo.
    echo [!] Ошибка при сборке
)
echo.
pause
exit /b

:exit
echo.
echo [*] До встречи в подземельях! 🐉
timeout /t 2 >nul
exit /b
