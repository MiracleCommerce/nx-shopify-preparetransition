import 'prepare-transition';
$('#btn-test').bind('click', function(){
    $('.msg').prepareTransition().toggleClass('hidden');
});