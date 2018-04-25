import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

/*按需引入element-ui*/
/*
import { Aside, Header, Main, Container } from 'element-ui';

console.log("Aside.name", Aside.name);
Vue.component(Aside.name, Aside);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Container.name, Container);
*/

import ElementUI from 'element-ui';
import './style/elementUI/index.css';

Vue.use(ElementUI);
Vue.use(Vant);
Vue.use(VueRouter);

const Foo = { template: '<div>foo </div>' }
const Bar = { template: '<div>bar</div>' }
const MoreBar = { template: '<div><router-view ></router-view></div>' }



// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', components: [Foo, Bar] },
    { path: '/bar', component: Bar },
    {
        path: '/morebar',
        component: { template: "<div>more bar view <router-view name='a' ></router-view> <router-view name='b' ></router-view> </div>" },

        children: [{
            path: "/morebar",
            components: {
                a: { template: "<div>test post</div>" },
                b: { template: "<div>i am the two</div>" }
            }
        }]
    }
]


const router = new VueRouter({
    routes
})

new Vue({
    router: router,
    el: '#App',
    render: h => h(App)
}).$mount('#App');