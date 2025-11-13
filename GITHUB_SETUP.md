# 🚀 إعداد GitHub Repository للثيم

## الخطوات

### 1. إنشاء Repository جديد على GitHub

1. اذهب إلى [GitHub](https://github.com)
2. اضغط على **"New repository"** أو **"+"** → **"New repository"**
3. أدخل المعلومات التالية:
   - **Repository name**: `quiet-hour-theme`
   - **Description**: `Premium spa booking theme for Salla e-commerce platform`
   - **Visibility**: Public أو Private (حسب رغبتك)
   - **⚠️ لا تضع README أو .gitignore** (لأننا أنشأناها بالفعل)

4. اضغط **"Create repository"**

---

### 2. ربط المشروع المحلي مع GitHub

افتح Terminal في مجلد `quiet-hour-theme` وقم بتنفيذ:

```bash
# الانتقال إلى مجلد المشروع
cd quiet-hour-theme

# تهيئة Git (إذا لم يتم بالفعل)
git init

# إضافة جميع الملفات
git add .

# عمل Commit أولي
git commit -m "Initial commit: Quiet Hour Salla Theme"

# إضافة Remote Repository
git remote add origin https://github.com/sultan0alshami/quiet-hour-theme.git

# رفع الملفات إلى GitHub
git branch -M main
git push -u origin main
```

---

### 3. التحقق من النجاح

- اذهب إلى Repository على GitHub
- تأكد من ظهور جميع الملفات:
  - `README.md`
  - `config/theme.json`
  - `templates/`
  - `sections/`
  - `assets/`
  - `locales/`

---

### 4. ربط الثيم مع Salla Partners Portal

1. اذهب إلى [Salla Partners Portal](https://salla.partners)
2. اذهب إلى **Themes** → **Create Theme** → **Import Theme**
3. أدخل رابط GitHub Repository:
   ```
   https://github.com/sultan0alshami/quiet-hour-theme
   ```
   أو
   ```
   sultan0alshami/quiet-hour-theme
   ```
4. اضغط **Import** أو **استيراد**

---

## 📋 ملاحظات مهمة

### ✅ قبل الرفع إلى GitHub:
- تأكد من أن جميع الملفات الأساسية موجودة
- راجع `config/theme.json` وأضف معلوماتك
- أضف صور الثيم في `assets/` إذا لزم الأمر

### ⚠️ متطلبات Salla Theme:
- يجب أن يحتوي على `config/theme.json`
- يجب أن يحتوي على `templates/` مع ملفات `.liquid`
- يجب أن يحتوي على `sections/` مع ملفات `.liquid`
- يجب أن يحتوي على `assets/` مع CSS/JS

### 🔗 بعد الربط:
- يمكنك تحديث الثيم من GitHub مباشرة
- Salla سيقوم بسحب التحديثات تلقائياً
- يمكنك استخدام `salla theme publish` لنشر الثيم

---

## 🛠️ أوامر مفيدة

```bash
# التحقق من حالة Git
git status

# إضافة ملفات جديدة
git add .
git commit -m "Your commit message"
git push

# سحب التحديثات
git pull

# إنشاء Branch جديد
git checkout -b feature/new-feature
```

---

## 📚 المراجع

- [Salla Theme Development](https://docs.salla.dev/422968m0)
- [Salla CLI Documentation](https://github.com/SallaApp/Salla-CLI)
- [GitHub Documentation](https://docs.github.com)

