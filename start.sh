#!/bin/bash

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

clear

echo ""
echo -e "${PURPLE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${PURPLE}║                                                           ║${NC}"
echo -e "${PURPLE}║           🐉 D&D AI Dungeon Master 🐉                     ║${NC}"
echo -e "${PURPLE}║                                                           ║${NC}"
echo -e "${PURPLE}║              Мастер Подземелий v1.0                       ║${NC}"
echo -e "${PURPLE}║                                                           ║${NC}"
echo -e "${PURPLE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Определяем ОС
OS="$(uname -s)"

# Функция для открытия браузера
open_browser() {
    local url=$1
    case "$OS" in
        Darwin)       # macOS
            open "$url"
            ;;
        Linux)
            if command -v xdg-open &> /dev/null; then
                xdg-open "$url"
            elif command -v gnome-open &> /dev/null; then
                gnome-open "$url"
            else
                echo -e "${YELLOW}[!] Не удалось открыть браузер автоматически${NC}"
                echo -e "${BLUE}Откройте вручную: $url${NC}"
            fi
            ;;
        *)
            echo -e "${YELLOW}[!] Неизвестная ОС${NC}"
            echo -e "${BLUE}Откройте вручную: $url${NC}"
            ;;
    esac
}

# Проверка наличия Node.js
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}[!] Node.js не найден. Открываю приложение напрямую через браузер...${NC}"
    echo ""
    open_browser "dist/index.html"
    echo -e "${GREEN}[✓] Приложение открыто в браузере!${NC}"
    echo ""
    read -p "Нажмите Enter для выхода..."
    exit 0
fi

echo -e "${GREEN}[✓] Node.js найден: $(node --version)${NC}"
echo ""
echo -e "${YELLOW}Выберите режим запуска:${NC}"
echo ""
echo "  1. Открыть готовое приложение (быстрый старт)"
echo "  2. Запустить dev-сервер (для разработчиков)"
echo "  3. Пересобрать приложение"
echo "  4. Выход"
echo ""
read -p "Введите номер (1-4): " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}[*] Открываю приложение в браузере...${NC}"
        open_browser "dist/index.html"
        echo -e "${GREEN}[✓] Приложение открыто!${NC}"
        echo ""
        read -p "Нажмите Enter для выхода..."
        ;;
    2)
        echo ""
        echo -e "${BLUE}[*] Запускаю dev-сервер...${NC}"
        echo -e "${BLUE}[*] Приложение будет доступно по адресу: http://localhost:3000${NC}"
        echo ""
        npm run dev
        ;;
    3)
        echo ""
        echo -e "${BLUE}[*] Пересобираю приложение...${NC}"
        npm run build
        if [ $? -eq 0 ]; then
            echo ""
            echo -e "${GREEN}[✓] Сборка завершена успешно!${NC}"
            echo -e "${BLUE}[*] Открываю приложение...${NC}"
            open_browser "dist/index.html"
        else
            echo ""
            echo -e "${RED}[!] Ошибка при сборке${NC}"
        fi
        echo ""
        read -p "Нажмите Enter для выхода..."
        ;;
    4)
        echo ""
        echo -e "${PURPLE}[*] До встречи в подземельях! 🐉${NC}"
        sleep 2
        exit 0
        ;;
    *)
        echo -e "${RED}[!] Неверный выбор${NC}"
        sleep 2
        exit 1
        ;;
esac
