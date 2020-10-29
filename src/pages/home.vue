<template>
    

    <div class="wrap">
       <div class="content">
           <!-- 搜索 -->
           <van-icon name="search"  color="#1a1a1a" size=".38rem"/>
           <van-tabs  v-model="active" title-active-color="#14151a" title-inactive-color="#807f90" line-height='0'>
               <van-tab title="关注" style="font-size:34px;">
                   <h1>111</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
               </van-tab>
               <van-tab title="推荐">
                   <h1>22</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
               </van-tab>
               <van-tab title="Live">
                  <h1>333</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
                   <h1>有毒有毒</h1>
               </van-tab>
           </van-tabs>
           <!-- 相机 -->
            <van-icon name="photograph" color="#1a1a1a" size=".38rem"/>
       </div>
         
         <!-- 1.2使用组件 -->
        <TapBar></TapBar>
    </div>
</template>
<script>
    // 1引入组件
    import TapBar from '@/components/tapBar'
    // 1.1注入
    export default {
         components: {
            TapBar
        },
         data() {
            return {
            active: 1,
            };
        },
        methods: {
            
        }
    }
</script>
<style lang="scss" scoped>
    .wrap {
        padding-bottom: 1rem;
        font-size: .28rem;
    // 首页头部
       .content {
           width: 100%;

            //搜索框
           .van-icon-search {
               font-weight: 600;
               position: fixed;
               top: .2rem;
               left: 0.4rem;
               z-index: 1;
           }
           .van-icon-photograph{
               position: fixed;
               top: .2rem;
               right: .4rem;
               z-index: 1;
           }
        //tab顶部点击切换
           /deep/ .van-tabs--line .van-tabs__wrap {
                width: 100%;
                position: fixed;
                top: 0;
                padding: 0 2rem;
                background-color: #fff;
            }
             /deep/ .van-tab {
                font-size: .32rem !important;
            }
            >>>.van-tabs__content {
                padding-top: .88rem;
                background-color: #F5F5F9;
            }
       }
    }
   
    
</style>
