roshreviewServices.factory('Headers', ['$cookieStore', function($cookieStore) {
  return {
    get: function() {
      return {
        'X-CLIENT-EMAIL': $cookieStore.get("email"),
        'X-AUTHORIZATION-TOKEN': $cookieStore.get("authorization_token")
      }
    }
  };
}]);
