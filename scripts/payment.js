(function(window) {
  'use strict';
  var PAYMENT_SELECTOR = '[data-payment-order="form"]';
  //var MODAL_SELECTOR = '[data-modal-order="modal"]'


  var App = window.App;
  var PaymentHandler = App.PaymentHandler;


  var paymenthandler = new PaymentHandler(PAYMENT_SELECTOR);

//  var modalhandler = new ModalHandler(MODAL_SELECTOR);
  paymenthandler.addSubmitHandler();

})(window);
