#!/bin/bash

# Цвета
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

clear

echo ""
echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║           🐉 D&D AI Dungeon Master 🐉                     ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Функция для открытия файла
open_file() {
    local file=$1
    if [[ "$OSTYPE" == "darwin"* ]]; then
        open "$file"
    else
        xdg-open "$file" 2>/dev/null || sensible-browser "$file" 2>/dev/null || echo -e "${YELLOW}[!] Откройте файл вручную: $file${NC}"
    fi
}

# Автоматически ищем и открываем приложение
if [ -f "dist/index.html" ]; then
    echo -e "${GREEN}[✓] Найден файл приложения${NC}"
    open_file "dist/index.html"
    echo -e "${GREEN}[✓] Приложение открыто в браузере!${NC}"
    echo ""
    read -p "Нажмите Enter для выхода..."
    exit 0
fi

if [ -f "game.html" ]; then
    echo -e "${GREEN}[✓] Найден файл приложения${NC}"
    open_file "game.html"
    echo -e "${GREEN}[✓] Приложение открыто в браузере!${NC}"
    echo ""
    read -p "Нажмите Enter для выхода..."
    exit 0
fi

# Если файл не найден, пытаемся собрать
echo -e "${YELLOW}[!] Файл приложения не найден. Пытаюсь собрать...${NC}"
echo ""

if ! command -v node &> /dev/null; then
    echo -e "${RED}[!] Node.js не найден. Невозможно собрать приложение.${NC}"
    echo -e "${RED}[!] Установите Node.js с https://nodejs.org/${NC}"
    echo ""
    read -p "Нажмите Enter для выхода..."
    exit 1
fi

echo -e "${BLUE}[*] Устанавливаю зависимости...${NC}"
npm install

echo -e "${BLUE}[*] Собираю приложение...${NC}"
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}[✓] Сборка завершена!${NC}"
    
    if [ -f "dist/index.html" ]; then
        open_file "dist/index.html"
        echo -e "${GREEN}[✓] Приложение открыто в браузере!${NC}"
    elif [ -f "game.html" ]; then
        open_file "game.html"
        echo -e "${GREEN}[✓] Приложение открыто в браузере!${NC}"
    fi
else
    echo ""
    echo -e "${RED}[!] Ошибка при сборке${NC}"
fi

echo ""
read -p "Нажмите Enter для выхода..."
