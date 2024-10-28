$(document).ready(function () {
    var _token = $('input[name="_token"]').val();

    function more_by_dossier_data(id = "", cat, _token) {
        $.ajax({
            type: 'POST',
            url: '/loadmore/posts-by-dossier-data',
            data: { id: id, cat: cat, _token: _token },
            success: function (data) {
                $('#load_more').remove();
                $('#dossier_posts_list').append(data);
            }
        })
    }

    function more_categorie_data(id = "", cat, _token) {
        $.ajax({
            type: 'POST',
            url: '/loadmore/categorie-data',
            data: { id: id, cat: cat, _token: _token },
            success: function (data) {
                $('#load_more').remove();
                $('#rubrique_posts_list').append(data);
            }
        })
    }

    function more_search_data(id = "", keywords, _token) {
        $.ajax({
            type: 'POST',
            url: '/loadmore/search-data',
            data: { id: id, keywords: keywords, _token: _token },
            success: function (data) {
                $('#load_more').remove();
                $('#search_posts_list').append(data);
            }
        })
    }

    function more_comment_data(id = "", post, _token) {
        $.ajax({
            type: 'POST',
            url: '/loadmore/comment-data',
            data: { id: id, post: post, _token: _token },
            success: function (data) {
                $('#load_more').remove();
                $('#comments_list').append(data);
            }
        })
    }

    $(document).on('click', '#load_more_by_dossier_button', function () {
        var id = $(this).data('id');
        var cat = $(this).data('cat');
        $('#load_more_by_dossier_button').html('<b>chargement...</b>');
        more_by_dossier_data(id, cat, _token);
    });


    $(document).on('click', '#load_more_categorie_button', function () {
        var id = $(this).data('id');
        var cat = $(this).data('cat');
        $('#load_more_categorie_button').html('<b>chargement...</b>');
        more_categorie_data(id, cat, _token);
    });

    $(document).on('click', '#load_more_search_button', function () {
        var id = $(this).data('id');
        var keywords = $(this).data('keywords');
        $('#load_more_search_button').html('<b>chargement...</b>');
        more_search_data(id, keywords, _token);
    });

    $(document).on('click', '#load_more_comment_button', function () {
        var id = $(this).data('id');
        var post = $(this).data('post');
        $('#load_more_comment_button').html('<b>chargement...</b>');
        more_comment_data(id, post, _token);
    });
});
