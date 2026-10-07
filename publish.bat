@echo off
chcp 65001 >nul
title Публикация на GitHub
color 0B

echo.
echo ╔═══════════════════════════════════════════════════════════╗
echo ║                                                           ║
echo ║           🚀 Публикация D&D на GitHub 🚀                  ║
echo ║                                                           ║
echo ╚═══════════════════════════════════════════════════════════╝
echo.

REM Проверка наличия Git
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Git не найден!
    echo [!] Установите Git: https://git-scm.com/download/win
    echo.
    pause
    exit /b
)

echo [✓] Git найден
echo.

REM Проверка инициализации Git
if not exist ".git" (
    echo [*] Инициализация Git репозитория...
    git init
    git add .
    git commit -m "Initial commit: D&D AI Dungeon Master"
    echo [✓] Репозиторий инициализирован
    echo.
)

REM Проверка remote
git remote -v >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [!] Remote не настроен
    echo.
    echo Введите URL вашего GitHub репозитория:
    echo Пример: https://github.com/username/Dnd.git
    echo.
    set /p REPO_URL="URL: "
    
    if "%REPO_URL%"=="" (
        echo [!] URL не введён
        pause
        exit /b
    )
    
    git remote add origin %REPO_URL%
    echo [✓] Remote добавлен: %REPO_URL%
    echo.
) else (
    echo [✓] Remote уже настроен
    git remote -v
    echo.
)

echo Выберите действие:
echo.
echo   1. Опубликовать (push)
echo   2. Обновить существующий репозиторий
echo   3. Переключиться на SSH
echo   4. Очистить Git кеш
echo   5. Выход
echo.
set /p choice="Введите номер (1-5): "

if "%choice%"=="1" goto push
if "%choice%"=="2" goto update
if "%choice%"=="3" goto ssh
if "%choice%"=="4" goto clean
if "%choice%"=="5" goto exit

echo [!] Неверный выбор
pause
exit /b

:push
echo.
echo [*] Публикация на GitHub...
echo.

REM Пробуем разные ветки
git branch -M main 2>nul
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo [✓] Успешно опубликовано!
    echo.
    echo Откройте репозиторий в браузере?
    set /p open="y/n: "
    if /i "%open%"=="y" (
        for /f "tokens=*" %%i in ('git remote get-url origin') do start "" "%%i"
    )
) else (
    echo.
    echo [!] Ошибка публикации
    echo.
    echo Возможные решения:
    echo 1. Проверьте URL репозитория
    echo 2. Попробуйте SSH вместо HTTPS
    echo 3. Подождите и попробуйте снова (временная ошибка GitHub)
    echo.
    echo Попробовать SSH?
    set /p try_ssh="y/n: "
    if /i "%try_ssh%"=="y" goto ssh
)
echo.
pause
exit /b

:update
echo.
echo [*] Обновление репозитория...
git add .
git commit -m "Update: %date% %time%"
git push
if %ERRORLEVEL% EQU 0 (
    echo [✓] Репозиторий обновлён!
) else (
    echo [!] Ошибка обновления
)
echo.
pause
exit /b

:ssh
echo.
echo [*] Переключение на SSH...
echo.
echo Текущий remote:
git remote -v
echo.

REM Получаем URL и конвертируем в SSH
for /f "tokens=2 delims= " %%i in ('git remote get-url origin') do set CURRENT_URL=%%i

REM Конвертируем HTTPS в SSH
set SSH_URL=%CURRENT_URL:https://github.com/=git@github.com:%
set SSH_URL=%SSH_URL:.git=%
set SSH_URL=%SSH_URL%.git

echo Новый SSH URL: %SSH_URL%
echo.
echo Продолжить?
set /p confirm="y/n: "
if /i not "%confirm%"=="y" (
    echo Отменено
    pause
    exit /b
)

git remote remove origin
git remote add origin %SSH_URL%
echo [✓] Remote переключён на SSH

echo.
echo Попробовать опубликовать снова?
set /p retry="y/n: "
if /i "%retry%"=="y" goto push

echo.
pause
exit /b

:clean
echo.
echo [*] Очистка Git кеша...
git gc --prune=now
git remote prune origin
echo [✓] Кеш очищён
echo.
pause
exit /b

:exit
echo.
echo [*] До встречи! 🐉
timeout /t 2 >nul
exit /b
