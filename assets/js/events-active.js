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

}(jQuery));
