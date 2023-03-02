const baseUrl = "https://gorest.co.in/public/v2/users";

export const getUsers = async () => {
  try {
    return await fetch(`${baseUrl}`)
      .then((res) => res.json())
  } catch (e) {
    console.log(e);
  }
};

export const getUserById = async (id) => {
  try {
    return await fetch(`${baseUrl}/${id}`)
      .then((res) => res.json())
  } catch (e) {
    console.log(e);
  }
};