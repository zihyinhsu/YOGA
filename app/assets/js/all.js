
$(document).ready(function () {

  // 立即預約-選擇課程
$('.levelSwiper a').click(function(){ 
  $(this).toggleClass("chooseCourse").find('i').toggleClass("opacity-1");
  // 自己以外的card 移除 chooseCourse樣式。
  $(this).parent().siblings().find('.card').removeClass('chooseCourse').find('i').removeClass("opacity-1");
  $('.finalChoose').slideUp().slideDown();
}) 
$('.basicCourse').click(function(){ 
  $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-基礎</h4>');
})  
$('.intermediateCourse').click(function(){ 
  $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-中階</h4>');
})  
$('.advancedCourse').click(function(){ 
  $('.courseName').html('<h4 class="text-decoration-underline" style="text-underline-offset: 5px;">首次體驗課程-高階</h4>');
})  

//首次體驗 下滑出"選擇課程階級"的效果
$('.firstTimeBtn').click(function(){
  $('.courseList,.keepReserveBtn').slideToggle();
  //把其他兩個卡片藏起來
  $('.shortTimeExp,.longTimeExp').addClass('d-none d-lg-block');
  // 做出粗框效果
  $('.firstTimeExp').toggleClass('border-4');
})

//點填寫資料、完成預約等分頁，"選擇課程階級"會隱藏
$('.projectBtn').click(function(){
  $('.reserveRemind').slideDown();
})

$('.fillDataBtn,.reserveBtn').click(function(){
  $('.reserveRemind,.courseList').slideUp();
})



//loader 頁面載完就移出
$(window).on("load", function() {
  $(".loader").remove();
});

// <!-- swiper --> //
//courseSwiper
const courseSwiper = document.querySelector('.courseSwiper');
if (courseSwiper) {
const  swiper = new Swiper(".courseSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
      delay: 2000,
    },
    grid: {
      rows: 2,    
      fill: 'row',
    },
    breakpoints: {
    992:{
      // loop: true,
      slidesPerView: 1.5,
      grid: {
        rows: 1, 
      },
    },
    }
  });
}

//commentSwiper
const commentSwiper = document.querySelector('.commentSwiper');
if (commentSwiper) {
  const swiper = new Swiper(".commentSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grid: {
      rows: 3,    
      fill: 'row',
    },
    breakpoints: {
      768:{
        slidesPerView: 2.2,
        grid: {
          rows: 2, 
        },
      },
      992:{
        slidesPerView: 3,
        rows: 2, 
      },
    },
    navigation: {
      prevEl: ".swiper-prev",
      nextEl: ".swiper-next",
    },
  });
}

//levelSwiper
const levelSwiper = document.querySelector('.levelSwiper');
if (levelSwiper) {
const swiper = new Swiper(".levelSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  grid: {
    fill: 'row',
  },
  breakpoints: {
    768:{
      slidesPerView: 1.5,
      // loop: true,
    },
    992:{
      slidesPerView: 2,
    },
    1200:{
      slidesPerView: 3,
    },
  }
});
}

//recommendSwiper
const recommendSwiper = document.querySelector('.recommendSwiper');
if (recommendSwiper) {
const swiper = new Swiper(".recommendSwiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  grid: {
    fill: 'row',
  },
  breakpoints: {
    768:{
      slidesPerView: 3,
    },
    992:{
      slidesPerView: 4.5,
    },
  }
});
}

//teacherSwiper
const teacherSwiper = document.querySelector('.teacherSwiper');
if (teacherSwiper) {
const swiper = new Swiper(".teacherSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  grid: {
    fill: 'row',
  },
  breakpoints: {
    768:{
      slidesPerView: 2.2,
    },
    992:{
      slidesPerView: 3.2,
    },
  }
});
}

// datepicker 日期選擇器
const elem = document.querySelector('input[name="datepicker"]');
const datepicker = new Datepicker(elem, {
 buttonClass: 'btn text-tertiary',
 nextArrow: '>',
 prevArrow: '<'
}); 
});






