export const saveUser = (user) => {
  const createUser = {
    email: user.email,
  };
  fetch(`http://localhost:5000/users/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(createUser),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
