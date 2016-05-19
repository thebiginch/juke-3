juke.config(function($stateProvider) {

    // all albums
    $stateProvider.state('Albums', {

        resolve: {
            albums: function(AlbumFactory) {
                return AlbumFactory.fetchAll();
            }
        },
        url: '/albums',
        templateUrl: '/views/albums.html',
        controller: 'AlbumsCtrl'
    });

    // single album
    $stateProvider.state('Album', {
        
        resolve: {
            album: function(AlbumFactory, $stateParams) {
                return AlbumFactory.fetchById($stateParams.id);
            }
        },

        url: '/albums/:id',
        templateUrl: '/views/album.html',
        controller: 'AlbumCtrl'
    });

    // all artist
    $stateProvider.state('Artists', {
        resolve: {
            artists: function(ArtistFactory) {
                return ArtistFactory.fetchAll();
            }
        },

        url: '/artists',
        templateUrl: '/views/artists.html',
        controller: 'ArtistsCtrl'
    });

    // single artist
    $stateProvider.state('Artist', {


            resolve: {
                artist: function(ArtistFactory, $stateParams) {
                    return ArtistFactory.fetchById($stateParams.id)
                }
            },
            url: '/artists/:id',
            templateUrl: '/views/artist.html',
            controller: 'ArtistCtrl'
        })
        .state('Artist.albums', {
            url: '/albums',
            templateUrl: '/views/artist-albums.html',
            controller: 'ArtistCtrl'
        })
        .state('Artist.songs', {
            url: '/songs',
            templateUrl: '/views/artist-songs.html',
            controller: 'ArtistCtrl'
        });

});
