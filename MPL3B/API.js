import { useState, useEffect } from "react";

const API = "http://192.168.0.6:4000";


// User Access to API


export const searchUser = (username) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/user/${username}`, {
                method: "GET",
                headers: { "Accept": "application/json", "Content-Type": "application/json" }
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

export const deleteUser = async (id) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/user/delete/${id}`,{
                method: "GET",
                headers: {"Accept":"application/json","Content-Type":"application/json"}
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

export const createUser = async (user) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/user/create`,{
                method: "POST",
                headers: {"Accept":"application/json","Content-Type":"application/json"},
                body: JSON.stringify(user)
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

export const updateUser = async (id,data) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/user/update/${id}`,{
                method: "POST",
                headers: {"Accept":"application/json","Content-Type":"application/json"},
                body: JSON.stringify(data)
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

// Citas Access to API

export const getCitas = () => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/cita/`, {
                method: "GET",
                headers: { "Accept": "application/json", "Content-Type": "application/json" }
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

export const getCitasUsuario = (id) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/cita/user/${id}`, {
                method: "GET",
                headers: { "Accept": "application/json", "Content-Type": "application/json" }
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

export const createCita = async (cita) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/cita/create`,{
                method: "POST",
                headers: {"Accept":"application/json","Content-Type":"application/json"},
                body: JSON.stringify(cita)
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

export const updateCita = async (id,data) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/cita/update/${id}`,{
                method: "POST",
                headers: {"Accept":"application/json","Content-Type":"application/json"},
                body: JSON.stringify(data)
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};

export const deleteCita = async (id) => {
    const [res, setRes] = useState('');
    const response = async () => {
        try {
            const response = await fetch(`${API}/cita/delete/${id}`,{
                method: "GET",
                headers: {"Accept":"application/json","Content-Type":"application/json"}
            });
            const json = await response.json();
            setRes(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        response();
    }, []);
    return res;
};