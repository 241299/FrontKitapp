$(function(){

    var $ulOrder=$('#ulOrder');

    function addOrder(order)
    {
        $ulOrder.append('<li><strong>ID</strong>: '+ order.id+'<br><strong>Name</strong>: '+ order.name+'<br><strong>Drink</strong>: '+order.drink+'<br></li>');
    }
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/kfc',
        dataType: 'jsonp',
        success: function(orders){

            $.each(orders, function(i, order){
                addOrder(order);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
});