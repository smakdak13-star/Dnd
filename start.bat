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

REM Проверка наличия Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Node.js не найден. Открываю приложение напрямую через браузер...
    echo.
    start "" "dist\index.html"
    echo Приложение открыто в браузере!
    echo.
    pause
    exit /b
)

echo [✓] Node.js найден
echo.
echo Выберите режим запуска:
echo.
echo   1. Открыть готовое приложение (быстрый старт)
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
start "" "dist\index.html"
echo [✓] Приложение открыто!
echo.
pause
exit /b

:dev
echo.
echo [*] Запускаю dev-сервер...
echo [*] Приложение будет доступно по адресу: http://localhost:3000
echo.
npm run dev
exit /b

:build
echo.
echo [*] Пересобираю приложение...
npm run build
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [✓] Сборка завершена успешно!
    echo [*] Открываю приложение...
    start "" "dist\index.html"
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
