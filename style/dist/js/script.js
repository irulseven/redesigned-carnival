// event pada saat diklik
$('.page-scrolldo').on('click', function (e) {

    // ambil isi href
    var tujuan = $(this).attr('href');

    // tangkap element
    var ElementTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
        scrollTop: ElementTujuan.offset().top - 50
    }, 1250, "swing");

    e.preventDefault();

});