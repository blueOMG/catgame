(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33e1af49"],{"4fba":function(t,e,o){"use strict";o("5f97")},"5f97":function(t,e,o){},"7a76":function(t,e,o){"use strict";o("d867")},d867:function(t,e,o){},df3b:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",{staticStyle:{padding:"0 20px","border-bottom":"1px solid #eee","margin-bottom":"20px"}},[o("div",{staticClass:"info1"},[o("p",{staticStyle:{"margin-right":"100px"}},[t._v("当前轮次: "+t._s(t.info.round))]),o("p",{staticStyle:{"margin-right":"100px"}},[t._v("总人数: "+t._s(t.info.total_user_count))]),o("p",{staticStyle:{"margin-right":"100px"}},[t._v("总投入: "+t._s(t.info.total_amount))]),o("p",[t._v(" 开始时间: "+t._s(t.info.start_time&&new Date(1e3*t.info.start_time).toLocaleString())+" ")])]),o("p",{staticClass:"info1"},[t._v("预计击杀房间: "+t._s(t.willkillroom.join("、")))]),o("div",{staticClass:"info1"},[o("p",{staticStyle:{"margin-right":"20px"}},[t._v("选择击杀房间:")]),o("el-select",{staticStyle:{"margin-right":"20px"},model:{value:t.killroom,callback:function(e){t.killroom=e},expression:"killroom"}},[o("el-option",{attrs:{label:"随机",value:0}}),t._l(t.roomlist,(function(t){return o("el-option",{key:t.value,attrs:{label:t.text,value:t.value}})}))],2),o("el-button",{attrs:{type:"primary"},on:{click:t.startkill}},[t._v("确定")])],1)]),o("p",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v("当前轮次数据")]),t.info.room_list.length?o("div",{staticClass:"info2"},t._l(t.info.room_list,(function(e,n){return o("div",{key:n,staticClass:"info2item"},[o("p",{staticClass:"infotitle"},[t._v(t._s(e.room_name))]),o("div",{},[o("p",[t._v("总投入: "+t._s(e.amount)+" BIXO")]),o("p",[t._v("人数: "+t._s(e.user_count)+" 人")])])])})),0):o("div",{staticStyle:{width:"100%",height:"200px","text-align":"center","line-height":"200px"}},[t._v(" 暂无房间数据 ")]),o("p",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v("过往轮次数据")]),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.info.history_rounds,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:"轮次",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),o("el-table-column",{attrs:{label:"起止时间",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(new Date(1e3*e.row.start_time).toLocaleString())+" - "+t._s(new Date(1e3*e.row.end_time).toLocaleString())+" ")]}}])}),o("el-table-column",{attrs:{label:"参与人数",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("p",[t._v(t._s(e.row.total_user_count))])]}}])}),o("el-table-column",{attrs:{label:"投入数量",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.total_amount)+" ")]}}])}),o("el-table-column",{attrs:{label:"被击杀房间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.faile_room)+" ")]}}])}),o("el-table-column",{attrs:{label:"被击杀房间金额",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.faile_room_amount)+" ")]}}])}),o("el-table-column",{attrs:{label:"基金会抽取",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.foundation_amount)+" ")]}}])}),o("el-table-column",{attrs:{label:"矿池抽取",width:"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.pool_amount)+" ")]}}])}),o("el-table-column",{attrs:{label:"销毁抽取",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.burn_amount)+" ")]}}])}),o("el-table-column",{attrs:{label:"实际瓜分",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.share_amount)+" ")]}}])}),o("el-table-column",{attrs:{label:"幸存",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.total_user_count-e.row.faile_room_user_count)+" ")]}}])}),o("el-table-column",{attrs:{label:"被击杀",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.faile_room_user_count)+" ")]}}])}),o("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text"},on:{click:function(o){return t.godetail(e.row)}}},[t._v("详情")])]}}])})],1),o("el-dialog",{attrs:{title:t.gameTitle,"close-on-click-modal":!1,visible:t.showgame,width:"80%"},on:{"update:visible":function(e){t.showgame=e}}},[t.showgame?o("detail",{attrs:{itemdata:t.itemData}}):t._e()],1)],1)},a=[],i=(o("d81d"),o("b0c0"),o("c24f")),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"detailtop"},[o("div",{staticClass:"top1"},[o("div",{staticClass:"top1item"},[o("p",[t._v("轮次："+t._s(t.info.id))]),o("p",[t._v("被击杀房间金额："+t._s(t.info.faile_room_amount)+" BIXO")]),o("p",[t._v("总人数："+t._s(t.info.total_user_count))])]),o("div",{staticClass:"top1item"},[o("p",[t._v("被击杀房间："+t._s(t.info.faile_room))]),o("p",[t._v("幸存者瓜分金额："+t._s(t.info.share_amount)+" BIXO")]),o("p",[t._v("总投入："+t._s(t.info.total_amount)+" BIXO")])]),o("div",{staticClass:"top1item"},[o("p",[t._v("结束时间："+t._s(new Date(1e3*t.info.end_time).toLocaleString()))]),o("p",[t._v("基金会金额："+t._s(t.info.foundation_amount)+" BIXO")]),o("p",[t._v(" 幸存人数："+t._s(t.info.total_user_count-t.info.faile_room_user_count)+" ")])]),o("div",{staticClass:"top1item"},[o("p",[t._v(" 开始时间："+t._s(new Date(1e3*t.info.start_time).toLocaleString())+" ")]),o("p",[t._v("矿池金额："+t._s(t.info.pool_amount)+" BIXO")]),o("p",[t._v("被击杀人数："+t._s(t.info.faile_room_user_count))])]),o("div",{staticClass:"top1item"},[o("p",{staticStyle:{opacity:"0"}},[t._v("x")]),o("p",[t._v("销毁金额："+t._s(t.info.burn_amount)+" BIXO")]),o("p")])]),o("div",{staticClass:"info2"},t._l(t.list,(function(e,n){return o("div",{key:n,staticClass:"info2item"},[o("p",{staticClass:"infotitle"},[t._v(t._s(e.room_name))]),o("div",{},[o("p",[t._v("总投入: "+t._s(e.amount)+" BIXO")]),o("p",[t._v("人数: "+t._s(e.user_count)+" 人")])])])})),0)]),o("p",{staticStyle:{"font-size":"20px","font-weight":"bold"}},[t._v("玩家数据")]),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:"UUID",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.uid)+" ")]}}])}),o("el-table-column",{attrs:{label:"钱包地址",width:"260",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.address)+" ")]}}])}),o("el-table-column",{attrs:{label:"所在房间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(e.row.room_name))])]}}])}),o("el-table-column",{attrs:{label:"结局",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.result_str)+" ")]}}])}),o("el-table-column",{attrs:{label:"投入",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.cost_amount)+" ")]}}])}),o("el-table-column",{attrs:{label:"获得",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.receive_amount)+" ")]}}])})],1)],1)},s=[],r={props:["itemdata"],data:function(){return{list:[],listLoading:!0,tableData:[],showflow:!1,info:{}}},mounted:function(){this.info=this.itemdata,this.loadInvitationList()},methods:{loadInvitationList:function(){var t=this;console.log(this.itemdata),Object(i["f"])({round:this.itemdata.id}).then((function(e){console.log(e),e.data&&(t.list=e.data.room_list,t.tableData=e.data.plays),t.listLoading=!1}))},changeUserstatus:function(){}}},u=r,c=(o("7a76"),o("2877")),_=Object(c["a"])(u,l,s,!1,null,null,null),d=_.exports,f={components:{detail:d},data:function(){return{willkillroom:[],info:{room_list:[],history_rounds:[]},roomlist:[],killroom:0,listLoading:!0,showgame:!1,gameTitle:"",itemData:{},interval:null}},created:function(){this.getRoomList()},destroyed:function(){clearInterval(this.interval)},methods:{getRoomList:function(){var t=this;Object(i["h"])().then((function(e){e.data&&(t.roomlist=e.data.map((function(t){return{value:t.id,text:t.name}})),t.getInfo(),t.interval=setInterval((function(){t.getInfo()}),5e3))}))},getInfo:function(){var t=this;Object(i["e"])({round:0,room:this.killroom}).then((function(e){t.listLoading=!1,e.data&&(t.info.round!=e.data.round&&(t.killroom=e.data.round_conf_room),t.info=e.data,t.willkillroom=e.data.room_list.map((function(t){return t.room_name})))}))},godetail:function(t){this.itemData=t,this.showgame=!0,this.gameTitle="第"+t.id+"轮游戏"},startkill:function(){var t=this;this.info.round&&this.$confirm("是否确认开始击杀?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["c"])({room:t.killroom,round:t.info.round+1}).then((function(e){"success"==e.message?t.$message({type:"success",message:"操作成功!"}):t.$message({type:"error",message:e.message})}))}))}}},m=f,p=(o("4fba"),Object(c["a"])(m,n,a,!1,null,null,null));e["default"]=p.exports}}]);