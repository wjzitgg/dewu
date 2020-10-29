<template>
   <div class="tap-bar">
        <router-link to="/" tag="div" class="tap-bar-item">
            <span class="iconfont iconN"></span>
            <span class="title">首页</span>
        </router-link>
        <router-link to="/find" tag="div" class="tap-bar-item">
            <span class="iconfont iconfaxian-copy"></span>
            <span class="title">发现</span>
        </router-link>
        <router-link to="/goodStuff" tag="div" class="tap-bar-item">
            <span class="iconfont iconhaohuo"></span>
            <span class="title">好货</span>
        </router-link>
        <router-link to="/my" tag="div" class="tap-bar-item">
            <span class="iconfont iconwo1"></span>
            <span class="title">我</span>
        </router-link>
    </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.tap-bar {
        width: 100%;
        height: 1rem;
        background: #fff;
        box-shadow: 0 -0.01rem 0.2rem 0 #999;
        display: flex;
        position: fixed;
        bottom: 0;
    }

    .tap-bar .tap-bar-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        flex-direction: column;
    }

    .tap-bar .tap-bar-item span.iconfont {
        font-size: .36rem;
        margin-bottom: .1rem;
    }

    .tap-bar .tap-bar-item span.title {
        font-size: .26rem;
    }

    .tap-bar .router-link-exact-active {
        color: #4e4e4d;
    }
</style>
