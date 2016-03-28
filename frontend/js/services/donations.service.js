angular.module('lendingApp')
  .service('newDonationService', ['$http', newDonationService]);
  // .service('currentUserService', [currentUserService]);

function newDonationService ($http) {
  return function (donationDetails, nextFunc) {
    return $http.post('//localhost:3000/donation/new', donationDetails)
    .then(function(authedUserData){
      nextFunc(authedUserData);
    })
    .catch(function(err){
      console.log(err);
    });
  };
}