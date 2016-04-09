var app = angular.module("KravMaga",[]);
app.controller('controller', function($scope){
  $scope.kravs = [
    {
      video:"d1Lz4NCkD0U",
      info: {
        Description: 'IDF soldiers soldiers training',
      },
      img: "http://www.solveisraelsproblems.com/wp-content/uploads/2012/03/Krav-Maga-620x310.jpg",
      background:"http://www.walldevil.com/wallpapers/a45/anime-samurai-japanese-wallpaper-pictures-bleach-wallpapers.jpg",
    },
    {
      video:"C3xayIEKGf0",
      info:{
        Description:"Krav Maga sample techniques",
      },
      img:"https://i.ytimg.com/vi/6Da8zhAWYzE/maxresdefault.jpg",
      background:"http://sf.co.ua/13/05/wallpaper-2792981.jpg",
    },
    {
      video:"8-HUxeIxFsQ",
      info:{
        Description:"Defense against a Gun",
      },
      img:"http://karatefit.com/files/2014/11/Pic6.jpg",
      background:"http://i.fonts2u.com/ka/karate-chop_4.png",
    },
    {
      video:"UFnmq5PPScA",
      info:{
        Description:"The Bourne Identity fighting style",
      },
      img:"http://dvdmedia.ign.com/dvd/image/bourne_06.jpg",
      background: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSqIQeX0kuiYWTUfI63r-RCHrtKP3thkSb3ySwZYGaQ2lS4MuKhBQ",
    },
  ];
});
