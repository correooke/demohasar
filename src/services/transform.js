
export const normalize = users => (
  users.reduce((acc, user) => ( { ...acc, [user.code]: user } ), {})
);

export const transform = results => results.map( user => (
    {
      code: user.login.uuid,
      title: `${user.name.title} ${user.name.first} ${user.name.last}`,
      details: {
        source: user.picture.medium,
        name: user.name.first,
        last: user.name.last,
        email: user.email,
      },
      extra: {
        ...user
      }          
    }
  ));
