const expect = chai.expect;
import Vue from 'vue'
import Tab from "../Tab";
import TabHead from "../Tab-head";
import TabBody from "../Tab-body";
import TabItem from "../Tab-item";
import TabPane from "../Tab-pane";

Vue.component('g-tab', Tab)
Vue.component('g-tab-head', TabHead)
Vue.component('g-tab-body', TabBody)
Vue.component('g-tab-item', TabItem)
Vue.component('g-tab-pane', TabPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tab).to.exist()
    })

    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div as HTMLDivElement)
        div.innerHTML = `
      <g-tabs selected="finance">
        <g-tabs-head>
          <g-tabs-item name="woman"> 美女 </g-tabs-item>
          <g-tabs-item name="finance"> 财经 </g-tabs-item>
          <g-tabs-item name="sports"> 体育 </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-pane name="woman"> 美女相关资讯 </g-tabs-pane>
          <g-tabs-pane name="finance"> 财经相关资讯 </g-tabs-pane>
          <g-tabs-pane name="sports"> 体育相关资讯 </g-tabs-pane>
        </g-tabs-body>
      </g-tabs>
    `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
}