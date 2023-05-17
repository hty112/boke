import axios from "axios";
import store from "@/store";
import router from "@/router";
import AES from "@/util/crypto"

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.common['Authorization'] = '';

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = store.getters.getToken;
        return config
    },
    error => {
        console.log("在request拦截器显示错误：", error.response)
        return Promise.reject(error);
    }
)

axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            try {
                response.data = JSON.parse(AES.Decrypt(response.data))
            }catch (e){

            }
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        // if (error.response.status) {
        //     console.log(error.response.status)
        //     switch (error.response.status) {
        //         // 401: 未登录
        //         // 未登录则跳转登录页面，并携带当前页面的路径
        //         // 在登录成功后返回当前页面，这一步需要在登录页操作。
        //         case 401:
        //             store.commit("delToken");
        //
        //             router.replace({ //跳转到登录页面
        //                 path: '/',
        //                 // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //                 query: { redirect: router.currentRoute.fullPath }
        //             });
        //     }
        //     return Promise.reject(error.response);
        // }
    }
);
export default axios