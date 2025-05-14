const baseURL = "http://localhost:3000/member";  // آدرس API

const getAllUser = async () => {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) throw new Error("Failed to fetch users");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (userData) => {
  try {
    const response = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    if (!response.ok) throw new Error("Failed to create user");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const response = await fetch(`${baseURL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete user");
  } catch (error) {
    console.error(error);
  }
};

export { getAllUser, deleteUser, createUser };
