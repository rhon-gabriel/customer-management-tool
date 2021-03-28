import axios from "axios";

export async function getCustomer(id) {
  return await axios.get(`http://localhost:3001/customer/${id}`);
}
