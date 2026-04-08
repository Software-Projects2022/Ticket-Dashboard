// ╔══════════════════════════════════════════════════════════════════╗
// ║                                                                  ║
// ║   EVENTS PLATFORM SYRIA — Admin Dashboard                        ║
// ║   main.js  ·  All global UI logic                                ║
// ║                                                                  ║
// ║   SECTIONS:                                                      ║
// ║   01 · i18n / Language Toggle                                    ║
// ║   02 · Sidebar & Navigation                                      ║
// ║   03 · Topbar (Search · Notifications · Messages · Profile)      ║
// ║   04 · Toast Notifications                                       ║
// ║   05 · Customer Modal (View / Edit / Reply)                      ║
// ║   06 · Providers — All / Active / Pending / Requests / Reports   ║
// ║   07 · Events — All / Active / Review / Rejected / Ended         ║
// ║   08 · Universal View Modal                                      ║
// ║   09 · Universal Edit Modal                                      ║
// ║                                                                  ║
// ╚══════════════════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────────────────┐
// │  01 · i18n — Language Toggle (EN / AR)                           │
// └──────────────────────────────────────────────────────────────────┘

var translations = {
  en: {
    "brand-name": "Events Platform",
    "brand-sub": "Admin Panel",
    "nav-home": "Home",
    "nav-dashboard": "Dashboard",
    "nav-events-mgmt": "Events Management",
    "nav-events": "Events",
    "nav-all-events": "All Events",
    "nav-active-events": "Active Events",
    "nav-review-events": "Under Review",
    "nav-rejected-events": "Rejected Events",
    "nav-ended-events": "Ended Events",
    "nav-create-event": "Create New Event",
    "nav-providers": "Providers",
    "nav-all-providers": "All Providers",
    "nav-provider-requests": "New Registration Requests",
    "nav-active-providers": "Active Providers",
    "nav-pending-providers": "Pending Providers",
    "nav-provider-reports": "Provider Performance Reports",
    "nav-customers": "Customers",
    "nav-all-customers": "All Customers",
    "nav-active-customers": "Active Customers",
    "nav-blocked-customers": "Bans & Complaints",
    "nav-finance-label": "Finance & Reports",
    "nav-finance": "Finance & Settlement",
    "nav-finance-statement": "Full Platform Statement",
    "nav-finance-commissions": "Platform Commissions (5%-12%)",
    "nav-finance-transfers": "Provider Transfers",
    "nav-finance-refunds": "Refund Requests",
    "nav-finance-wallets": "Provider Wallets",
    "nav-finance-reports": "Comprehensive Financial Reports",
    "nav-analytics": "Analytics & Reports",
    "nav-analytics-sales": "Daily / Weekly Platform Sales",
    "nav-analytics-top": "Top Selling Events",
    "nav-analytics-behavior": "Customer Behavior Analysis",
    "nav-analytics-vat": "Tax Reports (VAT)",
    "nav-analytics-export": "Export Excel / PDF",
    "nav-settings-label": "Settings",
    "nav-categories": "Categories & Classifications",
    "nav-main-categories": "Main Categories",
    "nav-sub-categories": "Sub Categories",
    "nav-manage-categories": "Add / Edit / Delete Category",
    "nav-sort-categories": "Sort Categories in App",
    "nav-tiers": "Manage Tiers (VIP, Standard...)",
    "nav-platform-settings": "Platform Settings",
    "nav-cancellation": "General Cancellation Policies",
    "nav-pricing": "Dynamic Pricing",
    "nav-payment": "Payment & Wallet Settings",
    "nav-notifications-settings": "Notification Settings",
    "nav-roles": "Roles & Permissions",
    "nav-general-settings": "Other General Settings",
    "nav-security": "Security & Verification",
    "nav-tickets": "Ticket Verification App",
    "nav-blackmarket": "Black Market Prevention",
    "nav-duplicates": "Duplicate Bookings Management",
    "nav-audit-log": "Activity Log (Audit Log)",
    "nav-notifications": "Send Bulk Notification",
    "nav-cities": "Manage Cities & Locations",
    "user-name": "System Admin",
    "topbar-collapse": "Collapse Menu",
    "topbar-search": "Search",
    "topbar-notifications": "Notifications",
    "topbar-messages": "Messages",
    "topbar-profile-name": "System Admin",
    "topbar-profile-role": "Super Admin",
    "lang-btn": "عربي",
  },
  ar: {
    "brand-name": "منصة الفعاليات",
    "brand-sub": "لوحة الإدارة",
    "nav-home": "الرئيسية",
    "nav-dashboard": "لوحة التحكم",
    "nav-events-mgmt": "إدارة الفعاليات",
    "nav-events": "الفعاليات",
    "nav-all-events": "جميع الفعاليات",
    "nav-active-events": "الفعاليات النشطة",
    "nav-review-events": "تحت المراجعة",
    "nav-rejected-events": "الفعاليات المرفوضة",
    "nav-ended-events": "الفعاليات المنتهية",
    "nav-create-event": "إنشاء فعالية جديدة",
    "nav-providers": "المزودين",
    "nav-all-providers": "جميع المزودين",
    "nav-provider-requests": "طلبات التسجيل الجديدة",
    "nav-active-providers": "المزودين النشطين",
    "nav-pending-providers": "المزودين المعلقين",
    "nav-provider-reports": "تقارير أداء المزودين",
    "nav-customers": "العملاء",
    "nav-all-customers": "جميع العملاء",
    "nav-active-customers": "العملاء النشطين",
    "nav-blocked-customers": "إدارة الحظر والشكاوى",
    "nav-finance-label": "المالية والتقارير",
    "nav-finance": "الماليات والتسوية",
    "nav-finance-statement": "كشف المنصة الكلي",
    "nav-finance-commissions": "عمولات المنصة (5%-12%)",
    "nav-finance-transfers": "تحويلات المزودين",
    "nav-finance-refunds": "طلبات الاسترداد",
    "nav-finance-wallets": "محافظ المزودين",
    "nav-finance-reports": "تقارير مالية شاملة",
    "nav-analytics": "الإحصائيات والتقارير",
    "nav-analytics-sales": "مبيعات المنصة اليومية / الأسبوعية",
    "nav-analytics-top": "أكثر الفعاليات مبيعاً",
    "nav-analytics-behavior": "تحليل سلوك العملاء",
    "nav-analytics-vat": "تقارير الضرائب (VAT)",
    "nav-analytics-export": "تصدير Excel / PDF",
    "nav-settings-label": "الإعدادات",
    "nav-categories": "الأقسام والتصنيفات",
    "nav-main-categories": "الأقسام الرئيسية",
    "nav-sub-categories": "التصنيفات الفرعية",
    "nav-manage-categories": "إضافة / تعديل / حذف قسم",
    "nav-sort-categories": "ترتيب الأقسام في التطبيق",
    "nav-tiers": "إدارة الفئات (VIP, Standard...)",
    "nav-platform-settings": "إعدادات المنصة",
    "nav-cancellation": "سياسات الإلغاء العامة",
    "nav-pricing": "التسعير الديناميكي",
    "nav-payment": "إعدادات الدفع والمحافظ",
    "nav-notifications-settings": "إعدادات الإشعارات",
    "nav-roles": "إدارة الـ Roles والصلاحيات",
    "nav-general-settings": "إعدادات عامة أخرى",
    "nav-security": "الأمان والتحقق",
    "nav-tickets": "تطبيق التحقق من التذاكر",
    "nav-blackmarket": "منع السوق السوداء",
    "nav-duplicates": "إدارة الحجوزات المتكررة",
    "nav-audit-log": "سجل الأنشطة (Audit Log)",
    "nav-notifications": "إرسال إشعار جماعي",
    "nav-cities": "إدارة المدن والمواقع",
    "user-name": "مدير النظام",
    "topbar-collapse": "طي القائمة",
    "topbar-search": "بحث",
    "topbar-notifications": "الإشعارات",
    "topbar-messages": "الرسائل",
    "topbar-profile-name": "مدير النظام",
    "topbar-profile-role": "Super Admin",
    "lang-btn": "English",
  },
};

function applyLang(lang) {
  var t = translations[lang];
  var isAr = lang === "ar";

  $("html")
    .attr("lang", lang)
    .attr("dir", isAr ? "rtl" : "ltr");
  $("body").css("direction", isAr ? "rtl" : "ltr");

  $("[data-i18n]").each(function () {
    var key = $(this).data("i18n");
    if (t[key]) $(this).text(t[key]);
  });

  $("[data-i18n-title]").each(function () {
    var key = $(this).data("i18n-title");
    if (t[key]) $(this).attr("title", t[key]);
  });

  $("[data-i18n-tip]").each(function () {
    var key = $(this).data("i18n-tip");
    if (t[key]) $(this).attr("data-tip", t[key]);
  });

  if (t["lang-btn"]) $("#langBtn").text(t["lang-btn"]);

  localStorage.setItem("lang", lang);
}

function toggleLang() {
  var current = localStorage.getItem("lang") || "en";
  applyLang(current === "en" ? "ar" : "en");
}

$(function () {
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "en");
  }
  applyLang(localStorage.getItem("lang"));

  $("#langBtn").on("click", toggleLang);
});

// └─ END: 01 · i18n ─────────────────────────────────────────────────┘











// ┌──────────────────────────────────────────────────────────────────┐
// │  02 · Sidebar & Navigation                                       │
// └──────────────────────────────────────────────────────────────────┘
$(function () {
  // ── Sidebar collapse (desktop) ──
  $("#sidebarToggle").on("click", function () {
    $("#sidebar").toggleClass("closed");
  });

  // Mobile menu open
  $("#menuBtn").on("click", function () {
    $("#sidebar").toggleClass("active");
    $("#sidebarOverlay").toggleClass("active");
  });

  // Overlay closes sidebar
  $("#sidebarOverlay").on("click", function () {
    $("#sidebar").removeClass("active");
    $(this).removeClass("active");
  });

  // ══════════════════════════════════════
  // DROPDOWNS
  // ══════════════════════════════════════
  $(".dropdown-toggle").on("click", function (e) {
    e.preventDefault();
    var $parent = $(this).closest(".nav-item.dropdown");
    var $menu = $(this).next(".dropdown-menu");
    var isOpen = $parent.hasClass("open");

    // close all
    $(".nav-item.dropdown").removeClass("open").find(".dropdown-menu").hide();

    if (!isOpen) {
      $parent.addClass("open");
      $menu.show();
    }
  });

  // ══════════════════════════════════════
  // AUTO ACTIVE LINK
  // ══════════════════════════════════════
  var currentPage = window.location.pathname.split("/").pop() || "index.html";

  $(".nav-item:not(.dropdown)").each(function () {
    var href = $(this).attr("href");
    if (href === currentPage) $(this).addClass("active");
    else $(this).removeClass("active");
  });

  $(".dropdown-menu a").each(function () {
    if ($(this).attr("href") === currentPage) {
      $(this).addClass("active-link");
      $(this).closest(".dropdown-menu").show();
      $(this).closest(".nav-item.dropdown").addClass("open");
    }
  });

  // ── Topbar: Notifications ──────────────────────────────────────────
  $('.topbar-btn[title="Notifications"]').on("click", function () {
    $(this).find(".notif-dot").hide();
    showToast("No new notifications", "info");
  });

  // ── Topbar: Messages ───────────────────────────────────────────────
  $('.topbar-btn[title="Messages"]').on("click", function () {
    showToast("No new messages", "info");
  });

  // ── Topbar: Search Modal (Global) ──────────────────────────────────
  function buildSearchModal() {
    if ($("#globalSearchModal").length) return;

    var pages = [
      {
        name: "Dashboard",
        url: "index.html",
        icon: "fa-chart-pie",
        cat: "Home",
      },
      {
        name: "All Events",
        url: "events.html",
        icon: "fa-ticket-alt",
        cat: "Events",
      },
      {
        name: "Active Events",
        url: "events-active.html",
        icon: "fa-check-circle",
        cat: "Events",
      },
      {
        name: "Under Review",
        url: "events-review.html",
        icon: "fa-hourglass-half",
        cat: "Events",
      },
      {
        name: "Rejected Events",
        url: "events-rejected.html",
        icon: "fa-times-circle",
        cat: "Events",
      },
      {
        name: "Ended Events",
        url: "events-ended.html",
        icon: "fa-flag-checkered",
        cat: "Events",
      },
      {
        name: "Create New Event",
        url: "events-create.html",
        icon: "fa-plus-circle",
        cat: "Events",
      },
      {
        name: "All Providers",
        url: "providers.html",
        icon: "fa-users-cog",
        cat: "Providers",
      },
      {
        name: "Registration Requests",
        url: "providers-requests.html",
        icon: "fa-file-alt",
        cat: "Providers",
      },
      {
        name: "Active Providers",
        url: "providers-active.html",
        icon: "fa-check",
        cat: "Providers",
      },
      {
        name: "Pending Providers",
        url: "providers-pending.html",
        icon: "fa-hourglass",
        cat: "Providers",
      },
      {
        name: "Provider Reports",
        url: "providers-reports.html",
        icon: "fa-chart-bar",
        cat: "Providers",
      },
      {
        name: "All Customers",
        url: "customers.html",
        icon: "fa-user-friends",
        cat: "Customers",
      },
      {
        name: "Active Customers",
        url: "customers-active.html",
        icon: "fa-user-check",
        cat: "Customers",
      },
      {
        name: "Bans & Complaints",
        url: "customers-blocked.html",
        icon: "fa-ban",
        cat: "Customers",
      },
      {
        name: "Platform Statement",
        url: "finance.html",
        icon: "fa-file-invoice-dollar",
        cat: "Finance",
      },
      {
        name: "Commissions",
        url: "finance-commissions.html",
        icon: "fa-percentage",
        cat: "Finance",
      },
      {
        name: "Provider Transfers",
        url: "finance-transfers.html",
        icon: "fa-exchange-alt",
        cat: "Finance",
      },
      {
        name: "Refund Requests",
        url: "finance-refunds.html",
        icon: "fa-undo",
        cat: "Finance",
      },
      {
        name: "Provider Wallets",
        url: "finance-wallets.html",
        icon: "fa-wallet",
        cat: "Finance",
      },
      {
        name: "Financial Reports",
        url: "finance-reports.html",
        icon: "fa-chart-line",
        cat: "Finance",
      },
      {
        name: "Daily / Weekly Sales",
        url: "analytics.html",
        icon: "fa-chart-area",
        cat: "Analytics",
      },
      {
        name: "Top Selling Events",
        url: "analytics-top.html",
        icon: "fa-trophy",
        cat: "Analytics",
      },
      {
        name: "Customer Behavior",
        url: "analytics-behavior.html",
        icon: "fa-users",
        cat: "Analytics",
      },
      {
        name: "Tax Reports (VAT)",
        url: "analytics-vat.html",
        icon: "fa-file-invoice",
        cat: "Analytics",
      },
      {
        name: "Export Reports",
        url: "analytics-export.html",
        icon: "fa-file-export",
        cat: "Analytics",
      },
      {
        name: "Main Categories",
        url: "categories.html",
        icon: "fa-th-large",
        cat: "Settings",
      },
      {
        name: "Sub Categories",
        url: "categories-sub.html",
        icon: "fa-sitemap",
        cat: "Settings",
      },
      {
        name: "Manage Categories",
        url: "categories-manage.html",
        icon: "fa-edit",
        cat: "Settings",
      },
      {
        name: "Sort Categories",
        url: "categories-sort.html",
        icon: "fa-sort",
        cat: "Settings",
      },
      {
        name: "Manage Tiers",
        url: "categories-tiers.html",
        icon: "fa-layer-group",
        cat: "Settings",
      },
      {
        name: "Cancellation Policies",
        url: "settings-cancellation.html",
        icon: "fa-ban",
        cat: "Settings",
      },
      {
        name: "Dynamic Pricing",
        url: "settings-pricing.html",
        icon: "fa-tags",
        cat: "Settings",
      },
      {
        name: "Payment Settings",
        url: "settings-payment.html",
        icon: "fa-credit-card",
        cat: "Settings",
      },
      {
        name: "Notification Settings",
        url: "settings-notifications.html",
        icon: "fa-bell",
        cat: "Settings",
      },
      {
        name: "Roles & Permissions",
        url: "settings-roles.html",
        icon: "fa-shield-alt",
        cat: "Settings",
      },
      {
        name: "General Settings",
        url: "settings.html",
        icon: "fa-cog",
        cat: "Settings",
      },
      {
        name: "Ticket Verification",
        url: "security-tickets.html",
        icon: "fa-qrcode",
        cat: "Security",
      },
      {
        name: "Black Market Prevention",
        url: "security-blackmarket.html",
        icon: "fa-user-secret",
        cat: "Security",
      },
      {
        name: "Duplicate Bookings",
        url: "security-duplicates.html",
        icon: "fa-copy",
        cat: "Security",
      },
      {
        name: "Activity Log",
        url: "security-log.html",
        icon: "fa-history",
        cat: "Security",
      },
      {
        name: "Send Bulk Notification",
        url: "notifications.html",
        icon: "fa-bullhorn",
        cat: "Other",
      },
      {
        name: "Manage Cities",
        url: "cities.html",
        icon: "fa-map-marker-alt",
        cat: "Other",
      },
    ];

    var catColors = {
      Home: "#9a2226",
      Events: "#3b82f6",
      Providers: "#10b981",
      Customers: "#f59e0b",
      Finance: "#8b5cf6",
      Analytics: "#06b6d4",
      Settings: "#f97316",
      Security: "#ef4444",
      Other: "#64748b",
    };

    var $modal = $(
      [
        '<div id="globalSearchModal" style="position:fixed;inset:0;z-index:99999;display:none;align-items:flex-start;justify-content:center;padding-top:80px;background:rgba(15,23,42,.55);backdrop-filter:blur(6px)">',
        '<div id="globalSearchBox" style="width:100%;max-width:620px;background:var(--card-bg);border-radius:18px;box-shadow:0 24px 60px rgba(0,0,0,.25);border:1px solid var(--border);overflow:hidden;margin:0 16px">',

        // Input row
        '<div style="display:flex;align-items:center;gap:12px;padding:16px 20px;border-bottom:1px solid var(--border)">',
        '<i class="fas fa-search" style="font-size:18px;color:var(--primary);flex-shrink:0"></i>',
        '<input id="globalSearchInput" type="text" placeholder="Search pages, settings, reports…" autocomplete="off"',
        ' style="flex:1;border:none;outline:none;font-size:15px;background:transparent;color:var(--text-primary);font-family:inherit">',
        '<kbd style="font-size:11px;padding:3px 7px;border-radius:6px;background:var(--bg);border:1px solid var(--border);color:var(--text-muted);flex-shrink:0">ESC</kbd>',
        "</div>",

        // Results area
        '<div id="globalSearchResults" style="max-height:420px;overflow-y:auto;padding:8px 0"></div>',

        // Footer
        '<div style="padding:10px 20px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">',
        '<span style="font-size:11px;color:var(--text-muted)"><kbd style="padding:2px 6px;border-radius:4px;background:var(--bg);border:1px solid var(--border)">↑↓</kbd> navigate &nbsp; <kbd style="padding:2px 6px;border-radius:4px;background:var(--bg);border:1px solid var(--border)">↵</kbd> open &nbsp; <kbd style="padding:2px 6px;border-radius:4px;background:var(--bg);border:1px solid var(--border)">ESC</kbd> close</span>',
        '<span style="font-size:11px;color:var(--text-muted)" id="searchResultCount"></span>',
        "</div>",

        "</div>",
        "</div>",
      ].join(""),
    );

    $("body").append($modal);

    function renderDefault() {
      var quickLinks = [
        {
          name: "Dashboard",
          url: "index.html",
          icon: "fa-chart-pie",
          cat: "Home",
        },
        {
          name: "All Events",
          url: "events.html",
          icon: "fa-ticket-alt",
          cat: "Events",
        },
        {
          name: "All Customers",
          url: "customers.html",
          icon: "fa-user-friends",
          cat: "Customers",
        },
        {
          name: "Finance",
          url: "finance.html",
          icon: "fa-coins",
          cat: "Finance",
        },
        {
          name: "Analytics",
          url: "analytics.html",
          icon: "fa-chart-area",
          cat: "Analytics",
        },
        {
          name: "Settings",
          url: "settings.html",
          icon: "fa-cog",
          cat: "Settings",
        },
      ];
      var html =
        '<div style="padding:12px 20px 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted)">Quick Navigation</div>';
      html +=
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:2px;padding:4px 8px">';
      quickLinks.forEach(function (p) {
        var c = catColors[p.cat] || "#64748b";
        html +=
          '<a href="' +
          p.url +
          '" class="search-result-item" style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:10px;text-decoration:none;transition:.12s" onmouseover="this.style.background=\'var(--bg)\'" onmouseout="this.style.background=\'transparent\'">' +
          '<span style="width:32px;height:32px;border-radius:8px;background:' +
          c +
          "1a;color:" +
          c +
          ';display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0"><i class="fas ' +
          p.icon +
          '"></i></span>' +
          '<span style="font-size:13px;font-weight:500;color:var(--text-primary)">' +
          p.name +
          "</span>" +
          "</a>";
      });
      html += "</div>";
      $("#globalSearchResults").html(html);
      $("#searchResultCount").text("");
    }

    function renderResults(q) {
      var matches = pages.filter(function (p) {
        return (
          p.name.toLowerCase().indexOf(q.toLowerCase()) > -1 ||
          p.cat.toLowerCase().indexOf(q.toLowerCase()) > -1
        );
      });
      if (!matches.length) {
        $("#globalSearchResults").html(
          '<div style="padding:40px 20px;text-align:center;color:var(--text-muted)">' +
            '<i class="fas fa-search" style="font-size:28px;opacity:.3;display:block;margin-bottom:10px"></i>' +
            '<div style="font-size:14px">No results for "<strong>' +
            q +
            '</strong>"</div>' +
            "</div>",
        );
        $("#searchResultCount").text("0 results");
        return;
      }
      // group by cat
      var groups = {};
      matches.forEach(function (p) {
        (groups[p.cat] = groups[p.cat] || []).push(p);
      });
      var html = "";
      Object.keys(groups).forEach(function (cat) {
        var c = catColors[cat] || "#64748b";
        html +=
          '<div style="padding:10px 20px 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:' +
          c +
          '">' +
          cat +
          "</div>";
        groups[cat].forEach(function (p) {
          var hi = p.name.replace(
            new RegExp(
              "(" + q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
              "gi",
            ),
            "<mark style='background:#fef08a;border-radius:3px;padding:0 2px'>$1</mark>",
          );
          html +=
            '<a href="' +
            p.url +
            '" class="search-result-item" style="display:flex;align-items:center;gap:12px;padding:9px 20px;text-decoration:none;transition:.12s" onmouseover="this.style.background=\'var(--bg)\'" onmouseout="this.style.background=\'transparent\'">' +
            '<span style="width:30px;height:30px;border-radius:8px;background:' +
            c +
            "1a;color:" +
            c +
            ';display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0"><i class="fas ' +
            p.icon +
            '"></i></span>' +
            '<span style="font-size:13px;font-weight:500;color:var(--text-primary)">' +
            hi +
            "</span>" +
            '<i class="fas fa-arrow-right" style="margin-left:auto;font-size:10px;color:var(--text-muted);opacity:.5"></i>' +
            "</a>";
        });
      });
      $("#globalSearchResults").html(html);
      $("#searchResultCount").text(
        matches.length + " result" + (matches.length !== 1 ? "s" : ""),
      );
    }

    // Input handler
    $("#globalSearchInput").on("input", function () {
      var q = $(this).val().trim();
      if (q.length < 1) renderDefault();
      else renderResults(q);
    });

    // Close on backdrop click
    $modal.on("click", function (e) {
      if ($(e.target).is("#globalSearchModal")) closeSearch();
    });

    // ESC key
    $(document).on("keydown.globalSearch", function (e) {
      if (e.key === "Escape") closeSearch();
      if (e.key === "Enter" && $("#globalSearchModal").is(":visible")) {
        var $first = $(".search-result-item").first();
        if ($first.length) window.location.href = $first.attr("href");
      }
    });

    renderDefault();
  }

  function openSearch() {
    buildSearchModal();
    $("#globalSearchModal").css("display", "flex");
    setTimeout(function () {
      $("#globalSearchInput").val("").focus();
    }, 50);
  }

  function closeSearch() {
    $("#globalSearchModal").hide();
  }

  $('.topbar-btn[title="Search"]').on("click", function () {
    openSearch();
  });

  // Ctrl+K shortcut
  $(document).on("keydown.searchShortcut", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      openSearch();
    }
  });

  // ── Welcome Banner Buttons ─────────────────────────────────────────
  $(".welcome-btn").on("click", function () {
    if ($(this).hasClass("solid")) {
      window.location.href = "events-create.html";
    } else {
      showToast("Preparing report export...", "success");
    }
  });

  // ── Stat Cards: animate bars on load ──────────────────────────────
  $(window).on("load", function () {
    $(".stat-bar-fill").each(function () {
      var w = $(this).css("width");
      $(this).css("width", "0");
      setTimeout(
        function (el) {
          $(el).css("width", w);
        },
        200,
        this,
      );
    });
  });

  // ── Table Action Buttons (delegation) ─────────────────────────────
  $(document).on("click", ".data-table tbody button", function (e) {
    var $btn = $(this);
    var cls = $btn.attr("class") || "";
    if (/\b(ev|pv|pn|rq|rp)-/.test(cls)) return;
    e.preventDefault();
    var $tr = $btn.closest("tr");
    var name =
      $tr.find(".event-name").first().text().trim() ||
      $tr.find(".event-grid-name").first().text().trim() ||
      "Entry";
    var action = (
      $btn.attr("title") ||
      $btn.attr("aria-label") ||
      "Action"
    ).trim();
    var page = (window.location.pathname.split("/").pop() || "").toLowerCase();

    if (page === "customers-blocked.html" && /^lift ban$/i.test(action)) {
      if (
        !confirm("Lift ban for " + name + "? They will be able to book again.")
      )
        return;
      $tr.fadeOut(200, function () {
        $(this).remove();
      });
      var $bannedStat = $(
        ".customers-hub .stat-mini-card:has(.stat-mini-icon.danger) .stat-mini-val",
      );
      if ($bannedStat.length) {
        var n = parseInt(
          String($bannedStat.text()).replace(/,/g, "") || "0",
          10,
        );
        if (!isNaN(n) && n > 0)
          $bannedStat.text((n - 1).toLocaleString("en-US"));
      }
      showToast(
        "Ban lifted. " + name + " can use the platform again.",
        "success",
      );
      return;
    }

    var custPage =
      page === "customers.html" ||
      page === "customers-active.html" ||
      page === "customers-blocked.html";
    if (custPage && /^(view|review)$/i.test(action)) {
      customerModalOpenView($tr);
      return;
    }
    if (custPage && /^edit$/i.test(action)) {
      customerModalOpenEdit($tr);
      return;
    }
    if (page === "customers-blocked.html" && /^reply$/i.test(action)) {
      customerModalOpenReply($tr);
      return;
    }

    // index.html — View buttons handled by universal modal
    if (page === "index.html" && /^view$/i.test(action)) return;

    // index.html — Edit buttons handled by universal modal
    if (page === "index.html" && /^edit$/i.test(action)) return;

    var msg = action + ": " + name;
    var toastType = "info";
    if (/edit|save|approve|reply|export|lift|unlock|complete/i.test(action))
      toastType = "success";
    if (
      /delete|remove|reject|suspend|ban|danger/i.test(action) ||
      $btn.hasClass("btn-danger")
    )
      toastType =
        action.toLowerCase().indexOf("delete") >= 0 ||
        action.toLowerCase().indexOf("remove") >= 0
          ? "error"
          : "warning";
    showToast(msg, toastType);
  });

  // ══════════════════════════════════════
  // QUICK STATS ITEMS — clickable
  // ══════════════════════════════════════
  var quickStatLinks = {
    "Under Review": "events-review.html",
    "New Provider Requests": "providers-requests.html",
    "Refund Requests": "finance-refunds.html",
    "Tickets Sold Today": "analytics.html",
  };

  $(".quick-stat-item").each(function () {
    var label = $(this).find(".quick-stat-label").text().trim();
    if (quickStatLinks[label]) {
      $(this)
        .css("cursor", "pointer")
        .on("click", function () {
          window.location.href = quickStatLinks[label];
        });
    }
  });

  // ── Profile Dropdown ───────────────────────────────────────────────
  $("#profileBtn").on("click", function (e) {
    e.stopPropagation();
    $("#profileDropdown").toggleClass("open");
  });

  $(document).on("click", function () {
    $("#profileDropdown").removeClass("open");
  });

  $("#profileDropdown").on("click", function (e) {
    e.stopPropagation();
  });

  // ── Toast animation style (injected once) ─────────────────────────
  $("<style>")
    .text(
      "@keyframes slideIn { from { transform: translateX(-20px); opacity:0; } to { transform: translateX(0); opacity:1; } }",
    )
    .appendTo("head");
});
// └─ END: 02 · Sidebar & Navigation ─────────────────────────────────┘








// ┌──────────────────────────────────────────────────────────────────┐
// │  04 · Toast Notifications                                        │
// └──────────────────────────────────────────────────────────────────┘
function showToast(message, type) {
  type = type || "info";

  var $container = $("#toast-container");
  if (!$container.length) {
    $container = $('<div id="toast-container">')
      .css({
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      })
      .appendTo("body");
  }

  var colors = {
    success: "#10b981",
    info: "#9a2226",
    warning: "#f59e0b",
    error: "#ef4444",
  };
  var icons = {
    success: "fa-check-circle",
    info: "fa-info-circle",
    warning: "fa-exclamation-circle",
    error: "fa-times-circle",
  };

  var $toast = $("<div>")
    .css({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      background: "#fff",
      borderRadius: "10px",
      padding: "12px 18px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
      borderLeft: "4px solid " + colors[type],
      fontSize: "13px",
      fontFamily: "'Cairo',sans-serif",
      color: "#0f172a",
      minWidth: "240px",
      animation: "slideIn 0.3s ease",
    })
    .html(
      '<i class="fas ' +
        icons[type] +
        '" style="color:' +
        colors[type] +
        ';font-size:16px;"></i> ' +
        message,
    );

  $container.append($toast);

  setTimeout(function () {
    $toast.css({ opacity: 0, transition: "opacity 0.3s" });
    setTimeout(function () {
      $toast.remove();
    }, 300);
  }, 3000);
}
// └─ END: 04 · Toast Notifications ──────────────────────────────────┘









// ┌──────────────────────────────────────────────────────────────────┐
// │  05 · Customer Modal — View / Edit / Reply                       │
// │       Used by: customers.html · customers-active.html            │
// │                customers-blocked.html                            │
// └──────────────────────────────────────────────────────────────────┘
function customerModalClose() {
  $("#adminCustomerModal").removeClass("is-open").attr("aria-hidden", "true");
}

function customerModalEnsure() {
  var $m = $("#adminCustomerModal");
  if ($m.length) return $m;
  $m = $(
    '<div id="adminCustomerModal" class="admin-modal" aria-hidden="true">' +
      '<div class="admin-modal-backdrop"></div>' +
      '<div class="admin-modal-panel" role="dialog" aria-modal="true" aria-labelledby="adminCustomerModalTitle">' +
      '<div class="admin-modal-header">' +
      '<h3 id="adminCustomerModalTitle" class="admin-modal-title">Customer</h3>' +
      '<button type="button" class="admin-modal-close" aria-label="Close">&times;</button>' +
      "</div>" +
      '<div class="admin-modal-body"></div>' +
      '<div class="admin-modal-footer">' +
      '<button type="button" class="btn btn-ghost admin-modal-cancel">Close</button>' +
      '<button type="button" class="btn btn-primary admin-modal-save" style="display:none">Save</button>' +
      "</div>" +
      "</div>" +
      "</div>",
  );
  $("body").append($m);
  $m.on("click", ".admin-modal-backdrop", function () {
    customerModalClose();
  });
  $m.on("click", ".admin-modal-close, .admin-modal-cancel", function () {
    customerModalClose();
  });
  $m.on("click", ".admin-modal-save", function (e) {
    e.preventDefault();
    var mode = $m.data("mode");
    if (mode === "edit") customerModalSaveEdit();
    else if (mode === "reply") customerModalSendReply();
  });
  return $m;
}

function customerParseRow($tr) {
  var rowType = $tr.data("type");
  var name = $tr.find(".event-name").first().text().trim();
  var email = $tr
    .find(".event-meta")
    .first()
    .clone()
    .find("i")
    .remove()
    .end()
    .text()
    .trim();
  var city = $tr
    .find(".city-cell")
    .first()
    .clone()
    .find("i")
    .remove()
    .end()
    .text()
    .trim();
  var phone = "—";
  var $ph = $tr.find("td .fa-phone").closest("td");
  if ($ph.length) phone = $ph.clone().find("i").remove().end().text().trim();
  var tickets = $tr.find(".tickets-count").first().text().trim() || "—";
  var status = $tr.find("td .badge").first().text().trim() || "—";
  var reason = "—";
  var since = "—";
  if (rowType === "ban" || rowType === "complaint") {
    since = $tr
      .children("td")
      .eq(5)
      .clone()
      .find("i")
      .remove()
      .end()
      .text()
      .trim();
    reason = $tr.children("td").eq(4).text().trim().replace(/\s+/g, " ");
    status = $tr.children("td").eq(3).text().trim().replace(/\s+/g, " ");
  } else {
    var $d = $tr.find("td .fa-calendar-alt").closest("td").first();
    if ($d.length) since = $d.clone().find("i").remove().end().text().trim();
  }
  return {
    name: name,
    email: email,
    phone: phone,
    city: city,
    tickets: tickets,
    status: status,
    reason: reason,
    since: since,
    rowType: rowType,
  };
}

function customerApplyRowEdit($tr, d) {
  $tr.find(".event-name").first().text(d.name);
  var initial = (d.name.trim().charAt(0) || "?").toUpperCase();
  $tr.find(".provider-avatar").first().text(initial);
  $tr
    .find(".event-meta")
    .first()
    .empty()
    .append(
      $('<i class="fas fa-envelope"></i>'),
      document.createTextNode(" " + d.email),
    );
  var $ph = $tr.find("td .fa-phone").closest("td");
  if ($ph.length) {
    $ph
      .empty()
      .append(
        $('<span class="date-cell">').append(
          $('<i class="fas fa-phone"></i>'),
          document.createTextNode(" " + (d.phone || "—")),
        ),
      );
  }
  $tr
    .find(".city-cell")
    .first()
    .empty()
    .append(
      $('<i class="fas fa-map-marker-alt"></i>'),
      document.createTextNode(" " + d.city),
    );
  if (d.rowType === "ban" || d.rowType === "complaint") {
    $tr
      .children("td")
      .eq(4)
      .html('<span style="font-size:12px;color:var(--text-muted)"></span>')
      .find("span")
      .text(d.reason || "");
  }
}

function customerModalOpenView($tr) {
  var d = customerParseRow($tr);
  var $m = customerModalEnsure();
  $m.data("mode", "view");
  $m.find(".admin-modal-title").text("Customer profile");
  $m.find(".admin-modal-cancel").text("Close");
  var $dl = $('<dl class="admin-modal-dl"></dl>');
  function addRow(label, val) {
    $dl.append($("<dt>").text(label), $("<dd>").text(val || "—"));
  }
  addRow("Name", d.name);
  addRow("Email", d.email);
  if (d.phone !== "—") addRow("Phone", d.phone);
  addRow("City", d.city);
  if (d.tickets !== "—") addRow("Tickets", d.tickets);
  if (d.status !== "—") addRow("Status", d.status);
  if (d.reason !== "—") addRow("Reason / notes", d.reason);
  if (d.since) addRow(d.rowType ? "Date" : "Joined / activity", d.since);
  $m.find(".admin-modal-body").empty().append($dl);
  $m.find(".admin-modal-save").hide();
  $m.addClass("is-open").attr("aria-hidden", "false");
}

function customerModalOpenEdit($tr) {
  var d = customerParseRow($tr);
  var $m = customerModalEnsure();
  $m.data("mode", "edit");
  $m.data("editRow", $tr);
  $m.find(".admin-modal-title").text("Edit customer");
  $m.find(".admin-modal-cancel").text("Cancel");
  var isBlocked = d.rowType === "ban" || d.rowType === "complaint";
  var $stack = $('<div class="form-stack"></div>');
  $stack.append(
    $("<label>").attr("for", "custModalName").text("Name"),
    $('<input type="text" class="form-input" id="custModalName">').val(d.name),
    $("<label>").attr("for", "custModalEmail").text("Email"),
    $('<input type="email" class="form-input" id="custModalEmail">').val(
      d.email,
    ),
    $("<label>").attr("for", "custModalCity").text("City"),
    $('<input type="text" class="form-input" id="custModalCity">').val(d.city),
  );
  if (isBlocked) {
    $stack.append(
      $("<label>").attr("for", "custModalReason").text("Reason / notes"),
      $(
        '<textarea class="form-input form-textarea" id="custModalReason" rows="3">',
      ).val(d.reason === "—" ? "" : d.reason),
    );
  } else {
    $stack.append(
      $("<label>").attr("for", "custModalPhone").text("Phone"),
      $('<input type="text" class="form-input" id="custModalPhone">').val(
        d.phone === "—" ? "" : d.phone,
      ),
    );
  }
  $m.find(".admin-modal-body").empty().append($stack);
  $m.find(".admin-modal-save").show().text("Save changes");
  $m.addClass("is-open").attr("aria-hidden", "false");
}

function customerModalSaveEdit() {
  var $m = $("#adminCustomerModal");
  var $tr = $m.data("editRow");
  if (!$tr || !$tr.length) return;
  var rowType = $tr.data("type");
  var d = {
    name: $.trim(String($("#custModalName").val() || "")),
    email: $.trim(String($("#custModalEmail").val() || "")),
    city: $.trim(String($("#custModalCity").val() || "")),
    phone: $.trim(String($("#custModalPhone").val() || "")),
    reason: $.trim(String($("#custModalReason").val() || "")),
    rowType: rowType,
  };
  if (!d.name) {
    showToast("Please enter a name", "error");
    return;
  }
  customerApplyRowEdit($tr, d);
  customerModalClose();
  showToast("Customer updated: " + d.name, "success");
}

function customerModalOpenReply($tr) {
  var d = customerParseRow($tr);
  var $m = customerModalEnsure();
  $m.data("mode", "reply");
  $m.data("replyTo", d.name);
  $m.find(".admin-modal-title").text("Reply to " + d.name);
  $m.find(".admin-modal-cancel").text("Cancel");
  $m.find(".admin-modal-body")
    .empty()
    .append(
      $("<label>").attr("for", "custModalReply").text("Message"),
      $(
        '<textarea class="form-input form-textarea" id="custModalReply" rows="4" placeholder="Write your reply to the customer…"></textarea>',
      ),
    );
  $m.find(".admin-modal-save").show().text("Send reply");
  $m.addClass("is-open").attr("aria-hidden", "false");
}

function customerModalSendReply() {
  var $m = $("#adminCustomerModal");
  var msg = $.trim(String($("#custModalReply").val() || ""));
  var to = $m.data("replyTo") || "customer";
  if (!msg) {
    showToast("Please write a message", "warning");
    return;
  }
  customerModalClose();
  showToast("Reply sent to " + to, "success");
}
// └─ END: 05 · Customer Modal ────────────────────────────────────────┘




// ┌──────────────────────────────────────────────────────────────────┐
// │  06 · Providers                                                  │
// │       providers.html · providers-active.html                     │
// │       providers-pending.html · providers-requests.html           │
// │       providers-reports.html                                     │
// └──────────────────────────────────────────────────────────────────┘

// ── 06a · All Providers (providers.html) ───────────────────────────
if (
  $("#eventsBody").length &&
  window.location.pathname.indexOf("providers.html") > -1
) {
  (function () {
    var BADGES = {
      active:
        '<span class="badge active"><span class="badge-dot"></span>Active</span>',
      pending:
        '<span class="badge pending"><span class="badge-dot"></span>Pending</span>',
      suspended:
        '<span class="badge rejected"><span class="badge-dot"></span>Suspended</span>',
    };
    var allData = [
      {
        id: 1,
        name: "Entertainment Co.",
        email: "info@entco.sy",
        city: "Damascus",
        category: "Music",
        events: 12,
        revenue: 245000,
        rating: 4.8,
        joined: "Jan 10, 2025",
        status: "active",
        avatar: "E",
      },
      {
        id: 2,
        name: "Sports Club Syria",
        email: "contact@scs.sy",
        city: "Aleppo",
        category: "Sports",
        events: 8,
        revenue: 180000,
        rating: 4.5,
        joined: "Feb 3, 2025",
        status: "active",
        avatar: "S",
      },
      {
        id: 3,
        name: "Travel Agency",
        email: "hello@travel.sy",
        city: "Latakia",
        category: "Tourism",
        events: 5,
        revenue: 97500,
        rating: 4.2,
        joined: "Mar 15, 2025",
        status: "active",
        avatar: "T",
      },
      {
        id: 4,
        name: "Arts House",
        email: "arts@house.sy",
        city: "Homs",
        category: "Arts",
        events: 3,
        revenue: 18000,
        rating: 3.9,
        joined: "Apr 1, 2025",
        status: "pending",
        avatar: "A",
      },
      {
        id: 5,
        name: "Success Academy",
        email: "info@success.sy",
        city: "Damascus",
        category: "Education",
        events: 7,
        revenue: 63000,
        rating: 4.7,
        joined: "Jan 20, 2025",
        status: "active",
        avatar: "S",
      },
      {
        id: 6,
        name: "Music House",
        email: "music@house.sy",
        city: "Aleppo",
        category: "Music",
        events: 4,
        revenue: 72000,
        rating: 4.3,
        joined: "Feb 28, 2025",
        status: "active",
        avatar: "M",
      },
      {
        id: 7,
        name: "Tech Events Co.",
        email: "tech@events.sy",
        city: "Damascus",
        category: "Education",
        events: 2,
        revenue: 240000,
        rating: 4.9,
        joined: "Mar 5, 2025",
        status: "active",
        avatar: "T",
      },
      {
        id: 8,
        name: "Damascus Tours",
        email: "info@dtours.sy",
        city: "Damascus",
        category: "Tourism",
        events: 0,
        revenue: 0,
        rating: 0,
        joined: "Apr 10, 2025",
        status: "pending",
        avatar: "D",
      },
      {
        id: 9,
        name: "Homs Sports Arena",
        email: "arena@homs.sy",
        city: "Homs",
        category: "Sports",
        events: 1,
        revenue: 5000,
        rating: 3.5,
        joined: "Mar 22, 2025",
        status: "suspended",
        avatar: "H",
      },
      {
        id: 10,
        name: "Creative Studio",
        email: "hello@creative.sy",
        city: "Latakia",
        category: "Arts",
        events: 6,
        revenue: 54000,
        rating: 4.6,
        joined: "Feb 14, 2025",
        status: "active",
        avatar: "C",
      },
    ];
    var filtered = allData.slice(),
      page = 1,
      isGrid = false,
      PER_PAGE = 10;
    function stars(r) {
      if (!r)
        return '<span style="color:var(--text-muted);font-size:12px">No rating</span>';
      var s = "";
      for (var i = 1; i <= 5; i++)
        s +=
          '<i class="fas fa-star" style="color:' +
          (i <= Math.round(r) ? "#f59e0b" : "var(--border)") +
          ';font-size:11px"></i>';
      return (
        s +
        ' <span style="font-size:12px;color:var(--text-muted)">(' +
        r +
        ")</span>"
      );
    }
    // buildRow
    function buildRow(p) {
      return (
        '<tr data-id="' +
        p.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        p.avatar +
        "</div>" +
        '<div><div class="event-name">' +
        p.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-envelope"></i> ' +
        p.email +
        "</div></div></div></td>" +
        '<td><span class="city-cell"><i class="fas fa-map-marker-alt"></i> ' +
        p.city +
        "</span></td>" +
        '<td><span class="category-tag">' +
        p.category +
        "</span></td>" +
        '<td><span class="tickets-count">' +
        p.events +
        "</span></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        p.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        stars(p.rating) +
        "</td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        p.joined +
        "</span></td>" +
        "<td>" +
        (BADGES[p.status] || "") +
        "</td>" +
        '<td><div class="table-actions">' +
        '<button type="button" class="btn btn-ghost btn-icon btn-sm pv-view" data-id="' +
        p.id +
        '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button type="button" class="btn btn-ghost btn-icon btn-sm pv-edit" data-id="' +
        p.id +
        '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button type="button" class="btn btn-ghost btn-icon btn-sm btn-danger pv-del" data-id="' +
        p.id +
        '" title="Delete"><i class="fas fa-trash"></i></button>' +
        "</div></td>" +
        "</tr>"
      );
    }

    // event delegation لزرار العين
    $(document).on("click", ".pv-view", function () {
      let row = $(this).closest("tr");

      let name = row.find(".event-name").text();
      let email = row.find(".event-meta").text().trim();
      let city = row.find(".city-cell").text().trim();
      let events = row.find(".tickets-count").text().trim();
      let date = row.find(".date-cell").text().trim();
      let status = row.find(".badge").text().trim();

      $("#popName").text(name);
      $("#popEmail").text(email);
      $("#popCity").text(city);
      $("#popEvents").text(events);
      $("#popDate").text(date);
      $("#popStatus").text(status);

      $("#viewPopup").css("display", "flex");
    });

    function closePopup() {
      $("#viewPopup").hide();
    }
    function buildCard(p) {
      return (
        '<div class="event-grid-card" data-id="' +
        p.id +
        '"><div class="event-grid-thumb" style="background:var(--primary-light);display:flex;align-items:center;justify-content:center"><div style="width:60px;height:60px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700">' +
        p.avatar +
        '</div></div><div class="event-grid-body"><div class="event-grid-name">' +
        p.name +
        '</div><div class="event-grid-meta"><span><i class="fas fa-map-marker-alt"></i> ' +
        p.city +
        '</span><span><i class="fas fa-ticket-alt"></i> ' +
        p.events +
        ' events</span><span><i class="fas fa-envelope"></i> ' +
        p.email +
        '</span></div><div class="event-grid-footer"><span>' +
        (BADGES[p.status] || "") +
        '</span><span class="event-grid-revenue"><i class="fas fa-coins"></i> ' +
        p.revenue.toLocaleString() +
        "</span></div></div></div>"
      );
    }
    function renderPagination() {
      var pages = Math.ceil(filtered.length / PER_PAGE);
      if (pages <= 1) {
        $("#pagination").html("");
        return;
      }
      var html =
        '<button class="page-btn" data-page="' +
        (page - 1) +
        '"' +
        (page === 1 ? " disabled" : "") +
        '><i class="fas fa-chevron-left"></i></button>';
      for (var i = 1; i <= pages; i++)
        html +=
          '<button class="page-btn' +
          (i === page ? " active" : "") +
          '" data-page="' +
          i +
          '">' +
          i +
          "</button>";
      html +=
        '<button class="page-btn" data-page="' +
        (page + 1) +
        '"' +
        (page === pages ? " disabled" : "") +
        '><i class="fas fa-chevron-right"></i></button><span class="page-info">Page ' +
        page +
        " of " +
        pages +
        "</span>";
      $("#pagination").html(html);
    }
    function render() {
      var start = (page - 1) * PER_PAGE,
        rows = filtered.slice(start, start + PER_PAGE);
      if (isGrid) $("#eventsGrid").html($.map(rows, buildCard).join(""));
      else $("#eventsBody").html($.map(rows, buildRow).join(""));
      $("#tableCount").text(
        "Showing " +
          Math.min(start + PER_PAGE, filtered.length) +
          " of " +
          filtered.length +
          " providers",
      );
      renderPagination();
    }
    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase(),
        city = $("#cityFilter").val(),
        status = $("#statusFilter").val();
      filtered = $.grep(allData, function (p) {
        return (
          (!s ||
            p.name.toLowerCase().indexOf(s) > -1 ||
            p.email.toLowerCase().indexOf(s) > -1) &&
          (!city || p.city === city) &&
          (!status || p.status === status)
        );
      });
      page = 1;
      render();
    }
    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #statusFilter").on("change", applyFilters);
      $("#exportBtn").on("click", function () {
        showToast("Exporting providers...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });
      $("#eventsBody")
        .on(
          "click",
          ".pv-view",
          function () {
            var p = $.grep(allData, function (x) {
              return x.id === +$(this).data("id");
            })[0];
            if (p) showToast("Viewing: " + p.name, "info");
          }.bind(null),
        )
        .on("click", ".pv-view", function () {
          var p = $.grep(allData, function (x) {
            return x.id === +$(this).data("id");
          })[0];
          if (p) showToast("Viewing: " + p.name, "info");
        })
        .on("click", ".pv-edit", function () {
          var p = $.grep(allData, function (x) {
            return x.id === +$(this).data("id");
          })[0];
          if (p) showToast("Editing: " + p.name, "info");
        })
        .on("click", ".pv-del", function () {
          var id = +$(this).data("id"),
            p = $.grep(allData, function (x) {
              return x.id === id;
            })[0];
          if (p && confirm("Remove: " + p.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast("Removed", "error");
          }
        });
      $("#viewList").on("click", function () {
        isGrid = false;
        $("#eventsTable").closest(".table-scroll-wrap").show();
        $("#eventsGrid").removeClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#viewGrid").on("click", function () {
        isGrid = true;
        $("#eventsTable").closest(".table-scroll-wrap").hide();
        $("#eventsGrid").addClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#pagination").on("click", ".page-btn:not([disabled])", function () {
        var t = +$(this).data("page"),
          pages = Math.ceil(filtered.length / PER_PAGE);
        if (t >= 1 && t <= pages) {
          page = t;
          render();
        }
      });
      render();
    });
  })();
}

$(document).on("click", ".pv-view", function () {
  let row = $(this).closest("tr");

  let name = row.find(".event-name").text();
  let email = row.find(".event-meta").text().replace("✉️", "").trim();
  let phone = row.find(".fa-phone").parent().text().trim();
  let city = row.find(".city-cell").text().trim();
  let events = row.find(".tickets-count").text().trim();
  let date = row.find(".fa-calendar-alt").parent().text().trim();
  let status = row.find(".badge").text().trim();

  $("#popName").text(name);
  $("#popEmail").text(email);
  $("#popPhone").text(phone);
  $("#popCity").text(city);
  $("#popEvents").text(events);
  $("#popDate").text(date);
  $("#popStatus").text(status);

  $("#viewPopup").css("display", "flex");
});

function closePopup() {
  $("#viewPopup").hide();
}

// └─ END: 06a · All Providers ───────────────────────────────────────┘



// ── 06b · Active Providers (providers-active.html) ─────────────────
if (
  $("#eventsBody").length &&
  window.location.pathname.indexOf("providers-active.html") > -1
) {
  (function () {
    var allData = [
      {
        id: 1,
        name: "Entertainment Co.",
        email: "info@entco.sy",
        city: "Damascus",
        category: "Music",
        events: 12,
        revenue: 245000,
        rating: 4.8,
        joined: "Jan 10, 2025",
      },
      {
        id: 2,
        name: "Sports Club Syria",
        email: "contact@scs.sy",
        city: "Aleppo",
        category: "Sports",
        events: 8,
        revenue: 180000,
        rating: 4.5,
        joined: "Feb 3, 2025",
      },
      {
        id: 3,
        name: "Travel Agency",
        email: "hello@travel.sy",
        city: "Latakia",
        category: "Tourism",
        events: 5,
        revenue: 97500,
        rating: 4.2,
        joined: "Mar 15, 2025",
      },
      {
        id: 5,
        name: "Success Academy",
        email: "info@success.sy",
        city: "Damascus",
        category: "Education",
        events: 7,
        revenue: 63000,
        rating: 4.7,
        joined: "Jan 20, 2025",
      },
      {
        id: 6,
        name: "Music House",
        email: "music@house.sy",
        city: "Aleppo",
        category: "Music",
        events: 4,
        revenue: 72000,
        rating: 4.3,
        joined: "Feb 28, 2025",
      },
      {
        id: 7,
        name: "Tech Events Co.",
        email: "tech@events.sy",
        city: "Damascus",
        category: "Education",
        events: 2,
        revenue: 240000,
        rating: 4.9,
        joined: "Mar 5, 2025",
      },
      {
        id: 10,
        name: "Creative Studio",
        email: "hello@creative.sy",
        city: "Latakia",
        category: "Arts",
        events: 6,
        revenue: 54000,
        rating: 4.6,
        joined: "Feb 14, 2025",
      },
    ];
    var filtered = allData.slice(),
      isGrid = false;
    function stars(r) {
      var s = "";
      for (var i = 1; i <= 5; i++)
        s +=
          '<i class="fas fa-star" style="color:' +
          (i <= Math.round(r) ? "#f59e0b" : "var(--border)") +
          ';font-size:11px"></i>';
      return (
        s +
        ' <span style="font-size:12px;color:var(--text-muted)">(' +
        r +
        ")</span>"
      );
    }
    // --- buildRow ---
    function buildRow(p) {
      return (
        '<tr data-id="' +
        p.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        p.name.charAt(0) +
        "</div>" +
        '<div><div class="event-name">' +
        p.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-envelope"></i> ' +
        p.email +
        "</div></div></div></td>" +
        '<td><span class="city-cell"><i class="fas fa-map-marker-alt"></i> ' +
        p.city +
        "</span></td>" +
        '<td><span class="category-tag">' +
        p.category +
        "</span></td>" +
        '<td><span class="tickets-count">' +
        p.events +
        "</span></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        p.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        stars(p.rating) +
        "</td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        p.joined +
        "</span></td>" +
        '<td><span class="badge active"><span class="badge-dot"></span>Active</span></td>' +
        '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm pv-view" data-id="' +
        p.id +
        '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm pv-suspend" data-id="' +
        p.id +
        '" title="Suspend"><i class="fas fa-ban"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger pv-del" data-id="' +
        p.id +
        '" title="Remove"><i class="fas fa-trash"></i></button>' +
        "</div></td>" +
        "</tr>"
      );
    }

    // --- Event Delegation لزرار العين ---
    $(document).on("click", ".pv-view", function () {
      let row = $(this).closest("tr");

      // استخراج البيانات من الصف
      let name = row.find(".event-name").text();
      let email = row.find(".event-meta").text().trim();
      let city = row.find(".city-cell").text().trim();
      let events = row.find(".tickets-count").text().trim();
      let date = row.find(".date-cell").text().trim();
      let status = row.find(".badge").text().trim();

      // تحديث محتوى Popup
      $("#popName").text(name);
      $("#popEmail").text(email);
      $("#popCity").text(city);
      $("#popEvents").text(events);
      $("#popDate").text(date);
      $("#popStatus").text(status);

      // اظهار Popup
      $("#viewPopup").css("display", "flex");
    });

    // --- غلق Popup ---
    function closePopup() {
      $("#viewPopup").hide();
    }
    function buildCard(p) {
      return (
        '<div class="event-grid-card" data-id="' +
        p.id +
        '"><div class="event-grid-thumb" style="background:#d1fae5;display:flex;align-items:center;justify-content:center"><div style="width:60px;height:60px;border-radius:50%;background:#10b981;color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700">' +
        p.name.charAt(0) +
        '</div></div><div class="event-grid-body"><div class="event-grid-name">' +
        p.name +
        '</div><div class="event-grid-meta"><span><i class="fas fa-map-marker-alt"></i> ' +
        p.city +
        '</span><span><i class="fas fa-ticket-alt"></i> ' +
        p.events +
        ' events</span></div><div class="event-grid-footer"><span class="badge active"><span class="badge-dot"></span>Active</span><span class="event-grid-revenue"><i class="fas fa-coins"></i> ' +
        p.revenue.toLocaleString() +
        "</span></div></div></div>"
      );
    }
    function render() {
      if (isGrid) $("#eventsGrid").html($.map(filtered, buildCard).join(""));
      else $("#eventsBody").html($.map(filtered, buildRow).join(""));
      $("#tableCount").text("Showing " + filtered.length + " active providers");
    }
    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase(),
        city = $("#cityFilter").val(),
        cat = $("#categoryFilter").val();
      filtered = $.grep(allData, function (p) {
        return (
          (!s ||
            p.name.toLowerCase().indexOf(s) > -1 ||
            p.email.toLowerCase().indexOf(s) > -1) &&
          (!city || p.city === city) &&
          (!cat || p.category === cat)
        );
      });
      render();
    }
    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #categoryFilter").on("change", applyFilters);
      $("#exportBtn").on("click", function () {
        showToast("Exporting...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });
      $("#eventsBody")
        .on("click", ".pv-view", function () {
          var p = $.grep(allData, function (x) {
            return x.id === +$(this).data("id");
          })[0];
          if (p) showToast("Viewing: " + p.name, "info");
        })
        .on("click", ".pv-suspend", function () {
          var id = +$(this).data("id"),
            p = $.grep(allData, function (x) {
              return x.id === id;
            })[0];
          if (p && confirm("Suspend: " + p.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast(p.name + " suspended", "error");
          }
        })
        .on("click", ".pv-del", function () {
          var id = +$(this).data("id"),
            p = $.grep(allData, function (x) {
              return x.id === id;
            })[0];
          if (p && confirm("Remove: " + p.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast("Removed", "error");
          }
        });
      $("#viewList").on("click", function () {
        isGrid = false;
        $("#eventsTable").closest(".table-scroll-wrap").show();
        $("#eventsGrid").removeClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#viewGrid").on("click", function () {
        isGrid = true;
        $("#eventsTable").closest(".table-scroll-wrap").hide();
        $("#eventsGrid").addClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      render();
    });
  })();
}

// └─ END: 06b · Active Providers ────────────────────────────────────┘



// ── 06c · Pending Providers (providers-pending.html) ───────────────
if (
  $("#eventsBody").length &&
  window.location.pathname.indexOf("providers-pending.html") > -1
) {
  (function () {
    var allData = [
      {
        id: 4,
        name: "Arts House",
        email: "arts@house.sy",
        city: "Homs",
        category: "Arts",
        submitted: "Apr 1, 2026",
        reason: "Awaiting document review",
        docs: "Incomplete",
      },
      {
        id: 8,
        name: "Damascus Tours",
        email: "info@dtours.sy",
        city: "Damascus",
        category: "Tourism",
        submitted: "Apr 10, 2026",
        reason: "Under admin review",
        docs: "Complete",
      },
      {
        id: 11,
        name: "Nour Events",
        email: "nour@events.sy",
        city: "Damascus",
        category: "Music",
        submitted: "Apr 12, 2026",
        reason: "Pending final approval",
        docs: "Complete",
      },
      {
        id: 12,
        name: "Aleppo Sports Hub",
        email: "info@alepposh.sy",
        city: "Aleppo",
        category: "Sports",
        submitted: "Apr 13, 2026",
        reason: "Missing tax certificate",
        docs: "Incomplete",
      },
      {
        id: 13,
        name: "Green Trails",
        email: "info@gtrails.sy",
        city: "Latakia",
        category: "Tourism",
        submitted: "Apr 14, 2026",
        reason: "Pending address verification",
        docs: "Incomplete",
      },
    ];
    var filtered = allData.slice();
    function docsBadge(d) {
      return d === "Complete"
        ? '<span class="badge active"><span class="badge-dot"></span>Complete</span>'
        : '<span class="badge pending"><span class="badge-dot"></span>Incomplete</span>';
    }
    // ==================== buildRow ====================
    function buildRow(p) {
      return (
        '<tr data-id="' +
        p.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        p.name.charAt(0) +
        "</div>" +
        '<div><div class="event-name">' +
        p.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-envelope"></i> ' +
        p.email +
        "</div></div></div></td>" +
        '<td><span class="city-cell"><i class="fas fa-map-marker-alt"></i> ' +
        p.city +
        "</span></td>" +
        '<td><span class="category-tag">' +
        p.category +
        "</span></td>" +
        "<td>" +
        docsBadge(p.docs) +
        "</td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        p.submitted +
        "</span></td>" +
        '<td><span style="font-size:12px;color:var(--text-muted)">' +
        p.reason +
        "</span></td>" +
        '<td><span class="badge pending"><span class="badge-dot"></span>Pending</span></td>' +
        '<td><div class="table-actions">' +
        '<button class="btn btn-primary btn-sm pn-approve" data-id="' +
        p.id +
        '"><i class="fas fa-check"></i> Approve</button>' +
        '<button class="btn btn-ghost btn-icon btn-sm pn-view" data-id="' +
        p.id +
        '"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger pn-reject" data-id="' +
        p.id +
        '"><i class="fas fa-times"></i></button>' +
        "</div></td>" +
        "</tr>"
      );
    }

    // ==================== Event Delegation  View ====================
    $(document).on("click", ".pn-view", function () {
      let row = $(this).closest("tr");

      let name = row.find(".event-name").text();
      let email = row.find(".event-meta").text().trim();
      let city = row.find(".city-cell").text().trim();
      let docs = row.find("td:nth-child(5)").text().trim();
      let submitted = row.find(".date-cell").text().trim();
      let reason = row.find("td:nth-child(7) span").text().trim();
      let status = row.find(".badge").text().trim();

      $("#popName").text(name);
      $("#popEmail").text(email);
      $("#popCity").text(city);
      $("#popDocs").text(docs);
      $("#popSubmitted").text(submitted);
      $("#popReason").text(reason);
      $("#popStatus").text(status);

      $("#viewPopup").css("display", "flex");
    });

    // ====================  Popup ====================
    function closePopup() {
      $("#viewPopup").hide();
    }

    // ====================  للـ docsBadge ====================
    function docsBadge(docs) {
      if (docs && docs.length > 0)
        return '<span class="docs-badge">' + docs + "</span>";
      return '<span class="docs-badge">No Docs</span>';
    }
    function render() {
      $("#eventsBody").html($.map(filtered, buildRow).join(""));
      $("#tableCount").text(
        "Showing " + filtered.length + " pending providers",
      );
    }
    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase(),
        city = $("#cityFilter").val(),
        docs = $("#docsFilter").val();
      filtered = $.grep(allData, function (p) {
        return (
          (!s ||
            p.name.toLowerCase().indexOf(s) > -1 ||
            p.email.toLowerCase().indexOf(s) > -1) &&
          (!city || p.city === city) &&
          (!docs || p.docs === docs)
        );
      });
      render();
    }
    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter,#docsFilter").on("change", applyFilters);
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });
      $("#eventsBody")
        .on("click", ".pn-approve", function () {
          var id = +$(this).data("id"),
            p = $.grep(allData, function (x) {
              return x.id === id;
            })[0];
          if (p && confirm("Approve: " + p.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast(p.name + " approved", "success");
          }
        })
        .on("click", ".pn-view", function () {
          var p = $.grep(allData, function (x) {
            return x.id === +$(this).data("id");
          })[0];
          if (p) showToast("Viewing: " + p.name, "info");
        })
        .on("click", ".pn-reject", function () {
          var id = +$(this).data("id"),
            p = $.grep(allData, function (x) {
              return x.id === id;
            })[0];
          if (p && confirm("Reject: " + p.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast(p.name + " rejected", "error");
          }
        });
      render();
    });
  })();
}

// └─ END: 06c · Pending Providers ───────────────────────────────────┘



// ── 06d · Registration Requests (providers-requests.html) ──────────
if (
  $("#eventsBody").length &&
  window.location.pathname.indexOf("providers-requests.html") > -1
) {
  (function () {
    var allData = [
      {
        id: 1,
        name: "Nour Events",
        email: "nour@events.sy",
        city: "Damascus",
        category: "Music",
        docs: "Complete",
        submitted: "Apr 1, 2026",
        notes: "Verified commercial license",
      },
      {
        id: 2,
        name: "Aleppo Sports Hub",
        email: "info@alepposh.sy",
        city: "Aleppo",
        category: "Sports",
        docs: "Incomplete",
        submitted: "Apr 2, 2026",
        notes: "Missing tax certificate",
      },
      {
        id: 3,
        name: "Coastal Trips",
        email: "hello@coastal.sy",
        city: "Latakia",
        category: "Tourism",
        docs: "Complete",
        submitted: "Apr 3, 2026",
        notes: "All documents verified",
      },
      {
        id: 4,
        name: "Homs Art Gallery",
        email: "art@homs.sy",
        city: "Homs",
        category: "Arts",
        docs: "Incomplete",
        submitted: "Apr 4, 2026",
        notes: "Awaiting ID copy",
      },
      {
        id: 5,
        name: "EduSyria",
        email: "contact@edusyr.sy",
        city: "Damascus",
        category: "Education",
        docs: "Complete",
        submitted: "Apr 5, 2026",
        notes: "University partnership confirmed",
      },
      {
        id: 6,
        name: "Beat Productions",
        email: "beat@prod.sy",
        city: "Aleppo",
        category: "Music",
        docs: "Complete",
        submitted: "Apr 6, 2026",
        notes: "Studio registered",
      },
      {
        id: 7,
        name: "Green Trails",
        email: "info@gtrails.sy",
        city: "Latakia",
        category: "Tourism",
        docs: "Incomplete",
        submitted: "Apr 7, 2026",
        notes: "Pending address proof",
      },
    ];
    var filtered = allData.slice();
    function docsBadge(d) {
      return d === "Complete"
        ? '<span class="badge active"><span class="badge-dot"></span>Complete</span>'
        : '<span class="badge pending"><span class="badge-dot"></span>Incomplete</span>';
    }
    function buildRow(r) {
      return (
        '<tr data-id="' +
        r.id +
        '"><td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        r.name.charAt(0) +
        '</div><div><div class="event-name">' +
        r.name +
        '</div><div class="event-meta"><i class="fas fa-envelope"></i> ' +
        r.email +
        "</div></div></div></td>" +
        '<td><span class="city-cell"><i class="fas fa-map-marker-alt"></i> ' +
        r.city +
        "</span></td>" +
        '<td><span class="category-tag">' +
        r.category +
        "</span></td>" +
        "<td>" +
        docsBadge(r.docs) +
        "</td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        r.submitted +
        "</span></td>" +
        '<td><span style="font-size:12px;color:var(--text-muted)">' +
        r.notes +
        "</span></td>" +
        '<td><div class="table-actions"><button class="btn btn-primary btn-sm rq-approve" data-id="' +
        r.id +
        '"><i class="fas fa-check"></i> Approve</button><button class="btn btn-ghost btn-sm btn-danger rq-reject" data-id="' +
        r.id +
        '"><i class="fas fa-times"></i> Reject</button><button class="btn btn-ghost btn-icon btn-sm rq-view" data-id="' +
        r.id +
        '"><i class="fas fa-file-alt"></i></button></div></td></tr>'
      );
    }
    function render() {
      $("#eventsBody").html($.map(filtered, buildRow).join(""));
      $("#tableCount").text("Showing " + filtered.length + " pending requests");
    }
    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase(),
        city = $("#cityFilter").val(),
        docs = $("#docsFilter").val();
      filtered = $.grep(allData, function (r) {
        return (
          (!s ||
            r.name.toLowerCase().indexOf(s) > -1 ||
            r.email.toLowerCase().indexOf(s) > -1) &&
          (!city || r.city === city) &&
          (!docs || r.docs === docs)
        );
      });
      render();
    }
    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter,#docsFilter").on("change", applyFilters);
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });
      $("#eventsBody")
        .on("click", ".rq-approve", function () {
          var id = +$(this).data("id"),
            r = $.grep(allData, function (x) {
              return x.id === id;
            })[0];
          if (r && confirm("Approve: " + r.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast(r.name + " approved", "success");
          }
        })
        .on("click", ".rq-reject", function () {
          var id = +$(this).data("id"),
            r = $.grep(allData, function (x) {
              return x.id === id;
            })[0];
          if (r && confirm("Reject: " + r.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast(r.name + " rejected", "error");
          }
        })
        .on("click", ".rq-view", function () {
          var r = $.grep(allData, function (x) {
            return x.id === +$(this).data("id");
          })[0];
          if (r) showToast("Viewing docs: " + r.name, "info");
        });
      render();
    });
  })();
}

// └─ END: 06d · Registration Requests ───────────────────────────────┘



// ── 06e · Provider Performance Reports (providers-reports.html) ────
if (
  $("#eventsBody").length &&
  window.location.pathname.indexOf("providers-reports.html") > -1
) {
  (function () {
    var allData = [
      {
        id: 7,
        name: "Tech Events Co.",
        city: "Damascus",
        events: 2,
        sold: 400,
        revenue: 240000,
        rating: 4.9,
        cancelRate: "2%",
        rank: 1,
      },
      {
        id: 1,
        name: "Entertainment Co.",
        city: "Damascus",
        events: 12,
        sold: 700,
        revenue: 245000,
        rating: 4.8,
        cancelRate: "3%",
        rank: 2,
      },
      {
        id: 5,
        name: "Success Academy",
        city: "Damascus",
        events: 7,
        sold: 95,
        revenue: 63000,
        rating: 4.7,
        cancelRate: "1%",
        rank: 3,
      },
      {
        id: 10,
        name: "Creative Studio",
        city: "Latakia",
        events: 6,
        sold: 250,
        revenue: 54000,
        rating: 4.6,
        cancelRate: "4%",
        rank: 4,
      },
      {
        id: 6,
        name: "Music House",
        city: "Aleppo",
        events: 4,
        sold: 200,
        revenue: 72000,
        rating: 4.3,
        cancelRate: "5%",
        rank: 5,
      },
      {
        id: 2,
        name: "Sports Club Syria",
        city: "Aleppo",
        events: 8,
        sold: 650,
        revenue: 180000,
        rating: 4.5,
        cancelRate: "6%",
        rank: 6,
      },
      {
        id: 3,
        name: "Travel Agency",
        city: "Latakia",
        events: 5,
        sold: 75,
        revenue: 97500,
        rating: 4.2,
        cancelRate: "3%",
        rank: 7,
      },
      {
        id: 9,
        name: "Homs Sports Arena",
        city: "Homs",
        events: 1,
        sold: 150,
        revenue: 5000,
        rating: 3.5,
        cancelRate: "12%",
        rank: 8,
      },
      {
        id: 4,
        name: "Arts House",
        city: "Homs",
        events: 3,
        sold: 20,
        revenue: 18000,
        rating: 3.9,
        cancelRate: "8%",
        rank: 9,
      },
    ];
    var filtered = allData.slice();
    function rankBadge(r) {
      if (r === 1)
        return '<span style="color:#f59e0b;font-weight:700"><i class="fas fa-trophy"></i> #1</span>';
      if (r === 2)
        return '<span style="color:#94a3b8;font-weight:700"><i class="fas fa-medal"></i> #2</span>';
      if (r === 3)
        return '<span style="color:#cd7f32;font-weight:700"><i class="fas fa-medal"></i> #3</span>';
      return '<span style="color:var(--text-muted)">#' + r + "</span>";
    }
    function stars(r) {
      var s = "";
      for (var i = 1; i <= 5; i++)
        s +=
          '<i class="fas fa-star" style="color:' +
          (i <= Math.round(r) ? "#f59e0b" : "var(--border)") +
          ';font-size:11px"></i>';
      return (
        s +
        ' <span style="font-size:12px;color:var(--text-muted)">(' +
        r +
        ")</span>"
      );
    }
    function buildRow(p) {
      return (
        '<tr data-id="' +
        p.id +
        '"><td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        p.name.charAt(0) +
        '</div><div><div class="event-name">' +
        p.name +
        "</div></div></div></td>" +
        '<td><span class="city-cell"><i class="fas fa-map-marker-alt"></i> ' +
        p.city +
        "</span></td>" +
        '<td><span class="tickets-count">' +
        p.events +
        "</span></td>" +
        '<td><span class="tickets-count">' +
        p.sold.toLocaleString() +
        "</span></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        p.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        stars(p.rating) +
        "</td>" +
        '<td><span style="font-size:13px;color:' +
        (parseFloat(p.cancelRate) > 8 ? "var(--danger)" : "var(--text-muted)") +
        '">' +
        p.cancelRate +
        "</span></td>" +
        "<td>" +
        rankBadge(p.rank) +
        "</td>" +
        '<td><div class="table-actions"><button class="btn btn-ghost btn-icon btn-sm rp-view" data-id="' +
        p.id +
        '" title="View Report"><i class="fas fa-chart-bar"></i></button><button class="btn btn-ghost btn-icon btn-sm rp-export" data-id="' +
        p.id +
        '" title="Export"><i class="fas fa-file-export"></i></button></div></td></tr>'
      );
    }
    function render() {
      $("#eventsBody").html($.map(filtered, buildRow).join(""));
      $("#tableCount").text("Showing " + filtered.length + " providers");
    }
    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase(),
        city = $("#cityFilter").val();
      filtered = $.grep(allData, function (p) {
        return (
          (!s || p.name.toLowerCase().indexOf(s) > -1) &&
          (!city || p.city === city)
        );
      });
      render();
    }
    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #periodFilter").on("change", applyFilters);
      $("#exportBtn").on("click", function () {
        showToast("Exporting performance report...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });
      $("#eventsBody")
        .on("click", ".rp-view", function () {
          var p = $.grep(allData, function (x) {
            return x.id === +$(this).data("id");
          })[0];
          if (p) showToast("Viewing report: " + p.name, "info");
        })
        .on("click", ".rp-export", function () {
          showToast("Exporting...", "success");
        });
      render();
    });
  })();
}

// └─ END: 06e · Provider Performance Reports ────────────────────────┘
// └─ END: 06 · Providers ─────────────────────────────────────────────┘




// ┌──────────────────────────────────────────────────────────────────┐
// │  07 · Events                                                     │
// │       events.html · events-active.html · events-review.html      │
// │       events-rejected.html · events-ended.html                   │
// └──────────────────────────────────────────────────────────────────┘

// ── 07a · All Events (events.html) ─────────────────────────────────
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() ===
    "events.html"
) {
  (function ($) {
    "use strict";
    var BADGES = {
      active:
        '<span class="badge active"><span class="badge-dot"></span>Active</span>',
      pending:
        '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
      rejected:
        '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
      ended:
        '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
    };
    var ICONS = {
      Music: "fa-music",
      Sports: "fa-futbol",
      Tourism: "fa-plane",
      Arts: "fa-palette",
      Education: "fa-graduation-cap",
    };
    var COLORS = {
      Music: "cat-music",
      Sports: "cat-sports",
      Tourism: "cat-tourism",
      Arts: "cat-arts",
      Education: "cat-education",
    };

    var allData = [
      {
        id: 1,
        name: "Music Concert — Damascus",
        provider: "Entertainment Co.",
        category: "Music",
        city: "Damascus",
        date: "Apr 15, 2026",
        sold: 320,
        total: 500,
        revenue: 48000,
        status: "active",
        img: "https://picsum.photos/seed/music1/80/80",
      },
      {
        id: 2,
        name: "Football Tournament",
        provider: "Sports Club",
        category: "Sports",
        city: "Aleppo",
        date: "Apr 20, 2026",
        sold: 150,
        total: 1000,
        revenue: 22500,
        status: "pending",
        img: "https://picsum.photos/seed/sport1/80/80",
      },
      {
        id: 3,
        name: "Tourism Trip — Latakia",
        provider: "Travel Agency",
        category: "Tourism",
        city: "Latakia",
        date: "May 1, 2026",
        sold: 45,
        total: 60,
        revenue: 13500,
        status: "active",
        img: "https://picsum.photos/seed/travel1/80/80",
      },
      {
        id: 4,
        name: "Fine Arts Exhibition",
        provider: "Arts House",
        category: "Arts",
        city: "Homs",
        date: "Apr 10, 2026",
        sold: 0,
        total: 200,
        revenue: 0,
        status: "rejected",
        img: "https://picsum.photos/seed/arts1/80/80",
      },
      {
        id: 5,
        name: "Self Development Workshop",
        provider: "Success Academy",
        category: "Education",
        city: "Damascus",
        date: "Apr 25, 2026",
        sold: 80,
        total: 100,
        revenue: 12000,
        status: "active",
        img: "https://picsum.photos/seed/edu1/80/80",
      },
      {
        id: 6,
        name: "Jazz Night",
        provider: "Music House",
        category: "Music",
        city: "Aleppo",
        date: "May 5, 2026",
        sold: 200,
        total: 300,
        revenue: 30000,
        status: "active",
        img: "https://picsum.photos/seed/jazz1/80/80",
      },
      {
        id: 7,
        name: "Marathon 2026",
        provider: "Sports Club",
        category: "Sports",
        city: "Damascus",
        date: "May 10, 2026",
        sold: 500,
        total: 2000,
        revenue: 75000,
        status: "active",
        img: "https://picsum.photos/seed/run1/80/80",
      },
      {
        id: 8,
        name: "Photography Workshop",
        provider: "Arts House",
        category: "Arts",
        city: "Homs",
        date: "Apr 30, 2026",
        sold: 20,
        total: 30,
        revenue: 6000,
        status: "pending",
        img: "https://picsum.photos/seed/photo1/80/80",
      },
      {
        id: 9,
        name: "Desert Safari",
        provider: "Travel Agency",
        category: "Tourism",
        city: "Latakia",
        date: "May 15, 2026",
        sold: 30,
        total: 50,
        revenue: 15000,
        status: "active",
        img: "https://picsum.photos/seed/desert1/80/80",
      },
      {
        id: 10,
        name: "Tech Conference 2026",
        provider: "Tech Events Co.",
        category: "Education",
        city: "Damascus",
        date: "Jun 1, 2026",
        sold: 400,
        total: 600,
        revenue: 120000,
        status: "active",
        img: "https://picsum.photos/seed/tech1/80/80",
      },
      {
        id: 11,
        name: "Comedy Show",
        provider: "Entertainment Co.",
        category: "Music",
        city: "Aleppo",
        date: "Apr 18, 2026",
        sold: 180,
        total: 250,
        revenue: 27000,
        status: "ended",
        img: "https://picsum.photos/seed/comedy1/80/80",
      },
      {
        id: 12,
        name: "Cooking Class",
        provider: "Success Academy",
        category: "Education",
        city: "Damascus",
        date: "Apr 5, 2026",
        sold: 15,
        total: 20,
        revenue: 3000,
        status: "ended",
        img: "https://picsum.photos/seed/cook1/80/80",
      },
    ];

    var filtered = allData.slice();
    var page = 1;
    var isGrid = false;
    var PER_PAGE = 100;

    function buildRow(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var icon = ICONS[e.category] || "fa-tag";
      var cc = COLORS[e.category] || "";
      return (
        '<tr data-id="' +
        e.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="event-cell"><img src="' +
        e.img +
        '" class="event-thumb-img"><div>' +
        '<div class="event-name">' +
        e.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</div>" +
        "</div></div></td>" +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        e.provider.charAt(0) +
        "</div><span>" +
        e.provider +
        "</span></div></td>" +
        '<td><span class="category-tag ' +
        cc +
        '-tag"><i class="fas ' +
        icon +
        '"></i> ' +
        e.category +
        "</span></td>" +
        '<td><span class="city-cell"><i class="fas fa-city"></i> ' +
        e.city +
        "</span></td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span></td>" +
        '<td><div class="tickets-cell"><span class="tickets-count">' +
        e.sold +
        ' <span class="tickets-total">/ ' +
        e.total +
        "</span></span>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<span class="tickets-pct">' +
        pct +
        "%</span></div></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        (BADGES[e.status] || "") +
        "</td>" +
        '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' +
        e.id +
        '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' +
        e.id +
        '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' +
        e.id +
        '" title="Delete"><i class="fas fa-trash"></i></button>' +
        "</div></td></tr>"
      );
    }

    function buildCard(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var cc = COLORS[e.category] || "";
      return (
        '<div class="event-grid-card" data-id="' +
        e.id +
        '">' +
        '<div class="event-grid-thumb ' +
        cc +
        '"><img src="' +
        e.img +
        '" class="event-grid-img"></div>' +
        '<div class="event-grid-body">' +
        '<div class="event-grid-name">' +
        e.name +
        "</div>" +
        '<div class="event-grid-meta">' +
        '<span><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</span>" +
        '<span><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span>" +
        '<span><i class="fas fa-user"></i> ' +
        e.provider +
        "</span>" +
        "</div>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<div class="event-grid-footer">' +
        "<span>" +
        (BADGES[e.status] || "") +
        "</span>" +
        '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span>" +
        "</div>" +
        "</div></div>"
      );
    }

    function render() {
      var start = (page - 1) * PER_PAGE;
      var rows = filtered.slice(start, start + PER_PAGE);
      if (isGrid) {
        $("#eventsGrid").html($.map(rows, buildCard).join(""));
      } else {
        $("#eventsBody").html($.map(rows, buildRow).join(""));
      }
      $("#tableCount").text(
        "Showing " +
          Math.min(start + PER_PAGE, filtered.length) +
          " of " +
          filtered.length +
          " events",
      );
      renderPagination();
    }

    function renderPagination() {
      var pages = Math.ceil(filtered.length / PER_PAGE);
      var html =
        '<button class="page-btn" data-page="' +
        (page - 1) +
        '"' +
        (page === 1 ? " disabled" : "") +
        '><i class="fas fa-chevron-left"></i></button>';
      for (var i = 1; i <= pages; i++) {
        html +=
          '<button class="page-btn' +
          (i === page ? " active" : "") +
          '" data-page="' +
          i +
          '">' +
          i +
          "</button>";
      }
      html +=
        '<button class="page-btn" data-page="' +
        (page + 1) +
        '"' +
        (page === pages ? " disabled" : "") +
        '><i class="fas fa-chevron-right"></i></button>';
      html +=
        '<span class="page-info">Page ' + page + " of " + pages + "</span>";
      $("#pagination").html(html);
    }

    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase();
      var city = $("#cityFilter").val();
      var cat = $("#categoryFilter").val();
      var status = $("#statusFilter").val();
      filtered = $.grep(allData, function (e) {
        return (
          (!s ||
            e.name.toLowerCase().indexOf(s) > -1 ||
            e.provider.toLowerCase().indexOf(s) > -1) &&
          (!city || e.city === city) &&
          (!cat || e.category === cat) &&
          (!status || e.status === status)
        );
      });
      page = 1;
      render();
    }

    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #categoryFilter, #statusFilter").on(
        "change",
        applyFilters,
      );
      $("#exportBtn").on("click", function () {
        showToast("Exporting...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });

      $("#eventsBody")
        .on("click", ".ev-view", function () {
          var id = +$(this).data("id");
          showToast(
            "Viewing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-edit", function () {
          var id = +$(this).data("id");
          showToast(
            "Editing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-del", function () {
          var id = +$(this).data("id");
          var e = $.grep(allData, function (x) {
            return x.id === id;
          })[0];
          if (e && confirm("Delete: " + e.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast("Deleted", "error");
          }
        });

      $("#viewList").on("click", function () {
        isGrid = false;
        $("#eventsTable").closest(".table-scroll-wrap").show();
        $("#eventsGrid").removeClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#viewGrid").on("click", function () {
        isGrid = true;
        $("#eventsTable").closest(".table-scroll-wrap").hide();
        $("#eventsGrid").addClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });

      $("#pagination").on("click", ".page-btn:not([disabled])", function () {
        var target = +$(this).data("page");
        var pages = Math.ceil(filtered.length / PER_PAGE);
        if (target >= 1 && target <= pages) {
          page = target;
          render();
        }
      });

      render();
    });
  })(jQuery);
}

// └─ END: 07a · All Events ───────────────────────────────────────────┘



// ── 07b · Active Events (events-active.html) ───────────────────────
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() ===
    "events-active.html"
) {
  (function ($) {
    "use strict";
    var BADGES = {
      active:
        '<span class="badge active"><span class="badge-dot"></span>Active</span>',
      pending:
        '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
      rejected:
        '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
      ended:
        '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
    };
    var ICONS = {
      Music: "fa-music",
      Sports: "fa-futbol",
      Tourism: "fa-plane",
      Arts: "fa-palette",
      Education: "fa-graduation-cap",
    };
    var COLORS = {
      Music: "cat-music",
      Sports: "cat-sports",
      Tourism: "cat-tourism",
      Arts: "cat-arts",
      Education: "cat-education",
    };

    var allData = [
      {
        id: 1,
        name: "Music Concert — Damascus",
        provider: "Entertainment Co.",
        category: "Music",
        city: "Damascus",
        date: "Apr 15, 2026",
        sold: 320,
        total: 500,
        revenue: 48000,
        status: "active",
        img: "https://picsum.photos/seed/music1/80/80",
      },
      {
        id: 3,
        name: "Tourism Trip — Latakia",
        provider: "Travel Agency",
        category: "Tourism",
        city: "Latakia",
        date: "May 1, 2026",
        sold: 45,
        total: 60,
        revenue: 13500,
        status: "active",
        img: "https://picsum.photos/seed/travel1/80/80",
      },
      {
        id: 5,
        name: "Self Development Workshop",
        provider: "Success Academy",
        category: "Education",
        city: "Damascus",
        date: "Apr 25, 2026",
        sold: 80,
        total: 100,
        revenue: 12000,
        status: "active",
        img: "https://picsum.photos/seed/edu1/80/80",
      },
      {
        id: 6,
        name: "Jazz Night",
        provider: "Music House",
        category: "Music",
        city: "Aleppo",
        date: "May 5, 2026",
        sold: 200,
        total: 300,
        revenue: 30000,
        status: "active",
        img: "https://picsum.photos/seed/jazz1/80/80",
      },
      {
        id: 7,
        name: "Marathon 2026",
        provider: "Sports Club",
        category: "Sports",
        city: "Damascus",
        date: "May 10, 2026",
        sold: 500,
        total: 2000,
        revenue: 75000,
        status: "active",
        img: "https://picsum.photos/seed/run1/80/80",
      },
      {
        id: 9,
        name: "Desert Safari",
        provider: "Travel Agency",
        category: "Tourism",
        city: "Latakia",
        date: "May 15, 2026",
        sold: 30,
        total: 50,
        revenue: 15000,
        status: "active",
        img: "https://picsum.photos/seed/desert1/80/80",
      },
      {
        id: 10,
        name: "Tech Conference 2026",
        provider: "Tech Events Co.",
        category: "Education",
        city: "Damascus",
        date: "Jun 1, 2026",
        sold: 400,
        total: 600,
        revenue: 120000,
        status: "active",
        img: "https://picsum.photos/seed/tech1/80/80",
      },
    ];

    var filtered = allData.slice();
    var isGrid = false;

    function buildRow(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var icon = ICONS[e.category] || "fa-tag";
      var cc = COLORS[e.category] || "";
      return (
        '<tr data-id="' +
        e.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="event-cell"><img src="' +
        e.img +
        '" class="event-thumb-img"><div>' +
        '<div class="event-name">' +
        e.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</div>" +
        "</div></div></td>" +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        e.provider.charAt(0) +
        "</div><span>" +
        e.provider +
        "</span></div></td>" +
        '<td><span class="category-tag ' +
        cc +
        '-tag"><i class="fas ' +
        icon +
        '"></i> ' +
        e.category +
        "</span></td>" +
        '<td><span class="city-cell"><i class="fas fa-city"></i> ' +
        e.city +
        "</span></td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span></td>" +
        '<td><div class="tickets-cell"><span class="tickets-count">' +
        e.sold +
        ' <span class="tickets-total">/ ' +
        e.total +
        "</span></span>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<span class="tickets-pct">' +
        pct +
        "%</span></div></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        (BADGES[e.status] || "") +
        "</td>" +
        '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' +
        e.id +
        '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' +
        e.id +
        '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' +
        e.id +
        '" title="Delete"><i class="fas fa-trash"></i></button>' +
        "</div></td></tr>"
      );
    }

    function buildCard(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var cc = COLORS[e.category] || "";
      return (
        '<div class="event-grid-card" data-id="' +
        e.id +
        '">' +
        '<div class="event-grid-thumb ' +
        cc +
        '"><img src="' +
        e.img +
        '" class="event-grid-img"></div>' +
        '<div class="event-grid-body">' +
        '<div class="event-grid-name">' +
        e.name +
        "</div>" +
        '<div class="event-grid-meta">' +
        '<span><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</span>" +
        '<span><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span>" +
        '<span><i class="fas fa-user"></i> ' +
        e.provider +
        "</span>" +
        "</div>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<div class="event-grid-footer">' +
        "<span>" +
        (BADGES[e.status] || "") +
        "</span>" +
        '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span>" +
        "</div>" +
        "</div></div>"
      );
    }

    function render() {
      if (isGrid) {
        $("#eventsGrid").html($.map(filtered, buildCard).join(""));
      } else {
        $("#eventsBody").html($.map(filtered, buildRow).join(""));
      }
      $("#tableCount").text("Showing " + filtered.length + " events");
    }

    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase();
      var c = $("#cityFilter").val();
      var cat = $("#categoryFilter").val();
      filtered = $.grep(allData, function (e) {
        return (
          (!s ||
            e.name.toLowerCase().indexOf(s) > -1 ||
            e.provider.toLowerCase().indexOf(s) > -1) &&
          (!c || e.city === c) &&
          (!cat || e.category === cat)
        );
      });
      render();
    }

    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #categoryFilter").on("change", applyFilters);
      $("#exportBtn").on("click", function () {
        showToast("Exporting...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });

      $("#eventsBody")
        .on("click", ".ev-view", function () {
          var id = +$(this).data("id");
          showToast(
            "Viewing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-edit", function () {
          var id = +$(this).data("id");
          showToast(
            "Editing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-del", function () {
          var id = +$(this).data("id");
          var e = $.grep(allData, function (x) {
            return x.id === id;
          })[0];
          if (e && confirm("Delete: " + e.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast("Deleted", "error");
          }
        });

      $("#viewList").on("click", function () {
        isGrid = false;
        $("#eventsTable").closest(".table-scroll-wrap").show();
        $("#eventsGrid").removeClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#viewGrid").on("click", function () {
        isGrid = true;
        $("#eventsTable").closest(".table-scroll-wrap").hide();
        $("#eventsGrid").addClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });

      render();
    });
  })(jQuery);
}

// └─ END: 07b · Active Events ────────────────────────────────────────┘



// ── 07c · Events Under Review (events-review.html) ─────────────────
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() ===
    "events-review.html"
) {
  (function ($) {
    "use strict";
    var BADGES = {
      active:
        '<span class="badge active"><span class="badge-dot"></span>Active</span>',
      pending:
        '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
      rejected:
        '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
      ended:
        '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
    };
    var ICONS = {
      Music: "fa-music",
      Sports: "fa-futbol",
      Tourism: "fa-plane",
      Arts: "fa-palette",
      Education: "fa-graduation-cap",
    };
    var COLORS = {
      Music: "cat-music",
      Sports: "cat-sports",
      Tourism: "cat-tourism",
      Arts: "cat-arts",
      Education: "cat-education",
    };

    var allData = [
      {
        id: 2,
        name: "Football Tournament",
        provider: "Sports Club",
        category: "Sports",
        city: "Aleppo",
        date: "Apr 20, 2026",
        sold: 150,
        total: 1000,
        revenue: 22500,
        status: "pending",
        img: "https://picsum.photos/seed/sport1/80/80",
      },
      {
        id: 8,
        name: "Photography Workshop",
        provider: "Arts House",
        category: "Arts",
        city: "Homs",
        date: "Apr 30, 2026",
        sold: 20,
        total: 30,
        revenue: 6000,
        status: "pending",
        img: "https://picsum.photos/seed/photo1/80/80",
      },
    ];

    var filtered = allData.slice();
    var isGrid = false;

    function buildRow(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var icon = ICONS[e.category] || "fa-tag";
      var cc = COLORS[e.category] || "";
      return (
        '<tr data-id="' +
        e.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="event-cell"><img src="' +
        e.img +
        '" class="event-thumb-img"><div>' +
        '<div class="event-name">' +
        e.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</div>" +
        "</div></div></td>" +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        e.provider.charAt(0) +
        "</div><span>" +
        e.provider +
        "</span></div></td>" +
        '<td><span class="category-tag ' +
        cc +
        '-tag"><i class="fas ' +
        icon +
        '"></i> ' +
        e.category +
        "</span></td>" +
        '<td><span class="city-cell"><i class="fas fa-city"></i> ' +
        e.city +
        "</span></td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span></td>" +
        '<td><div class="tickets-cell"><span class="tickets-count">' +
        e.sold +
        ' <span class="tickets-total">/ ' +
        e.total +
        "</span></span>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<span class="tickets-pct">' +
        pct +
        "%</span></div></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        (BADGES[e.status] || "") +
        "</td>" +
        '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' +
        e.id +
        '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' +
        e.id +
        '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' +
        e.id +
        '" title="Delete"><i class="fas fa-trash"></i></button>' +
        "</div></td></tr>"
      );
    }

    function buildCard(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var cc = COLORS[e.category] || "";
      return (
        '<div class="event-grid-card" data-id="' +
        e.id +
        '">' +
        '<div class="event-grid-thumb ' +
        cc +
        '"><img src="' +
        e.img +
        '" class="event-grid-img"></div>' +
        '<div class="event-grid-body">' +
        '<div class="event-grid-name">' +
        e.name +
        "</div>" +
        '<div class="event-grid-meta">' +
        '<span><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</span>" +
        '<span><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span>" +
        '<span><i class="fas fa-user"></i> ' +
        e.provider +
        "</span>" +
        "</div>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<div class="event-grid-footer">' +
        "<span>" +
        (BADGES[e.status] || "") +
        "</span>" +
        '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span>" +
        "</div>" +
        "</div></div>"
      );
    }

    function render() {
      if (isGrid) {
        $("#eventsGrid").html($.map(filtered, buildCard).join(""));
      } else {
        $("#eventsBody").html($.map(filtered, buildRow).join(""));
      }
      $("#tableCount").text("Showing " + filtered.length + " events");
    }

    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase();
      var c = $("#cityFilter").val();
      var cat = $("#categoryFilter").val();
      filtered = $.grep(allData, function (e) {
        return (
          (!s ||
            e.name.toLowerCase().indexOf(s) > -1 ||
            e.provider.toLowerCase().indexOf(s) > -1) &&
          (!c || e.city === c) &&
          (!cat || e.category === cat)
        );
      });
      render();
    }

    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #categoryFilter").on("change", applyFilters);
      $("#exportBtn").on("click", function () {
        showToast("Exporting...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });

      $("#eventsBody")
        .on("click", ".ev-view", function () {
          var id = +$(this).data("id");
          showToast(
            "Viewing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-edit", function () {
          var id = +$(this).data("id");
          showToast(
            "Editing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-del", function () {
          var id = +$(this).data("id");
          var e = $.grep(allData, function (x) {
            return x.id === id;
          })[0];
          if (e && confirm("Delete: " + e.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast("Deleted", "error");
          }
        });

      $("#viewList").on("click", function () {
        isGrid = false;
        $("#eventsTable").closest(".table-scroll-wrap").show();
        $("#eventsGrid").removeClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#viewGrid").on("click", function () {
        isGrid = true;
        $("#eventsTable").closest(".table-scroll-wrap").hide();
        $("#eventsGrid").addClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });

      render();
    });
  })(jQuery);
}

// └─ END: 07c · Events Under Review ─────────────────────────────────┘



// ── 07d · Rejected Events (events-rejected.html) ───────────────────
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() ===
    "events-rejected.html"
) {
  (function ($) {
    "use strict";
    var BADGES = {
      active:
        '<span class="badge active"><span class="badge-dot"></span>Active</span>',
      pending:
        '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
      rejected:
        '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
      ended:
        '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
    };
    var ICONS = {
      Music: "fa-music",
      Sports: "fa-futbol",
      Tourism: "fa-plane",
      Arts: "fa-palette",
      Education: "fa-graduation-cap",
    };
    var COLORS = {
      Music: "cat-music",
      Sports: "cat-sports",
      Tourism: "cat-tourism",
      Arts: "cat-arts",
      Education: "cat-education",
    };

    var allData = [
      {
        id: 4,
        name: "Fine Arts Exhibition",
        provider: "Arts House",
        category: "Arts",
        city: "Homs",
        date: "Apr 10, 2026",
        sold: 0,
        total: 200,
        revenue: 0,
        status: "rejected",
        img: "https://picsum.photos/seed/arts1/80/80",
      },
    ];

    var filtered = allData.slice();
    var isGrid = false;

    function buildRow(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var icon = ICONS[e.category] || "fa-tag";
      var cc = COLORS[e.category] || "";
      return (
        '<tr data-id="' +
        e.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="event-cell"><img src="' +
        e.img +
        '" class="event-thumb-img"><div>' +
        '<div class="event-name">' +
        e.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</div>" +
        "</div></div></td>" +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        e.provider.charAt(0) +
        "</div><span>" +
        e.provider +
        "</span></div></td>" +
        '<td><span class="category-tag ' +
        cc +
        '-tag"><i class="fas ' +
        icon +
        '"></i> ' +
        e.category +
        "</span></td>" +
        '<td><span class="city-cell"><i class="fas fa-city"></i> ' +
        e.city +
        "</span></td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span></td>" +
        '<td><div class="tickets-cell"><span class="tickets-count">' +
        e.sold +
        ' <span class="tickets-total">/ ' +
        e.total +
        "</span></span>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<span class="tickets-pct">' +
        pct +
        "%</span></div></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        (BADGES[e.status] || "") +
        "</td>" +
        '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' +
        e.id +
        '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' +
        e.id +
        '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' +
        e.id +
        '" title="Delete"><i class="fas fa-trash"></i></button>' +
        "</div></td></tr>"
      );
    }

    function buildCard(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var cc = COLORS[e.category] || "";
      return (
        '<div class="event-grid-card" data-id="' +
        e.id +
        '">' +
        '<div class="event-grid-thumb ' +
        cc +
        '"><img src="' +
        e.img +
        '" class="event-grid-img"></div>' +
        '<div class="event-grid-body">' +
        '<div class="event-grid-name">' +
        e.name +
        "</div>" +
        '<div class="event-grid-meta">' +
        '<span><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</span>" +
        '<span><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span>" +
        '<span><i class="fas fa-user"></i> ' +
        e.provider +
        "</span>" +
        "</div>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<div class="event-grid-footer">' +
        "<span>" +
        (BADGES[e.status] || "") +
        "</span>" +
        '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span>" +
        "</div>" +
        "</div></div>"
      );
    }

    function render() {
      if (isGrid) {
        $("#eventsGrid").html($.map(filtered, buildCard).join(""));
      } else {
        $("#eventsBody").html($.map(filtered, buildRow).join(""));
      }
      $("#tableCount").text("Showing " + filtered.length + " events");
    }

    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase();
      var c = $("#cityFilter").val();
      var cat = $("#categoryFilter").val();
      filtered = $.grep(allData, function (e) {
        return (
          (!s ||
            e.name.toLowerCase().indexOf(s) > -1 ||
            e.provider.toLowerCase().indexOf(s) > -1) &&
          (!c || e.city === c) &&
          (!cat || e.category === cat)
        );
      });
      render();
    }

    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #categoryFilter").on("change", applyFilters);
      $("#exportBtn").on("click", function () {
        showToast("Exporting...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });

      $("#eventsBody")
        .on("click", ".ev-view", function () {
          var id = +$(this).data("id");
          showToast(
            "Viewing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-edit", function () {
          var id = +$(this).data("id");
          showToast(
            "Editing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-del", function () {
          var id = +$(this).data("id");
          var e = $.grep(allData, function (x) {
            return x.id === id;
          })[0];
          if (e && confirm("Delete: " + e.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast("Deleted", "error");
          }
        });

      $("#viewList").on("click", function () {
        isGrid = false;
        $("#eventsTable").closest(".table-scroll-wrap").show();
        $("#eventsGrid").removeClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#viewGrid").on("click", function () {
        isGrid = true;
        $("#eventsTable").closest(".table-scroll-wrap").hide();
        $("#eventsGrid").addClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });

      render();
    });
  })(jQuery);
}

// └─ END: 07d · Rejected Events ─────────────────────────────────────┘



// ── 07e · Ended Events (events-ended.html) ─────────────────────────
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() ===
    "events-ended.html"
) {
  (function ($) {
    "use strict";
    var BADGES = {
      active:
        '<span class="badge active"><span class="badge-dot"></span>Active</span>',
      pending:
        '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
      rejected:
        '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
      ended:
        '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
    };
    var ICONS = {
      Music: "fa-music",
      Sports: "fa-futbol",
      Tourism: "fa-plane",
      Arts: "fa-palette",
      Education: "fa-graduation-cap",
    };
    var COLORS = {
      Music: "cat-music",
      Sports: "cat-sports",
      Tourism: "cat-tourism",
      Arts: "cat-arts",
      Education: "cat-education",
    };

    var allData = [
      {
        id: 11,
        name: "Comedy Show",
        provider: "Entertainment Co.",
        category: "Music",
        city: "Aleppo",
        date: "Apr 18, 2026",
        sold: 180,
        total: 250,
        revenue: 27000,
        status: "ended",
        img: "https://picsum.photos/seed/comedy1/80/80",
      },
      {
        id: 12,
        name: "Cooking Class",
        provider: "Success Academy",
        category: "Education",
        city: "Damascus",
        date: "Apr 5, 2026",
        sold: 15,
        total: 20,
        revenue: 3000,
        status: "ended",
        img: "https://picsum.photos/seed/cook1/80/80",
      },
    ];

    var filtered = allData.slice();
    var isGrid = false;

    function buildRow(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var icon = ICONS[e.category] || "fa-tag";
      var cc = COLORS[e.category] || "";
      return (
        '<tr data-id="' +
        e.id +
        '">' +
        '<td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="event-cell"><img src="' +
        e.img +
        '" class="event-thumb-img"><div>' +
        '<div class="event-name">' +
        e.name +
        "</div>" +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</div>" +
        "</div></div></td>" +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        e.provider.charAt(0) +
        "</div><span>" +
        e.provider +
        "</span></div></td>" +
        '<td><span class="category-tag ' +
        cc +
        '-tag"><i class="fas ' +
        icon +
        '"></i> ' +
        e.category +
        "</span></td>" +
        '<td><span class="city-cell"><i class="fas fa-city"></i> ' +
        e.city +
        "</span></td>" +
        '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span></td>" +
        '<td><div class="tickets-cell"><span class="tickets-count">' +
        e.sold +
        ' <span class="tickets-total">/ ' +
        e.total +
        "</span></span>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<span class="tickets-pct">' +
        pct +
        "%</span></div></td>" +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span></td>" +
        "<td>" +
        (BADGES[e.status] || "") +
        "</td>" +
        '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' +
        e.id +
        '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' +
        e.id +
        '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' +
        e.id +
        '" title="Delete"><i class="fas fa-trash"></i></button>' +
        "</div></td></tr>"
      );
    }

    function buildCard(e) {
      var pct = Math.round((e.sold / e.total) * 100);
      var cc = COLORS[e.category] || "";
      return (
        '<div class="event-grid-card" data-id="' +
        e.id +
        '">' +
        '<div class="event-grid-thumb ' +
        cc +
        '"><img src="' +
        e.img +
        '" class="event-grid-img"></div>' +
        '<div class="event-grid-body">' +
        '<div class="event-grid-name">' +
        e.name +
        "</div>" +
        '<div class="event-grid-meta">' +
        '<span><i class="fas fa-map-marker-alt"></i> ' +
        e.city +
        "</span>" +
        '<span><i class="fas fa-calendar-alt"></i> ' +
        e.date +
        "</span>" +
        '<span><i class="fas fa-user"></i> ' +
        e.provider +
        "</span>" +
        "</div>" +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' +
        pct +
        '%"></div></div>' +
        '<div class="event-grid-footer">' +
        "<span>" +
        (BADGES[e.status] || "") +
        "</span>" +
        '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' +
        e.revenue.toLocaleString() +
        "</span>" +
        "</div>" +
        "</div></div>"
      );
    }

    function render() {
      if (isGrid) {
        $("#eventsGrid").html($.map(filtered, buildCard).join(""));
      } else {
        $("#eventsBody").html($.map(filtered, buildRow).join(""));
      }
      $("#tableCount").text("Showing " + filtered.length + " events");
    }

    function applyFilters() {
      var s = $("#searchInput").val().toLowerCase();
      var c = $("#cityFilter").val();
      var cat = $("#categoryFilter").val();
      filtered = $.grep(allData, function (e) {
        return (
          (!s ||
            e.name.toLowerCase().indexOf(s) > -1 ||
            e.provider.toLowerCase().indexOf(s) > -1) &&
          (!c || e.city === c) &&
          (!cat || e.category === cat)
        );
      });
      render();
    }

    $(function () {
      $("#searchInput").on("input", applyFilters);
      $("#cityFilter, #categoryFilter").on("change", applyFilters);
      $("#exportBtn").on("click", function () {
        showToast("Exporting...", "success");
      });
      $("#selectAll").on("change", function () {
        $(".row-check").prop("checked", $(this).prop("checked"));
      });

      $("#eventsBody")
        .on("click", ".ev-view", function () {
          var id = +$(this).data("id");
          showToast(
            "Viewing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-edit", function () {
          var id = +$(this).data("id");
          showToast(
            "Editing: " +
              (
                $.grep(allData, function (x) {
                  return x.id === id;
                })[0] || {}
              ).name,
            "info",
          );
        })
        .on("click", ".ev-del", function () {
          var id = +$(this).data("id");
          var e = $.grep(allData, function (x) {
            return x.id === id;
          })[0];
          if (e && confirm("Delete: " + e.name + "?")) {
            allData = $.grep(allData, function (x) {
              return x.id !== id;
            });
            filtered = $.grep(filtered, function (x) {
              return x.id !== id;
            });
            render();
            showToast("Deleted", "error");
          }
        });

      $("#viewList").on("click", function () {
        isGrid = false;
        $("#eventsTable").closest(".table-scroll-wrap").show();
        $("#eventsGrid").removeClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });
      $("#viewGrid").on("click", function () {
        isGrid = true;
        $("#eventsTable").closest(".table-scroll-wrap").hide();
        $("#eventsGrid").addClass("visible");
        $(".view-toggle").removeClass("active");
        $(this).addClass("active");
        render();
      });

      render();
    });
  })(jQuery);
}

// └─ END: 07e · Ended Events ─────────────────────────────────────────┘
// └─ END: 07 · Events ────────────────────────────────────────────────┘



// ── 07f · Create New Event (events-create.html) ────────────────────
if (
  $("#uploadArea").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() ===
    "events-create.html"
) {
  (function ($) {
    "use strict";
    $(function () {
      var $uploadArea = $("#uploadArea");
      var $imageInput = $("#imageInput");
      var $imagePreview = $("#imagePreview");

      // Upload area click
      $uploadArea.on("click", function () {
        $imageInput.trigger("click");
      });

      // Drag & drop
      $uploadArea
        .on("dragover", function (e) {
          e.preventDefault();
          $(this).addClass("drag-over");
        })
        .on("dragleave", function () {
          $(this).removeClass("drag-over");
        })
        .on("drop", function (e) {
          e.preventDefault();
          $(this).removeClass("drag-over");
          var file = e.originalEvent.dataTransfer.files[0];
          if (file) previewImage(file);
        });

      // File input change
      $imageInput.on("change", function () {
        if (this.files[0]) previewImage(this.files[0]);
      });

      function previewImage(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $imagePreview.attr("src", e.target.result).show();
          $uploadArea.hide();
        };
        reader.readAsDataURL(file);
      }

      // Save draft
      $("#saveDraftBtn").on("click", function () {
        showToast("Draft saved successfully", "success");
      });

      // Publish
      $("#publishBtn").on("click", function () {
        var name = $("#eventName").val();
        if (!name) {
          showToast("Please enter event name", "error");
          return;
        }
        showToast("Event published successfully!", "success");
        setTimeout(function () {
          window.location.href = "events.html";
        }, 1500);
      });
    });
  })(jQuery);
}

// └─ END: 07f · Create New Event ────────────────────────────────────┘




// ┌──────────────────────────────────────────────────────────────────┐
// │  08 · Universal View Modal                                       │
// │       Eye icon popup — works on ALL dashboard pages              │
// └──────────────────────────────────────────────────────────────────┘
$(function () {
  // ── helper: بناء الـ modal لو مش موجود ──
  function ensureModal() {
    if ($("#adminViewModal").length) return;
    $("body").append(
      '<div id="adminViewModal" class="admin-modal" aria-hidden="true">' +
        '<div class="admin-modal-backdrop"></div>' +
        '<div class="admin-modal-panel" role="dialog" aria-modal="true" aria-labelledby="adminViewModalTitle">' +
        '<div class="admin-modal-header">' +
        '<h3 id="adminViewModalTitle" class="admin-modal-title">Details</h3>' +
        '<button type="button" class="admin-modal-close" aria-label="Close">&times;</button>' +
        "</div>" +
        '<div class="admin-modal-body"></div>' +
        '<div class="admin-modal-footer">' +
        '<button type="button" class="btn btn-ghost admin-modal-cancel">Close</button>' +
        "</div>" +
        "</div>" +
        "</div>",
    );
    $("#adminViewModal").on(
      "click",
      ".admin-modal-backdrop, .admin-modal-close, .admin-modal-cancel",
      function () {
        $("#adminViewModal").removeClass("is-open").attr("aria-hidden", "true");
      },
    );
    $(document).on("keydown.adminViewModal", function (e) {
      if (e.key === "Escape")
        $("#adminViewModal").removeClass("is-open").attr("aria-hidden", "true");
    });
  }

  function openModal(title, rows) {
    ensureModal();
    var $dl = $('<dl class="admin-modal-dl"></dl>');
    $.each(rows, function (_, r) {
      if (r.val && r.val !== "—" && r.val !== "") {
        $dl.append($("<dt>").text(r.label), $("<dd>").text(r.val));
      }
    });
    $("#adminViewModalTitle").text(title);
    $("#adminViewModal .admin-modal-body").empty().append($dl);
    $("#adminViewModal").addClass("is-open").attr("aria-hidden", "false");
  }

  // ── helper: نظّف النص من الأيقونات ──
  function cleanText($el) {
    return $el
      .clone()
      .find("i, .badge-dot")
      .remove()
      .end()
      .text()
      .replace(/\s+/g, " ")
      .trim();
  }

  // ══════════════════════════════════════
  // index.html — جدول Latest Events
  // ══════════════════════════════════════
  var page = (
    window.location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();

  if (page === "index.html") {
    $(document).on(
      "click",
      '.data-table tbody button[title="View"]',
      function () {
        var $tr = $(this).closest("tr");
        var $tds = $tr.children("td");
        openModal("Event Details", [
          { label: "Event", val: cleanText($tds.eq(0).find(".event-name")) },
          { label: "Location", val: cleanText($tds.eq(0).find(".event-meta")) },
          { label: "Provider", val: $tds.eq(1).text().trim() },
          { label: "Date", val: $tds.eq(2).text().trim() },
          { label: "Tickets", val: $tds.eq(3).text().trim() },
          { label: "Status", val: cleanText($tds.eq(4).find(".badge")) },
        ]);
      },
    );
  }

  // ══════════════════════════════════════
  // providers pages — pv-view (all providers / active)
  // ══════════════════════════════════════
  if (/^providers/.test(page)) {
    document.addEventListener(
      "click",
      function (e) {
        var btn = e.target.closest(".pv-view");
        if (!btn) return;
        e.stopImmediatePropagation();
        var $tr = $(btn).closest("tr");
        openModal("Provider Details", [
          { label: "Name", val: cleanText($tr.find(".event-name").first()) },
          { label: "Email", val: cleanText($tr.find(".event-meta").first()) },
          { label: "City", val: cleanText($tr.find(".city-cell").first()) },
          {
            label: "Category",
            val: cleanText($tr.find(".category-tag").first()),
          },
          {
            label: "Events",
            val: cleanText($tr.find(".tickets-count").first()),
          },
          {
            label: "Revenue",
            val: cleanText($tr.find(".revenue-val").first()),
          },
          { label: "Joined", val: cleanText($tr.find(".date-cell").first()) },
          { label: "Status", val: cleanText($tr.find(".badge").first()) },
        ]);
      },
      true,
    );

    // pn-view (pending providers)
    document.addEventListener(
      "click",
      function (e) {
        var btn = e.target.closest(".pn-view");
        if (!btn) return;
        e.stopImmediatePropagation();
        var $tr = $(btn).closest("tr");
        openModal("Pending Provider Details", [
          { label: "Name", val: cleanText($tr.find(".event-name").first()) },
          { label: "Email", val: cleanText($tr.find(".event-meta").first()) },
          { label: "City", val: cleanText($tr.find(".city-cell").first()) },
          {
            label: "Category",
            val: cleanText($tr.find(".category-tag").first()),
          },
          { label: "Documents", val: cleanText($tr.find(".badge").first()) },
          {
            label: "Submitted",
            val: cleanText($tr.find(".date-cell").first()),
          },
          {
            label: "Reason",
            val: $tr.find("td:nth-child(7) span").text().trim(),
          },
        ]);
      },
      true,
    );

    // rq-view (registration requests)
    document.addEventListener(
      "click",
      function (e) {
        var btn = e.target.closest(".rq-view");
        if (!btn) return;
        e.stopImmediatePropagation();
        var $tr = $(btn).closest("tr");
        openModal("Registration Request", [
          { label: "Name", val: cleanText($tr.find(".event-name").first()) },
          { label: "Email", val: cleanText($tr.find(".event-meta").first()) },
          { label: "City", val: cleanText($tr.find(".city-cell").first()) },
          {
            label: "Category",
            val: cleanText($tr.find(".category-tag").first()),
          },
          { label: "Documents", val: cleanText($tr.find(".badge").first()) },
          {
            label: "Submitted",
            val: cleanText($tr.find(".date-cell").first()),
          },
          {
            label: "Notes",
            val: $tr.find("td:nth-child(7) span").text().trim(),
          },
        ]);
      },
      true,
    );

    // rp-view (performance reports)
    document.addEventListener(
      "click",
      function (e) {
        var btn = e.target.closest(".rp-view");
        if (!btn) return;
        e.stopImmediatePropagation();
        var $tr = $(btn).closest("tr");
        openModal("Performance Report", [
          {
            label: "Provider",
            val: cleanText($tr.find(".event-name").first()),
          },
          { label: "City", val: cleanText($tr.find(".city-cell").first()) },
          { label: "Events", val: $tr.find("td:nth-child(4)").text().trim() },
          {
            label: "Tickets Sold",
            val: $tr.find("td:nth-child(5)").text().trim(),
          },
          {
            label: "Revenue",
            val: cleanText($tr.find(".revenue-val").first()),
          },
          {
            label: "Cancellation Rate",
            val: $tr.find("td:nth-child(8)").text().trim(),
          },
          { label: "Rank", val: $tr.find("td:nth-child(9)").text().trim() },
        ]);
      },
      true,
    );
  }

  // ══════════════════════════════════════
  // events pages — ev-view buttons
  // ══════════════════════════════════════
  if (/^events/.test(page) && page !== "events-create.html") {
    // capture phase عشان يشتغل قبل الـ #eventsBody handlers
    document.addEventListener(
      "click",
      function (e) {
        var btn = e.target.closest(".ev-view");
        if (!btn) return;
        e.stopImmediatePropagation();
        var $tr = $(btn).closest("tr");
        openModal("Event Details", [
          { label: "Event", val: cleanText($tr.find(".event-name").first()) },
          {
            label: "Provider",
            val:
              cleanText($tr.find(".provider-cell span").first()) ||
              cleanText($tr.find(".provider-cell").first()),
          },
          {
            label: "Category",
            val: cleanText($tr.find(".category-tag").first()),
          },
          { label: "City", val: cleanText($tr.find(".city-cell").first()) },
          { label: "Date", val: cleanText($tr.find(".date-cell").first()) },
          {
            label: "Tickets",
            val: cleanText($tr.find(".tickets-count").first()),
          },
          {
            label: "Revenue",
            val: cleanText($tr.find(".revenue-val").first()),
          },
          { label: "Status", val: cleanText($tr.find(".badge").first()) },
        ]);
      },
      true,
    ); // true = capture phase
  }

  // ══════════════════════════════════════
  // helper: ابحث عن الـ <tr> اللي فيه نص معين
  // ══════════════════════════════════════
  function findRowByText(text) {
    return $("tbody tr")
      .filter(function () {
        return $(this).children("td").first().text().trim() === String(text);
      })
      .first();
  }

  function openModalFromRow($tr, title, labels) {
    if (!$tr.length) return;
    var $tds = $tr.children("td");
    var rows = [];
    $.each(labels, function (i, lbl) {
      if (lbl) {
        var $td = $tds.eq(i);
        var val = $td.find(".badge").length
          ? cleanText($td.find(".badge").first())
          : $td.text().replace(/\s+/g, " ").trim();
        rows.push({ label: lbl, val: val });
      }
    });
    openModal(title, rows);
  }

  // ══════════════════════════════════════
  // finance.html — viewTxn
  // ══════════════════════════════════════
  if (page === "finance.html") {
    window.viewTxn = function (id) {
      var $tr = findRowByText(id);
      if (!$tr.length) {
        showToast("Viewing transaction #" + id, "info");
        return;
      }
      openModalFromRow($tr, "Transaction Details", [
        "ID",
        "Event",
        "Provider",
        "Amount",
        "Commission",
        "Net Amount",
        "Date",
        "Type",
        "Status",
      ]);
    };
    window.exportTxn = function (id) {
      showToast("Exporting transaction #" + id, "success");
    };
  }

  // ══════════════════════════════════════
  // finance-commissions.html — viewRecord
  // ══════════════════════════════════════
  if (page === "finance-commissions.html") {
    window.viewRecord = function (name) {
      var $tr = $("tbody tr")
        .filter(function () {
          return $(this).text().indexOf(name) > -1;
        })
        .first();
      if (!$tr.length) {
        showToast("Viewing: " + name, "info");
        return;
      }
      openModalFromRow($tr, "Commission Details", [
        "Event",
        "Provider",
        "Revenue",
        "Commission %",
        "Commission",
        "Date",
        "Status",
      ]);
    };
    window.exportRecord = function (name) {
      showToast("Exporting: " + name, "success");
    };
  }

  // ══════════════════════════════════════
  // finance-transfers.html — viewTransfer
  // ══════════════════════════════════════
  if (page === "finance-transfers.html") {
    window.viewTransfer = function (id) {
      var $tr = findRowByText(id);
      if (!$tr.length) {
        showToast("Viewing transfer #" + id, "info");
        return;
      }
      openModalFromRow($tr, "Transfer Details", [
        "ID",
        "Provider",
        "Amount",
        "Commission",
        "Net",
        "Date",
        "Method",
        "Status",
      ]);
    };
    window.downloadTransfer = function (id) {
      showToast("Downloading transfer #" + id, "success");
    };
  }

  // ══════════════════════════════════════
  // finance-refunds.html — viewRefund
  // ══════════════════════════════════════
  if (page === "finance-refunds.html") {
    window.viewRefund = function (id) {
      var $tr = findRowByText(id);
      if (!$tr.length) {
        showToast("Viewing refund #" + id, "info");
        return;
      }
      openModalFromRow($tr, "Refund Details", [
        "ID",
        "Customer",
        "Event",
        "Amount",
        "Reason",
        "Date",
        "Status",
      ]);
    };
  }

  // ══════════════════════════════════════
  // finance-wallets.html — viewWallet
  // ══════════════════════════════════════
  if (page === "finance-wallets.html") {
    window.viewWallet = function (name) {
      var $tr = $("tbody tr")
        .filter(function () {
          return $(this).text().indexOf(name) > -1;
        })
        .first();
      if (!$tr.length) {
        showToast("Viewing wallet: " + name, "info");
        return;
      }
      openModalFromRow($tr, "Wallet Details", [
        "Provider",
        "Balance",
        "Pending",
        "Total Paid",
        "Last Transfer",
        "Status",
      ]);
    };
    window.transferWallet = function (name) {
      showToast("Initiating transfer for: " + name, "info");
    };
  }
});
// └─ END: 08 · Universal View Modal ─────────────────────────────────┘




// ┌──────────────────────────────────────────────────────────────────┐
// │  09 · Universal Edit Modal                                       │
// │       Edit icon popup — works on ALL dashboard pages             │
// └──────────────────────────────────────────────────────────────────┘
$(function () {
  // ── helper: بناء الـ edit modal ──
  function ensureEditModal() {
    if ($("#adminEditModal").length) return;
    $("body").append(
      '<div id="adminEditModal" class="admin-modal" aria-hidden="true">' +
        '<div class="admin-modal-backdrop"></div>' +
        '<div class="admin-modal-panel" role="dialog" aria-modal="true" aria-labelledby="adminEditModalTitle">' +
        '<div class="admin-modal-header">' +
        '<h3 id="adminEditModalTitle" class="admin-modal-title">Edit</h3>' +
        '<button type="button" class="admin-modal-close" aria-label="Close">&times;</button>' +
        "</div>" +
        '<div class="admin-modal-body"></div>' +
        '<div class="admin-modal-footer">' +
        '<button type="button" class="btn btn-ghost admin-edit-cancel">Cancel</button>' +
        '<button type="button" class="btn btn-primary admin-edit-save">Save changes</button>' +
        "</div>" +
        "</div>" +
        "</div>",
    );
    $("#adminEditModal").on(
      "click",
      ".admin-modal-backdrop, .admin-modal-close, .admin-edit-cancel",
      function () {
        closeEditModal();
      },
    );
    $(document).on("keydown.adminEditModal", function (e) {
      if (e.key === "Escape") closeEditModal();
    });
    $("#adminEditModal").on("click", ".admin-edit-save", function () {
      saveEditModal();
    });
  }

  function closeEditModal() {
    $("#adminEditModal").removeClass("is-open").attr("aria-hidden", "true");
  }

  function openEditModal(title, fields, onSave) {
    ensureEditModal();
    var $stack = $('<div class="form-stack"></div>');
    $.each(fields, function (_, f) {
      $stack.append(
        $("<label>")
          .attr("for", "editField_" + f.id)
          .text(f.label),
      );
      if (f.type === "select") {
        var $sel = $(
          '<select class="form-input" id="editField_' + f.id + '"></select>',
        );
        $.each(f.options, function (_, opt) {
          $sel.append(
            $("<option>")
              .val(opt)
              .text(opt)
              .prop("selected", opt === f.value),
          );
        });
        $stack.append($sel);
      } else if (f.type === "textarea") {
        $stack.append(
          $(
            '<textarea class="form-input form-textarea" id="editField_' +
              f.id +
              '" rows="3"></textarea>',
          ).val(f.value || ""),
        );
      } else {
        $stack.append(
          $(
            '<input type="' +
              (f.type || "text") +
              '" class="form-input" id="editField_' +
              f.id +
              '">',
          ).val(f.value || ""),
        );
      }
    });
    $("#adminEditModalTitle").text(title);
    $("#adminEditModal .admin-modal-body").empty().append($stack);
    $("#adminEditModal").data("onSave", onSave).data("fields", fields);
    $("#adminEditModal").addClass("is-open").attr("aria-hidden", "false");
  }

  function saveEditModal() {
    var onSave = $("#adminEditModal").data("onSave");
    var fields = $("#adminEditModal").data("fields");
    var result = {};
    $.each(fields, function (_, f) {
      result[f.id] = $.trim(String($("#editField_" + f.id).val() || ""));
    });
    if (typeof onSave === "function") onSave(result);
    closeEditModal();
  }

  // ── helper: نظّف النص من الأيقونات ──
  function ct($el) {
    return $el
      .clone()
      .find("i, .badge-dot")
      .remove()
      .end()
      .text()
      .replace(/\s+/g, " ")
      .trim();
  }

  var page = (
    window.location.pathname.split("/").pop() || "index.html"
  ).toLowerCase();

  // ══════════════════════════════════════
  // index.html — edit buttons في جدول Latest Events
  // ══════════════════════════════════════
  if (page === "index.html") {
    $(document).on(
      "click",
      '.data-table tbody button[title="Edit"]',
      function () {
        var $tr = $(this).closest("tr");
        var $tds = $tr.children("td");
        var name = ct($tds.eq(0).find(".event-name"));
        var provider = $tds.eq(1).text().trim();
        var date = $tds.eq(2).text().trim();
        var tickets = $tds.eq(3).text().trim();
        openEditModal(
          "Edit Event",
          [
            { id: "name", label: "Event Name", value: name },
            { id: "provider", label: "Provider", value: provider },
            { id: "date", label: "Date", value: date },
            { id: "tickets", label: "Tickets", value: tickets },
          ],
          function (d) {
            $tds.eq(0).find(".event-name").text(d.name);
            $tds.eq(1).text(d.provider);
            $tds.eq(2).text(d.date);
            $tds.eq(3).text(d.tickets);
            showToast("Event updated: " + d.name, "success");
          },
        );
      },
    );
  }

  // ══════════════════════════════════════
  // events pages — ev-edit (capture phase)
  // ══════════════════════════════════════
  if (/^events/.test(page) && page !== "events-create.html") {
    document.addEventListener(
      "click",
      function (e) {
        var btn = e.target.closest(".ev-edit");
        if (!btn) return;
        e.stopImmediatePropagation();
        var $tr = $(btn).closest("tr");
        var name = ct($tr.find(".event-name").first());
        var provider = ct($tr.find(".provider-cell span").first());
        var category = ct($tr.find(".category-tag").first());
        var city = ct($tr.find(".city-cell").first());
        var date = ct($tr.find(".date-cell").first());
        var status = ct($tr.find(".badge").first());
        openEditModal(
          "Edit Event",
          [
            { id: "name", label: "Event Name", value: name },
            { id: "provider", label: "Provider", value: provider },
            {
              id: "category",
              label: "Category",
              value: category,
              type: "select",
              options: ["Music", "Sports", "Tourism", "Arts", "Education"],
            },
            {
              id: "city",
              label: "City",
              value: city,
              type: "select",
              options: ["Damascus", "Aleppo", "Homs", "Latakia"],
            },
            { id: "date", label: "Date", value: date },
            {
              id: "status",
              label: "Status",
              value: status,
              type: "select",
              options: ["active", "pending", "rejected", "ended"],
            },
          ],
          function (d) {
            $tr.find(".event-name").first().text(d.name);
            $tr.find(".provider-cell span").first().text(d.provider);
            $tr
              .find(".category-tag")
              .first()
              .html('<i class="fas fa-tag"></i> ' + d.category);
            $tr
              .find(".city-cell")
              .first()
              .html('<i class="fas fa-city"></i> ' + d.city);
            $tr
              .find(".date-cell")
              .first()
              .html('<i class="fas fa-calendar-alt"></i> ' + d.date);
            showToast("Event updated: " + d.name, "success");
          },
        );
      },
      true,
    );
  }

  // ══════════════════════════════════════
  // providers pages — pv-edit (capture phase)
  // ══════════════════════════════════════
  if (/^providers/.test(page)) {
    document.addEventListener(
      "click",
      function (e) {
        var btn = e.target.closest(".pv-edit");
        if (!btn) return;
        e.stopImmediatePropagation();
        var $tr = $(btn).closest("tr");
        var name = ct($tr.find(".event-name").first());
        var email = ct($tr.find(".event-meta").first());
        var city = ct($tr.find(".city-cell").first());
        var category = ct($tr.find(".category-tag").first());
        openEditModal(
          "Edit Provider",
          [
            { id: "name", label: "Name", value: name },
            { id: "email", label: "Email", value: email, type: "email" },
            {
              id: "city",
              label: "City",
              value: city,
              type: "select",
              options: ["Damascus", "Aleppo", "Homs", "Latakia"],
            },
            {
              id: "category",
              label: "Category",
              value: category,
              type: "select",
              options: ["Music", "Sports", "Tourism", "Arts", "Education"],
            },
          ],
          function (d) {
            if (!d.name) {
              showToast("Name is required", "error");
              return;
            }
            $tr.find(".event-name").first().text(d.name);
            $tr
              .find(".provider-avatar")
              .first()
              .text(d.name.charAt(0).toUpperCase());
            $tr
              .find(".event-meta")
              .first()
              .html('<i class="fas fa-envelope"></i> ' + d.email);
            $tr
              .find(".city-cell")
              .first()
              .html('<i class="fas fa-map-marker-alt"></i> ' + d.city);
            $tr.find(".category-tag").first().text(d.category);
            showToast("Provider updated: " + d.name, "success");
          },
        );
      },
      true,
    );
  }

  // ── customers / customers-active — Edit button
  // (موجود بالفعل في customerModalOpenEdit في الـ general handler)

  // ── categories-sub.html: Edit links → navigate to categories-manage.html
  if (page === "categories-sub.html") {
    document.addEventListener(
      "click",
      function (e) {
        var link = e.target.closest('a[href="categories-manage.html"]');
        if (!link) return;
        e.preventDefault();
        window.location.href = "categories-manage.html";
      },
      true,
    );
  }
});
// └─ END: 09 · Universal Edit Modal ─────────────────────────────────┘



// ╔══════════════════════════════════════════════════════════════════╗
// ║  END OF FILE — main.js                                           ║
// ╚══════════════════════════════════════════════════════════════════╝

// ┌──────────────────────────────────────────────────────────────────┐
// │  10 · Demo Lock — Coming Soon overlay                            │
// │       Blocks specific pages for client preview                   │
// └──────────────────────────────────────────────────────────────────┘
// $(function () {

//   var LOCKED_PAGES = [
//     // Finance
//     'finance.html',
//     'finance-commissions.html',
//     'finance-transfers.html',
//     'finance-refunds.html',
//     'finance-wallets.html',
//     'finance-reports.html',
//     // Analytics
//     'analytics.html',
//     'analytics-top.html',
//     'analytics-behavior.html',
//     'analytics-vat.html',
//     'analytics-export.html',
//     // Categories
//     'categories.html',
//     'categories-sub.html',
//     'categories-manage.html',
//     'categories-sort.html',
//     'categories-tiers.html',
//     // Settings
//     'settings-cancellation.html',
//     'settings-pricing.html',
//     'settings-payment.html',
//     'settings-notifications.html',
//     'settings-roles.html',
//     'settings.html',
//     // Security
//     'security-tickets.html',
//     'security-blackmarket.html',
//     'security-duplicates.html',
//     'security-log.html',
//     // Other
//     'notifications.html',
//     'cities.html'
//   ];

//   var page = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
//   if (LOCKED_PAGES.indexOf(page) === -1) return;

//   // Inject overlay styles once
//   $('<style>').text([
//     '#demo-lock-overlay{',
//       'position:fixed;inset:0;z-index:99998;',
//       'display:flex;align-items:center;justify-content:center;',
//       'background:rgba(15,23,42,.55);backdrop-filter:blur(50px);',
//       '-webkit-backdrop-filter:blur(8px);',
//     '}',
//     '#demo-lock-box{',
//       'background:var(--card-bg,#fff);',
//       'border:1px solid var(--border,#e2e8f0);',
//       'border-radius:20px;',
//       'padding:40px 48px;',
//       'text-align:center;',
//       'max-width:420px;width:90%;',
//       'box-shadow:0 24px 60px rgba(0,0,0,.18);',
//       'animation:lockPop .35s cubic-bezier(.34,1.56,.64,1);',
//     '}',
//     '@keyframes lockPop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}',
//     '#demo-lock-icon{',
//       'width:72px;height:72px;border-radius:50%;',
//       'background:linear-gradient(135deg,#9a2226,#c94b4f);',
//       'display:flex;align-items:center;justify-content:center;',
//       'margin:0 auto 20px;font-size:28px;color:#fff;',
//       'box-shadow:0 8px 24px rgba(154,34,38,.35);',
//     '}',
//     '#demo-lock-title{font-size:1.3rem;font-weight:800;color:var(--text-primary,#0f172a);margin-bottom:8px}',
//     '#demo-lock-sub{font-size:14px;color:var(--text-muted,#64748b);line-height:1.6;margin-bottom:24px}',
//     '#demo-lock-badge{',
//       'display:inline-flex;align-items:center;gap:8px;',
//       'background:#fef2f2;color:#9a2226;',
//       'border:1px solid #fecaca;border-radius:20px;',
//       'padding:6px 16px;font-size:13px;font-weight:600;',
//       'margin-bottom:24px;',
//     '}',
//     '#demo-lock-back{',
//       'display:inline-flex;align-items:center;gap:8px;',
//       'background:linear-gradient(135deg,#9a2226,#c94b4f);',
//       'color:#fff;border:none;border-radius:10px;',
//       'padding:11px 24px;font-size:14px;font-weight:600;',
//       'cursor:pointer;transition:.15s;text-decoration:none;',
//     '}',
//     '#demo-lock-back:hover{opacity:.88;transform:translateY(-1px)}'
//   ].join('')).appendTo('head');

//   // Build overlay
//   var $overlay = $([
//     '<div id="demo-lock-overlay">',
//       '<div id="demo-lock-box">',
//         '<div id="demo-lock-icon"><i class="fas fa-lock"></i></div>',
//         '<div id="demo-lock-title">Coming Soon</div>',
//         '<div id="demo-lock-sub">',
//           'This section is currently under development.<br>',
//           'It will be available in the next release.',
//         '</div>',
//         '<div id="demo-lock-badge">',
//           '<i class="fas fa-clock"></i> In Progress',
//         '</div>',
//         '<br>',
//         '<a href="index.html" id="demo-lock-back">',
//           '<i class="fas fa-arrow-left"></i> Back to Dashboard',
//         '</a>',
//       '</div>',
//     '</div>'
//   ].join(''));

//   $('body').append($overlay);

//   // Block all sidebar links to locked pages
//   $('a[href]').each(function () {
//     var href = ($(this).attr('href') || '').toLowerCase();
//     if (LOCKED_PAGES.indexOf(href) > -1) {
//       $(this).on('click', function (e) {
//         e.preventDefault();
//         showToast('This section is coming soon', 'info');
//       });
//     }
//   });

// });
// └─ END: 10 · Demo Lock ─────────────────────────────────────────────┘

