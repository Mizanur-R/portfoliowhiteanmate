function selectId(name){
    return document.getElementById(name)
}

// mobil menu
const menuBtn = selectId('mobile')
const navArea = selectId('nav-area')
const icon = selectId('mobile-icon')

let isShow = false
menuBtn.addEventListener('click', function(){
    navArea.classList.toggle('menu-show')

    if(isShow){
        icon.innerHTML = '<i class="icofont-navigation-menu"></i>'
        isShow = false
    }else{
        icon.innerHTML = '<i class="icofont-close"></i>'
        isShow = true
    }
})

// share button 
const shareBtn = selectId('share')
const item1 = selectId('items1')
const item2 = selectId('items2')
const item3 = selectId('items3')
const item4 = selectId('items4')
const item5 = selectId('items5')
shareBtn.addEventListener('click', function(){
    item1.classList.toggle('active')
    item2.classList.toggle('active')
    item3.classList.toggle('active')
    item4.classList.toggle('active')
    item5.classList.toggle('active')
})

// animated modal 1
$("#demo01").animatedModal()
const modal_1 = selectId('modal-01')
const close_btn_1 = selectId('close_btn_1')
close_btn_1.addEventListener('click', function(){
    modal_1.classList.add('modal-01-on')
    modal_1.classList.add('bounceOutDown')
    modal_1.classList.remove('modal-02-off')
    modal_1.classList.remove('zoomIn')

})

// modal 2
$('#demo02').animatedModal()
const modal_2 = selectId('modal-02')
const close_btn_2 = selectId('close_btn_2')
close_btn_2.addEventListener('click', function(){
    modal_2.classList.add('modal-02-on')
    modal_2.classList.add('bounceOutDown')
    modal_2.classList.remove('modal-02-off')
    modal_2.classList.remove('zoomIn')
})
// modal 3
$('#demo03').animatedModal()
const modal_3 = selectId('modal-03')
const close_btn_3 = selectId('close_btn_3')
close_btn_3.addEventListener('click', function(){
    modal_3.classList.add('modal-03-on')
    modal_3.classList.add('bounceOutDown')
    modal_3.classList.remove('modal-03-off')
    modal_3.classList.remove('zoomIn')
})
// modal 04
$('#demo04').animatedModal()
const modal_4 = selectId('modal-04')
const close_btn_4 = selectId('close_btn_4')
close_btn_4.addEventListener('click', function(){
    modal_4.classList.add('modal-04-on')
    modal_4.classList.add('bounceOutDown')
    modal_4.classList.remove('modal-04-off')
    modal_4.classList.remove('zoomIn')
})
// modal 05
$('#demo05').animatedModal()
const modal_5 = selectId('modal-05')
const close_btn_5 = selectId('close_btn_5')
close_btn_5.addEventListener('click', function(){
    modal_5.classList.add('modal-05-on')
    modal_5.classList.add('bounceOutDown')
    modal_5.classList.remove('modal-05-off')
    modal_5.classList.remove('zoomIn')
})
// owl carousel 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    autoplay: true,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
// counter up
$('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
// video box use venobox
    $('.venobox').venobox({
        spinner: 'cube-grid'
    }); 


// filter active button
$('.p-btn').click(function(){
    $('.p-btn').removeClass('active');
    $(this).addClass('active');
})

// mixitup plugin
var mixer = mixitup('.grid');
// form validation
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  // aos plugin
  AOS.init({
    easing: 'ease',
    duration: 1000,
    once: true
  });