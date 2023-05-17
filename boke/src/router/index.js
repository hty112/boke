import VueRouter from 'vue-router'
import Vue from "vue";
import user from '@/pages/user'
import home from "@/pages/home";
import chat from '@/pages/chat'
import storage from "@/util/storage";
import store from "@/store";
import message from "@/pages/message";

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'/chat',
            component:chat,
            meta: {
                requireAuth: true,
            }
        },
        {
            path:'/user',
            component:user,
            meta: {
                requireAuth: false,
            }
        },
        {
            path:'/message',
            component:message,
            meta: {
                requireAuth: false,
            }
        }
    ]
})


// 设置路由守卫，在进页面之前，判断有token，才进入页面，否则返回登录页面

router.beforeEach((to, from, next) => {
    if (storage.get("token")) {
        store.commit("setToken", storage.get("token"));
    }
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next(); //有token,进行request请求，后台还会验证token
        } else {

            next({
                path: "/user"
            });
            alert("你尚未登陆")
        }
    } else {
        next(); //如果无需token
    }
});

const originalPush = VueRouter.prototype.push

const originalReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push(location){
    return originalPush.call(this , location).catch(err=>err)
}

VueRouter.prototype.replace = function replace(location){
    return originalReplace.call(this , location).catch(err=>err)
}

export default router