var app = angular.module("KravMaga",[]);
app.controller('controller', function($scope){
  $scope.kravs = [
    {
      video:"d1Lz4NCkD0U",
      info: {
        Description: 'IDF soldiers soldiers training',
      },
      img: "http://www.solveisraelsproblems.com/wp-content/uploads/2012/03/Krav-Maga-620x310.jpg",
      background:"http://www.gkrav.com/images/Krav_Maga_Glasgow.png",
    },
    {
      video:"C3xayIEKGf0",
      info:{
        Description:"Krav Maga sample techniques",
      },
      img:"https://i.ytimg.com/vi/6Da8zhAWYzE/maxresdefault.jpg",
      background:"http://movementmartialarts.com/home/wp-content/uploads/2014/01/orlando-martial-arts-karate-kicks-300x106.jpg",
    },
    {
      video:"8-HUxeIxFsQ",
      info:{
        Description:"Defense against a Gun",
      },
      img:"http://karatefit.com/files/2014/11/Pic6.jpg",
      background:"https://s-media-cache-ak0.pinimg.com/236x/2d/2a/c7/2d2ac79cc0eb6d052212cbc2ddeb74ae.jpg",
    },
    {
      video:"UFnmq5PPScA",
      info:{
        Description:"The Bourne Identity fighting style",
      },
      img:"http://dvdmedia.ign.com/dvd/image/bourne_06.jpg",
      background: "http://www.counter-racism.com/analysis/moviereviews/bourne/header.jpg",
    },
  ];
});
