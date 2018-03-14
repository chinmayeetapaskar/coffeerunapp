(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function PaymentHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }
    // Code will go here
    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }
  }

  PaymentHandler.prototype.addSubmitHandler = function() {
    console.log('Setting paymentHandler');

    // More code will go here
    this.$formElement.on('submit', function(event) {
      event.preventDefault();
      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);

      });
      console.log(data);
      console.log(data.title);
      console.log(data.username);
      var overlay = new mymodal(data);
      $(document.body).append(overlay.$element);

      // Add the new row instance's $element property to the checklist
      //this.$element.append(overlay.$element);
      this.reset();
      this.elements[0].focus();
    });
  };
  function mymodal(data) {
    // Constructor code will go here

    var $div = $('<div></div>', {
      'class':'jquery-modal blocker current'
    });
    var $overlaydiv = $('<div></div>', {
      'class':'modal',
      "style":"display: inline-block"
    });
    var $para = $('<p>Thnak you for your payment,'+data.title+data.username+'</p>');
    var $link1 = $('<a href="payment.html" rel="modal:close">Close</a>')
    var $link2 = $('<a></a>',{
      'rel':'modal:close',
      'href':'payment.html',
      'class':'close-modal '
    });
    $overlaydiv.append($para);
    $overlaydiv.append($link2);
    $overlaydiv.append($link1);
    $div.append($overlaydiv);
    this.$element = $div;
  }
  App.PaymentHandler = PaymentHandler;
  window.App = App;
})(window);
