import axios from "axios";
import { BaseApi} from './constants'
export const fetchEmployments = async () => {
  const result = await axios.get(
    `${BaseApi}/db`
  );
  return result.data;
};
export const deleteEmployments = async id => {
  const result = await axios.delete(
    `${BaseApi}/employee/${id}`
  );
  return result.data;
};
export const updateEmployments = async (id, employee) => {
  const result = await axios.put(
    `${BaseApi}/employee/${id}`
    ,
    employee
  );
  return result.data;
};
export const addEmployment = async employee => {
  const result = await axios.post(
    `${BaseApi}/employee`,
    employee
  );
  return result.data;
};
