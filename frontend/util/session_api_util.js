export const signup = (userParams) => (
  $.ajax ({
    url: '/api/users',
    method: 'POST',
    data: {user: userParams},
    dataType: 'json'
  })
);

export const login = (userParams) => (
  $.ajax ({
    url: '/api/session',
    method: 'POST',
    data: {user: userParams},
    dataType: 'json'
  })
);

export const logout = () => (
  $.ajax ({
    url: '/api/session',
    method: 'DELETE',
  })
);
