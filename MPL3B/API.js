const API = "http://localhost:4000/";

export const searchUser = async (username) => {
    const res = await fetch(`${API}/user/${username}`,{
        method: "GET",
        headers: {"Accept":"application/json","Content-Type":"application/json"}
    });
    return await res.json();
};

export const deleteUser = async (id) => {
    const res = await fetch(`${API}/user/delete${id}`,{
        method: "GET",
        headers: {"Accept":"application/json","Content-Type":"application/json"}
    });
    return await res.json();
};

export const createUser = async (user) => {
    const res = await fetch(`${API}/user/create`,{
        method: "POST",
        headers: {"Accept":"application/json","Content-Type":"application/json"},
        body: JSON.stringify(user)
    });
    return await res.json();
};

export const updateUser = async (id,data) => {
    const res = await fetch(`${API}/user/update/${id}`,{
        method: "POST",
        headers: {"Accept":"application/json","Content-Type":"application/json"},
        body: JSON.stringify(user)
    });
    return await res.json();
};