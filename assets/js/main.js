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
  // TABLE ROW VIEW BUTTONS
  // ══════════════════════════════════════
  $(document).on("click", ".data-table .btn-icon", function () {
    var name = $(this).closest("tr").find(".event-name").text() || "Event";
    showToast("Viewing: " + name, "info");
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
