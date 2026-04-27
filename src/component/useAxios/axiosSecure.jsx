import axios from "axios";
import useAuth from "../../Hook/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "https://smart-deals-api-server-sandy-rho.vercel.app",
});

const axiosSecure = () => {
  const { user, signOutInfo } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const responseInterceptor = instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          signOutInfo().then(() => {
            navigate("/register");
          });
        }
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
      instance.interceptors.response.eject(responseInterceptor);
    };
  }, [user, signOutInfo, navigate]);
  return instance;
};

export default axiosSecure;
