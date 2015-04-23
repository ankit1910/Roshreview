roshreviewServices.factory('Cookie', ['$cookieStore', function($cookieStore) {
  return {
    setData: function(data) {
      $cookieStore.put('loggedIn', true);
      $cookieStore.put('email', data.email);
      $cookieStore.put('authorization_token', data.authorization_token);
      $cookieStore.put('id', data.id);
      $cookieStore.put('name', data.fullname);
    },
    destroyData: function(data) {
      $cookieStore.remove('loggedIn');
      $cookieStore.remove('email');
      $cookieStore.remove('authorization_token');
      $cookieStore.remove('id');
      $cookieStore.remove('name');
    }
  };
}]);
