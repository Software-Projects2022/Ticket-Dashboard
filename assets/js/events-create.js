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

}(jQuery));
