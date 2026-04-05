// ══════════════════════════════════════
// SIDEBAR TOGGLE
// ══════════════════════════════════════
$(function () {

  // Sidebar collapse (desktop)
  $('#sidebarToggle').on('click', function () {
    $('#sidebar').toggleClass('closed');
  });

  // Mobile menu open
  $('#menuBtn').on('click', function () {
    $('#sidebar').toggleClass('active');
    $('#sidebarOverlay').toggleClass('active');
  });

  // Overlay closes sidebar
  $('#sidebarOverlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $(this).removeClass('active');
  });

  // ══════════════════════════════════════
  // DROPDOWNS
  // ══════════════════════════════════════
  $('.dropdown-toggle').on('click', function (e) {
    e.preventDefault();
    var $parent = $(this).closest('.nav-item.dropdown');
    var $menu   = $(this).next('.dropdown-menu');
    var isOpen  = $parent.hasClass('open');

    // close all
    $('.nav-item.dropdown').removeClass('open').find('.dropdown-menu').hide();

    if (!isOpen) {
      $parent.addClass('open');
      $menu.show();
    }
  });

  // ══════════════════════════════════════
  // AUTO ACTIVE LINK
  // ══════════════════════════════════════
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  $('.nav-item:not(.dropdown)').each(function () {
    var href = $(this).attr('href');
    if (href === currentPage) $(this).addClass('active');
    else $(this).removeClass('active');
  });

  $('.dropdown-menu a').each(function () {
    if ($(this).attr('href') === currentPage) {
      $(this).addClass('active-link');
      $(this).closest('.dropdown-menu').show();
      $(this).closest('.nav-item.dropdown').addClass('open');
    }
  });

  // ══════════════════════════════════════
  // TOPBAR NOTIFICATIONS
  // ══════════════════════════════════════
  $('.topbar-btn[title="Notifications"]').on('click', function () {
    $(this).find('.notif-dot').hide();
    showToast('No new notifications', 'info');
  });

  // ══════════════════════════════════════
  // TOPBAR MESSAGES
  // ══════════════════════════════════════
  $('.topbar-btn[title="Messages"]').on('click', function () {
    showToast('No new messages', 'info');
  });

  // ══════════════════════════════════════
  // TOPBAR SEARCH
  // ══════════════════════════════════════
  $('.topbar-btn[title="Search"]').on('click', function () {
    var q = prompt('Search...');
    if (q) showToast('Searching for: ' + q, 'info');
  });

  // ══════════════════════════════════════
  // WELCOME BANNER BUTTONS
  // ══════════════════════════════════════
  $('.welcome-btn').on('click', function () {
    if ($(this).hasClass('solid')) {
      window.location.href = 'events-create.html';
    } else {
      showToast('Preparing report export...', 'success');
    }
  });

  // ══════════════════════════════════════
  // STAT CARDS — animate bars on load
  // ══════════════════════════════════════
  $(window).on('load', function () {
    $('.stat-bar-fill').each(function () {
      var w = $(this).css('width');
      $(this).css('width', '0');
      setTimeout(function (el) { $(el).css('width', w); }, 200, this);
    });
  });

  // ══════════════════════════════════════
  // TABLE ROW VIEW BUTTONS
  // ══════════════════════════════════════
  $(document).on('click', '.data-table .btn-icon', function () {
    var name = $(this).closest('tr').find('.event-name').text() || 'Event';
    showToast('Viewing: ' + name, 'info');
  });

  // ══════════════════════════════════════
  // QUICK STATS ITEMS — clickable
  // ══════════════════════════════════════
  var quickStatLinks = {
    'Under Review':          'events-review.html',
    'New Provider Requests': 'providers-requests.html',
    'Refund Requests':       'finance-refunds.html',
    'Tickets Sold Today':    'analytics.html',
  };

  $('.quick-stat-item').each(function () {
    var label = $(this).find('.quick-stat-label').text().trim();
    if (quickStatLinks[label]) {
      $(this).css('cursor', 'pointer').on('click', function () {
        window.location.href = quickStatLinks[label];
      });
    }
  });

  // ══════════════════════════════════════
  // PROFILE DROPDOWN
  // ══════════════════════════════════════
  $('#profileBtn').on('click', function (e) {
    e.stopPropagation();
    $('#profileDropdown').toggleClass('open');
  });

  $(document).on('click', function () {
    $('#profileDropdown').removeClass('open');
  });

  $('#profileDropdown').on('click', function (e) {
    e.stopPropagation();
  });

  // ══════════════════════════════════════
  // TOAST ANIMATION STYLE (injected once)
  // ══════════════════════════════════════
  $('<style>').text('@keyframes slideIn { from { transform: translateX(-20px); opacity:0; } to { transform: translateX(0); opacity:1; } }')
    .appendTo('head');

});

// ══════════════════════════════════════
// TOAST NOTIFICATION (global)
// ══════════════════════════════════════
function showToast(message, type) {
  type = type || 'info';

  var $container = $('#toast-container');
  if (!$container.length) {
    $container = $('<div id="toast-container">').css({
      position: 'fixed', bottom: '24px', left: '24px',
      zIndex: 9999, display: 'flex', flexDirection: 'column', gap: '10px'
    }).appendTo('body');
  }

  var colors = { success: '#10b981', info: '#9a2226', warning: '#f59e0b', error: '#ef4444' };
  var icons  = { success: 'fa-check-circle', info: 'fa-info-circle', warning: 'fa-exclamation-circle', error: 'fa-times-circle' };

  var $toast = $('<div>').css({
    display: 'flex', alignItems: 'center', gap: '10px',
    background: '#fff', borderRadius: '10px',
    padding: '12px 18px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    borderLeft: '4px solid ' + colors[type],
    fontSize: '13px', fontFamily: "'Cairo',sans-serif",
    color: '#0f172a', minWidth: '240px',
    animation: 'slideIn 0.3s ease'
  }).html('<i class="fas ' + icons[type] + '" style="color:' + colors[type] + ';font-size:16px;"></i> ' + message);

  $container.append($toast);

  setTimeout(function () {
    $toast.css({ opacity: 0, transition: 'opacity 0.3s' });
    setTimeout(function () { $toast.remove(); }, 300);
  }, 3000);
}
