
juke.config(function($stateProvider){

	$stateProvider.state('Albums',{
		url:'/albums' ,
		templateUrl: '/views/albums.html',
		controller: 'AlbumsCtrl'
	});
});
