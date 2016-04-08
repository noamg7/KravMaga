var app = angular.module("KravMaga",[]);
app.controller('controller', function($scope){
  $scope.kravs = [
    {
      video:"d1Lz4NCkD0U",
      info: {
        Description: 'IDF soldiers soldiers training',
      },
      img: "http://www.solveisraelsproblems.com/wp-content/uploads/2012/03/Krav-Maga-620x310.jpg",
    },
    {
      video:"C3xayIEKGf0",
      info:{
        Description:"Krav Maga sample techniques",
      },
      img:"https://i.ytimg.com/vi/6Da8zhAWYzE/maxresdefault.jpg",
    },
    {
      video:"8-HUxeIxFsQ",
      info:{
        Description:"Defense against a Gun",
      },
      img:"http://karatefit.com/files/2014/11/Pic6.jpg",
    },
    {
      video:"UFnmq5PPScA",
      info:{
        Description:"The Bourne Identity fighting style",
      },
      img:"http://dvdmedia.ign.com/dvd/image/bourne_06.jpg",
    },
  ];
});
