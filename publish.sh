#!/bin/bash

# Цвета
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m'

clear

echo ""
echo -e "${BLUE}╔═══════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║                                                           ║${NC}"
echo -e "${BLUE}║           🚀 Публикация D&D на GitHub 🚀                  ║${NC}"
echo -e "${BLUE}║                                                           ║${NC}"
echo -e "${BLUE}╚═══════════════════════════════════════════════════════════╝${NC}"
echo ""

# Проверка Git
if ! command -v git &> /dev/null; then
    echo -e "${RED}[!] Git не найден!${NC}"
    echo -e "${RED}[!] Установите Git: https://git-scm.com/download/${NC}"
    echo ""
    read -p "Нажмите Enter для выхода..."
    exit 1
fi

echo -e "${GREEN}[✓] Git найден${NC}"
echo ""

# Проверка инициализации
if [ ! -d ".git" ]; then
    echo -e "${BLUE}[*] Инициализация Git репозитория...${NC}"
    git init
    git add .
    git commit -m "Initial commit: D&D AI Dungeon Master"
    echo -e "${GREEN}[✓] Репозиторий инициализирован${NC}"
    echo ""
fi

# Проверка remote
if ! git remote get-url origin &> /dev/null; then
    echo -e "${YELLOW}[!] Remote не настроен${NC}"
    echo ""
    echo "Введите URL вашего GitHub репозитория:"
    echo "Пример: https://github.com/username/Dnd.git"
    echo ""
    read -p "URL: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo -e "${RED}[!] URL не введён${NC}"
        read -p "Нажмите Enter для выхода..."
        exit 1
    fi
    
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}[✓] Remote добавлен: $REPO_URL${NC}"
    echo ""
else
    echo -e "${GREEN}[✓] Remote уже настроен${NC}"
    git remote -v
    echo ""
fi

echo -e "${YELLOW}Выберите действие:${NC}"
echo ""
echo "  1. Опубликовать (push)"
echo "  2. Обновить существующий репозиторий"
echo "  3. Переключиться на SSH"
echo "  4. Очистить Git кеш"
echo "  5. Выход"
echo ""
read -p "Введите номер (1-5): " choice

case $choice in
    1)
        echo ""
        echo -e "${BLUE}[*] Публикация на GitHub...${NC}"
        echo ""
        
        git branch -M main 2>/dev/null
        git push -u origin main
        
        if [ $? -eq 0 ]; then
            echo ""
            echo -e "${GREEN}[✓] Успешно опубликовано!${NC}"
            echo ""
            read -p "Открыть репозиторий в браузере? (y/n): " open
            if [ "$open" = "y" ] || [ "$open" = "Y" ]; then
                REPO_URL=$(git remote get-url origin)
                # Конвертируем SSH в HTTPS для браузера
                REPO_URL=${REPO_URL/git@github.com:/https://github.com/}
                REPO_URL=${REPO_URL%.git}
                
                if [[ "$OSTYPE" == "darwin"* ]]; then
                    open "$REPO_URL"
                else
                    xdg-open "$REPO_URL" 2>/dev/null || echo "Откройте: $REPO_URL"
                fi
            fi
        else
            echo ""
            echo -e "${RED}[!] Ошибка публикации${NC}"
            echo ""
            echo "Возможные решения:"
            echo "1. Проверьте URL репозитория"
            echo "2. Попробуйте SSH вместо HTTPS"
            echo "3. Подождите и попробуйте снова (временная ошибка GitHub)"
            echo ""
            read -p "Попробовать SSH? (y/n): " try_ssh
            if [ "$try_ssh" = "y" ] || [ "$try_ssh" = "Y" ]; then
                choice=3
            fi
        fi
        ;;
    
    2)
        echo ""
        echo -e "${BLUE}[*] Обновление репозитория...${NC}"
        git add .
        git commit -m "Update: $(date)"
        git push
        
        if [ $? -eq 0 ]; then
            echo -e "${GREEN}[✓] Репозиторий обновлён!${NC}"
        else
            echo -e "${RED}[!] Ошибка обновления${NC}"
        fi
        ;;
    
    3)
        echo ""
        echo -e "${BLUE}[*] Переключение на SSH...${NC}"
        echo ""
        echo "Текущий remote:"
        git remote -v
        echo ""
        
        CURRENT_URL=$(git remote get-url origin)
        
        # Конвертируем HTTPS в SSH
        SSH_URL=${CURRENT_URL/https:\/\/github.com\//git@github.com:}
        SSH_URL=${SSH_URL%.git}.git
        
        echo "Новый SSH URL: $SSH_URL"
        echo ""
        read -p "Продолжить? (y/n): " confirm
        
        if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
            echo "Отменено"
            read -p "Нажмите Enter для выхода..."
            exit 0
        fi
        
        git remote remove origin
        git remote add origin "$SSH_URL"
        echo -e "${GREEN}[✓] Remote переключён на SSH${NC}"
        
        echo ""
        read -p "Попробовать опубликовать снова? (y/n): " retry
        if [ "$retry" = "y" ] || [ "$retry" = "Y" ]; then
            choice=1
        fi
        ;;
    
    4)
        echo ""
        echo -e "${BLUE}[*] Очистка Git кеша...${NC}"
        git gc --prune=now
        git remote prune origin
        echo -e "${GREEN}[✓] Кеш очищён${NC}"
        ;;
    
    5|*)
        echo ""
        echo -e "${PURPLE}[*] До встречи! 🐉${NC}"
        sleep 2
        exit 0
        ;;
esac

echo ""
read -p "Нажмите Enter для выхода..."
