import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { SignUpRequestType } from './type';

const router = '/users';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const signUpRequest = async (data: SignUpRequestType) => {
  const res = await axios.post(`${BASE_URL}/${router}/signup`, data);
  return res.data;
};

export const useSignUp = () => {
  return useMutation({
    mutationFn: signUpRequest,
  });
};
