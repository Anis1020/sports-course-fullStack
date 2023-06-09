export const saveUser = (user) => {
  const saveUser = {
    email: user.email,
    name: user.displayName,
  };
  fetch("https://assignment-12-sever-side-anis1020.vercel.app/users/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(saveUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
//https://assignment-12-sever-side-anis1020.vercel.app/addAClass
