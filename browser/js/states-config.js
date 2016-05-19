
juke.config(function($stateProvider){

	// all albums
	$stateProvider.state('Albums',{
		url:'/albums' ,
		templateUrl: '/views/albums.html',
		controller: 'AlbumsCtrl'
	});

	// single album
	$stateProvider.state('Album',{
		url:'/albums/:id',
		templateUrl: '/views/album.html',
		controller: 'AlbumCtrl'
	});

	// all artist
	$stateProvider.state('Artists',{
		url:'/artists' ,
		templateUrl: '/views/artists.html',
		controller: 'ArtistsCtrl'
	});

	// single artist
	$stateProvider.state('Artist',{
		url:'/artists/:id',
		templateUrl: '/views/artist.html',
		controller: 'ArtistCtrl'
	})
	.state('Artist.albums',{
		url:'/albums',
		templateUrl: '/views/artist-albums.html',
		controller: 'ArtistCtrl'
	})
	.state('Artist.songs',{
		url:'/songs',
		templateUrl: '/views/artist-songs.html',
		controller: 'ArtistCtrl'
	});

});
