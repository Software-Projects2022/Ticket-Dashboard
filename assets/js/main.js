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

// ══════════════════════════════════════
// SIDEBAR TOGGLE
// ══════════════════════════════════════
$(function () {
  // Sidebar collapse (desktop)
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

  // ══════════════════════════════════════
  // TOPBAR NOTIFICATIONS
  // ══════════════════════════════════════
  $('.topbar-btn[title="Notifications"]').on("click", function () {
    $(this).find(".notif-dot").hide();
    showToast("No new notifications", "info");
  });

  // ══════════════════════════════════════
  // TOPBAR MESSAGES
  // ══════════════════════════════════════
  $('.topbar-btn[title="Messages"]').on("click", function () {
    showToast("No new messages", "info");
  });

  // ══════════════════════════════════════
  // TOPBAR SEARCH
  // ══════════════════════════════════════
  $('.topbar-btn[title="Search"]').on("click", function () {
    var q = prompt("Search...");
    if (q) showToast("Searching for: " + q, "info");
  });

  // ══════════════════════════════════════
  // WELCOME BANNER BUTTONS
  // ══════════════════════════════════════
  $(".welcome-btn").on("click", function () {
    if ($(this).hasClass("solid")) {
      window.location.href = "events-create.html";
    } else {
      showToast("Preparing report export...", "success");
    }
  });

  // ══════════════════════════════════════
  // STAT CARDS — animate bars on load
  // ══════════════════════════════════════
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

  // ══════════════════════════════════════
  // TABLE ACTION BUTTONS (tbody — icon clicks bubble from <i>)
  // ══════════════════════════════════════
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

      if (
        page === "customers-blocked.html" &&
        /^lift ban$/i.test(action)
      ) {
        if (
          !confirm(
            "Lift ban for " + name + "? They will be able to book again.",
          )
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

      var msg = action + ": " + name;
      var toastType = "info";
      if (/edit|save|approve|reply|export|lift|unlock|complete/i.test(action))
        toastType = "success";
      if (
        /delete|remove|reject|suspend|ban|danger/i.test(action) ||
        $btn.hasClass("btn-danger")
      )
        toastType = action.toLowerCase().indexOf("delete") >= 0 ||
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

  // ══════════════════════════════════════
  // PROFILE DROPDOWN
  // ══════════════════════════════════════
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

  // ══════════════════════════════════════
  // TOAST ANIMATION STYLE (injected once)
  // ══════════════════════════════════════
  $("<style>")
    .text(
      "@keyframes slideIn { from { transform: translateX(-20px); opacity:0; } to { transform: translateX(0); opacity:1; } }",
    )
    .appendTo("head");
});

// ══════════════════════════════════════
// TOAST NOTIFICATION (global)
// ══════════════════════════════════════
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

// ══════════════════════════════════════════════════════════════
// CUSTOMER PAGES — View / Edit / Reply modal (customers*.html)
// ══════════════════════════════════════════════════════════════
function customerModalClose() {
  $("#adminCustomerModal")
    .removeClass("is-open")
    .attr("aria-hidden", "true");
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
  if ($ph.length)
    phone = $ph
      .clone()
      .find("i")
      .remove()
      .end()
      .text()
      .trim();
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
    if ($d.length)
      since = $d
        .clone()
        .find("i")
        .remove()
        .end()
        .text()
        .trim();
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
  $tr.find(".event-meta").first().empty().append(
    $('<i class="fas fa-envelope"></i>'),
    document.createTextNode(" " + d.email),
  );
  var $ph = $tr.find("td .fa-phone").closest("td");
  if ($ph.length) {
    $ph.empty().append(
      $('<span class="date-cell">').append(
        $('<i class="fas fa-phone"></i>'),
        document.createTextNode(" " + (d.phone || "—")),
      ),
    );
  }
  $tr.find(".city-cell").first().empty().append(
    $('<i class="fas fa-map-marker-alt"></i>'),
    document.createTextNode(" " + d.city),
  );
  if (d.rowType === "ban" || d.rowType === "complaint") {
    $tr
      .children("td")
      .eq(4)
      .html(
        '<span style="font-size:12px;color:var(--text-muted)"></span>',
      )
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
    $dl.append(
      $("<dt>").text(label),
      $("<dd>").text(val || "—"),
    );
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
      $('<textarea class="form-input form-textarea" id="custModalReason" rows="3">').val(
        d.reason === "—" ? "" : d.reason,
      ),
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
  $m
    .find(".admin-modal-body")
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

// ══════════════════════════════════════════════════════════════
// PROVIDERS — providers.html
// ══════════════════════════════════════════════════════════════
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
    function buildRow(p) {
      return (
        '<tr data-id="' +
        p.id +
        '"><td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        p.avatar +
        '</div><div><div class="event-name">' +
        p.name +
        '</div><div class="event-meta"><i class="fas fa-envelope"></i> ' +
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
        '<td><div class="table-actions"><button class="btn btn-ghost btn-icon btn-sm pv-view" data-id="' +
        p.id +
        '" title="View"><i class="fas fa-eye"></i></button><button class="btn btn-ghost btn-icon btn-sm pv-edit" data-id="' +
        p.id +
        '" title="Edit"><i class="fas fa-edit"></i></button><button class="btn btn-ghost btn-icon btn-sm btn-danger pv-del" data-id="' +
        p.id +
        '" title="Delete"><i class="fas fa-trash"></i></button></div></td></tr>'
      );
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

// ══════════════════════════════════════════════════════════════
// PROVIDERS ACTIVE — providers-active.html
// ══════════════════════════════════════════════════════════════
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
    function buildRow(p) {
      return (
        '<tr data-id="' +
        p.id +
        '"><td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        p.name.charAt(0) +
        '</div><div><div class="event-name">' +
        p.name +
        '</div><div class="event-meta"><i class="fas fa-envelope"></i> ' +
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
        '<td><div class="table-actions"><button class="btn btn-ghost btn-icon btn-sm pv-view" data-id="' +
        p.id +
        '" title="View"><i class="fas fa-eye"></i></button><button class="btn btn-ghost btn-icon btn-sm pv-suspend" data-id="' +
        p.id +
        '" title="Suspend"><i class="fas fa-ban"></i></button><button class="btn btn-ghost btn-icon btn-sm btn-danger pv-del" data-id="' +
        p.id +
        '" title="Remove"><i class="fas fa-trash"></i></button></div></td></tr>'
      );
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

// ══════════════════════════════════════════════════════════════
// PROVIDERS PENDING — providers-pending.html
// ══════════════════════════════════════════════════════════════
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
    function buildRow(p) {
      return (
        '<tr data-id="' +
        p.id +
        '"><td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' +
        p.name.charAt(0) +
        '</div><div><div class="event-name">' +
        p.name +
        '</div><div class="event-meta"><i class="fas fa-envelope"></i> ' +
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
        '<td><div class="table-actions"><button class="btn btn-primary btn-sm pn-approve" data-id="' +
        p.id +
        '"><i class="fas fa-check"></i> Approve</button><button class="btn btn-ghost btn-icon btn-sm pn-view" data-id="' +
        p.id +
        '"><i class="fas fa-eye"></i></button><button class="btn btn-ghost btn-icon btn-sm btn-danger pn-reject" data-id="' +
        p.id +
        '"><i class="fas fa-times"></i></button></div></td></tr>'
      );
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

// ══════════════════════════════════════════════════════════════
// PROVIDERS REQUESTS — providers-requests.html
// ══════════════════════════════════════════════════════════════
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

// ══════════════════════════════════════════════════════════════
// PROVIDERS REPORTS — providers-reports.html
// ══════════════════════════════════════════════════════════════
if ($('#eventsBody').length && window.location.pathname.indexOf('providers-reports.html') > -1) {
  (function () {
    var allData = [
      { id:7,  name:'Tech Events Co.',   city:'Damascus', events:2,  sold:400, revenue:240000, rating:4.9, cancelRate:'2%',  rank:1 },
      { id:1,  name:'Entertainment Co.', city:'Damascus', events:12, sold:700, revenue:245000, rating:4.8, cancelRate:'3%',  rank:2 },
      { id:5,  name:'Success Academy',   city:'Damascus', events:7,  sold:95,  revenue:63000,  rating:4.7, cancelRate:'1%',  rank:3 },
      { id:10, name:'Creative Studio',   city:'Latakia',  events:6,  sold:250, revenue:54000,  rating:4.6, cancelRate:'4%',  rank:4 },
      { id:6,  name:'Music House',       city:'Aleppo',   events:4,  sold:200, revenue:72000,  rating:4.3, cancelRate:'5%',  rank:5 },
      { id:2,  name:'Sports Club Syria', city:'Aleppo',   events:8,  sold:650, revenue:180000, rating:4.5, cancelRate:'6%',  rank:6 },
      { id:3,  name:'Travel Agency',     city:'Latakia',  events:5,  sold:75,  revenue:97500,  rating:4.2, cancelRate:'3%',  rank:7 },
      { id:9,  name:'Homs Sports Arena', city:'Homs',     events:1,  sold:150, revenue:5000,   rating:3.5, cancelRate:'12%', rank:8 },
      { id:4,  name:'Arts House',        city:'Homs',     events:3,  sold:20,  revenue:18000,  rating:3.9, cancelRate:'8%',  rank:9 },
    ];
    var filtered = allData.slice();
    function rankBadge(r) {
      if (r === 1) return '<span style="color:#f59e0b;font-weight:700"><i class="fas fa-trophy"></i> #1</span>';
      if (r === 2) return '<span style="color:#94a3b8;font-weight:700"><i class="fas fa-medal"></i> #2</span>';
      if (r === 3) return '<span style="color:#cd7f32;font-weight:700"><i class="fas fa-medal"></i> #3</span>';
      return '<span style="color:var(--text-muted)">#' + r + '</span>';
    }
    function stars(r) {
      var s = '';
      for (var i = 1; i <= 5; i++) s += '<i class="fas fa-star" style="color:' + (i<=Math.round(r)?'#f59e0b':'var(--border)') + ';font-size:11px"></i>';
      return s + ' <span style="font-size:12px;color:var(--text-muted)">(' + r + ')</span>';
    }
    function buildRow(p) {
      return '<tr data-id="' + p.id + '"><td><input type="checkbox" class="row-check"></td>' +
        '<td><div class="provider-cell"><div class="provider-avatar">' + p.name.charAt(0) + '</div><div><div class="event-name">' + p.name + '</div></div></div></td>' +
        '<td><span class="city-cell"><i class="fas fa-map-marker-alt"></i> ' + p.city + '</span></td>' +
        '<td><span class="tickets-count">' + p.events + '</span></td>' +
        '<td><span class="tickets-count">' + p.sold.toLocaleString() + '</span></td>' +
        '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' + p.revenue.toLocaleString() + '</span></td>' +
        '<td>' + stars(p.rating) + '</td>' +
        '<td><span style="font-size:13px;color:' + (parseFloat(p.cancelRate)>8?'var(--danger)':'var(--text-muted)') + '">' + p.cancelRate + '</span></td>' +
        '<td>' + rankBadge(p.rank) + '</td>' +
        '<td><div class="table-actions"><button class="btn btn-ghost btn-icon btn-sm rp-view" data-id="' + p.id + '" title="View Report"><i class="fas fa-chart-bar"></i></button><button class="btn btn-ghost btn-icon btn-sm rp-export" data-id="' + p.id + '" title="Export"><i class="fas fa-file-export"></i></button></div></td></tr>';
    }
    function render() {
      $('#eventsBody').html($.map(filtered, buildRow).join(''));
      $('#tableCount').text('Showing ' + filtered.length + ' providers');
    }
    function applyFilters() {
      var s = $('#searchInput').val().toLowerCase(), city = $('#cityFilter').val();
      filtered = $.grep(allData, function(p){ return (!s||p.name.toLowerCase().indexOf(s)>-1)&&(!city||p.city===city); });
      render();
    }
    $(function () {
      $('#searchInput').on('input', applyFilters);
      $('#cityFilter, #periodFilter').on('change', applyFilters);
      $('#exportBtn').on('click', function(){ showToast('Exporting performance report...','success'); });
      $('#selectAll').on('change', function(){ $('.row-check').prop('checked',$(this).prop('checked')); });
      $('#eventsBody')
        .on('click','.rp-view',function(){ var p=$.grep(allData,function(x){return x.id===+$(this).data('id');})[0]; if(p) showToast('Viewing report: '+p.name,'info'); })
        .on('click','.rp-export',function(){ showToast('Exporting...','success'); });
      render();
    });
  }());
}

// ══════════════════════════════════════════════════════════════
// EVENTS — events.html
// ══════════════════════════════════════════════════════════════
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() === "events.html"
) {
  (function ($) {
    'use strict';
var BADGES = {
    active:   '<span class="badge active"><span class="badge-dot"></span>Active</span>',
    pending:  '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
    rejected: '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
    ended:    '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
  };
  var ICONS  = { Music:'fa-music', Sports:'fa-futbol', Tourism:'fa-plane', Arts:'fa-palette', Education:'fa-graduation-cap' };
  var COLORS = { Music:'cat-music', Sports:'cat-sports', Tourism:'cat-tourism', Arts:'cat-arts', Education:'cat-education' };

  var allData = [
    { id:1,  name:'Music Concert — Damascus',  provider:'Entertainment Co.', category:'Music',     city:'Damascus', date:'Apr 15, 2026', sold:320, total:500,  revenue:48000,  status:'active',   img:'https://picsum.photos/seed/music1/80/80'  },
    { id:2,  name:'Football Tournament',       provider:'Sports Club',       category:'Sports',    city:'Aleppo',   date:'Apr 20, 2026', sold:150, total:1000, revenue:22500,  status:'pending',  img:'https://picsum.photos/seed/sport1/80/80'  },
    { id:3,  name:'Tourism Trip — Latakia',    provider:'Travel Agency',     category:'Tourism',   city:'Latakia',  date:'May 1, 2026',  sold:45,  total:60,   revenue:13500,  status:'active',   img:'https://picsum.photos/seed/travel1/80/80' },
    { id:4,  name:'Fine Arts Exhibition',      provider:'Arts House',        category:'Arts',      city:'Homs',     date:'Apr 10, 2026', sold:0,   total:200,  revenue:0,      status:'rejected', img:'https://picsum.photos/seed/arts1/80/80'   },
    { id:5,  name:'Self Development Workshop', provider:'Success Academy',   category:'Education', city:'Damascus', date:'Apr 25, 2026', sold:80,  total:100,  revenue:12000,  status:'active',   img:'https://picsum.photos/seed/edu1/80/80'    },
    { id:6,  name:'Jazz Night',                provider:'Music House',       category:'Music',     city:'Aleppo',   date:'May 5, 2026',  sold:200, total:300,  revenue:30000,  status:'active',   img:'https://picsum.photos/seed/jazz1/80/80'   },
    { id:7,  name:'Marathon 2026',             provider:'Sports Club',       category:'Sports',    city:'Damascus', date:'May 10, 2026', sold:500, total:2000, revenue:75000,  status:'active',   img:'https://picsum.photos/seed/run1/80/80'    },
    { id:8,  name:'Photography Workshop',      provider:'Arts House',        category:'Arts',      city:'Homs',     date:'Apr 30, 2026', sold:20,  total:30,   revenue:6000,   status:'pending',  img:'https://picsum.photos/seed/photo1/80/80'  },
    { id:9,  name:'Desert Safari',             provider:'Travel Agency',     category:'Tourism',   city:'Latakia',  date:'May 15, 2026', sold:30,  total:50,   revenue:15000,  status:'active',   img:'https://picsum.photos/seed/desert1/80/80' },
    { id:10, name:'Tech Conference 2026',      provider:'Tech Events Co.',   category:'Education', city:'Damascus', date:'Jun 1, 2026',  sold:400, total:600,  revenue:120000, status:'active',   img:'https://picsum.photos/seed/tech1/80/80'   },
    { id:11, name:'Comedy Show',               provider:'Entertainment Co.', category:'Music',     city:'Aleppo',   date:'Apr 18, 2026', sold:180, total:250,  revenue:27000,  status:'ended',    img:'https://picsum.photos/seed/comedy1/80/80' },
    { id:12, name:'Cooking Class',             provider:'Success Academy',   category:'Education', city:'Damascus', date:'Apr 5, 2026',  sold:15,  total:20,   revenue:3000,   status:'ended',    img:'https://picsum.photos/seed/cook1/80/80'   },
  ];

  var filtered = allData.slice();
  var page     = 1;
  var isGrid   = false;
  var PER_PAGE = 100;

  function buildRow(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var icon = ICONS[e.category]  || 'fa-tag';
    var cc   = COLORS[e.category] || '';
    return '<tr data-id="' + e.id + '">' +
      '<td><input type="checkbox" class="row-check"></td>' +
      '<td><div class="event-cell"><img src="' + e.img + '" class="event-thumb-img"><div>' +
        '<div class="event-name">' + e.name + '</div>' +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' + e.city + '</div>' +
      '</div></div></td>' +
      '<td><div class="provider-cell"><div class="provider-avatar">' + e.provider.charAt(0) + '</div><span>' + e.provider + '</span></div></td>' +
      '<td><span class="category-tag ' + cc + '-tag"><i class="fas ' + icon + '"></i> ' + e.category + '</span></td>' +
      '<td><span class="city-cell"><i class="fas fa-city"></i> ' + e.city + '</span></td>' +
      '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' + e.date + '</span></td>' +
      '<td><div class="tickets-cell"><span class="tickets-count">' + e.sold + ' <span class="tickets-total">/ ' + e.total + '</span></span>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="tickets-pct">' + pct + '%</span></div></td>' +
      '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span></td>' +
      '<td>' + (BADGES[e.status] || '') + '</td>' +
      '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' + e.id + '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' + e.id + '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' + e.id + '" title="Delete"><i class="fas fa-trash"></i></button>' +
      '</div></td></tr>';
  }

  function buildCard(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var cc  = COLORS[e.category] || '';
    return '<div class="event-grid-card" data-id="' + e.id + '">' +
      '<div class="event-grid-thumb ' + cc + '"><img src="' + e.img + '" class="event-grid-img"></div>' +
      '<div class="event-grid-body">' +
        '<div class="event-grid-name">' + e.name + '</div>' +
        '<div class="event-grid-meta">' +
          '<span><i class="fas fa-map-marker-alt"></i> ' + e.city + '</span>' +
          '<span><i class="fas fa-calendar-alt"></i> ' + e.date + '</span>' +
          '<span><i class="fas fa-user"></i> ' + e.provider + '</span>' +
        '</div>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="event-grid-footer">' +
          '<span>' + (BADGES[e.status] || '') + '</span>' +
          '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span>' +
        '</div>' +
      '</div></div>';
  }

  function render() {
    var start = (page - 1) * PER_PAGE;
    var rows  = filtered.slice(start, start + PER_PAGE);
    if (isGrid) {
      $('#eventsGrid').html($.map(rows, buildCard).join(''));
    } else {
      $('#eventsBody').html($.map(rows, buildRow).join(''));
    }
    $('#tableCount').text('Showing ' + Math.min(start + PER_PAGE, filtered.length) + ' of ' + filtered.length + ' events');
    renderPagination();
  }

  function renderPagination() {
    var pages = Math.ceil(filtered.length / PER_PAGE);
    var html  = '<button class="page-btn" data-page="' + (page - 1) + '"' + (page === 1 ? ' disabled' : '') + '><i class="fas fa-chevron-left"></i></button>';
    for (var i = 1; i <= pages; i++) {
      html += '<button class="page-btn' + (i === page ? ' active' : '') + '" data-page="' + i + '">' + i + '</button>';
    }
    html += '<button class="page-btn" data-page="' + (page + 1) + '"' + (page === pages ? ' disabled' : '') + '><i class="fas fa-chevron-right"></i></button>';
    html += '<span class="page-info">Page ' + page + ' of ' + pages + '</span>';
    $('#pagination').html(html);
  }

  function applyFilters() {
    var s      = $('#searchInput').val().toLowerCase();
    var city   = $('#cityFilter').val();
    var cat    = $('#categoryFilter').val();
    var status = $('#statusFilter').val();
    filtered = $.grep(allData, function (e) {
      return (!s      || e.name.toLowerCase().indexOf(s) > -1 || e.provider.toLowerCase().indexOf(s) > -1) &&
             (!city   || e.city     === city)   &&
             (!cat    || e.category === cat)    &&
             (!status || e.status   === status);
    });
    page = 1;
    render();
  }

  $(function () {
    $('#searchInput').on('input', applyFilters);
    $('#cityFilter, #categoryFilter, #statusFilter').on('change', applyFilters);
    $('#exportBtn').on('click', function () { showToast('Exporting...', 'success'); });
    $('#selectAll').on('change', function () { $('.row-check').prop('checked', $(this).prop('checked')); });

    $('#eventsBody').on('click', '.ev-view', function () {
      var id = +$(this).data('id');
      showToast('Viewing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-edit', function () {
      var id = +$(this).data('id');
      showToast('Editing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-del', function () {
      var id = +$(this).data('id');
      var e  = $.grep(allData, function(x){ return x.id===id; })[0];
      if (e && confirm('Delete: ' + e.name + '?')) {
        allData  = $.grep(allData,  function(x){ return x.id !== id; });
        filtered = $.grep(filtered, function(x){ return x.id !== id; });
        render();
        showToast('Deleted', 'error');
      }
    });

    $('#viewList').on('click', function () {
      isGrid = false;
      $('#eventsTable').closest('.table-scroll-wrap').show();
      $('#eventsGrid').removeClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });
    $('#viewGrid').on('click', function () {
      isGrid = true;
      $('#eventsTable').closest('.table-scroll-wrap').hide();
      $('#eventsGrid').addClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });

    $('#pagination').on('click', '.page-btn:not([disabled])', function () {
      var target = +$(this).data('page');
      var pages  = Math.ceil(filtered.length / PER_PAGE);
      if (target >= 1 && target <= pages) { page = target; render(); }
    });

    render();
  });

  })(jQuery);
}

// ══════════════════════════════════════════════════════════════
// EVENTS — events-active.html
// ══════════════════════════════════════════════════════════════
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() === "events-active.html"
) {
  (function ($) {
    'use strict';
var BADGES = {
    active:   '<span class="badge active"><span class="badge-dot"></span>Active</span>',
    pending:  '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
    rejected: '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
    ended:    '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
  };
  var ICONS  = { Music:'fa-music', Sports:'fa-futbol', Tourism:'fa-plane', Arts:'fa-palette', Education:'fa-graduation-cap' };
  var COLORS = { Music:'cat-music', Sports:'cat-sports', Tourism:'cat-tourism', Arts:'cat-arts', Education:'cat-education' };

  var allData = [
    { id:1,  name:'Music Concert — Damascus',  provider:'Entertainment Co.', category:'Music',     city:'Damascus', date:'Apr 15, 2026', sold:320, total:500,  revenue:48000,  status:'active', img:'https://picsum.photos/seed/music1/80/80'  },
    { id:3,  name:'Tourism Trip — Latakia',    provider:'Travel Agency',     category:'Tourism',   city:'Latakia',  date:'May 1, 2026',  sold:45,  total:60,   revenue:13500,  status:'active', img:'https://picsum.photos/seed/travel1/80/80' },
    { id:5,  name:'Self Development Workshop', provider:'Success Academy',   category:'Education', city:'Damascus', date:'Apr 25, 2026', sold:80,  total:100,  revenue:12000,  status:'active', img:'https://picsum.photos/seed/edu1/80/80'    },
    { id:6,  name:'Jazz Night',                provider:'Music House',       category:'Music',     city:'Aleppo',   date:'May 5, 2026',  sold:200, total:300,  revenue:30000,  status:'active', img:'https://picsum.photos/seed/jazz1/80/80'   },
    { id:7,  name:'Marathon 2026',             provider:'Sports Club',       category:'Sports',    city:'Damascus', date:'May 10, 2026', sold:500, total:2000, revenue:75000,  status:'active', img:'https://picsum.photos/seed/run1/80/80'    },
    { id:9,  name:'Desert Safari',             provider:'Travel Agency',     category:'Tourism',   city:'Latakia',  date:'May 15, 2026', sold:30,  total:50,   revenue:15000,  status:'active', img:'https://picsum.photos/seed/desert1/80/80' },
    { id:10, name:'Tech Conference 2026',      provider:'Tech Events Co.',   category:'Education', city:'Damascus', date:'Jun 1, 2026',  sold:400, total:600,  revenue:120000, status:'active', img:'https://picsum.photos/seed/tech1/80/80'   },
  ];

  var filtered = allData.slice();
  var isGrid   = false;

  function buildRow(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var icon = ICONS[e.category]  || 'fa-tag';
    var cc   = COLORS[e.category] || '';
    return '<tr data-id="' + e.id + '">' +
      '<td><input type="checkbox" class="row-check"></td>' +
      '<td><div class="event-cell"><img src="' + e.img + '" class="event-thumb-img"><div>' +
        '<div class="event-name">' + e.name + '</div>' +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' + e.city + '</div>' +
      '</div></div></td>' +
      '<td><div class="provider-cell"><div class="provider-avatar">' + e.provider.charAt(0) + '</div><span>' + e.provider + '</span></div></td>' +
      '<td><span class="category-tag ' + cc + '-tag"><i class="fas ' + icon + '"></i> ' + e.category + '</span></td>' +
      '<td><span class="city-cell"><i class="fas fa-city"></i> ' + e.city + '</span></td>' +
      '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' + e.date + '</span></td>' +
      '<td><div class="tickets-cell"><span class="tickets-count">' + e.sold + ' <span class="tickets-total">/ ' + e.total + '</span></span>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="tickets-pct">' + pct + '%</span></div></td>' +
      '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span></td>' +
      '<td>' + (BADGES[e.status] || '') + '</td>' +
      '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' + e.id + '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' + e.id + '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' + e.id + '" title="Delete"><i class="fas fa-trash"></i></button>' +
      '</div></td></tr>';
  }

  function buildCard(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var cc  = COLORS[e.category] || '';
    return '<div class="event-grid-card" data-id="' + e.id + '">' +
      '<div class="event-grid-thumb ' + cc + '"><img src="' + e.img + '" class="event-grid-img"></div>' +
      '<div class="event-grid-body">' +
        '<div class="event-grid-name">' + e.name + '</div>' +
        '<div class="event-grid-meta">' +
          '<span><i class="fas fa-map-marker-alt"></i> ' + e.city + '</span>' +
          '<span><i class="fas fa-calendar-alt"></i> ' + e.date + '</span>' +
          '<span><i class="fas fa-user"></i> ' + e.provider + '</span>' +
        '</div>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="event-grid-footer">' +
          '<span>' + (BADGES[e.status] || '') + '</span>' +
          '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span>' +
        '</div>' +
      '</div></div>';
  }

  function render() {
    if (isGrid) {
      $('#eventsGrid').html($.map(filtered, buildCard).join(''));
    } else {
      $('#eventsBody').html($.map(filtered, buildRow).join(''));
    }
    $('#tableCount').text('Showing ' + filtered.length + ' events');
  }

  function applyFilters() {
    var s   = $('#searchInput').val().toLowerCase();
    var c   = $('#cityFilter').val();
    var cat = $('#categoryFilter').val();
    filtered = $.grep(allData, function (e) {
      return (!s   || e.name.toLowerCase().indexOf(s) > -1 || e.provider.toLowerCase().indexOf(s) > -1) &&
             (!c   || e.city     === c)   &&
             (!cat || e.category === cat);
    });
    render();
  }

  $(function () {
    $('#searchInput').on('input', applyFilters);
    $('#cityFilter, #categoryFilter').on('change', applyFilters);
    $('#exportBtn').on('click', function () { showToast('Exporting...', 'success'); });
    $('#selectAll').on('change', function () { $('.row-check').prop('checked', $(this).prop('checked')); });

    $('#eventsBody').on('click', '.ev-view', function () {
      var id = +$(this).data('id');
      showToast('Viewing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-edit', function () {
      var id = +$(this).data('id');
      showToast('Editing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-del', function () {
      var id = +$(this).data('id');
      var e  = $.grep(allData, function(x){ return x.id===id; })[0];
      if (e && confirm('Delete: ' + e.name + '?')) {
        allData  = $.grep(allData,  function(x){ return x.id !== id; });
        filtered = $.grep(filtered, function(x){ return x.id !== id; });
        render();
        showToast('Deleted', 'error');
      }
    });

    $('#viewList').on('click', function () {
      isGrid = false;
      $('#eventsTable').closest('.table-scroll-wrap').show();
      $('#eventsGrid').removeClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });
    $('#viewGrid').on('click', function () {
      isGrid = true;
      $('#eventsTable').closest('.table-scroll-wrap').hide();
      $('#eventsGrid').addClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });

    render();
  });

  })(jQuery);
}

// ══════════════════════════════════════════════════════════════
// EVENTS — events-review.html
// ══════════════════════════════════════════════════════════════
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() === "events-review.html"
) {
  (function ($) {
    'use strict';
var BADGES = {
    active:   '<span class="badge active"><span class="badge-dot"></span>Active</span>',
    pending:  '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
    rejected: '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
    ended:    '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
  };
  var ICONS  = { Music:'fa-music', Sports:'fa-futbol', Tourism:'fa-plane', Arts:'fa-palette', Education:'fa-graduation-cap' };
  var COLORS = { Music:'cat-music', Sports:'cat-sports', Tourism:'cat-tourism', Arts:'cat-arts', Education:'cat-education' };

  var allData = [
    { id:2, name:'Football Tournament',  provider:'Sports Club', category:'Sports', city:'Aleppo', date:'Apr 20, 2026', sold:150, total:1000, revenue:22500, status:'pending', img:'https://picsum.photos/seed/sport1/80/80'  },
    { id:8, name:'Photography Workshop', provider:'Arts House',  category:'Arts',   city:'Homs',   date:'Apr 30, 2026', sold:20,  total:30,   revenue:6000,  status:'pending', img:'https://picsum.photos/seed/photo1/80/80'  },
  ];

  var filtered = allData.slice();
  var isGrid   = false;

  function buildRow(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var icon = ICONS[e.category]  || 'fa-tag';
    var cc   = COLORS[e.category] || '';
    return '<tr data-id="' + e.id + '">' +
      '<td><input type="checkbox" class="row-check"></td>' +
      '<td><div class="event-cell"><img src="' + e.img + '" class="event-thumb-img"><div>' +
        '<div class="event-name">' + e.name + '</div>' +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' + e.city + '</div>' +
      '</div></div></td>' +
      '<td><div class="provider-cell"><div class="provider-avatar">' + e.provider.charAt(0) + '</div><span>' + e.provider + '</span></div></td>' +
      '<td><span class="category-tag ' + cc + '-tag"><i class="fas ' + icon + '"></i> ' + e.category + '</span></td>' +
      '<td><span class="city-cell"><i class="fas fa-city"></i> ' + e.city + '</span></td>' +
      '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' + e.date + '</span></td>' +
      '<td><div class="tickets-cell"><span class="tickets-count">' + e.sold + ' <span class="tickets-total">/ ' + e.total + '</span></span>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="tickets-pct">' + pct + '%</span></div></td>' +
      '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span></td>' +
      '<td>' + (BADGES[e.status] || '') + '</td>' +
      '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' + e.id + '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' + e.id + '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' + e.id + '" title="Delete"><i class="fas fa-trash"></i></button>' +
      '</div></td></tr>';
  }

  function buildCard(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var cc  = COLORS[e.category] || '';
    return '<div class="event-grid-card" data-id="' + e.id + '">' +
      '<div class="event-grid-thumb ' + cc + '"><img src="' + e.img + '" class="event-grid-img"></div>' +
      '<div class="event-grid-body">' +
        '<div class="event-grid-name">' + e.name + '</div>' +
        '<div class="event-grid-meta">' +
          '<span><i class="fas fa-map-marker-alt"></i> ' + e.city + '</span>' +
          '<span><i class="fas fa-calendar-alt"></i> ' + e.date + '</span>' +
          '<span><i class="fas fa-user"></i> ' + e.provider + '</span>' +
        '</div>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="event-grid-footer">' +
          '<span>' + (BADGES[e.status] || '') + '</span>' +
          '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span>' +
        '</div>' +
      '</div></div>';
  }

  function render() {
    if (isGrid) {
      $('#eventsGrid').html($.map(filtered, buildCard).join(''));
    } else {
      $('#eventsBody').html($.map(filtered, buildRow).join(''));
    }
    $('#tableCount').text('Showing ' + filtered.length + ' events');
  }

  function applyFilters() {
    var s   = $('#searchInput').val().toLowerCase();
    var c   = $('#cityFilter').val();
    var cat = $('#categoryFilter').val();
    filtered = $.grep(allData, function (e) {
      return (!s   || e.name.toLowerCase().indexOf(s) > -1 || e.provider.toLowerCase().indexOf(s) > -1) &&
             (!c   || e.city     === c)   &&
             (!cat || e.category === cat);
    });
    render();
  }

  $(function () {
    $('#searchInput').on('input', applyFilters);
    $('#cityFilter, #categoryFilter').on('change', applyFilters);
    $('#exportBtn').on('click', function () { showToast('Exporting...', 'success'); });
    $('#selectAll').on('change', function () { $('.row-check').prop('checked', $(this).prop('checked')); });

    $('#eventsBody').on('click', '.ev-view', function () {
      var id = +$(this).data('id');
      showToast('Viewing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-edit', function () {
      var id = +$(this).data('id');
      showToast('Editing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-del', function () {
      var id = +$(this).data('id');
      var e  = $.grep(allData, function(x){ return x.id===id; })[0];
      if (e && confirm('Delete: ' + e.name + '?')) {
        allData  = $.grep(allData,  function(x){ return x.id !== id; });
        filtered = $.grep(filtered, function(x){ return x.id !== id; });
        render();
        showToast('Deleted', 'error');
      }
    });

    $('#viewList').on('click', function () {
      isGrid = false;
      $('#eventsTable').closest('.table-scroll-wrap').show();
      $('#eventsGrid').removeClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });
    $('#viewGrid').on('click', function () {
      isGrid = true;
      $('#eventsTable').closest('.table-scroll-wrap').hide();
      $('#eventsGrid').addClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });

    render();
  });

  })(jQuery);
}

// ══════════════════════════════════════════════════════════════
// EVENTS — events-rejected.html
// ══════════════════════════════════════════════════════════════
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() === "events-rejected.html"
) {
  (function ($) {
    'use strict';
var BADGES = {
    active:   '<span class="badge active"><span class="badge-dot"></span>Active</span>',
    pending:  '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
    rejected: '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
    ended:    '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
  };
  var ICONS  = { Music:'fa-music', Sports:'fa-futbol', Tourism:'fa-plane', Arts:'fa-palette', Education:'fa-graduation-cap' };
  var COLORS = { Music:'cat-music', Sports:'cat-sports', Tourism:'cat-tourism', Arts:'cat-arts', Education:'cat-education' };

  var allData = [
    { id:4, name:'Fine Arts Exhibition', provider:'Arts House', category:'Arts', city:'Homs', date:'Apr 10, 2026', sold:0, total:200, revenue:0, status:'rejected', img:'https://picsum.photos/seed/arts1/80/80' },
  ];

  var filtered = allData.slice();
  var isGrid   = false;

  function buildRow(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var icon = ICONS[e.category]  || 'fa-tag';
    var cc   = COLORS[e.category] || '';
    return '<tr data-id="' + e.id + '">' +
      '<td><input type="checkbox" class="row-check"></td>' +
      '<td><div class="event-cell"><img src="' + e.img + '" class="event-thumb-img"><div>' +
        '<div class="event-name">' + e.name + '</div>' +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' + e.city + '</div>' +
      '</div></div></td>' +
      '<td><div class="provider-cell"><div class="provider-avatar">' + e.provider.charAt(0) + '</div><span>' + e.provider + '</span></div></td>' +
      '<td><span class="category-tag ' + cc + '-tag"><i class="fas ' + icon + '"></i> ' + e.category + '</span></td>' +
      '<td><span class="city-cell"><i class="fas fa-city"></i> ' + e.city + '</span></td>' +
      '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' + e.date + '</span></td>' +
      '<td><div class="tickets-cell"><span class="tickets-count">' + e.sold + ' <span class="tickets-total">/ ' + e.total + '</span></span>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="tickets-pct">' + pct + '%</span></div></td>' +
      '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span></td>' +
      '<td>' + (BADGES[e.status] || '') + '</td>' +
      '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' + e.id + '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' + e.id + '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' + e.id + '" title="Delete"><i class="fas fa-trash"></i></button>' +
      '</div></td></tr>';
  }

  function buildCard(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var cc  = COLORS[e.category] || '';
    return '<div class="event-grid-card" data-id="' + e.id + '">' +
      '<div class="event-grid-thumb ' + cc + '"><img src="' + e.img + '" class="event-grid-img"></div>' +
      '<div class="event-grid-body">' +
        '<div class="event-grid-name">' + e.name + '</div>' +
        '<div class="event-grid-meta">' +
          '<span><i class="fas fa-map-marker-alt"></i> ' + e.city + '</span>' +
          '<span><i class="fas fa-calendar-alt"></i> ' + e.date + '</span>' +
          '<span><i class="fas fa-user"></i> ' + e.provider + '</span>' +
        '</div>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="event-grid-footer">' +
          '<span>' + (BADGES[e.status] || '') + '</span>' +
          '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span>' +
        '</div>' +
      '</div></div>';
  }

  function render() {
    if (isGrid) {
      $('#eventsGrid').html($.map(filtered, buildCard).join(''));
    } else {
      $('#eventsBody').html($.map(filtered, buildRow).join(''));
    }
    $('#tableCount').text('Showing ' + filtered.length + ' events');
  }

  function applyFilters() {
    var s   = $('#searchInput').val().toLowerCase();
    var c   = $('#cityFilter').val();
    var cat = $('#categoryFilter').val();
    filtered = $.grep(allData, function (e) {
      return (!s   || e.name.toLowerCase().indexOf(s) > -1 || e.provider.toLowerCase().indexOf(s) > -1) &&
             (!c   || e.city     === c)   &&
             (!cat || e.category === cat);
    });
    render();
  }

  $(function () {
    $('#searchInput').on('input', applyFilters);
    $('#cityFilter, #categoryFilter').on('change', applyFilters);
    $('#exportBtn').on('click', function () { showToast('Exporting...', 'success'); });
    $('#selectAll').on('change', function () { $('.row-check').prop('checked', $(this).prop('checked')); });

    $('#eventsBody').on('click', '.ev-view', function () {
      var id = +$(this).data('id');
      showToast('Viewing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-edit', function () {
      var id = +$(this).data('id');
      showToast('Editing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-del', function () {
      var id = +$(this).data('id');
      var e  = $.grep(allData, function(x){ return x.id===id; })[0];
      if (e && confirm('Delete: ' + e.name + '?')) {
        allData  = $.grep(allData,  function(x){ return x.id !== id; });
        filtered = $.grep(filtered, function(x){ return x.id !== id; });
        render();
        showToast('Deleted', 'error');
      }
    });

    $('#viewList').on('click', function () {
      isGrid = false;
      $('#eventsTable').closest('.table-scroll-wrap').show();
      $('#eventsGrid').removeClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });
    $('#viewGrid').on('click', function () {
      isGrid = true;
      $('#eventsTable').closest('.table-scroll-wrap').hide();
      $('#eventsGrid').addClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });

    render();
  });

  })(jQuery);
}

// ══════════════════════════════════════════════════════════════
// EVENTS — events-ended.html
// ══════════════════════════════════════════════════════════════
if (
  $("#eventsBody").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() === "events-ended.html"
) {
  (function ($) {
    'use strict';
var BADGES = {
    active:   '<span class="badge active"><span class="badge-dot"></span>Active</span>',
    pending:  '<span class="badge pending"><span class="badge-dot"></span>Review</span>',
    rejected: '<span class="badge rejected"><span class="badge-dot"></span>Rejected</span>',
    ended:    '<span class="badge ended"><span class="badge-dot"></span>Ended</span>',
  };
  var ICONS  = { Music:'fa-music', Sports:'fa-futbol', Tourism:'fa-plane', Arts:'fa-palette', Education:'fa-graduation-cap' };
  var COLORS = { Music:'cat-music', Sports:'cat-sports', Tourism:'cat-tourism', Arts:'cat-arts', Education:'cat-education' };

  var allData = [
    { id:11, name:'Comedy Show',   provider:'Entertainment Co.', category:'Music',     city:'Aleppo',   date:'Apr 18, 2026', sold:180, total:250, revenue:27000, status:'ended', img:'https://picsum.photos/seed/comedy1/80/80' },
    { id:12, name:'Cooking Class', provider:'Success Academy',   category:'Education', city:'Damascus', date:'Apr 5, 2026',  sold:15,  total:20,  revenue:3000,  status:'ended', img:'https://picsum.photos/seed/cook1/80/80'   },
  ];

  var filtered = allData.slice();
  var isGrid   = false;

  function buildRow(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var icon = ICONS[e.category]  || 'fa-tag';
    var cc   = COLORS[e.category] || '';
    return '<tr data-id="' + e.id + '">' +
      '<td><input type="checkbox" class="row-check"></td>' +
      '<td><div class="event-cell"><img src="' + e.img + '" class="event-thumb-img"><div>' +
        '<div class="event-name">' + e.name + '</div>' +
        '<div class="event-meta"><i class="fas fa-map-marker-alt"></i> ' + e.city + '</div>' +
      '</div></div></td>' +
      '<td><div class="provider-cell"><div class="provider-avatar">' + e.provider.charAt(0) + '</div><span>' + e.provider + '</span></div></td>' +
      '<td><span class="category-tag ' + cc + '-tag"><i class="fas ' + icon + '"></i> ' + e.category + '</span></td>' +
      '<td><span class="city-cell"><i class="fas fa-city"></i> ' + e.city + '</span></td>' +
      '<td><span class="date-cell"><i class="fas fa-calendar-alt"></i> ' + e.date + '</span></td>' +
      '<td><div class="tickets-cell"><span class="tickets-count">' + e.sold + ' <span class="tickets-total">/ ' + e.total + '</span></span>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<span class="tickets-pct">' + pct + '%</span></div></td>' +
      '<td><span class="revenue-val"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span></td>' +
      '<td>' + (BADGES[e.status] || '') + '</td>' +
      '<td><div class="table-actions">' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-view" data-id="' + e.id + '" title="View"><i class="fas fa-eye"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm ev-edit" data-id="' + e.id + '" title="Edit"><i class="fas fa-edit"></i></button>' +
        '<button class="btn btn-ghost btn-icon btn-sm btn-danger ev-del" data-id="' + e.id + '" title="Delete"><i class="fas fa-trash"></i></button>' +
      '</div></td></tr>';
  }

  function buildCard(e) {
    var pct = Math.round(e.sold / e.total * 100);
    var cc  = COLORS[e.category] || '';
    return '<div class="event-grid-card" data-id="' + e.id + '">' +
      '<div class="event-grid-thumb ' + cc + '"><img src="' + e.img + '" class="event-grid-img"></div>' +
      '<div class="event-grid-body">' +
        '<div class="event-grid-name">' + e.name + '</div>' +
        '<div class="event-grid-meta">' +
          '<span><i class="fas fa-map-marker-alt"></i> ' + e.city + '</span>' +
          '<span><i class="fas fa-calendar-alt"></i> ' + e.date + '</span>' +
          '<span><i class="fas fa-user"></i> ' + e.provider + '</span>' +
        '</div>' +
        '<div class="ticket-progress"><div class="ticket-progress-fill" style="width:' + pct + '%"></div></div>' +
        '<div class="event-grid-footer">' +
          '<span>' + (BADGES[e.status] || '') + '</span>' +
          '<span class="event-grid-revenue"><i class="fas fa-coins"></i> ' + e.revenue.toLocaleString() + '</span>' +
        '</div>' +
      '</div></div>';
  }

  function render() {
    if (isGrid) {
      $('#eventsGrid').html($.map(filtered, buildCard).join(''));
    } else {
      $('#eventsBody').html($.map(filtered, buildRow).join(''));
    }
    $('#tableCount').text('Showing ' + filtered.length + ' events');
  }

  function applyFilters() {
    var s   = $('#searchInput').val().toLowerCase();
    var c   = $('#cityFilter').val();
    var cat = $('#categoryFilter').val();
    filtered = $.grep(allData, function (e) {
      return (!s   || e.name.toLowerCase().indexOf(s) > -1 || e.provider.toLowerCase().indexOf(s) > -1) &&
             (!c   || e.city     === c)   &&
             (!cat || e.category === cat);
    });
    render();
  }

  $(function () {
    $('#searchInput').on('input', applyFilters);
    $('#cityFilter, #categoryFilter').on('change', applyFilters);
    $('#exportBtn').on('click', function () { showToast('Exporting...', 'success'); });
    $('#selectAll').on('change', function () { $('.row-check').prop('checked', $(this).prop('checked')); });

    $('#eventsBody').on('click', '.ev-view', function () {
      var id = +$(this).data('id');
      showToast('Viewing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-edit', function () {
      var id = +$(this).data('id');
      showToast('Editing: ' + ($.grep(allData, function(x){ return x.id===id; })[0] || {}).name, 'info');
    }).on('click', '.ev-del', function () {
      var id = +$(this).data('id');
      var e  = $.grep(allData, function(x){ return x.id===id; })[0];
      if (e && confirm('Delete: ' + e.name + '?')) {
        allData  = $.grep(allData,  function(x){ return x.id !== id; });
        filtered = $.grep(filtered, function(x){ return x.id !== id; });
        render();
        showToast('Deleted', 'error');
      }
    });

    $('#viewList').on('click', function () {
      isGrid = false;
      $('#eventsTable').closest('.table-scroll-wrap').show();
      $('#eventsGrid').removeClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });
    $('#viewGrid').on('click', function () {
      isGrid = true;
      $('#eventsTable').closest('.table-scroll-wrap').hide();
      $('#eventsGrid').addClass('visible');
      $('.view-toggle').removeClass('active');
      $(this).addClass('active');
      render();
    });

    render();
  });

  })(jQuery);
}

// ══════════════════════════════════════════════════════════════
// EVENTS — events-create.html
// ══════════════════════════════════════════════════════════════
if (
  $("#uploadArea").length &&
  (window.location.pathname.split("/").pop() || "").toLowerCase() === "events-create.html"
) {
  (function ($) {
    'use strict';
$(function () {
    var $uploadArea   = $('#uploadArea');
    var $imageInput   = $('#imageInput');
    var $imagePreview = $('#imagePreview');

    // Upload area click
    $uploadArea.on('click', function () { $imageInput.trigger('click'); });

    // Drag & drop
    $uploadArea.on('dragover', function (e) {
      e.preventDefault();
      $(this).addClass('drag-over');
    }).on('dragleave', function () {
      $(this).removeClass('drag-over');
    }).on('drop', function (e) {
      e.preventDefault();
      $(this).removeClass('drag-over');
      var file = e.originalEvent.dataTransfer.files[0];
      if (file) previewImage(file);
    });

    // File input change
    $imageInput.on('change', function () {
      if (this.files[0]) previewImage(this.files[0]);
    });

    function previewImage(file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $imagePreview.attr('src', e.target.result).show();
        $uploadArea.hide();
      };
      reader.readAsDataURL(file);
    }

    // Save draft
    $('#saveDraftBtn').on('click', function () {
      showToast('Draft saved successfully', 'success');
    });

    // Publish
    $('#publishBtn').on('click', function () {
      var name = $('#eventName').val();
      if (!name) { showToast('Please enter event name', 'error'); return; }
      showToast('Event published successfully!', 'success');
      setTimeout(function () { window.location.href = 'events.html'; }, 1500);
    });
  });

  })(jQuery);
}

