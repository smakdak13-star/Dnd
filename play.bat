@echo off
chcp 65001 >nul
title D&D AI Dungeon Master
color 0E

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║           🐉 D&D AI Dungeon Master 🐉                     ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

REM Автоматически ищем и открываем приложение
if exist "dist\index.html" (
    echo [✓] Найден файл приложения
    start "" "dist\index.html"
    echo [✓] Приложение открыто в браузере!
    echo.
    pause
    exit /b
)

if exist "game.html" (
    echo [✓] Найден файл приложения
    start "" "game.html"
    echo [✓] Приложение открыто в браузере!
    echo.
    pause
    exit /b
)

REM Если файл не найден, пытаемся собрать
echo [!] Файл приложения не найден. Пытаюсь собрать...
echo.

where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Node.js не найден. Невозможно собрать приложение.
    echo [!] Установите Node.js с https://nodejs.org/
    echo.
    pause
    exit /b
)

echo [*] Устанавливаю зависимости...
call npm install

echo [*] Собираю приложение...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [✓] Сборка завершена!
    if exist "dist\index.html" (
        start "" "dist\index.html"
        echo [✓] Приложение открыто в браузере!
    ) else if exist "game.html" (
        start "" "game.html"
        echo [✓] Приложение открыто в браузере!
    )
) else (
    echo.
    echo [!] Ошибка при сборке
)

echo.
pause
