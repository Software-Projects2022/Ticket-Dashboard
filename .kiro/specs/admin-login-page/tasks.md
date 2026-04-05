# Implementation Plan: Admin Login Page

## Overview

تنفيذ صفحة تسجيل الدخول `login.html` للوحة التحكم الإدارية، مع منطق المصادقة في `assets/js/auth.js` وحماية صفحات Dashboard بـ Auth Guard.

---

## Tasks

- [x] 1. إنشاء `assets/js/auth.js` مع منطق المصادقة الأساسي
  - [x] 1.1 تنفيذ دوال `checkSession()` و`redirectIfLoggedIn()` و`requireAuth()`
    - `checkSession()` تتحقق من `sessionStorage.getItem('sessionToken')`
    - `redirectIfLoggedIn()` تُوجّه إلى `index.html` إذا كانت الجلسة نشطة
    - `requireAuth()` تُوجّه إلى `login.html` إذا لم تكن الجلسة نشطة
    - تعريف `ADMIN_CREDENTIALS = { username: 'admin', password: 'admin123' }`
    - _Requirements: 3.1, 3.3, 3.4_

  - [x] 1.2 تنفيذ دالة `validateForm(username, password)`
    - تُعيد `{ valid: Boolean, errors: { username, password } }`
    - تعتبر الحقل الفارغ أو whitespace-only غير صالح
    - _Requirements: 2.1, 2.2, 2.3_

  - [ ]* 1.3 كتابة property test للتحقق من صحة المدخلات
    - **Property 1: Required field validation**
    - **Validates: Requirements 2.1, 2.2, 2.3**
    - استخدام fast-check: توليد strings فارغة وwhitespace والتحقق من `valid: false`
    - `// Feature: admin-login-page, Property 1: Required field validation`

  - [x] 1.4 تنفيذ دالة `authenticate(username, password)`
    - تقارن المدخلات بـ `ADMIN_CREDENTIALS`
    - عند النجاح: تحفظ `sessionToken` في `sessionStorage` وتُعيد `{ success: true }`
    - عند الفشل: تُعيد `{ success: false }` دون الإشارة لأي حقل بعينه
    - _Requirements: 2.4, 3.1_

  - [ ]* 1.5 كتابة property test للمصادقة
    - **Property 2: Generic authentication error**
    - **Property 3: Session storage round-trip**
    - **Validates: Requirements 2.4, 3.1**
    - توليد أزواج عشوائية من بيانات الاعتماد الخاطئة والتحقق من رسالة موحّدة
    - `// Feature: admin-login-page, Property 2: Generic authentication error`
    - `// Feature: admin-login-page, Property 3: Session storage round-trip`

- [x] 2. إنشاء `login.html` مع نموذج تسجيل الدخول
  - [x] 2.1 بناء هيكل HTML الأساسي للصفحة
    - استخدام نفس `<head>` dependencies (Font Awesome, style.css, Inter/Cairo fonts)
    - بطاقة مركزية `.login-card` تحتوي على: شعار المنصة، نموذج، مبدّل اللغة
    - حقل username/email بـ `id="usernameInput"` وحقل password بـ `id="passwordInput"`
    - زر toggle لإظهار/إخفاء كلمة المرور بـ `id="togglePassword"`
    - عناصر رسائل الخطأ: `id="loginError"`, `id="usernameError"`, `id="passwordError"`
    - _Requirements: 1.1, 1.2, 4.1_

  - [x] 2.2 إضافة CSS لصفحة تسجيل الدخول في `assets/css/style.css`
    - `.login-body`: خلفية `var(--bg)` مع تمركز عمودي وأفقي
    - `.login-card`: بطاقة بيضاء بـ `var(--shadow-lg)` و`var(--radius)` وعرض 420px
    - `.btn-login`: زر بلون `var(--primary)` مع hover effect وحالة disabled
    - `.form-group`, `.field-error`, `.password-wrapper`: أنماط الحقول والأخطاء
    - `.login-lang`: مبدّل اللغة في أسفل البطاقة
    - _Requirements: 1.3_

- [x] 3. Checkpoint — التحقق من عرض الصفحة بشكل صحيح
  - تأكد من أن `login.html` تفتح بدون أخطاء console
  - تأكد من أن التصميم يتطابق مع هوية لوحة التحكم
  - اسأل المستخدم إذا كان لديه أي ملاحظات على التصميم قبل المتابعة.

- [x] 4. ربط النموذج بمنطق المصادقة في `login.html`
  - [x] 4.1 تنفيذ `handleLogin(event)` في `auth.js`
    - استدعاء `validateForm()` أولاً، عرض الأخطاء inline عند الفشل
    - تعطيل زر تسجيل الدخول وعرض loading indicator عند الإرسال
    - استدعاء `authenticate()` وعرض رسالة خطأ عامة عند الفشل
    - إعادة تفعيل الزر عند الفشل
    - _Requirements: 2.1, 2.2, 2.4, 3.1, 3.2, 5.1, 5.2, 5.3_

  - [x] 4.2 تنفيذ `togglePasswordVisibility()` في `auth.js`
    - تبديل `type` بين `password` و`text`
    - تبديل أيقونة `fa-eye` / `fa-eye-slash`
    - _Requirements: 4.2, 4.3_

  - [ ]* 4.3 كتابة property test لـ password toggle
    - **Property 5: Password toggle is a round-trip**
    - **Validates: Requirements 4.2, 4.3**
    - `// Feature: admin-login-page, Property 5: Password toggle is a round-trip`

  - [x] 4.4 إضافة auto-focus على حقل username عند تحميل الصفحة
    - `document.getElementById('usernameInput').focus()`
    - _Requirements: 1.4_

- [x] 5. تنفيذ دعم اللغتين في `auth.js`
  - [x] 5.1 تنفيذ دالة `setLanguage(lang)` وتهيئة اللغة عند تحميل الصفحة
    - تحديث `document.documentElement.dir` و`document.documentElement.lang`
    - حفظ التفضيل في `localStorage` بنفس مفتاح `i18n.js` الموجود
    - تحديث نصوص النموذج (labels, placeholder, button text, error messages)
    - قراءة اللغة المحفوظة من `localStorage` عند تحميل الصفحة
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [ ]* 5.2 كتابة property test لتبديل اللغة
    - **Property 6: Language toggle changes direction and labels**
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4**
    - `// Feature: admin-login-page, Property 6: Language toggle changes direction and labels`

- [x] 6. إضافة Auth Guard لصفحات Dashboard
  - [x] 6.1 إضافة `<script src="assets/js/auth.js"></script>` وسطر `requireAuth()` في `index.html`
    - يُضاف في أعلى `<body>` قبل أي محتوى آخر
    - _Requirements: 3.3_

  - [ ]* 6.2 كتابة property test لـ Auth Guard
    - **Property 4: Auth guard redirects unauthenticated users**
    - **Validates: Requirements 3.3**
    - `// Feature: admin-login-page, Property 4: Auth guard redirects unauthenticated users`

- [x] 7. Checkpoint النهائي — التأكد من اكتمال التنفيذ
  - تأكد من أن جميع الاختبارات تمر بنجاح.
  - تأكد من أن تدفق تسجيل الدخول الكامل يعمل: login.html → index.html.
  - تأكد من أن الوصول المباشر لـ index.html بدون جلسة يُوجّه إلى login.html.
  - اسأل المستخدم إذا كان لديه أي ملاحظات نهائية.

---

## Notes

- المهام المُعلَّمة بـ `*` اختيارية ويمكن تخطيها للحصول على MVP أسرع
- بيانات الاعتماد الافتراضية: `admin` / `admin123` (قابلة للتغيير في `auth.js`)
- Auth Guard يُضاف لـ `index.html` فقط في البداية، ويمكن توسيعه لباقي الصفحات لاحقاً
- مكتبة الاختبار المقترحة: **fast-check** مع Jest أو Vitest
