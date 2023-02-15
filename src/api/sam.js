import api from "@/static/config.json";
import axios from "axios";

const TOKEN = localStorage.getItem("token");
const LIMIT = 10;
export const addPillar = async (data) => {
  const response = await axios.post(api.DEV_API_URL + "/sam/pillar", data, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  return response;
};

export const getPillars = async (currentPage) => {
  let params = {
    limit: LIMIT,
    page: currentPage
  };
  const response = await axios.get(api.DEV_API_URL + "/sam/pillar", {
    params: params,
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  return response;
};

export const updatePillar = async (id, data) => {
  const response = await axios.put(
    `${api.DEV_API_URL}/sam/pillar/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${TOKEN}` }
    }
  );
  return response;
};

export const deletePillar = async (id) => {
  const response = await axios.delete(`${api.DEV_API_URL}/sam/pillar/${id}`, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  return response;
};

export const getSubPillars = async (currentPage) => {
  let params = {
    limit: LIMIT,
    page: currentPage
  };
  const response = await axios.get(api.DEV_API_URL + "/sam/subpillar", {
    params: params,
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  return response;
};

export const addSubPillar = async (data) => {
  const response = await axios.post(api.DEV_API_URL + "/sam/subpillar", data, {
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  return response;
};

export const updateSubPillar = async (id, data) => {
  const response = await axios.put(
    `${api.DEV_API_URL}/sam/subpillar/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${TOKEN}` }
    }
  );
  return response;
};

export const deleteSubPillar = async (id) => {
  const response = await axios.delete(
    `${api.DEV_API_URL}/sam/subpillar/${id}`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` }
    }
  );
  return response;
};

export const getMenuHeading = async (currentPage) => {
  let params = {
    limit: LIMIT,
    page: currentPage
  };
  const response = await axios.get(api.DEV_API_URL + "/sam/menuheading", {
    params: params,
    headers: { Authorization: `Bearer ${TOKEN}` }
  });
  return response;
};

export const addMenuHeading = async (data) => {
  const response = await axios.post(
    api.DEV_API_URL + "/sam/menuheading",
    data,
    {
      headers: { Authorization: `Bearer ${TOKEN}` }
    }
  );
  return response;
};

export const updateMenuHeading = async (id, data) => {
  const response = await axios.put(
    `${api.DEV_API_URL}/sam/menuheading/${id}`,
    data,
    {
      headers: { Authorization: `Bearer ${TOKEN}` }
    }
  );
  return response;
};

export const deleteMenuHeading = async (id) => {
  const response = await axios.delete(
    `${api.DEV_API_URL}/sam/menuheading/${id}`,
    {
      headers: { Authorization: `Bearer ${TOKEN}` }
    }
  );
  return response;
};
