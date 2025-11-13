# ⚡ Quick Start Guide - Quiet Hour Theme

## ✅ ما تم إنجازه

تم إنشاء مشروع Salla Theme كامل في المجلد:
```
C:\Users\sulta\OneDrive\المستندات\GitHub\quiet-hour-theme
```

## 📋 الخطوات التالية

### 1. إنشاء Repository على GitHub

1. اذهب إلى [GitHub.com](https://github.com)
2. اضغط **"New repository"** أو **"+"** → **"New repository"**
3. أدخل:
   - **Name**: `quiet-hour-theme`
   - **Description**: `Premium spa booking theme for Salla e-commerce platform`
   - **Visibility**: Public (أو Private حسب رغبتك)
   - ⚠️ **لا تضع README أو .gitignore** (موجودة بالفعل)
4. اضغط **"Create repository"**

---

### 2. ربط المشروع مع GitHub

افتح Terminal في مجلد `quiet-hour-theme`:

```bash
# الانتقال إلى مجلد المشروع
cd "C:\Users\sulta\OneDrive\المستندات\GitHub\quiet-hour-theme"

# تهيئة Git
git init

# إضافة جميع الملفات
git add .

# عمل Commit أولي
git commit -m "Initial commit: Quiet Hour Salla Theme"

# إضافة Remote Repository (استبدل USERNAME باسمك)
git remote add origin https://github.com/sultan0alshami/quiet-hour-theme.git

# رفع الملفات
git branch -M main
git push -u origin main
```

---

### 3. ربط الثيم مع Salla Partners Portal

1. اذهب إلى [Salla Partners Portal](https://salla.partners)
2. اذهب إلى **Themes** → **Create Theme** → **Import Theme**
3. في حقل **"مستودع الثيم"** (Theme Repository):
   - أدخل: `sultan0alshami/quiet-hour-theme`
   - أو: `https://github.com/sultan0alshami/quiet-hour-theme`
4. اختر **"فئات الثيم"** (Theme Categories): **صحة ولياقة** (Health and Fitness)
5. أضف **"أيقونة الثيم"** (Theme Icon) - صورة 1600x1600
6. اضغط **"استيراد"** أو **"Import"**

---

## 📁 الملفات الموجودة

✅ **config/theme.json** - إعدادات الثيم  
✅ **templates/index.liquid** - الصفحة الرئيسية  
✅ **templates/product.liquid** - صفحة المنتج  
✅ **sections/header.liquid** - رأس الصفحة  
✅ **sections/footer.liquid** - تذييل الصفحة  
✅ **assets/theme.css** - الأنماط  
✅ **assets/theme.js** - JavaScript  
✅ **locales/ar.json** - الترجمة العربية  
✅ **README.md** - وصف المشروع  
✅ **.gitignore** - ملفات Git المهملة  

---

## 🎨 التخصيص

### تغيير الألوان:
عدّل في `assets/theme.css`:
```css
:root {
  --primary-color: #4A3728;    /* لونك الأساسي */
  --secondary-color: #E8DCC6;   /* لونك الثانوي */
  --background-color: #FFF8F0;  /* لون الخلفية */
}
```

### إضافة أقسام جديدة:
أنشئ ملفات `.liquid` جديدة في `sections/` واستخدمها في القوالب:
```liquid
{% section 'your-section-name' %}
```

---

## 🔗 روابط مفيدة

- 📖 [GITHUB_SETUP.md](./GITHUB_SETUP.md) - دليل إعداد GitHub مفصل
- 📁 [THEME_STRUCTURE.md](./THEME_STRUCTURE.md) - شرح بنية المشروع
- 📚 [Salla Theme Docs](https://docs.salla.dev/422968m0) - وثائق Salla

---

## ⚠️ ملاحظات مهمة

1. **GitHub Repository**: يجب أن يكون Repository **Public** أو أن يكون Salla Partners Portal لديه صلاحية الوصول
2. **البنية**: تأكد من أن البنية مطابقة لمتطلبات Salla
3. **الملفات**: جميع ملفات `.liquid` يجب أن تكون في المجلدات الصحيحة
4. **config/theme.json**: يجب أن يكون موجوداً وصحيحاً

---

## 🆘 في حالة وجود مشاكل

### خطأ: "فشلت عملية التحقق من صحة البيانات"
- تأكد من أن Repository موجود على GitHub
- تأكد من أن Repository **Public** أو أن Salla لديه صلاحية الوصول
- تأكد من أن البنية صحيحة (config/, templates/, sections/, assets/)

### خطأ: "Repository not found"
- تأكد من اسم المستخدم في رابط GitHub
- تأكد من أن Repository موجود ومرئي

---

**جاهز للبدء! 🚀**

