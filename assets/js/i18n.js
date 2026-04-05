// ══════════════════════════════════════
// i18n - Language Toggle (EN default)
// ══════════════════════════════════════

var translations = {
  en: {
    'brand-name': 'Events Platform',
    'brand-sub': 'Admin Panel',
    'nav-home': 'Home',
    'nav-dashboard': 'Dashboard',
    'nav-events-mgmt': 'Events Management',
    'nav-events': 'Events',
    'nav-all-events': 'All Events',
    'nav-active-events': 'Active Events',
    'nav-review-events': 'Under Review',
    'nav-rejected-events': 'Rejected Events',
    'nav-ended-events': 'Ended Events',
    'nav-create-event': 'Create New Event',
    'nav-providers': 'Providers',
    'nav-all-providers': 'All Providers',
    'nav-provider-requests': 'New Registration Requests',
    'nav-active-providers': 'Active Providers',
    'nav-pending-providers': 'Pending Providers',
    'nav-provider-reports': 'Provider Performance Reports',
    'nav-customers': 'Customers',
    'nav-all-customers': 'All Customers',
    'nav-active-customers': 'Active Customers',
    'nav-blocked-customers': 'Bans & Complaints',
    'nav-finance-label': 'Finance & Reports',
    'nav-finance': 'Finance & Settlement',
    'nav-finance-statement': 'Full Platform Statement',
    'nav-finance-commissions': 'Platform Commissions (5%-12%)',
    'nav-finance-transfers': 'Provider Transfers',
    'nav-finance-refunds': 'Refund Requests',
    'nav-finance-wallets': 'Provider Wallets',
    'nav-finance-reports': 'Comprehensive Financial Reports',
    'nav-analytics': 'Analytics & Reports',
    'nav-analytics-sales': 'Daily / Weekly Platform Sales',
    'nav-analytics-top': 'Top Selling Events',
    'nav-analytics-behavior': 'Customer Behavior Analysis',
    'nav-analytics-vat': 'Tax Reports (VAT)',
    'nav-analytics-export': 'Export Excel / PDF',
    'nav-settings-label': 'Settings',
    'nav-categories': 'Categories & Classifications',
    'nav-main-categories': 'Main Categories',
    'nav-sub-categories': 'Sub Categories',
    'nav-manage-categories': 'Add / Edit / Delete Category',
    'nav-sort-categories': 'Sort Categories in App',
    'nav-tiers': 'Manage Tiers (VIP, Standard...)',
    'nav-platform-settings': 'Platform Settings',
    'nav-cancellation': 'General Cancellation Policies',
    'nav-pricing': 'Dynamic Pricing',
    'nav-payment': 'Payment & Wallet Settings',
    'nav-notifications-settings': 'Notification Settings',
    'nav-roles': 'Roles & Permissions',
    'nav-general-settings': 'Other General Settings',
    'nav-security': 'Security & Verification',
    'nav-tickets': 'Ticket Verification App',
    'nav-blackmarket': 'Black Market Prevention',
    'nav-duplicates': 'Duplicate Bookings Management',
    'nav-audit-log': 'Activity Log (Audit Log)',
    'nav-notifications': 'Send Bulk Notification',
    'nav-cities': 'Manage Cities & Locations',
    'user-name': 'System Admin',
    'topbar-collapse': 'Collapse Menu',
    'topbar-search': 'Search',
    'topbar-notifications': 'Notifications',
    'topbar-messages': 'Messages',
    'topbar-profile-name': 'System Admin',
    'topbar-profile-role': 'Super Admin',
    'lang-btn': 'عربي',
  },
  ar: {
    'brand-name': 'منصة الفعاليات',
    'brand-sub': 'لوحة الإدارة',
    'nav-home': 'الرئيسية',
    'nav-dashboard': 'لوحة التحكم',
    'nav-events-mgmt': 'إدارة الفعاليات',
    'nav-events': 'الفعاليات',
    'nav-all-events': 'جميع الفعاليات',
    'nav-active-events': 'الفعاليات النشطة',
    'nav-review-events': 'تحت المراجعة',
    'nav-rejected-events': 'الفعاليات المرفوضة',
    'nav-ended-events': 'الفعاليات المنتهية',
    'nav-create-event': 'إنشاء فعالية جديدة',
    'nav-providers': 'المزودين',
    'nav-all-providers': 'جميع المزودين',
    'nav-provider-requests': 'طلبات التسجيل الجديدة',
    'nav-active-providers': 'المزودين النشطين',
    'nav-pending-providers': 'المزودين المعلقين',
    'nav-provider-reports': 'تقارير أداء المزودين',
    'nav-customers': 'العملاء',
    'nav-all-customers': 'جميع العملاء',
    'nav-active-customers': 'العملاء النشطين',
    'nav-blocked-customers': 'إدارة الحظر والشكاوى',
    'nav-finance-label': 'المالية والتقارير',
    'nav-finance': 'الماليات والتسوية',
    'nav-finance-statement': 'كشف المنصة الكلي',
    'nav-finance-commissions': 'عمولات المنصة (5%-12%)',
    'nav-finance-transfers': 'تحويلات المزودين',
    'nav-finance-refunds': 'طلبات الاسترداد',
    'nav-finance-wallets': 'محافظ المزودين',
    'nav-finance-reports': 'تقارير مالية شاملة',
    'nav-analytics': 'الإحصائيات والتقارير',
    'nav-analytics-sales': 'مبيعات المنصة اليومية / الأسبوعية',
    'nav-analytics-top': 'أكثر الفعاليات مبيعاً',
    'nav-analytics-behavior': 'تحليل سلوك العملاء',
    'nav-analytics-vat': 'تقارير الضرائب (VAT)',
    'nav-analytics-export': 'تصدير Excel / PDF',
    'nav-settings-label': 'الإعدادات',
    'nav-categories': 'الأقسام والتصنيفات',
    'nav-main-categories': 'الأقسام الرئيسية',
    'nav-sub-categories': 'التصنيفات الفرعية',
    'nav-manage-categories': 'إضافة / تعديل / حذف قسم',
    'nav-sort-categories': 'ترتيب الأقسام في التطبيق',
    'nav-tiers': 'إدارة الفئات (VIP, Standard...)',
    'nav-platform-settings': 'إعدادات المنصة',
    'nav-cancellation': 'سياسات الإلغاء العامة',
    'nav-pricing': 'التسعير الديناميكي',
    'nav-payment': 'إعدادات الدفع والمحافظ',
    'nav-notifications-settings': 'إعدادات الإشعارات',
    'nav-roles': 'إدارة الـ Roles والصلاحيات',
    'nav-general-settings': 'إعدادات عامة أخرى',
    'nav-security': 'الأمان والتحقق',
    'nav-tickets': 'تطبيق التحقق من التذاكر',
    'nav-blackmarket': 'منع السوق السوداء',
    'nav-duplicates': 'إدارة الحجوزات المتكررة',
    'nav-audit-log': 'سجل الأنشطة (Audit Log)',
    'nav-notifications': 'إرسال إشعار جماعي',
    'nav-cities': 'إدارة المدن والمواقع',
    'user-name': 'مدير النظام',
    'topbar-collapse': 'طي القائمة',
    'topbar-search': 'بحث',
    'topbar-notifications': 'الإشعارات',
    'topbar-messages': 'الرسائل',
    'topbar-profile-name': 'مدير النظام',
    'topbar-profile-role': 'Super Admin',
    'lang-btn': 'English',
  }
};

function applyLang(lang) {
  var t = translations[lang];
  var isAr = lang === 'ar';

  $('html').attr('lang', lang).attr('dir', isAr ? 'rtl' : 'ltr');
  $('body').css('direction', isAr ? 'rtl' : 'ltr');

  $('[data-i18n]').each(function () {
    var key = $(this).data('i18n');
    if (t[key]) $(this).text(t[key]);
  });

  $('[data-i18n-title]').each(function () {
    var key = $(this).data('i18n-title');
    if (t[key]) $(this).attr('title', t[key]);
  });

  $('[data-i18n-tip]').each(function () {
    var key = $(this).data('i18n-tip');
    if (t[key]) $(this).attr('data-tip', t[key]);
  });

  if (t['lang-btn']) $('#langBtn').text(t['lang-btn']);

  localStorage.setItem('lang', lang);
}

function toggleLang() {
  var current = localStorage.getItem('lang') || 'en';
  applyLang(current === 'en' ? 'ar' : 'en');
}

$(function () {
  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', 'en');
  }
  applyLang(localStorage.getItem('lang'));

  $('#langBtn').on('click', toggleLang);
});
