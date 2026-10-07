# 🚀 Публикация на GitHub

## ❌ Ошибка "Internal Server Error"

Это временная проблема на стороне GitHub. Решения:

### 1️⃣ Подождите и попробуйте снова
```bash
git push origin master
```

### 2️⃣ Если ошибка повторяется - используйте SSH вместо HTTPS

**Переключитесь на SSH:**
```bash
# Проверьте текущий remote
git remote -v

# Удалите HTTPS remote
git remote remove origin

# Добавьте SSH remote (замените username на ваш)
git remote add origin git@github.com:smakdak13-star/Dnd.git

# Попробуйте снова
git push origin master
```

### 3️⃣ Очистите кеш Git
```bash
git gc --prune=now
git remote prune origin
```

### 4️⃣ Проверьте размер репозитория
```bash
# Посмотрите размер
du -sh .git

# Если больше 100MB, используйте Git LFS
git lfs install
```

### 5️⃣ Создайте новую ветку
```bash
git checkout -b main
git push -u origin main
```

---

## ✅ Правильная публикация (с нуля)

### Шаг 1: Создайте репозиторий на GitHub
1. Зайдите на https://github.com/new
2. Имя: `Dnd`
3. **НЕ** ставьте галочки "Initialize with README" и "Add .gitignore"
4. Нажмите "Create repository"

### Шаг 2: Инициализируйте локально
```bash
# В папке проекта
git init
git add .
git commit -m "Initial commit: D&D AI Dungeon Master"
```

### Шаг 3: Подключите remote
```bash
# HTTPS (проще)
git remote add origin https://github.com/smakdak13-star/Dnd.git

# ИЛИ SSH (надёжнее)
git remote add origin git@github.com:smakdak13-star/Dnd.git
```

### Шаг 4: Отправьте код
```bash
git branch -M main
git push -u origin main
```

---

## 🔧 Если используете GitHub Desktop

1. File → Add Local Repository
2. Выберите папку проекта
3. Если репозиторий не создан - нажмите "Create Repository"
4. Publish → Publish to GitHub
5. Введите имя: `Dnd`
6. Нажмите "Publish Repository"

---

## 📝 Что включено в репозиторий

✅ **Включено:**
- Исходный код (src/)
- Готовые файлы для запуска (play.bat, play.sh)
- game.html (готовая игра)
- Документация (README.md)
- Конфигурация (package.json, vite.config.js)

❌ **Исключено (.gitignore):**
- node_modules/ (зависимости)
- dist/ (сборка)
- Логи и временные файлы

---

## 🎮 После публикации

Любой сможет:
1. Клонировать репозиторий
2. Запустить `play.bat` (Windows) или `./play.sh` (Mac/Linux)
3. Или открыть `game.html` напрямую в браузере

**Всё работает без установки Node.js!** 🎉
