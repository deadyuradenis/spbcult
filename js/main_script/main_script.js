/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9115:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsGenerator')) {
    (function () {
      var init = function init() {
        var items = generator.querySelectorAll('[data-generator]:checked');

        for (var _index2 = 0; _index2 < items.length; _index2++) {
          var item = items[_index2];
          var props = item.getAttribute('data-generator');
          var prop = JSON.parse(props)[0];
          var value = JSON.parse(props)[1];
          change(prop, value);
        }

        for (var _index3 = 0; _index3 < tabs.length; _index3++) {
          var _item = tabs[_index3];

          if (_item.checked) {
            changeTab(_index3);
          }
        }
      };

      var changeTab = function changeTab(index) {
        for (var i = 0; i < previews.length; i++) {
          previews[i].classList.remove('is-active');
        }

        previews[index].classList.add('is-active');
      };

      var change = function change(prop, value) {
        for (var _index4 = 0; _index4 < previews.length; _index4++) {
          var item = previews[_index4];
          var style = item.querySelectorAll('svg defs style');

          switch (prop) {
            case 'fill':
              if (value.length > 1) {
                style[0].innerHTML = ".cls-1{fill:" + value[0] + ";} .cls-bg{fill:" + value[1] + ";}";
              } else {
                style[0].innerHTML = ".cls-1{fill:" + value[0] + ";}";
              }

              break;

            case 'bg':
              style[1].innerHTML = ".cls-2{fill:" + value + ";}";
              break;

            default:
              break;
          }
        }
      };

      var generator = document.querySelector('.jsGenerator');
      var items = generator.querySelectorAll('[data-generator]');
      var tabs = generator.querySelectorAll('.jsGeneratorTab');
      var previews = generator.querySelectorAll('.jsGeneratorPreview');
      init();

      var _loop = function _loop(index) {
        var item = tabs[index];
        item.addEventListener('change', function () {
          changeTab(index);
        });
      };

      for (var index = 0; index < tabs.length; index++) {
        _loop(index);
      }

      var _loop2 = function _loop2(_index) {
        var item = items[_index];
        var props = item.getAttribute('data-generator');
        var prop = JSON.parse(props)[0];
        var value = JSON.parse(props)[1];
        item.addEventListener('change', function () {
          change(prop, value);
        });
      };

      for (var _index = 0; _index < items.length; _index++) {
        _loop2(_index);
      }
    })();
  }
});

/***/ }),

/***/ 8450:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var windowHeight = window.innerHeight;

  if (document.querySelector('.jsHeader')) {
    window.header = {
      main: document.querySelector('.jsHeader'),
      nav: {
        trigger: document.querySelector('.jsNavTrigger'),
        dropdown: document.querySelector('.jsNavDropdown')
      },
      logo: document.querySelector('.jsHeaderLogo'),
      search: {
        main: document.querySelector('.jsSearch'),
        trigger: document.querySelector('.jsSearchButton'),
        open: function open() {
          window.header.search.main.classList.add('is-open');
          window.header.logo.classList.add('is-hide');
        },
        close: function close() {
          window.header.search.main.classList.remove('is-open');
          window.header.logo.classList.remove('is-hide');
        }
      },
      burger: {
        trigger: document.querySelector('.jsBurgerTrigger'),
        toggle: function toggle() {
          window.header.main.classList.toggle('is-active');
          window.header.burger.trigger.classList.toggle('is-active');
          document.querySelector('body').classList.toggle('_lock');
        }
      }
    };
    window.header.search.trigger.addEventListener('click', function (e) {
      if (window.innerWidth <= 1024) {
        if (!window.header.search.main.classList.contains('is-open')) {
          e.preventDefault();
          window.header.search.open();
        } else {
          window.header.search.close();
        }
      }
    });
    window.header.burger.trigger.addEventListener('click', function () {
      window.header.burger.toggle();
    });
    window.header.nav.trigger.addEventListener('click', function () {
      window.header.nav.trigger.classList.toggle('is-active');
      window.header.nav.dropdown.classList.toggle('is-active');
    });
    document.addEventListener('click', function (e) {
      var target = e.target;

      if (window.header.main.classList.contains('is-active') && !target.closest('.jsHeader')) {
        window.header.burger.toggle();
      }

      if (window.header.search.main.classList.contains('is-open') && !target.closest('.jsSearch')) {
        window.header.search.close();
      }
    });
    document.addEventListener('scroll', function () {
      if (window.pageYOffset >= windowHeight * 0.25) {
        window.header.main.classList.add('is-fixed');
      } else {
        window.header.main.classList.remove('is-fixed');
      }
    });

    if (document.querySelector('.jsMove')) {
      var move = function move(mode) {
        for (var index = 0; index < moveItems.length; index++) {
          var item = moveItems[index];
          var desktop = item.getAttribute('data-move-desktop');
          var mobile = item.getAttribute('data-move-mobile');

          if (mode == 'desktop') {
            document.querySelector('[data-move-container="' + desktop + '"]').append(item);
          }

          if (mode == 'mobile') {
            document.querySelector('[data-move-container="' + mobile + '"]').append(item);
          }
        }
      };

      var moveItems = document.querySelectorAll('.jsMove');

      if (window.innerWidth <= 1024) {
        move('mobile');
      } else {
        move('desktop');
      }

      window.addEventListener("resize", function () {
        if (window.innerWidth <= 1024) {
          move('mobile');
        } else {
          move('desktop');
        }
      });
    }

    if (document.querySelector('.jsNav')) {
      var check = function check() {
        var dropdownLast = dropdownInner.querySelectorAll('.nav__item')[dropdownInner.querySelectorAll('.nav__item').length - 1] ? dropdownInner.querySelectorAll('.nav__item')[dropdownInner.querySelectorAll('.nav__item').length - 1] : '';

        if (nav.offsetWidth < list.offsetWidth) {
          // console.log('hide ' + nav.offsetWidth +' ; ' + Number(list.offsetWidth));
          hide();
        } else if (nav.offsetWidth >= Number(list.offsetWidth + dropdownLast.offsetWidth + 32)) {
          // console.log('show ' + nav.offsetWidth +' >= ' + list.offsetWidth + ' + ' + dropdownLast.offsetWidth + ' + ' + 32 + ' = ' + Number(list.offsetWidth + dropdownInner.querySelectorAll('.nav__item')[dropdownInner.querySelectorAll('.nav__item').length - 1].offsetWidth + 32));
          show();
        }

        if (dropdownInner.querySelector('.nav__item')) {
          trigger.classList.add('is-visible');
        } else {
          trigger.classList.remove('is-visible');
        }
      };

      var hide = function hide() {
        items = list.querySelectorAll('.nav__item');
        dropdownInner.append(items[items.length - 1]);
        check();
      };

      var show = function show() {
        var dItems = dropdownInner.querySelectorAll('.nav__item');
        trigger.before(dItems[dItems.length - 1]);
        check();
      };

      var mobile = function mobile() {
        if (dropdownInner.querySelector('.nav__item')) {
          var dItems = dropdownInner.querySelectorAll('.nav__item');

          for (var index = 0; index < dItems.length; index++) {
            var item = dItems[index];
            trigger.before(item);
          }
        }
      };

      var nav = document.querySelector('.jsNav');
      var list = nav.querySelector('.nav');
      var items = list.querySelectorAll('.nav__item');
      var dropdown = document.querySelector('.jsNavDropdown');
      var dropdownInner = dropdown.querySelector('.nav__dropdown-inner');
      var trigger = document.querySelector('.jsNavTrigger');

      if (window.innerWidth >= 1024) {
        check();
      } else {
        mobile();
      }

      window.addEventListener("resize", function () {
        if (window.innerWidth >= 1024) {
          check();
        } else {
          mobile();
        }
      });
    }
  }
});

/***/ }),

/***/ 1676:
/***/ (function() {

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

addEventListener('DOMContentLoaded', function () {
  var smoothLinks = document.querySelectorAll('a[href*="#"]');

  var _iterator = _createForOfIteratorHelper(smoothLinks),
      _step;

  try {
    var _loop = function _loop() {
      var smoothLink = _step.value;
      smoothLink.addEventListener('click', function (e) {
        var id = smoothLink.getAttribute('href');
        e.preventDefault();

        if (id != "#") {
          if (window.header.main.classList.contains('is-active')) {
            window.header.close();
          }

          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  ;
});

/***/ }),

/***/ 5157:
/***/ (function() {

window.eventLoad = function (id) {
  console.log(id);
};

document.addEventListener('DOMContentLoaded', function () {
  // ymaps.ready(function (){
  //     window.maps.init()
  // })
  window.maps = {
    list: document.querySelectorAll('.jsMap'),
    init: function init() {
      window.maps.list = document.querySelectorAll('.jsMap');

      for (var index = 0; index < window.maps.list.length; index++) {
        var item = window.maps.list[index];
        var coord = item.getAttribute('data-map-coordinates') ? JSON.parse(item.getAttribute('data-map-coordinates')) : [[59.938955, 30.315644]];
        var zoom = item.getAttribute('data-map-zoom') ? item.getAttribute('data-map-zoom') : 16;

        if (window.maps['item_' + index]) {
          window.maps['item_' + index].map.destroy();
        }

        window.maps['item_' + index] = {
          element: item,
          zoom: zoom,
          coordinates: item.getAttribute('data-map-coordinates') ? JSON.parse(item.getAttribute('data-map-coordinates')) : '',
          map: new ymaps.Map(item, {
            controls: [],
            center: coord[0],
            zoom: zoom
          }),
          initDots: function initDots() {
            if (this.coordinates != '') {
              for (var dotIndex = 0; dotIndex < this.coordinates.length; dotIndex++) {
                var thisDot = this.coordinates[dotIndex];
                this.addMark(thisDot);
              }
            }
          },
          addMark: function addMark(cors, id) {
            placemark = new ymaps.Placemark(cors, {
              id: id ? id : ''
            }, {
              iconLayout: 'default#image',
              iconImageHref: '/local/templates/spbCult/dist/assets/media/geo-dot.svg',
              // iconImageHref: 'assets/media/geo-dot.svg',
              iconImageSize: [32, 32],
              iconImageOffset: [-16, -16]
            }), this.map.geoObjects.add(placemark);
            placemark.events.add('click', function () {
              window.eventLoad(id);
            });
            this.centeredMap();
          },
          centeredMap: function centeredMap() {
            this.map.setBounds(this.map.geoObjects.getBounds(), {
              checkZoomRange: true,
              zoomMargin: 40
            });
          }
        };
        window.maps['item_' + index].initDots();
      }
    }
  };
}); // document.addEventListener('DOMContentLoaded', ()=>{
//     ymaps.ready(function (){
//         window.maps.item_0.addMark([59.838955, 31.315644], 123)
//         window.maps.item_0.addMark([59.938955, 30.315644], 321)
//     })
// })

/***/ }),

/***/ 5358:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var jsMore = document.querySelectorAll('.jsMore');

  var _loop = function _loop(index) {
    var item = jsMore[index];
    var body = item.querySelector('.jsMoreBody');
    var content = item.querySelector('.jsMoreContent');
    var button = item.querySelector('.jsMoreTrigger');

    if (body.offsetHeight < content.offsetHeight) {
      button.classList.add('is-visible');
    } else {
      button.classList.remove('is-visible');
    }

    button.addEventListener('click', function () {
      body.classList.toggle('is-active');
      button.classList.toggle('is-active');

      if (body.classList.contains('is-active')) {
        body.style.maxHeight = content.offsetHeight + 'px';
      } else {
        body.style.maxHeight = '';
      }
    });
  };

  for (var index = 0; index < jsMore.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 7410:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('body').classList.add('is-loaded');
});

/***/ }),

/***/ 2685:
/***/ (function() {

document.addEventListener('DOMContentLoaded', function () {
  var jsTabs = document.querySelectorAll('.jsTabs');

  var _loop = function _loop(index) {
    var item = jsTabs[index];
    var link = item.querySelectorAll('.jsTabLink');
    var body = item.querySelectorAll('.jsTabItem');
    initTabs();

    var _loop2 = function _loop2(_index) {
      var thisLink = link[_index];
      var thisIndex = thisLink.getAttribute('data-tab');
      thisLink.addEventListener('click', function () {
        clear();
        thisLink.classList.add('is-active');

        if (item.querySelector('.jsTabItem[data-tab="' + thisIndex + '"]')) {
          item.querySelector('.jsTabItem[data-tab="' + thisIndex + '"]').classList.add('is-active');
        }
      });

      if (link.length < 2) {
        link[0].classList.add('is-active');

        if (item.querySelector('.jsTabItem[data-tab="' + link[0].getAttribute('data-tab') + '"]')) {
          item.querySelector('.jsTabItem[data-tab="' + link[0].getAttribute('data-tab') + '"]').classList.add('is-active');
        }
      }
    };

    for (var _index = 0; _index < link.length; _index++) {
      _loop2(_index);
    }

    function checkActveLink() {
      var activeLink = item.querySelector('.jsTabLink.is-active');
      var thisIndex = activeLink.getAttribute('data-tab');

      if (item.querySelector('.jsTabItem[data-tab="' + thisIndex + '"]')) {
        item.querySelector('.jsTabItem[data-tab="' + thisIndex + '"]').classList.add('is-active');
      }
    }

    function initTabs() {
      initGroup(link);
      initGroup(body);
      checkActveLink();

      function initGroup(group) {
        for (var _index2 = 0; _index2 < group.length; _index2++) {
          var groupItem = group[_index2];
          groupItem.setAttribute('data-tab', _index2);
        }
      }
    }

    function clear() {
      for (var _index3 = 0; _index3 < link.length; _index3++) {
        var linkItem = link[_index3];
        linkItem.classList.remove('is-active');
      }

      for (var _index4 = 0; _index4 < body.length; _index4++) {
        var bodyItem = body[_index4];
        bodyItem.classList.remove('is-active');
      }
    }
  };

  for (var index = 0; index < jsTabs.length; index++) {
    _loop(index);
  }
});

/***/ }),

/***/ 5630:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
;// CONCATENATED MODULE: ./src/components/cookies/scripts.js



var Cookies = /*#__PURE__*/function () {
  function Cookies() {
    (0,classCallCheck/* default */.Z)(this, Cookies);

    if (!Cookies.hasCookiesAcceptation()) {
      this.initComponent();
    }
  }

  (0,createClass/* default */.Z)(Cookies, [{
    key: "initComponent",
    value: function initComponent() {
      this.buildTemplate();
      this.attachEvents();
    }
  }, {
    key: "buildTemplate",
    value: function buildTemplate() {
      this.element = document.createElement('div');
      this.element.classList.add('cookies');
      this.element.innerHTML = "\n        <div class=\"container\">\n            <div class=\"cookies__inner\">\n                <div class=\"text-md cookies__text\">\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442 \u0444\u0430\u0439\u043B\u044B cookies \u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u044B \u0441\u0431\u043E\u0440\u0430 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u0441\u0435\u0442\u0438\u0442\u0435\u043B\u0435\u0439 (\u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431 IP-\u0430\u0434\u0440\u0435\u0441\u0435, \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0438 \u0434\u0440.) \u0434\u043B\u044F \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u043E\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F. \u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0448 \u0441\u0430\u0439\u0442, \u0432\u044B \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0445 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439.</div>\n                <button class=\"button cookies__button jsCookiesButton\" type=\"button\">\n                    <span>\u041F\u0440\u0438\u043D\u044F\u0442\u044C \u0438 \u0437\u0430\u043A\u0440\u044B\u0442\u044C</span>\n                </button>\n            </div>\n        </div>\n        ";
      document.body.append(this.element);
      setTimeout(function () {
        document.querySelector('.cookies').classList.add('is-show');
      }, 2000);
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this = this;

      document.querySelector('.jsCookiesButton').addEventListener('click', function (e) {
        Cookies.createEntity();
        document.querySelector('.cookies').classList.remove('is-show');
        setTimeout(function () {
          _this.element.remove();
        }, 750);
      });
    }
  }], [{
    key: "hasCookiesAcceptation",
    value: function hasCookiesAcceptation() {
      return window.localStorage.getItem('cookiesAcceptation');
    }
  }, {
    key: "createEntity",
    value: function createEntity() {
      window.localStorage.setItem('cookiesAcceptation', 'true');
    }
  }]);

  return Cookies;
}();

/* harmony default export */ var scripts = (Cookies);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(9755);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
// EXTERNAL MODULE: ./src/components/header/scripts.js
var header_scripts = __webpack_require__(8450);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js + 1 modules
var bootstrap_esm = __webpack_require__(4712);
;// CONCATENATED MODULE: ./src/components/modal/scripts.js

document.addEventListener('DOMContentLoaded', function () {
  window.modal = {
    list: document.querySelectorAll('.modal')
  };

  for (var index = 0; index < window.modal.list.length; index++) {
    var item = window.modal.list[index];
    var id = item.getAttribute('id');
    var itemModal = new bootstrap_esm/* Modal */.u_(item);
    window.modal[id] = itemModal;
  }

  window.modal.list.forEach(function (e) {
    e.addEventListener('shown.bs.modal', function () {
      if (this.querySelector('[autofocus]')) {
        this.querySelector('[autofocus]').focus();
      }
    });
  }); // window.modal.repost.show()
  // window.modal.schelude.show()
  // window.modal.commentSuccess.show()
  // window.modal.organizers.show()
  // window.modal.resetPasswrod.show()
  // window.modal.sendArticle.show()
  // window.modal.authorization.show()
  // window.modal.callbackSuccess.show()
});
// EXTERNAL MODULE: ./node_modules/swiper/swiper.esm.js + 88 modules
var swiper_esm = __webpack_require__(7099);
;// CONCATENATED MODULE: ./src/components/slider/scripts.js

var jsSliderImportantly = new swiper_esm/* default */.ZP('.jsSliderImportantly .slider__inner', {
  modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl, swiper_esm/* Autoplay */.pt],
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 900,
  autoHeight: true,
  pagination: {
    el: ".jsSliderImportantly .swiper-pagination",
    clickable: true,
    bulletClass: "slider__pagination-item"
  },
  navigation: {
    nextEl: '.jsSliderImportantly .swiper-button-next',
    prevEl: '.jsSliderImportantly .swiper-button-prev'
  },
  breakpoints: {
    0: {
      spaceBetween: 12
    },
    834: {
      spaceBetween: 16
    },
    992: {
      pagination: false,
      spaceBetween: 20
    },
    1260: {
      pagination: false
    }
  }
});
document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector('.jsSliderArticle')) {
    var items = document.querySelectorAll('.jsSliderArticle');

    for (var index = 0; index < items.length; index++) {
      var item = items[index];
      var jsSliderArticle = new swiper_esm/* default */.ZP(item.querySelector('.slider__inner'), {
        modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Pagination */.tl],
        loop: false,
        slidesPerView: 1,
        spaceBetween: 16,
        speed: 500,
        navigation: {
          nextEl: item.querySelector('.swiper-button-next'),
          prevEl: item.querySelector('.swiper-button-prev')
        },
        pagination: {
          el: item.querySelector(".swiper-pagination"),
          clickable: true,
          bulletClass: "slider__pagination-item"
        }
      });
    }
  }

  if (window.calendar.item) {
    window.calendar.slider = new swiper_esm/* default */.ZP(window.calendar.item.querySelector('.slider__inner'), {
      modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Mousewheel */.Gk, swiper_esm/* FreeMode */.Rv],
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
      speed: 750,
      freeMode: true,
      mousewheel: true,
      watchSlidesProgress: true,
      navigation: {
        prevEl: window.calendar.item.querySelector('.swiper-button-prev'),
        nextEl: window.calendar.item.querySelector('.swiper-button-next')
      } // on:{
      //     progress: function (){
      //         let slides = window.calendar.item.querySelectorAll('.swiper-slide-visible');
      //     },
      //     update: function(){
      //         let sizes = [];
      //         console.log('width = ' +window.calendar.slider.wrapperEl.offsetWidth);
      //         getSize()
      //         function getSize(){
      //             let total = 0;
      //             let slides = window.calendar.item.querySelectorAll('.swiper-slide');
      //             for (let index = 0; index < window.calendar.slider.slides.length; index++) {
      //                 const item = window.calendar.slider.slides[index];
      //                 let width = item.querySelector('.calendar__month').offsetWidth;
      //                 sizes.push(width)
      //                 total += width
      //             }
      //             console.log(sizes);
      //             console.log(total);
      //         }
      //     }
      // }

    });
    window.calendar.item.querySelector('.swiper-button-prev').addEventListener('click', function () {
      var width = window.calendar.item.querySelector('.slider__inner').offsetWidth * 0.85;
      var translate = window.calendar.slider.getTranslate();
      window.calendar.slider.translateTo(translate + width, 900);
      window.calendar.slider.update();
    });
    window.calendar.item.querySelector('.swiper-button-next').addEventListener('click', function () {
      var width = window.calendar.item.querySelector('.slider__inner').offsetWidth * 0.85;
      var translate = window.calendar.slider.getTranslate();
      window.calendar.slider.translateTo(translate - width, 900);
      window.calendar.slider.update();
    });
  }

  if (window.calendarEvents.item) {
    window.calendarEvents.slider = new swiper_esm/* default */.ZP(window.calendarEvents.item.querySelector('.slider__inner'), {
      modules: [swiper_esm/* Navigation */.W_, swiper_esm/* Mousewheel */.Gk, swiper_esm/* FreeMode */.Rv],
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 24,
      speed: 750,
      freeMode: true,
      mousewheel: true,
      navigation: {
        prevEl: window.calendarEvents.item.querySelector('.swiper-button-prev'),
        nextEl: window.calendarEvents.item.querySelector('.swiper-button-next')
      }
    });
  }
});
// EXTERNAL MODULE: ./node_modules/@fancyapps/ui/dist/fancybox.esm.js
var fancybox_esm = __webpack_require__(2689);
;// CONCATENATED MODULE: ./src/components/gallery/scripts.js

window.Fancybox = fancybox_esm/* Fancybox */.KR;
fancybox_esm/* Fancybox.bind */.KR.bind('[data-fancybox]', {
  Image: {
    zoom: false
  }
});
// EXTERNAL MODULE: ./src/components/map/scripts.js
var map_scripts = __webpack_require__(5157);
// EXTERNAL MODULE: ./src/components/preloader/scripts.js
var preloader_scripts = __webpack_require__(7410);
// EXTERNAL MODULE: ./node_modules/imask/esm/index.js + 21 modules
var esm = __webpack_require__(2647);
;// CONCATENATED MODULE: ./src/components/input/scripts.js

var regexpPhone = new RegExp('(7|8)\\s[\(][0-9]{3}[\)]\\s[0-9]{3}[\-][0-9]{2}[\-][0-9]{2}');
var regexpMail = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
var phoneElement = document.querySelectorAll('.jsPhoneMask');
var mailElement = document.querySelectorAll('.jsMailMask');
var phoneMaskSettings = {
  mask: [{
    mask: '8 (000) 000-00-00',
    startsWith: '8',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '7',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '',
    lazy: true
  }, {
    mask: '+{7} (000) 000-00-00',
    startsWith: '9',
    lazy: true
  }],
  dispatch: function dispatch(appended, dynamicMasked) {
    var number = (dynamicMasked.value + appended).replace(/\D/g, '');
    return dynamicMasked.compiledMasks.find(function (m) {
      return number.indexOf(m.startsWith) === 0;
    }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
  }
};

if (phoneElement.length > 0) {
  for (var i = 0; i < phoneElement.length; i++) {
    var mask = (0,esm/* default */.ZP)(phoneElement[i], phoneMaskSettings);
  }
}

var jsInput = document.querySelectorAll('.jsInput');

var _loop = function _loop(index) {
  var input = jsInput[index];

  input.onblur = function () {
    window.inputStatusRemove(input, 'focus');

    if (input.value != '') {
      window.inputStatusAdd(input, 'filled');
    }
  };

  input.onfocus = function () {
    window.inputStatusAdd(input, 'focus');
    window.inputStatusRemove(input, 'error');
    window.inputStatusRemove(input, 'filled');
  };
};

for (var index = 0; index < jsInput.length; index++) {
  _loop(index);
}

var jsInputFile = document.querySelectorAll('.jsInputFile');

var _loop2 = function _loop2(_index) {
  var input = jsInputFile[_index];
  var field = input.querySelector('.jsInputFileField');
  var name = input.querySelector('.jsInputFileName');
  var del = input.querySelector('.jsInputFileDelete');
  del.addEventListener('click', function (e) {
    e.preventDefault();
    field.value == '';
    input.classList.remove('is-upload');
    name.innerHTML = '';
  });
  field.addEventListener('change', function () {
    if (field.files.length != 0) {
      input.classList.add('is-upload');
      name.innerHTML = this.files[0].name;
    } else {
      input.classList.remove('is-upload');
      name.innerHTML = '';
    }
  });
};

for (var _index = 0; _index < jsInputFile.length; _index++) {
  _loop2(_index);
} // let mailInputs = document.querySelectorAll('.jsMailMask');
// for (let index = 0; index < mailInputs.length; index++){
//     let input = mailInputs[index];
//     input.addEventListener('input', function(){
//         let result = window.InputCheckMask(input, 'mail');
//         console.log(result);
//     })
// }
// Input status
// Варианты:  'focus' ; 'error' ; 'fill' ; 'ok' ;
// window.inputStatusAdd(input, 'error')
// window.inputStatusRemove(input, 'error')


window.inputStatusAdd = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.add('is-' + status);
  } else if (input.closest('.input')) {
    input.closest('.input').classList.add('is-' + status);
  } else if (input.closest('.search')) {
    input.closest('.search').classList.add('is-' + status);
  }
};

window.inputStatusRemove = function (input, status) {
  if (input.classList.contains('.input')) {
    input.classList.remove('is-' + status);
  } else if (input.closest('.input')) {
    input.closest('.input').classList.remove('is-' + status);
  } else if (input.closest('.search')) {
    input.closest('.search').classList.remove('is-' + status);
  }
}; // Input masks
// Варианты:  'mail' ; 'phone'
// window.InputCheckMask(input, 'mail')


window.InputCheckMask = function (input, type) {
  if (type === 'mail') {
    // console.log('mail');
    return regexpMail.test(input.value);
  }

  if (type === 'phone') {
    // console.log('phone');
    return regexpPhone.test(input.value);
  }
};

window.runMask = function () {
  var phoneElement = document.querySelectorAll('.jsPhoneMask');
  var phoneMaskSettings = {
    mask: [{
      mask: '8 (000) 000-00-00',
      startsWith: '8',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '7',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '',
      lazy: true
    }, {
      mask: '+{7} (000) 000-00-00',
      startsWith: '9',
      lazy: true
    }],
    dispatch: function dispatch(appended, dynamicMasked) {
      var number = (dynamicMasked.value + appended).replace(/\D/g, '');
      return dynamicMasked.compiledMasks.find(function (m) {
        return number.indexOf(m.startsWith) === 0;
      }) || this.dynamicMasked.compiledMasks[this.dynamicMasked.compiledMasks.length - 1];
    }
  };

  if (phoneElement.length > 0) {
    for (var _i = 0; _i < phoneElement.length; _i++) {
      var _mask = (0,esm/* default */.ZP)(phoneElement[_i], phoneMaskSettings);
    }
  }
}; // window.runMask() перезвапуск маски


var jsInputSwap = document.querySelectorAll('.jsInputSwap');

var _loop3 = function _loop3(_index2) {
  var item = jsInputSwap[_index2];
  var parent = item.closest('.input');
  var input = parent.querySelector('input');

  function toggleType() {
    if (input.getAttribute('type') == 'password') {
      input.setAttribute('type', 'text');
    } else if (input.getAttribute('type') == 'text') {
      input.setAttribute('type', 'password');
    }
  }

  item.addEventListener('click', function (e) {
    item.classList.toggle('is-active');
    toggleType();
  });
};

for (var _index2 = 0; _index2 < jsInputSwap.length; _index2++) {
  _loop3(_index2);
}
// EXTERNAL MODULE: ./node_modules/sumoselect/jquery.sumoselect.js
var jquery_sumoselect = __webpack_require__(4102);
;// CONCATENATED MODULE: ./src/components/select/scripts.js



window.initSelect = function () {
  jquery_default()('.jsSelect').each(function () {
    var thisSelect = jquery_default()(this);
    var placeholder = thisSelect.attr('placeholder');
    thisSelect.SumoSelect({
      placeholder: placeholder
    });
  });
};

document.addEventListener('DOMContentLoaded', function () {
  window.initSelect();
});
// EXTERNAL MODULE: ./node_modules/daterangepicker/daterangepicker.js
var daterangepicker = __webpack_require__(932);
;// CONCATENATED MODULE: ./src/components/datepicker/scripts.js



window.datepickerChange = function (el) {
  console.log(el);
};

document.addEventListener('DOMContentLoaded', function () {
  window.datepickerInit();
});

window.datepickerInit = function () {
  var datepickers = jquery_default()('.jsInputDate');
  datepickers.each(function (e) {
    jquery_default()(this).daterangepicker({
      locale: {
        format: "DD/MM/YYYY",
        separator: " - ",
        applyLabel: "Применить",
        cancelLabel: "Отмена",
        fromLabel: "От",
        toLabel: "До",
        customRangeLabel: "Custom",
        weekLabel: "W",
        daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        firstDay: 1
      },
      autoUpdateInput: false,
      linkedCalendars: false,
      buttonClasses: "button button--sm",
      applyButtonClasses: "",
      cancelClass: "button--light",
      drops: "auto",
      opens: "center"
    });
    jquery_default()(this).on('apply.daterangepicker', function (ev, picker) {
      jquery_default()(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));

      if (jquery_default()(this).closest('.filter')) {
        jquery_default()(this).closest('.filter').find('input[name="date_from"').val(picker.startDate.format('DD.MM.YYYY'));
        jquery_default()(this).closest('.filter').find('input[name="date_to"').val(picker.endDate.format('DD.MM.YYYY'));
      }

      window.datepickerChange(jquery_default()(this)[0]);
    });
    jquery_default()(this).on('cancel.daterangepicker', function (ev, picker) {
      jquery_default()(this).val('');

      if (jquery_default()(this).closest('.filter')) {
        jquery_default()(this).closest('.filter').find('input[name="date_from"').val('');
        jquery_default()(this).closest('.filter').find('input[name="date_to"').val('');
      }

      window.datepickerChange(jquery_default()(this)[0]);
    });
  });
  var datepickersSingle = jquery_default()('.jsInputDateSingle');
  datepickersSingle.each(function () {
    jquery_default()(this).daterangepicker({
      locale: {
        format: "DD/MM/YYYY",
        separator: " - ",
        applyLabel: "Применить",
        cancelLabel: "Отмена",
        fromLabel: "От",
        toLabel: "До",
        customRangeLabel: "Custom",
        weekLabel: "W",
        daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
        firstDay: 1
      },
      "singleDatePicker": true,
      autoUpdateInput: false,
      linkedCalendars: false,
      buttonClasses: "button button--sm",
      applyButtonClasses: "",
      cancelClass: "button--light",
      drops: "auto",
      opens: "center"
    });
    jquery_default()(this).on('apply.daterangepicker', function (ev, picker) {
      jquery_default()(this).val(picker.startDate.format('DD.MM.YYYY'));

      if (jquery_default()(this).closest('.filter')) {
        jquery_default()(this).closest('.filter').find('input[name="date_from"').val(picker.startDate.format('DD.MM.YYYY'));
      }

      window.datepickerChange(jquery_default()(this)[0]);
    });
    jquery_default()(this).on('cancel.daterangepicker', function (ev, picker) {
      jquery_default()(this).val('');

      if (jquery_default()(this).closest('.filter')) {
        jquery_default()(this).closest('.filter').find('input[name="date_from"').val('');
      }

      window.datepickerChange(jquery_default()(this)[0]);
    });
  });
};
// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(381);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);
;// CONCATENATED MODULE: ./src/components/calendar/scripts.js

window.moment = moment_default()();
window.calendar = {
  item: document.querySelector('.jsCalendar'),
  inputs: document.querySelectorAll('.jsFilterDate'),
  list: []
};

if (window.calendar.item) {
  var init = function init() {
    for (var i = 0; i < 13; i++) {
      localDate = newMonth(localDate, i);
    }

    window.calendar.slider.update();
    window.calendar.inputs = document.querySelectorAll('.jsFilterDate');
  };

  var newMonth = function newMonth(localDate, index) {
    var tempDate = localDate.clone();
    var monthStart = index == 0 ? localDate.clone() : tempDate.clone().startOf('month');
    var monthEnd = index == 12 ? tempDate.clone().subtract(1, 'day') : tempDate.clone().endOf('month');
    var monthName = tempDate.format('MMMM');
    var monthList = [];
    var day = monthStart.clone();
    var monthInner; // Создание

    var slide = document.createElement('div');
    var month = document.createElement('div');
    var days = document.createElement('div');
    var name = translateMonth(monthName);
    slide.classList.add('swiper-slide', 'slider__slide');
    month.classList.add('calendar__month');
    days.classList.add('calendar__days');
    month.innerHTML = "<span>" + name + "</span>";
    month.append(days);
    calendarInner.append(slide);
    slide.append(month);
    monthInner = days; // 
    // Наполнение

    while (!day.isAfter(monthEnd)) {
      var dayDate = day.clone();
      monthList.push(day.clone());
      createDay(monthInner, dayDate);
      day.add(1, 'day');
    }

    window.calendar.list.push(monthList); // 

    return tempDate.clone().add(1, 'month');
  };

  var createDay = function createDay(parent, date) {
    var thisDate = date;
    var name = translateDay(thisDate.format('dd'));
    var number = thisDate.format('DD');
    var value = thisDate.format('YYYY-MM-DD');
    var dayPattern = "\n                <strong>" + number + "</strong>\n                <span>" + name + "</span>\n        ";
    var element = document.createElement('div');
    element.classList.add('calendar__day', 'jsFilterDate');
    element.setAttribute('data-calendar-date', value);

    if (name == 'Сб' || name == 'Вс') {
      element.classList.add('calendar__day--weekend');
    }

    element.innerHTML = dayPattern;
    parent.append(element);
  };

  var translateMonth = function translateMonth(monthName) {
    var name;

    switch (monthName) {
      case 'January':
        name = 'Январь';
        break;

      case 'February':
        name = 'Февраль';
        break;

      case 'March':
        name = 'Март';
        break;

      case 'April':
        name = 'Апрель';
        break;

      case 'May':
        name = 'Май';
        break;

      case 'June':
        name = 'Июнь';
        break;

      case 'July':
        name = 'Июль';
        break;

      case 'August':
        name = 'Август';
        break;

      case 'September':
        name = 'Сентябрь';
        break;

      case 'October':
        name = 'Октябрь';
        break;

      case 'November':
        name = 'Ноябрь';
        break;

      case 'December':
        name = 'Декабрь';
        break;

      default:
        break;
    }

    return name;
  };

  var translateDay = function translateDay(dayName) {
    var name;

    switch (dayName) {
      case 'Mo':
        name = 'Пн';
        break;

      case 'Tu':
        name = 'Вт';
        break;

      case 'We':
        name = 'Ср';
        break;

      case 'Th':
        name = 'Чт';
        break;

      case 'Fr':
        name = 'Пт';
        break;

      case 'Sa':
        name = 'Сб';
        break;

      case 'Su':
        name = 'Вс';
        break;

      default:
        break;
    }

    return name;
  };

  var calendarItem = window.calendar.item;
  var calendarInner = calendarItem.querySelector('.swiper-wrapper', 'slider__wrapper');
  var localDate = moment_default()().clone();
  document.addEventListener('DOMContentLoaded', function () {
    init();

    var _loop = function _loop(index) {
      var item = window.calendar.inputs[index];
      item.addEventListener('click', function (e) {
        var all = window.calendar.item.querySelectorAll('.jsFilterDate');

        if (window.calendar.item.querySelectorAll('.jsFilterDate.is-active').length >= 2) {
          for (var _index = 0; _index < all.length; _index++) {
            var _item = all[_index];

            _item.classList.remove('is-range');

            _item.classList.remove('is-active');
          }
        }

        item.classList.add('is-active');
        run();

        function run() {
          var allChecked = window.calendar.item.querySelectorAll('.jsFilterDate.is-active');
          var array = [],
              minTemp,
              maxTemp,
              minItem,
              maxItem,
              minIndex,
              maxIndex,
              min = '',
              max = '';
          findMinMax();
          findIndex();
          callback();

          function findMinMax() {
            for (var _index2 = 0; _index2 < allChecked.length; _index2++) {
              var _item2 = allChecked[_index2];
              var value = Date.parse(_item2.getAttribute('data-calendar-date'));
              array.push(value);
            }

            minTemp = Math.min.apply(null, array);
            maxTemp = Math.max.apply(null, array);

            for (var _index3 = 0; _index3 < allChecked.length; _index3++) {
              var _item3 = allChecked[_index3];

              var _value = _item3.getAttribute('data-calendar-date'); // minTemp == Date.parse(value) ? (min = value, minItem = item) : maxTemp == Date.parse(value) ? (max = value, maxItem = item): '';


              if (minTemp == Date.parse(_value)) {
                min = _value;
                minItem = _item3;
              } else if (maxTemp == Date.parse(_value)) {
                max = _value;
                maxItem = _item3;
              }
            }
          }

          function findIndex() {
            for (var _index4 = 0; _index4 < all.length; _index4++) {
              var _item4 = all[_index4];

              if (_item4 == minItem) {
                minIndex = _index4;
              } else if (_item4 == maxItem) {
                maxIndex = _index4;
              }
            }

            if (maxIndex != undefined) {
              var tempAll = Array.prototype.slice.call(all, minIndex, maxIndex);

              for (var _index5 = 0; _index5 < tempAll.length; _index5++) {
                var _item5 = tempAll[_index5];

                _item5.classList.add('is-range');
              }
            }
          }

          function callback() {
            var filterWrapper = item.closest('.filter');

            if (filterWrapper) {
              filterWrapper.querySelector('input[name="date_from"').value = min;
              filterWrapper.querySelector('input[name="date_to"').value = max;
            }

            if (min != '' && max != '') {
              window.datepickerChange(filterWrapper.querySelector('input[name="date_from"'));
            }
          }
        }
      });
    };

    for (var index = 0; index < window.calendar.inputs.length; index++) {
      _loop(index);
    }
  });
}
;// CONCATENATED MODULE: ./src/components/calendar-events/scripts.js

window.moment = moment_default()();
window.calendarEvents = {
  item: document.querySelector('.jsCalendarEvents'),
  inputs: document.querySelectorAll('.jsFilterDate'),
  list: []
};

if (window.calendarEvents.item) {
  var scripts_newMonth = function newMonth(localDate) {
    var tempDate = localDate.clone();
    var monthStart = localDate.clone();
    var monthEnd = tempDate.clone().endOf('month');
    var monthName = tempDate.format('MMMM'); // Создание и наполнение

    var month = document.createElement('div');
    var name = scripts_translateMonth(monthName);
    month.classList.add('calendar-events__item', 'jsFilterMonth');
    month.innerHTML = "<span>" + name + "</span>";
    scripts_calendarInner.append(month);
    month.setAttribute('data-calendar-date', monthStart.format('YYYY-MM-DD')); // 

    window.calendarEvents.list.push(name);
    return monthEnd.add(1, 'day');
  };

  var scripts_translateMonth = function translateMonth(monthName) {
    var name;

    switch (monthName) {
      case 'January':
        name = 'Январь';
        break;

      case 'February':
        name = 'Февраль';
        break;

      case 'March':
        name = 'Март';
        break;

      case 'April':
        name = 'Апрель';
        break;

      case 'May':
        name = 'Май';
        break;

      case 'June':
        name = 'Июнь';
        break;

      case 'July':
        name = 'Июль';
        break;

      case 'August':
        name = 'Август';
        break;

      case 'September':
        name = 'Сентябрь';
        break;

      case 'October':
        name = 'Октябрь';
        break;

      case 'November':
        name = 'Ноябрь';
        break;

      case 'December':
        name = 'Декабрь';
        break;

      default:
        break;
    }

    return name;
  };

  var scripts_calendarItem = window.calendarEvents.item;
  var scripts_calendarInner = scripts_calendarItem.querySelector('.swiper-slide', 'slider__slide');
  var scripts_localDate = moment_default()().clone();

  window.calendarEvents.init = function () {
    for (var i = 0; i < 12; i++) {
      scripts_localDate = scripts_newMonth(scripts_localDate);
    }

    window.calendarEvents.slider.update();
    window.calendarEvents.inputs = document.querySelectorAll('.jsFilterMonth');
  };

  document.addEventListener('DOMContentLoaded', function () {
    window.calendarEvents.init();

    var _loop = function _loop(index) {
      var item = window.calendarEvents.inputs[index];

      if (index == 0) {
        item.classList.add('is-active');
        click();
      }

      item.addEventListener('click', function () {
        click();
      });

      function click() {
        var value = item.getAttribute('data-calendar-date');
        clearAll();
        item.classList.add('is-active');
        callback();

        function callback() {
          if (item.closest('.filter')) {
            item.closest('.filter').querySelector('input[name="date_from"').value = value;
          }

          window.datepickerChange(item);
        }

        function clearAll() {
          for (var _index = 0; _index < window.calendarEvents.inputs.length; _index++) {
            var _item = window.calendarEvents.inputs[_index];

            _item.classList.remove('is-active');
          }
        }
      }
    };

    for (var index = 0; index < window.calendarEvents.inputs.length; index++) {
      _loop(index);
    }
  });
}
// EXTERNAL MODULE: ./src/components/link/scripts.js
var link_scripts = __webpack_require__(1676);
;// CONCATENATED MODULE: ./src/components/copy/scripts.js

document.addEventListener('DOMContentLoaded', function () {
  var copyButtons = document.querySelectorAll('.jsCopyButton');

  for (var index = 0; index < copyButtons.length; index++) {
    var item = copyButtons[index];
    var link = document.location.href;
    item.setAttribute('href', link);
    item.querySelector('span.button__text').innerHTML = link;
  }
});
jquery_default()('.jsCopyButton').on('click', function (e) {
  var isiOSDevice = navigator.userAgent.match(/ipad|iphone/i);
  e.preventDefault();
  var $this = jquery_default()(this);
  var $temp = jquery_default()("<input>", {
    class: 'copy-to-clipboard-input',
    id: 'copy-to-clipboard-input',
    readonly: true,
    value: $this.attr('href')
  });
  $this.append($temp);
  var input = document.getElementById('copy-to-clipboard-input');

  if (isiOSDevice) {
    var editable = input.contentEditable;
    var readOnly = input.readOnly;
    input.contentEditable = true;
    input.readOnly = false;
    var range = document.createRange();
    range.selectNodeContents(input);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    input.setSelectionRange(0, 999999);
    input.contentEditable = editable;
    input.readOnly = readOnly;
  } else {
    $temp.select();
  }

  document.execCommand("copy");
  $temp.remove();
  toggleClasses();

  function toggleClasses() {
    $this.addClass('is-active');
    setTimeout(function () {
      $this.removeClass('is-active');
    }, 1000);
  }
});
// EXTERNAL MODULE: ./src/components/tabs/scripts.js
var tabs_scripts = __webpack_require__(2685);
// EXTERNAL MODULE: ./src/components/more/scripts.js
var more_scripts = __webpack_require__(5358);
// EXTERNAL MODULE: ./src/components/generator/scripts.js
var generator_scripts = __webpack_require__(9115);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
// EXTERNAL MODULE: ./node_modules/gator/gator.js
var gator = __webpack_require__(4140);
var gator_default = /*#__PURE__*/__webpack_require__.n(gator);
// EXTERNAL MODULE: ./node_modules/yup/es/index.js + 23 modules
var es = __webpack_require__(1260);
;// CONCATENATED MODULE: ./src/components/validator/services.js

var MSG_LETTERS = 'Поле не может содержать цифры';
var MSG_REQUIRED = 'Поле обязательно для заполнения';
var MSG_TEXT = 'Поле не должно содержать цифры';
var MSG_TEXT_MIN = 'Значение не может быть таким коротким';
var MSG_TEXT_MAX = 'Значение не может быть таким длинным';
var MSG_PHONE = 'Телефон заполнен не верно';
var MSG_EMAIL = 'Email заполнен не верно';
var MSG_NUMBER = 'Поле должно содержать цифры';
var MSG_NUMBER_MIN = 'Значение не может быть меньше';
var MSG_NUMBER_MAX = 'Значение не может быть больше';

var validateLetters = function validateLetters(value, min, max) {
  var lettersRegExp = /^[A-ZА-Яa-zа-я\s]*$/;
  var scheme = es/* string */.Z_().trim().required(MSG_REQUIRED).matches(lettersRegExp, MSG_LETTERS).min(min, MSG_TEXT_MIN).max(max, MSG_TEXT_MAX);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateText = function validateText(value, min, max) {
  var scheme = es/* string */.Z_(MSG_TEXT).trim().required(MSG_REQUIRED).min(min, MSG_TEXT_MIN).max(max, MSG_TEXT_MAX);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validatePhone = function validatePhone(value) {
  var phoneRegExp = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
  var scheme = es/* string */.Z_().trim().required(MSG_REQUIRED).matches(phoneRegExp, MSG_PHONE);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateEmail = function validateEmail(value) {
  var scheme = es/* string */.Z_(MSG_TEXT).trim().required(MSG_REQUIRED).email(MSG_EMAIL);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateNumber = function validateNumber(value, min, max) {
  var scheme = es/* number */.Rx(MSG_NUMBER).required(MSG_REQUIRED).min(min, MSG_NUMBER_MIN).max(max, MSG_NUMBER_MAX);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validateCheckbox = function validateCheckbox(value) {
  var scheme = es/* boolean */.O7().oneOf([true]);
  return scheme.isValidSync(value) ? 'valid' : 'invalid';
};

var validatorServices = {
  validateLetters: validateLetters,
  validateText: validateText,
  validatePhone: validatePhone,
  validateEmail: validateEmail,
  validateNumber: validateNumber,
  validateCheckbox: validateCheckbox
};
/* harmony default export */ var services = (validatorServices);
;// CONCATENATED MODULE: ./src/components/validator/view.js
var renderField = function renderField(validationState, node, invalidClass) {
  if (validationState === 'valid') {
    node.classList.remove(invalidClass);
  }

  if (validationState === 'invalid') {
    node.classList.add(invalidClass);
  }
};

var renderError = function renderError(validationState, node, visibilityClass) {
  var message = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  if (validationState === 'valid') {
    node.classList.remove(visibilityClass);
    node.textContent = '';
  }

  if (validationState === 'invalid') {
    node.classList.add(visibilityClass);
    node.textContent = message;
  }
};

var validatorView = {
  renderField: renderField,
  renderError: renderError
};
/* harmony default export */ var view = (validatorView);
;// CONCATENATED MODULE: ./src/components/formValidator/init.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var INVALID_CLASS = 'form__field--invalid';
var ERROR_VISIBILITY_CLASS = 'form__error--visible';
var VALIDATION_SERVICES_MAP = {
  letters: function letters(_ref) {
    var value = _ref.value,
        min = _ref.min,
        max = _ref.max;
    return services.validateLetters(value, min, max);
  },
  number: function number(_ref2) {
    var value = _ref2.value,
        min = _ref2.min,
        max = _ref2.max;
    return services.validateNumber(value, min, max);
  },
  text: function text(_ref3) {
    var value = _ref3.value,
        min = _ref3.min,
        max = _ref3.max;
    return services.validateText(value, min, max);
  },
  phone: function phone(_ref4) {
    var value = _ref4.value;
    return services.validatePhone(value);
  },
  email: function email(_ref5) {
    var value = _ref5.value;
    return services.validateEmail(value);
  },
  check: function check(_ref6) {
    var value = _ref6.value;
    return services.validateCheckbox(value);
  }
};

var validateField = function validateField(input) {
  var inputBox = input.closest('[data-entity="v-field-box"]');
  var inputError = inputBox.querySelector('[data-entity="v-field-error"]');
  var inputValue = input.type !== 'checkbox' ? input.value : input.checked;
  var validator = {
    name: input.dataset.validator,
    options: {
      min: +input.dataset.min || 2,
      max: +input.dataset.max || 200
    }
  };
  var validatorName = validator.name,
      validatorOptions = validator.options;
  var validationService = VALIDATION_SERVICES_MAP[validatorName];
  var validationState = validationService(_objectSpread({
    value: inputValue
  }, validatorOptions));
  view.renderField(validationState, inputBox, INVALID_CLASS);

  if (inputError) {
    view.renderError(validationState, inputError, ERROR_VISIBILITY_CLASS, 'Поле заполнено некорректно');
  }

  return validationState;
};

var validateForm = function validateForm(form) {
  var formValidationState = 'idle';
  var fields = Array.from(form.querySelectorAll('[data-entity="v-field"]'));
  fields.forEach(function (input) {
    var fieldValidationState = validateField(input);

    if (fieldValidationState === 'invalid') {
      formValidationState = 'invalid';
    }
  });
  return formValidationState;
};

var registerFormValidator = function registerFormValidator() {
  if (window.spiks) {
    window.spiks.FormManager = {
      attachEvents: function attachEvents(formNode) {
        gator_default()(formNode).on('input', '[data-entity="v-field"]', function (_ref7) {
          var target = _ref7.target;
          validateField(target);
        });
      },
      validate: function validate(formNode) {
        return validateForm(formNode) !== 'invalid';
      }
    };
  }
};

/* harmony default export */ var formValidator_init = (registerFormValidator);
;// CONCATENATED MODULE: ./src/init.js

 // import '@components/animations/scripts';











 // import '@components/socials/scripts';










var init_init = function init() {
  __webpack_require__.g.spiks = {};
  __webpack_require__.g.spiks.validator = services;
  new scripts();
  formValidator_init();
  __webpack_require__.g.$ = (jquery_default());
};

/* harmony default export */ var src_init = (init_init);
;// CONCATENATED MODULE: ./src/script.js

src_init();

/***/ }),

/***/ 6700:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 2786,
	"./af.js": 2786,
	"./ar": 867,
	"./ar-dz": 4130,
	"./ar-dz.js": 4130,
	"./ar-kw": 6135,
	"./ar-kw.js": 6135,
	"./ar-ly": 6440,
	"./ar-ly.js": 6440,
	"./ar-ma": 7702,
	"./ar-ma.js": 7702,
	"./ar-sa": 6040,
	"./ar-sa.js": 6040,
	"./ar-tn": 7100,
	"./ar-tn.js": 7100,
	"./ar.js": 867,
	"./az": 1083,
	"./az.js": 1083,
	"./be": 9808,
	"./be.js": 9808,
	"./bg": 8338,
	"./bg.js": 8338,
	"./bm": 7438,
	"./bm.js": 7438,
	"./bn": 8905,
	"./bn-bd": 6225,
	"./bn-bd.js": 6225,
	"./bn.js": 8905,
	"./bo": 1560,
	"./bo.js": 1560,
	"./br": 1278,
	"./br.js": 1278,
	"./bs": 622,
	"./bs.js": 622,
	"./ca": 2468,
	"./ca.js": 2468,
	"./cs": 5822,
	"./cs.js": 5822,
	"./cv": 877,
	"./cv.js": 877,
	"./cy": 7373,
	"./cy.js": 7373,
	"./da": 4780,
	"./da.js": 4780,
	"./de": 9740,
	"./de-at": 217,
	"./de-at.js": 217,
	"./de-ch": 894,
	"./de-ch.js": 894,
	"./de.js": 9740,
	"./dv": 5300,
	"./dv.js": 5300,
	"./el": 837,
	"./el.js": 837,
	"./en-au": 8348,
	"./en-au.js": 8348,
	"./en-ca": 7925,
	"./en-ca.js": 7925,
	"./en-gb": 2243,
	"./en-gb.js": 2243,
	"./en-ie": 6436,
	"./en-ie.js": 6436,
	"./en-il": 7207,
	"./en-il.js": 7207,
	"./en-in": 4175,
	"./en-in.js": 4175,
	"./en-nz": 6319,
	"./en-nz.js": 6319,
	"./en-sg": 1662,
	"./en-sg.js": 1662,
	"./eo": 2915,
	"./eo.js": 2915,
	"./es": 5655,
	"./es-do": 5251,
	"./es-do.js": 5251,
	"./es-mx": 6112,
	"./es-mx.js": 6112,
	"./es-us": 1146,
	"./es-us.js": 1146,
	"./es.js": 5655,
	"./et": 5603,
	"./et.js": 5603,
	"./eu": 7763,
	"./eu.js": 7763,
	"./fa": 6959,
	"./fa.js": 6959,
	"./fi": 1897,
	"./fi.js": 1897,
	"./fil": 2549,
	"./fil.js": 2549,
	"./fo": 4694,
	"./fo.js": 4694,
	"./fr": 4470,
	"./fr-ca": 3049,
	"./fr-ca.js": 3049,
	"./fr-ch": 2330,
	"./fr-ch.js": 2330,
	"./fr.js": 4470,
	"./fy": 5044,
	"./fy.js": 5044,
	"./ga": 9295,
	"./ga.js": 9295,
	"./gd": 2101,
	"./gd.js": 2101,
	"./gl": 8794,
	"./gl.js": 8794,
	"./gom-deva": 7884,
	"./gom-deva.js": 7884,
	"./gom-latn": 3168,
	"./gom-latn.js": 3168,
	"./gu": 5349,
	"./gu.js": 5349,
	"./he": 4206,
	"./he.js": 4206,
	"./hi": 94,
	"./hi.js": 94,
	"./hr": 316,
	"./hr.js": 316,
	"./hu": 2138,
	"./hu.js": 2138,
	"./hy-am": 1423,
	"./hy-am.js": 1423,
	"./id": 9218,
	"./id.js": 9218,
	"./is": 135,
	"./is.js": 135,
	"./it": 626,
	"./it-ch": 150,
	"./it-ch.js": 150,
	"./it.js": 626,
	"./ja": 9183,
	"./ja.js": 9183,
	"./jv": 4286,
	"./jv.js": 4286,
	"./ka": 2105,
	"./ka.js": 2105,
	"./kk": 7772,
	"./kk.js": 7772,
	"./km": 8758,
	"./km.js": 8758,
	"./kn": 9282,
	"./kn.js": 9282,
	"./ko": 6778,
	"./ko.js": 6778,
	"./ku": 1408,
	"./ku.js": 1408,
	"./ky": 3291,
	"./ky.js": 3291,
	"./lb": 6841,
	"./lb.js": 6841,
	"./lo": 5466,
	"./lo.js": 5466,
	"./lt": 7010,
	"./lt.js": 7010,
	"./lv": 7595,
	"./lv.js": 7595,
	"./me": 9861,
	"./me.js": 9861,
	"./mi": 5493,
	"./mi.js": 5493,
	"./mk": 5966,
	"./mk.js": 5966,
	"./ml": 7341,
	"./ml.js": 7341,
	"./mn": 5115,
	"./mn.js": 5115,
	"./mr": 370,
	"./mr.js": 370,
	"./ms": 9847,
	"./ms-my": 1237,
	"./ms-my.js": 1237,
	"./ms.js": 9847,
	"./mt": 2126,
	"./mt.js": 2126,
	"./my": 6165,
	"./my.js": 6165,
	"./nb": 4924,
	"./nb.js": 4924,
	"./ne": 6744,
	"./ne.js": 6744,
	"./nl": 5113,
	"./nl-be": 9814,
	"./nl-be.js": 9814,
	"./nl.js": 5113,
	"./nn": 3877,
	"./nn.js": 3877,
	"./oc-lnc": 2135,
	"./oc-lnc.js": 2135,
	"./pa-in": 5858,
	"./pa-in.js": 5858,
	"./pl": 4495,
	"./pl.js": 4495,
	"./pt": 9520,
	"./pt-br": 7971,
	"./pt-br.js": 7971,
	"./pt.js": 9520,
	"./ro": 6459,
	"./ro.js": 6459,
	"./ru": 1793,
	"./ru.js": 1793,
	"./sd": 950,
	"./sd.js": 950,
	"./se": 490,
	"./se.js": 490,
	"./si": 124,
	"./si.js": 124,
	"./sk": 4249,
	"./sk.js": 4249,
	"./sl": 4082,
	"./sl.js": 4082,
	"./sq": 1104,
	"./sq.js": 1104,
	"./sr": 9131,
	"./sr-cyrl": 9915,
	"./sr-cyrl.js": 9915,
	"./sr.js": 9131,
	"./ss": 5893,
	"./ss.js": 5893,
	"./sv": 8760,
	"./sv.js": 8760,
	"./sw": 1172,
	"./sw.js": 1172,
	"./ta": 7333,
	"./ta.js": 7333,
	"./te": 3110,
	"./te.js": 3110,
	"./tet": 2095,
	"./tet.js": 2095,
	"./tg": 7321,
	"./tg.js": 7321,
	"./th": 9041,
	"./th.js": 9041,
	"./tk": 9005,
	"./tk.js": 9005,
	"./tl-ph": 5768,
	"./tl-ph.js": 5768,
	"./tlh": 9444,
	"./tlh.js": 9444,
	"./tr": 2397,
	"./tr.js": 2397,
	"./tzl": 8254,
	"./tzl.js": 8254,
	"./tzm": 1106,
	"./tzm-latn": 699,
	"./tzm-latn.js": 699,
	"./tzm.js": 1106,
	"./ug-cn": 9288,
	"./ug-cn.js": 9288,
	"./uk": 7691,
	"./uk.js": 7691,
	"./ur": 3795,
	"./ur.js": 3795,
	"./uz": 6791,
	"./uz-latn": 588,
	"./uz-latn.js": 588,
	"./uz.js": 6791,
	"./vi": 5666,
	"./vi.js": 5666,
	"./x-pseudo": 4378,
	"./x-pseudo.js": 4378,
	"./yo": 5805,
	"./yo.js": 5805,
	"./zh-cn": 3839,
	"./zh-cn.js": 3839,
	"./zh-hk": 5726,
	"./zh-hk.js": 5726,
	"./zh-mo": 9807,
	"./zh-mo.js": 9807,
	"./zh-tw": 4152,
	"./zh-tw.js": 4152
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	!function() {
/******/ 		__webpack_require__.j = 940;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			940: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmarkup_starter_kit"] = self["webpackChunkmarkup_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], function() { return __webpack_require__(5630); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main_script.js.map