export const getCheckoutScripts = ($) => {
  $.noConflict();

  $("#showlogin").on("click", function () {
    $("#checkout-login").slideToggle(500);
  });

  $("#showcoupon").on("click", function () {
    $("#checkout-coupon").slideToggle(500);
  });

  $("#chekout-box").on("change", function () {
    $(".account-create").slideToggle("100");
  });

  $("#chekout-box-2").on("change", function () {
    $(".ship-box-info").slideToggle("100");
  });
  $(document).ready(function () {
    // click on next button
    $(".form-wizard-next-btn").click(function () {
      var parentFieldset = $(this).parents(".wizard-fieldset");
      var currentActiveStep = $(this)
        .parents(".form-wizard")
        .find(".form-wizard-steps .active");
      var next = $(this);
      var nextWizardStep = true;
      parentFieldset.find(".wizard-required").each(function () {
        var thisValue = $(this).val();

        if (thisValue == "") {
          $(this).siblings(".wizard-form-error").slideDown();
          nextWizardStep = false;
        } else {
          $(this).siblings(".wizard-form-error").slideUp();
        }
      });
      if (nextWizardStep) {
        next.parents(".wizard-fieldset").removeClass("show", "400");
        currentActiveStep
          .removeClass("active")
          .addClass("activated")
          .next()
          .addClass("active", "400");
        next
          .parents(".wizard-fieldset")
          .next(".wizard-fieldset")
          .addClass("show", "400");
        $(document)
          .find(".wizard-fieldset")
          .each(function () {
            if ($(this).hasClass("show")) {
              var formAtrr = $(this).attr("data-tab-content");
              $(document)
                .find(".form-wizard-steps .form-wizard-step-item")
                .each(function () {
                  if ($(this).attr("data-attr") == formAtrr) {
                    $(this).addClass("active");
                    var innerWidth = $(this).innerWidth();
                    var position = $(this).position();
                    $(document).find(".form-wizard-step-move").css({
                      left: position.left,
                      width: innerWidth,
                    });
                  } else {
                    $(this).removeClass("active");
                  }
                });
            }
          });
      }
    });
    //click on previous button
    $(".form-wizard-previous-btn").click(function () {
      var counter = parseInt($(".wizard-counter").text());
      var prev = $(this);
      var currentActiveStep = $(this)
        .parents(".form-wizard")
        .find(".form-wizard-steps .active");
      prev.parents(".wizard-fieldset").removeClass("show", "400");
      prev
        .parents(".wizard-fieldset")
        .prev(".wizard-fieldset")
        .addClass("show", "400");
      currentActiveStep
        .removeClass("active")
        .prev()
        .removeClass("activated")
        .addClass("active", "400");
      $(document)
        .find(".wizard-fieldset")
        .each(function () {
          if ($(this).hasClass("show")) {
            var formAtrr = $(this).attr("data-tab-content");
            $(document)
              .find(".form-wizard-steps .form-wizard-step-item")
              .each(function () {
                if ($(this).attr("data-attr") == formAtrr) {
                  $(this).addClass("active");
                  var innerWidth = $(this).innerWidth();
                  var position = $(this).position();
                  $(document).find(".form-wizard-step-move").css({
                    left: position.left,
                    width: innerWidth,
                  });
                } else {
                  $(this).removeClass("active");
                }
              });
          }
        });
    });
    //click on form submit button
    $(document).on("click", ".form-wizard .form-wizard-next-btn", function () {
      var parentFieldset = $(this).parents(".wizard-fieldset");
      var currentActiveStep = $(this)
        .parents(".form-wizard")
        .find(".form-wizard-steps .active");
      parentFieldset.find(".wizard-required").each(function () {
        var thisValue = $(this).val();
        if (thisValue == "") {
          $(this).siblings(".wizard-form-error").slideDown();
        } else {
          $(this).siblings(".wizard-form-error").slideUp();
        }
      });
    });
    // focus on input field check empty or not
    $(".form-control")
      .on("focus", function () {
        var tmpThis = $(this).val();
        if (tmpThis == "") {
          $(this).parent().addClass("focus-input");
        } else if (tmpThis != "") {
          $(this).parent().addClass("focus-input");
        }
      })
      .on("blur", function () {
        var tmpThis = $(this).val();
        if (tmpThis == "") {
          $(this).parent().removeClass("focus-input");
          $(this).siblings(".wizard-form-error").slideDown("3000");
        } else if (tmpThis != "") {
          $(this).parent().addClass("focus-input");
          $(this).siblings(".wizard-form-error").slideUp("3000");
        }
      });
  });

  $(".wizard ul li a").click(function () {
    $(this).parent().addClass("checked");
    $(this).parent().prevAll().addClass("checked");
    $(this).parent().nextAll().removeClass("checked");
  });

  
  $("#wizard-t-0").on("click", function () {
    $(".form-wizard .wizard-fieldset:nth-of-type(1)").addClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(2)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(3)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(4)").removeClass("show");
  });

  $("#wizard-t-1").on("click", function () {
    $(".form-wizard .wizard-fieldset:nth-of-type(1)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(2)").addClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(3)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(4)").removeClass("show");
  });

  $("#wizard-t-2").on("click", function () {
    $(".form-wizard .wizard-fieldset:nth-of-type(1)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(2)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(3)").addClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(4)").removeClass("show");
  });

  $("#wizard-t-3").on("click", function () {
    $(".form-wizard .wizard-fieldset:nth-of-type(1)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(2)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(3)").removeClass("show");
    $(".form-wizard .wizard-fieldset:nth-of-type(4)").addClass("show");
  });

  $(".form-wizard .wizard-fieldset:nth-of-type(1) .form-wizard-next-btn").click(
    function () {
      $("li.prev").addClass("checked");
    }
  );

  $(".form-wizard .wizard-fieldset:nth-of-type(2) .form-wizard-next-btn").click(
    function () {
      $("li.current").addClass("checked");
    }
  );

  $(".form-wizard .wizard-fieldset:nth-of-type(3) .form-wizard-next-btn").click(
    function () {
      $("li.last").addClass("checked");
    }
  );

  $(
    ".form-wizard .wizard-fieldset:nth-of-type(2) .form-wizard-previous-btn"
  ).click(function () {
    $("li.prev").removeClass("checked");
  });

  $(
    ".form-wizard .wizard-fieldset:nth-of-type(3) .form-wizard-previous-btn"
  ).click(function () {
    $("li.current").removeClass("checked");
  });

  $(
    ".form-wizard .wizard-fieldset:nth-of-type(4) .form-wizard-previous-btn"
  ).click(function () {
    $("li.last").removeClass("checked");
  });
};

export const getAccountcripts = ($) => {
  $(document).ready(function () {
    var numItems = $("li.fancyTab").length;

    if (numItems == 12) {
      $("li.fancyTab").width("8.3%");
    }
    if (numItems == 11) {
      $("li.fancyTab").width("9%");
    }
    if (numItems == 10) {
      $("li.fancyTab").width("10%");
    }
    if (numItems == 9) {
      $("li.fancyTab").width("11.1%");
    }
    if (numItems == 8) {
      $("li.fancyTab").width("12.5%");
    }
    if (numItems == 7) {
      $("li.fancyTab").width("14.2%");
    }
    if (numItems == 6) {
      $("li.fancyTab").width("16.666666666666667%");
    }
    if (numItems == 5) {
      $("li.fancyTab").width("20%");
    }
    if (numItems == 4) {
      $("li.fancyTab").width("25%");
    }
    if (numItems == 3) {
      $("li.fancyTab").width("33.3%");
    }
    if (numItems == 2) {
      $("li.fancyTab").width("50%");
    }
  });

  $(window).on(function () {
    $(".fancyTabs").each(function () {
      var highestBox = 0;
      $(".fancyTab a", this).each(function () {
        if ($(this).height() > highestBox) highestBox = $(this).height();
      });

      $(".fancyTab a", this).height(highestBox);
    });
  });

  var a = document.querySelectorAll(".fancyTabs a");
  for (var i = 0, length = a.length; i < length; i++) {
    a[i].onclick = function () {
      var b = document.querySelector(".fancyTabs li.active");
      if (b) b.classList.remove("active");
      this.parentNode.classList.add("active");
    };
  }
};

export const getHeaderScripts = ($) => {
  $(document).ready(function () {
    $("a.cartDisp").on("click", function () {
      $("div#cartDrpDown").parent().addClass("hoverToggle");
      try {
        setCart([]);
      } catch (err) {}
    });
  });

  $("#dropCartCloser").on("click", function () {
    $("div#cartDrpDown").parent().removeClass("hoverToggle");
  });

  $("#cartCloser1").on("click", function () {
    $("div#cartDrpDown").parent().removeClass("hoverToggle");
  });

  $("#cartCloser2").on("click", function () {
    $("div#cartDrpDown").parent().removeClass("hoverToggle");
  });

  $(".anchor").on("click", function () {
    $("div#cartDrpDown").parent().removeClass("hoverToggle");
  });

  $(".edtCart").on("click", function () {
    $("div#cartDrpDown").parent().removeClass("hoverToggle");
  });

  $("header .navbar-dark .navbar-nav .nav-item a.nav-link").on("click", function () {
    $(this).next().removeClass("show"); 
    $(this).parent().parent().parent().removeClass("show"); 
  });

  $("header .navbar-dark .navbar-nav .dropdown-menu a.title").on("click", function () {
    $(this).parent().parent().parent().parent().removeClass("show"); 
    $(this).parent().parent().parent().parent().parent().parent().parent().removeClass("show"); 
  });

};

export const getMotionVariants = () => {
  let variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
  };

  variants = {
    hidden: {
      scale: 0.9,
      opacity: 1,
    },

    enter: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
    exit: { opacity: 0, x: 0, y: 0 },
  };
  return variants;
};
