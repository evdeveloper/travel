$(document).ready(function () {
    svg4everybody({});

    $( "#dates" ).datepicker({
        numberOfMonths: 2
        
      });
      $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);




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