$(document).ready(function () {
    svg4everybody({});

    

    pickmeup('#dates', {
        prev: '⟵',
        next: '⟶',
        min: new Date(),
        mode: 'multiple',
        range: true,
        select_year: false,
        default_date: false,
        class_name: 'calendar',
        format: 'd:m:y',
        separator: '-',
        calendars: 2,
        locale:'ru',
        locales: {
            ru: {
                days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                daysShort: ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'],
                daysMin: ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'],
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
            }
            
        }
    });

    
      




    function check() {
        let all = $('.hotel__check-all');
        let listAll = $('.hotel__list_all');
        let listSale = $('.hotel__list_sale');
        let sale = $('.hotel__check-sale');
        let checkBox = $('.tgl-light');
       
        $(checkBox).change(function(){
            if($(this).is(':checked')) {
                all.removeClass('checked__active');
                sale.addClass('checked__active');
                listAll.hide();
                listSale.show('easing');
                
    
            } else {
                all.addClass('checked__active');
                sale.removeClass('checked__active');
                listAll.show();
                listSale.hide();
                
            }
        });
       
    }

    function inputVal() {
        $('.hotel__item').on('click', function(){
            let valItem = $(this).text();
            let input = $('#otel');
            input.val(valItem);
            
        });
    }

    function listHotel() {
        $('#otel').on('focus',function(){ 
            $('.travel__hotel').show();
        })
        $('.hotel__item').on('click',function(){
            $(this).closest('.travel__hotel').hide();
        });

    }

    function room() {
        $('#room').on('focus',function(){ 
            $('.travel__guests').show();
        })
        $('.guests__item').on('click',function(){
            $(this).closest('.travel__guests').hide();
        });
    }



    check();
    inputVal();
    listHotel();
    room();



});