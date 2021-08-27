"use strict";

$(document).ready(function () {
  // 立即預約-選擇課程
  $('.basicCourse').click(function () {
    $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
    $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-基礎</h4>');
  });
  $('.intermediateCourse').click(function () {
    $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
    $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-中階</h4>');
  });
  $('.advancedCourse').click(function () {
    $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
    $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-高階</h4>');
  }); // 自己以外的card 移除 chooseCourse樣式。
  // $(this).parent().siblings().find('.card').removeClass('chooseCourse');
  //選擇課程階級
  // $('.projectsChoose card').click(function(){ 
  //   $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
  // })  

  $('.juniorLevel').click(function () {
    event.preventDefault();
    $('.courseList').toggle();
  }); //loader 頁面載完就移出

  $(window).on("load", function () {
    $(".loader").remove();
  }); //swiper-course

  var swiper = new Swiper(".courseSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerColumn: 2,
    slidesPerColumnFill: "row",
    breakpoints: {
      992: {
        slidesPerView: 1.5,
        slidesPerColumn: 1
      }
    }
  }); //swiper-comments

  var swiper = new Swiper('.commentSwiper', {
    slidesPerView: 1,
    slidesPerColumn: 3,
    slidesPerColumnFill: "row",
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
        slidesPerColumn: 2
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 2
      }
    },
    //Navigation
    navigation: {
      prevEl: ".swiper-prev",
      nextEl: ".swiper-next"
    }
  }); //swiper-level

  var swiper = new Swiper('.levelSwiper', {
    slidesPerView: 1.2,
    // slidesPerColumn: 1,
    slidesPerColumnFill: "row",
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 1.8
      },
      992: {
        slidesPerView: 3
      }
    }
  }); // datepicker

  var elem = document.querySelector('input[name="datepicker"]');
  var datepicker = new Datepicker(elem, {
    buttonClass: 'btn text-tertiary',
    nextArrow: '>',
    prevArrow: '<'
  });
});
//# sourceMappingURL=all.js.map
