import Vuex from 'vuex'
import Vue from 'vue'
import storage from "@/util/storage";
Vue.use(Vuex)

const actions = {

}
const mutations = {
    setToken(state,token){
        state.token = token;
        storage.set('token',token);
        console.log('保存成功');
    },
    delToken(state){
        state.token = "";
        storage.remove("token");
    },
    setUserInfo(state, userName) {
        state.userName = userName;
    },
    publicEvent(state,val){
        state.events.push(val)
    },
    dropAll(state) {
        state.email = state.email.filter(item => item.flag != true)
        console.log(state.email)
    }
}
const getters = {
    getToken(state){
        return state.token || storage.get("token") || "";
    }
}
const state = {
    token:"",
    userName:"",
    article:[
        {img_path:require("./../assets/nv.jpg"),time:'2023-04-26 11:16:50',heat:119,comment:18,title:"美女美女美女",
            label:"用一个精彩的开头吸引读者。你的第一句话应该能吸引读者的注意并促使他们继续阅读。如果章奠定正确的基调。提出问题。一个好的问题能够吸引读者去发现答案"
        },
        {img_path:require("./../assets/nv1.jpg"),time:'2023-04-26 11:16:50',heat:119,comment:18,title:"美女美女美女",
            label:"用一个精彩的开头吸引读者。你的第一句话应该能吸引读者的注意并促使他们继续阅读。"
        },
        {img_path:require("./../assets/nv2.png"),time:'2023-04-26 11:16:50',heat:119,comment:18,title:"美女美女美女",
            label:"用一个精彩的开头吸引读者。你的第一句话应该能吸引读者的注意并促使他们继续阅读。"
        },
        {img_path:require("./../assets/nv3.png"),time:'2023-04-26 11:16:50',heat:119,comment:18,title:"美女美女美女",
            label:"用一个精彩的开头吸引读者。你的第一句话应该能吸引读者的注意并促使他们继续阅读。基调"
        },
        {img_path:require("./../assets/nv4.png"),time:'2023-04-26 11:16:50',heat:119,comment:18,title:"美女美女美女",
            label:"用一个精彩的开头吸引读者。你的第一句话应该能吸引读者的注意并促使他们继续阅读。提出问题。一个好的问题能够吸引读者去发现答案"
        },
    ]
}
export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
})