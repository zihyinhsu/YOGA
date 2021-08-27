
$(document).ready(function () {
// 立即預約-選擇課程
  $('.basicCourse').click(function(){ 
    $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
    // 自己以外的card 移除 chooseCourse樣式。
    $(this).parent().siblings().find('.card').removeClass('chooseCourse').find('i').removeClass("opacity-1");
    $('.finalChoose').slideUp().slideDown();
    $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-基礎</h4>');
  })  

  $('.intermediateCourse').click(function(){ 
    $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
    // 自己以外的card 移除 chooseCourse樣式。
    $(this).parent().siblings().find('.card').removeClass('chooseCourse').find('i').removeClass("opacity-1");
    $('.finalChoose').slideUp().slideDown();
    $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-中階</h4>');
  })  

  $('.advancedCourse').click(function(){ 
    $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
    // 自己以外的card 移除 chooseCourse樣式。
    $(this).parent().siblings().find('.card').removeClass('chooseCourse').find('i').removeClass("opacity-1");
    $('.finalChoose').slideUp().slideDown();
    $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-高階</h4>');
  })  

//首次體驗 下滑出"選擇課程階級"的效果
$('.juniorLevel').click(function(){
  $('.courseList').slideToggle();
})

//點填寫資料、完成預約等分頁，"選擇課程階級"會隱藏
$('.projectBtn').click(function(){
  $('.reserveRemind').slideDown();
})

$('.fillDataBtn').click(function(){
  $('.reserveRemind').slideUp();
  $('.courseList').slideUp();
})

$('.reserveBtn').click(function(){
  $('.reserveRemind').slideUp();
  $('.courseList').slideUp();
})




//loader 頁面載完就移出
$(window).on("load", function() {
  $(".loader").remove();
  //頁面載完先把"選擇課程階級" 藏起來
  $(".courseList").hide();
});


//swiper-course
var swiper = new Swiper(".courseSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  breakpoints: {
  992:{
    slidesPerView: 1.5,
    slidesPerColumn: 1,
  },
}
});

//swiper-comments
var swiper = new Swiper('.commentSwiper', {
  slidesPerView: 1,
  slidesPerColumn: 3,
  slidesPerColumnFill: "row",
  spaceBetween: 30,
  breakpoints: {
    768:{
      slidesPerView: 2.2,
      slidesPerColumn: 2,
    },
    992:{
      slidesPerView: 3,
      slidesPerColumn: 2,
    },
  },
  //Navigation
  navigation: {
    prevEl: ".swiper-prev",
    nextEl: ".swiper-next",
  },

});

//swiper-level
var swiper = new Swiper('.levelSwiper', {
  slidesPerView: 1,
  slidesPerColumnFill: "row",
  spaceBetween: 30,
  breakpoints: {
    768:{
      slidesPerView: 1.8,
    },
    992:{
      slidesPerView: 2,
    },
    1200:{
      slidesPerView: 3,
    },
  },

});


//swiper-recommend
var swiper = new Swiper('.recommendSwiper', {
  slidesPerView: 1.5,
  slidesPerColumnFill: "row",
  spaceBetween: 30,
  breakpoints: {
    768:{
      slidesPerView: 3,
    },
    992:{
      slidesPerView: 4.5,
    },
  },
});


// datepicker
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
 buttonClass: 'btn text-tertiary',
 nextArrow: '>',
 prevArrow: '<'
}); 

});






