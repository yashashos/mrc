

var combinedData = [
    { name: "hanfous", mail: "hanfous11@gmail.com", password: "Oasis@678" },
    { name: "Mohamed", mail: "Mohamed@hotmail.com", password: "Mohamed22" },
    { name: "Hamid", mail: "Hamid@mail.com", password: "Hamid33" },
    { name: "Mahmod", mail: "Mahmod@mail.com", password: "Mahmod44" }
    // يمكنك إضافة المزيد من البيانات هنا
];

var iconClicked = false; // متغير لتحديد ما إذا تم النقر على أحد الأيقونات

var currentPage = window.location.href;
if (currentPage.startsWith("https://www.blsspainmorocco.net/MAR/account/login")) {
    var formParent = document.getElementsByTagName('form')[0].parentNode;
    if (formParent) {
        for (var i = 0; i < combinedData.length; i++) {
            var button = document.createElement('input');
            button.value = ' ' + combinedData[i].name;
            button.id = 'formulaire' + i;

            button.style.cursor = 'pointer';
            button.style.border = '2.5px solid #f09b0a';
            button.style.fontSize = '14px';
            button.style.padding = '10px';
            button.style.margin = '6px';
            button.style.backgroundColor = '#3498db';
            button.style.color = '#ffffff';
            button.style.borderRadius = '15px';
            button.style.textAlign = 'center';
            button.style.textDecoration = 'none';
            button.style.display = 'inline-block';
            button.style.transition = 'background-color 0.5s';

            button.addEventListener("mouseover", function () {
                this.style.backgroundColor = "#5fd49d";
                this.style.border = '2.5px solid #2980b9';
            });

            button.addEventListener("mouseout", function () {
                this.style.backgroundColor = "#3498db";
                this.style.border = '2.5px solid #f09b0a';
            });

            // تعريف الدالة داخل الحلقة لضمان استخدام القيم الصحيحة من combinedData
            button.addEventListener("click", (function (index) {
                return function () {
                    var mail = combinedData[index].mail;
                    var password = combinedData[index].password;
                    setValues(mail, password);
                    iconClicked = true; // تحديث المتغير عند النقر على الأيقونة
                    clickBtnVerify(); // تنفيذ النقر على زر btnVerify بعد النقر على الأيقونة
                };
            })(i));

            formParent.insertBefore(button, document.getElementsByTagName('form')[0]);
        }
    }
}

// دالة لتعبئة حقول تسجيل الدخول
function setValues(mail, password) {
    for (var i = 1; i <= 10; i++) {
        document.getElementById('UserId' + i).value = mail;
        document.getElementById('Password' + i).value = password;
    }
}

// دالة للنقر على زر btnVerify
function clickBtnVerify() {
    const btnVerify = document.querySelector("#btnVerify");
    if (btnVerify && iconClicked) {
        btnVerify.click(); // إضغط على زر btnVerified
    }
}


//--------------▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️▶️--------------------------//

var vtvUrlPrefix = "https://www.blsspainmorocco.net/MAR/bls/vtv";
var thirdUrlPrefix = "https://www.blsspainmorocco.net/MAR/bls/vt";







//تحقق من الصفحة ونفذ الإجراء المناسب

if (window.location.href.startsWith(vtvUrlPrefix)) {
  const btnVerify = document.querySelector("#btnVerify");
  if (btnVerify) {
    btnVerify.click();
  }


//----------------VT--------------------//


    } else if (window.location.href.startsWith(thirdUrlPrefix)) {
  // دالة لإضافة الأزرار إلى الصفحة

  // إنشاء الأزرار
  const CasablancaNormalButton = createButton("Casablanca Normal", function() {
(function() {
  'use strict';

  function fillForm() {
    for (var i = 1; i < 10; i++) {
      var appointmentCategoryIdElement = document.querySelector('[aria-owns="AppointmentCategoryId' + i + '_listbox"]');
      var locationElement = document.querySelector('[aria-owns="Location' + i + '_listbox"]');
      var visaTypeElement = document.querySelector('[aria-owns="VisaType' + i + '_listbox"]');
      var visaSubTypeElement = document.querySelector('[aria-owns="VisaSubType' + i + '_listbox"]');

      if (appointmentCategoryIdElement && appointmentCategoryIdElement.offsetParent) {
        var appointmentCategoryId = $("#AppointmentCategoryId" + i).data("kendoDropDownList");
        appointmentCategoryId.select(1); // Index 0 corresponds to 'Normal'
        appointmentCategoryId.trigger("change");
      }

      if (locationElement && locationElement.offsetParent) {
        var location = $("#Location" + i).data("kendoDropDownList");
        location.select(1); // Index 0 corresponds to 'Casablanca'
        location.trigger("change");
      }

      if (visaTypeElement && visaTypeElement.offsetParent) {
        var visaType = $("#VisaType" + i).data("kendoDropDownList");
        visaType.select(3); // Index 2 corresponds to 'Schengen Visa - First Demand'
        visaType.trigger("change");
      }

      if (visaSubTypeElement && visaSubTypeElement.offsetParent) {
        var visaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
        visaSubType.select(1); // Index 0 corresponds to 'Schengen Visa - First Demand'
        visaSubType.trigger("change");
      }
    }
  }

  fillForm();

        //--------------------//
    var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تأخير تنفيذ الشيفرة لمدة 3 ثواني
  setTimeout(function () {
    var f = setInterval(function () {
      if (
        typeof OnVerifyCaptcha !== "undefined" &&
        typeof b !== "undefined" &&
        typeof d !== "undefined"
      ) {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(f);
      }
    }, 100);

    var a = setInterval(function () {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(a);
      }
    }, 100);
  }, 1000);

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Casablanca Normal بنجاح!");
  });

  const CasablancaPremiumButton = createButton("Casablanca Premium", function() {
(function() {
  'use strict';

  function fillForm() {
    for (var i = 1; i < 10; i++) {
      var appointmentCategoryIdElement = document.querySelector('[aria-owns="AppointmentCategoryId' + i + '_listbox"]');
      var locationElement = document.querySelector('[aria-owns="Location' + i + '_listbox"]');
      var visaTypeElement = document.querySelector('[aria-owns="VisaType' + i + '_listbox"]');
      var visaSubTypeElement = document.querySelector('[aria-owns="VisaSubType' + i + '_listbox"]');

      if (appointmentCategoryIdElement && appointmentCategoryIdElement.offsetParent) {
        var appointmentCategoryId = $("#AppointmentCategoryId" + i).data("kendoDropDownList");
        appointmentCategoryId.select(2); // Index 0 corresponds to 'Normal'
        appointmentCategoryId.trigger("change");
      }

      if (locationElement && locationElement.offsetParent) {
        var location = $("#Location" + i).data("kendoDropDownList");
        location.select(1); // Index 0 corresponds to 'Casablanca'
        location.trigger("change");
      }

      if (visaTypeElement && visaTypeElement.offsetParent) {
        var visaType = $("#VisaType" + i).data("kendoDropDownList");
        visaType.select(3); // Index 2 corresponds to 'Schengen Visa - First Demand'
        visaType.trigger("change");
      }

      if (visaSubTypeElement && visaSubTypeElement.offsetParent) {
        var visaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
        visaSubType.select(1); // Index 0 corresponds to 'Schengen Visa - First Demand'
        visaSubType.trigger("change");
      }
    }
  }

  fillForm();

        //--------------------//
    var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تأخير تنفيذ الشيفرة لمدة 3 ثواني
  setTimeout(function () {
    var f = setInterval(function () {
      if (
        typeof OnVerifyCaptcha !== "undefined" &&
        typeof b !== "undefined" &&
        typeof d !== "undefined"
      ) {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(f);
      }
    }, 100);

    var a = setInterval(function () {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(a);
      }
    }, 100);
  }, 1000);

    //-------------------//


})();
    console.log("تم تنفيذ الشيفرة لزر Casablanca Premium بنجاح!");
  });

  const CasablancaPrimeTimeButton = createButton("Casablanca PrimeTime", function() {
(function() {
  'use strict';

  function fillForm() {
    for (var i = 1; i < 10; i++) {
      var appointmentCategoryIdElement = document.querySelector('[aria-owns="AppointmentCategoryId' + i + '_listbox"]');
      var locationElement = document.querySelector('[aria-owns="Location' + i + '_listbox"]');
      var visaTypeElement = document.querySelector('[aria-owns="VisaType' + i + '_listbox"]');
      var visaSubTypeElement = document.querySelector('[aria-owns="VisaSubType' + i + '_listbox"]');

      if (appointmentCategoryIdElement && appointmentCategoryIdElement.offsetParent) {
        var appointmentCategoryId = $("#AppointmentCategoryId" + i).data("kendoDropDownList");
        appointmentCategoryId.select(3); // Index 0 corresponds to 'Normal'
        appointmentCategoryId.trigger("change");
      }

      if (locationElement && locationElement.offsetParent) {
        var location = $("#Location" + i).data("kendoDropDownList");
        location.select(1); // Index 0 corresponds to 'Casablanca'
        location.trigger("change");
      }

      if (visaTypeElement && visaTypeElement.offsetParent) {
        var visaType = $("#VisaType" + i).data("kendoDropDownList");
        visaType.select(3); // Index 2 corresponds to 'Schengen Visa - First Demand'
        visaType.trigger("change");
      }

      if (visaSubTypeElement && visaSubTypeElement.offsetParent) {
        var visaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
        visaSubType.select(1); // Index 0 corresponds to 'Schengen Visa - First Demand'
        visaSubType.trigger("change");
      }
    }
  }

  fillForm();

        //--------------------//
    var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تأخير تنفيذ الشيفرة لمدة 3 ثواني
  setTimeout(function () {
    var f = setInterval(function () {
      if (
        typeof OnVerifyCaptcha !== "undefined" &&
        typeof b !== "undefined" &&
        typeof d !== "undefined"
      ) {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(f);
      }
    }, 100);

    var a = setInterval(function () {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(a);
      }
    }, 100);
  }, 1000);

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر Casablanca PrimeTime بنجاح!");
  });

  const PreVisaHoNormalButton = createButton("PreVisaHo Normal", function() {
(function () {
    "use strict";

    var isOkButtonClicked = false;

    async function RemplirCategoryId() {
      var AppointmentCategoryIdElement;
      var isVisible;
      for (var i = 1; i < 10; i++) {
        AppointmentCategoryIdElement = document.querySelector(
          '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
        );
        if (AppointmentCategoryIdElement !== null) {
          isVisible = AppointmentCategoryIdElement.offsetParent !== null;

          if (isVisible) {
            console.log("Appointment " + i + " is visible");
            var AppCategoryId = $("#AppointmentCategoryId" + i).data(
              "kendoDropDownList"
            );
            AppCategoryId.select(1); // 1 corresponds to 'Normal'
            AppCategoryId.trigger("change");
          } else {
            // console.log("Element " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirLocation() {
      var locationElement;
      var isVisibleLocation;
      for (var i = 1; i < 10; i++) {
        locationElement = document.querySelector(
          '[aria-owns="Location' + i + '_listbox"]'
        );
        if (locationElement !== null) {
          isVisibleLocation = locationElement.offsetParent !== null;

          if (isVisibleLocation) {
            console.log("Location " + i + " is visible");
            var Location = $("#Location" + i).data("kendoDropDownList");
            Location.select(1); // 1  'Casablanca'
            Location.trigger("change");
          } else {
            // console.log("Element " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirVisaType() {
      var VisaTypeElement;
      var isVisibleVisa;
      for (var i = 1; i < 10; i++) {
        VisaTypeElement = document.querySelector(
          '[aria-owns="VisaType' + i + '_listbox"]'
        );
        if (VisaTypeElement !== null) {
          isVisibleVisa = VisaTypeElement.offsetParent !== null;

          if (isVisibleVisa) {
            console.log("VisaType " + i + " is visible");
            var VisaType = $("#VisaType" + i).data("kendoDropDownList");
            VisaType.select(2); // 2 corresponds to 'Schengen Visa - Previous Visa Holder'
            VisaType.trigger("change");

            await new Promise(resolve => {
              setTimeout(resolve, 1000);
            });

            // Click the 'Ok' button in the modal
            $('button[data-bs-dismiss="modal"]').click();
          } else {
            // console.log("VisaType " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirVisaSubType() {
      var VisaSubTypeElement;
      var isVisibleSubVisa;
      for (var i = 1; i < 10; i++) {
        VisaSubTypeElement = document.querySelector(
          '[aria-owns="VisaSubType' + i + '_listbox"]'
        );
        if (VisaSubTypeElement !== null) {
          isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

          if (isVisibleSubVisa && isOkButtonClicked) {
            console.log("VisaSubType " + i + " is visible");
            var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
            VisaSubType.select(1); // 1 corresponds to 'Schengen Visa - Previous Visa Holder'
            VisaSubType.trigger("change");
          } else {
            // console.log("VisaType " + i + " is not visible");
          }
        }
      }
    }

    function handleOkButtonClick() {
      isOkButtonClicked = true;

      RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    RemplirCategoryId();
    RemplirLocation();
    RemplirVisaType();
        //--------------------//
    var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تأخير تنفيذ الشيفرة لمدة 3 ثواني
  setTimeout(function () {
    var f = setInterval(function () {
      if (
        typeof OnVerifyCaptcha !== "undefined" &&
        typeof b !== "undefined" &&
        typeof d !== "undefined"
      ) {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(f);
      }
    }, 100);

    var a = setInterval(function () {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(a);
      }
    }, 100);
  }, 2000);

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر PreVisaHo Normal بنجاح!");
  });

  const PreVisaHoPremiumButton = createButton("PreVisaHo Premium", function() {
(function () {
    "use strict";

    var isOkButtonClicked = false;

    async function RemplirCategoryId() {
      var AppointmentCategoryIdElement;
      var isVisible;
      for (var i = 1; i < 10; i++) {
        AppointmentCategoryIdElement = document.querySelector(
          '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
        );
        if (AppointmentCategoryIdElement !== null) {
          isVisible = AppointmentCategoryIdElement.offsetParent !== null;

          if (isVisible) {
            console.log("Appointment " + i + " is visible");
            var AppCategoryId = $("#AppointmentCategoryId" + i).data(
              "kendoDropDownList"
            );
            AppCategoryId.select(2); // 1 corresponds to 'Normal'
            AppCategoryId.trigger("change");
          } else {
            // console.log("Element " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirLocation() {
      var locationElement;
      var isVisibleLocation;
      for (var i = 1; i < 10; i++) {
        locationElement = document.querySelector(
          '[aria-owns="Location' + i + '_listbox"]'
        );
        if (locationElement !== null) {
          isVisibleLocation = locationElement.offsetParent !== null;

          if (isVisibleLocation) {
            console.log("Location " + i + " is visible");
            var Location = $("#Location" + i).data("kendoDropDownList");
            Location.select(1); // 1  'Casablanca'
            Location.trigger("change");
          } else {
            // console.log("Element " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirVisaType() {
      var VisaTypeElement;
      var isVisibleVisa;
      for (var i = 1; i < 10; i++) {
        VisaTypeElement = document.querySelector(
          '[aria-owns="VisaType' + i + '_listbox"]'
        );
        if (VisaTypeElement !== null) {
          isVisibleVisa = VisaTypeElement.offsetParent !== null;

          if (isVisibleVisa) {
            console.log("VisaType " + i + " is visible");
            var VisaType = $("#VisaType" + i).data("kendoDropDownList");
            VisaType.select(2); // 2 corresponds to 'Schengen Visa - Previous Visa Holder'
            VisaType.trigger("change");

            await new Promise(resolve => {
              setTimeout(resolve, 1000);
            });

            // Click the 'Ok' button in the modal
            $('button[data-bs-dismiss="modal"]').click();
          } else {
            // console.log("VisaType " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirVisaSubType() {
      var VisaSubTypeElement;
      var isVisibleSubVisa;
      for (var i = 1; i < 10; i++) {
        VisaSubTypeElement = document.querySelector(
          '[aria-owns="VisaSubType' + i + '_listbox"]'
        );
        if (VisaSubTypeElement !== null) {
          isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

          if (isVisibleSubVisa && isOkButtonClicked) {
            console.log("VisaSubType " + i + " is visible");
            var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
            VisaSubType.select(1); // 1 corresponds to 'Schengen Visa - Previous Visa Holder'
            VisaSubType.trigger("change");
          } else {
            // console.log("VisaType " + i + " is not visible");
          }
        }
      }
    }

    function handleOkButtonClick() {
      isOkButtonClicked = true;

      RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    RemplirCategoryId();
    RemplirLocation();
    RemplirVisaType();

        //--------------------//
    var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تأخير تنفيذ الشيفرة لمدة 3 ثواني
  setTimeout(function () {
    var f = setInterval(function () {
      if (
        typeof OnVerifyCaptcha !== "undefined" &&
        typeof b !== "undefined" &&
        typeof d !== "undefined"
      ) {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(f);
      }
    }, 100);

    var a = setInterval(function () {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(a);
      }
    }, 100);
  }, 2000);

    //-------------------//

})();
    console.log("تم تنفيذ الشيفرة لزر PreVisaHo Premium بنجاح!");
  });

  const PreVisaHoPrimeTimeButton = createButton("PreVisaHo PrimeTime", function() {
(function () {
    "use strict";

    var isOkButtonClicked = false;

    async function RemplirCategoryId() {
      var AppointmentCategoryIdElement;
      var isVisible;
      for (var i = 1; i < 10; i++) {
        AppointmentCategoryIdElement = document.querySelector(
          '[aria-owns="AppointmentCategoryId' + i + '_listbox"]'
        );
        if (AppointmentCategoryIdElement !== null) {
          isVisible = AppointmentCategoryIdElement.offsetParent !== null;

          if (isVisible) {
            console.log("Appointment " + i + " is visible");
            var AppCategoryId = $("#AppointmentCategoryId" + i).data(
              "kendoDropDownList"
            );
            AppCategoryId.select(2); // 1 corresponds to 'Normal'
            AppCategoryId.trigger("change");
          } else {
            // console.log("Element " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirLocation() {
      var locationElement;
      var isVisibleLocation;
      for (var i = 1; i < 10; i++) {
        locationElement = document.querySelector(
          '[aria-owns="Location' + i + '_listbox"]'
        );
        if (locationElement !== null) {
          isVisibleLocation = locationElement.offsetParent !== null;

          if (isVisibleLocation) {
            console.log("Location " + i + " is visible");
            var Location = $("#Location" + i).data("kendoDropDownList");
            Location.select(1); // 1  'Casablanca'
            Location.trigger("change");
          } else {
            // console.log("Element " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirVisaType() {
      var VisaTypeElement;
      var isVisibleVisa;
      for (var i = 1; i < 10; i++) {
        VisaTypeElement = document.querySelector(
          '[aria-owns="VisaType' + i + '_listbox"]'
        );
        if (VisaTypeElement !== null) {
          isVisibleVisa = VisaTypeElement.offsetParent !== null;

          if (isVisibleVisa) {
            console.log("VisaType " + i + " is visible");
            var VisaType = $("#VisaType" + i).data("kendoDropDownList");
            VisaType.select(2); // 2 corresponds to 'Schengen Visa - Previous Visa Holder'
            VisaType.trigger("change");

            await new Promise(resolve => {
              setTimeout(resolve, 1000);
            });

            // Click the 'Ok' button in the modal
            $('button[data-bs-dismiss="modal"]').click();
          } else {
            // console.log("VisaType " + i + " is not visible");
          }
        }
      }
    }

    async function RemplirVisaSubType() {
      var VisaSubTypeElement;
      var isVisibleSubVisa;
      for (var i = 1; i < 10; i++) {
        VisaSubTypeElement = document.querySelector(
          '[aria-owns="VisaSubType' + i + '_listbox"]'
        );
        if (VisaSubTypeElement !== null) {
          isVisibleSubVisa = VisaSubTypeElement.offsetParent !== null;

          if (isVisibleSubVisa && isOkButtonClicked) {
            console.log("VisaSubType " + i + " is visible");
            var VisaSubType = $("#VisaSubType" + i).data("kendoDropDownList");
            VisaSubType.select(1); // 1 corresponds to 'Schengen Visa - Previous Visa Holder'
            VisaSubType.trigger("change");
          } else {
            // console.log("VisaType " + i + " is not visible");
          }
        }
      }
    }

    function handleOkButtonClick() {
      isOkButtonClicked = true;

      RemplirVisaSubType();
    }

    $('button[data-bs-dismiss="modal"]').on("click", handleOkButtonClick);

    RemplirCategoryId();
    RemplirLocation();
    RemplirVisaType();
    //--------------------//
    var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تأخير تنفيذ الشيفرة لمدة 3 ثواني
  setTimeout(function () {
    var f = setInterval(function () {
      if (
        typeof OnVerifyCaptcha !== "undefined" &&
        typeof b !== "undefined" &&
        typeof d !== "undefined"
      ) {
        window.OnVerifyCaptcha = OnVerifyCaptcha;
        $("#dpModal").modal("hide");
        window.onDpAccept = OnVerifyCaptcha;
        window.onDpReject = onAjaxSuccess;
        clearInterval(f);
      }
    }, 100);

    var a = setInterval(function () {
      if ($("#btnSubmit").is(":visible")) {
        $("#btnSubmit").click();
        clearInterval(a);
      }
    }, 100);
  }, 2000);

    //-------------------//

})();
      console.log("تم تنفيذ الشيفرة لزر PreVisaHo PrimeTime بنجاح!");
  });


  //-----------------------------------------------------------/

  // إضافة الأزرار إلى العنصر الذي يحتوي على الأزرار
var targetDiv = document.querySelector('.bg-mode.shadow.rounded-3.overflow-hidden.p-3.col-md-4');
var targetSibling = targetDiv.querySelector('h5.pt-3.text-center');

if (targetSibling) {
    // إنشاء العنصر الذي يحتوي على الأزرار
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'bg-mode';

    // إضافة الأزرار إلى العنصر الذي يحتوي على الأزرار
 const row1 = document.createElement('div');
  row1.style.display = 'flex';
  row1.appendChild(CasablancaNormalButton);
  row1.appendChild(CasablancaPremiumButton);
  row1.appendChild(CasablancaPrimeTimeButton);

  const row2 = document.createElement('div');
  row2.style.display = 'flex';
  row2.appendChild(PreVisaHoNormalButton);
  row2.appendChild(PreVisaHoPremiumButton);
  row2.appendChild(PreVisaHoPrimeTimeButton);

  // إضافة الصفوف إلى العنصر الذي يحتوي على الأزرار
  buttonsContainer.appendChild(row1);
  buttonsContainer.appendChild(row2);

    // تحديد الشكل المطلوب للأزرار
    buttonsContainer.style.display = 'flex';
    buttonsContainer.style.flexDirection = 'column';

    // إدراج العنصر الذي يحتوي على الأزرار بعد العنصر المستهدف
    targetSibling.parentNode.insertBefore(buttonsContainer, targetSibling.nextSibling);
  } else {
    console.error("لم يتم العثور على العنصر المستهدف");
  }
}

// دالة لإنشاء الأزرار
function createButton(label, clickHandler) {
  var button = document.createElement("button");
  button.textContent = label;
  button.style.width = "45%";
  button.style.margin = "8px";
  button.style.cursor = 'pointer';
  button.style.border = '2.5px solid #f09b0a'; // Border color
  button.style.fontSize = '12px';
  button.style.padding = '8px';
  button.style.backgroundColor = '#3498db';
  button.style.color = '#ffffff';
  button.style.borderRadius = '15px';
  button.style.textAlign = 'center';
  button.style.textDecoration = 'none';
  button.style.display = 'inline-block';
  button.style.transition = 'background-color 0.5s';

  // Mouseover effect
  button.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#5fd49d";
    this.style.border = '2.5px solid #2980b9';
  });

  // Mouseout effect
  button.addEventListener("mouseout", function() {
    this.style.backgroundColor = "#3498db";
    this.style.border = '2.5px solid #f09b0a';
  });

  // إضافة مسؤول الحدث على الزر
  button.addEventListener("click", clickHandler);

  return button;
}


//----------------------- click btnSubmit ------------------------------------------------------

(function () {
  "use strict";
  var OnVerifyCaptcha;
  var onAjaxSuccess;

  // تحقق من عنوان URL الحالي وتنفيذ الشيفرة فقط إذا كانت الصفحة المطلوبة
  if (
    window.location.href.startsWith("https://www.blsspainmorocco.net/MAR/account/login") ||
    window.location.href.startsWith("https://www.blsspainmorocco.net/MAR/bls/vtv")
  ) {
    // تأخير تنفيذ الشيفرة لمدة 3 ثواني
    setTimeout(function () {
      var f = setInterval(function () {
        if (
          typeof OnVerifyCaptcha !== "undefined" &&
          typeof b !== "undefined" &&
          typeof d !== "undefined"
        ) {
          window.OnVerifyCaptcha = OnVerifyCaptcha;
          $("#dpModal").modal("hide");
          window.onDpAccept = OnVerifyCaptcha;
          window.onDpReject = onAjaxSuccess;
          clearInterval(f);
        }
      }, 100);

      var a = setInterval(function () {
        if ($("#btnSubmit").is(":visible")) {
          $("#btnSubmit").click();
          clearInterval(a);
        }
      }, 100);
    }, 1000); // تأخير لمدة 3 ثواني
  }
})();


//--------------------مؤلف----------------------------//

(function() {
    'use strict';



    // إنشاء زر جديد
    var newButton = document.createElement('button');
    newButton.style.borderRadius = '25%'; // تغيير نسبة الانحناء
    newButton.style.backgroundColor = 'blue'; // تغيير لون الخلفية
    newButton.style.color = 'white';
    newButton.style.position = 'fixed';
    newButton.style.top = '10px';
    newButton.style.right = '10px';
    newButton.style.fontSize = '16px';
    newButton.textContent = 'By DOUIS';

    // إضافة حدث النقر على الزر الجديد
    newButton.addEventListener('click', function() {
        // توجيه المستخدم إلى الرابط عند النقر
        window.location.href = 'https://t.me/essekhaya';
    });





    // إضافة الزر وعنصر التاريخ إلى الصفحة
    document.body.appendChild(newButton);


})();


//------------------playAudioOnPageLoad----------------------------//

function playAudioOnPageLoad() {
    // تحديد الصفحة الحالية
    var currentPage = window.location.href;

    // الرابط الذي يجب فتح الملف الصوتي بعد فتحه
    var audioPage = "https://www.blsspainmorocco.net/MAR/bls/vtv";

    // الرابط المراد فحصه للتأكد من فتح الملف الصوتي
    var targetPage = "https://www.blsspainmorocco.net/MAR/blsappointment/manageappointmen";

    // الرابط المراد استخدامه لتشغيل الملف الصوتي
    var audioFile = "https://audio.jukehost.co.uk/2CSBTV4enpcMT9mAO9f7Oz1VQJDlvrTS";

    // فحص إذا كانت الصفحة الحالية هي الصفحة المستهدفة
    if (currentPage.startsWith(targetPage)) {
        // فحص إذا كانت الصفحة السابقة هي الصفحة التي يجب تشغيل الملف الصوتي بعد فتحها
        if (document.referrer.startsWith(audioPage)) {
            // تشغيل الملف الصوتي
            var audio = new Audio(audioFile);
            audio.play();
        }
    }
}

// استدعاء الدالة عند تحميل الصفحة
window.onload = playAudioOnPageLoad;




//------------------APp-------------------------//
$(document).ready(function () {
    var currentPage = window.location.href;

    if (currentPage.startsWith("https://www.blsspainmorocco.net/MAR/blsappointment/manageappointment")) {
        // تشغيل الصوت

        setTimeout(function() {
            OnUserConsentAccept();
        }, 400);

        setTimeout(function() {
            $('.btn-close').click();
            // بعد النقر على الزر، يتم استدعاء الدالة choose بعد فترة زمنية معينة (مثلاً 2000 مللي ثانية)
            setTimeout(function() {
               // choose();
            }, 900);
        }, 1000);
    }
});

