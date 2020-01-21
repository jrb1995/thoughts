<template>
  <div class="nav">
    <div class="logo-wrapper">
      <router-link to="/" class="logo-anchor">
        <img
          class="logo"
          src="https://g.alicdn.com/thoughts/thoughts-site/image/logo-type.2b20fd05.svg"
          alt="Thoughts"
        />
      </router-link>
    </div>

    <ul class="groups">
      <li class="nav-item">
        <a href="javascript:;">
          <span class="nav-title">产品</span>
          <svg viewBox="0 0 16 16" class="nav-icon">
            <path d="M8.011 10.514l5.9-5.834a.6.6 0 1 1 .843.853l-6.32 6.25a.6.6 0 0 1-.842.001l-6.36-6.25a.6.6 0 1 1 .842-.856l5.937 5.836z"></path>
          </svg>
        </a>
      </li>
      <li class="nav-item">
        <router-link to="/case">
          <span class="nav-title">使用案例</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/case">
          <span class="nav-title">与 Teambition 联动</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/case">
          <span class="nav-title">下载</span>
        </router-link>
      </li>
    </ul>

    <div class="buttons">
      <a class="link link-login" href="javascript:;" target="_top">登录</a>
      <a class="link link-free" href="javascript:;" target="_blank">免费使用</a>
    </div>

    <button class="mobile-menu">
      <svg viewBox="0 0 20 20">
        <path d="M15.8331,6.4248 L4.1661,6.4248 C3.8351,6.4248 3.5661,6.1558 3.5661,5.8248 C3.5661,5.4928 3.8351,5.2248 4.1661,5.2248 L15.8331,5.2248 C16.1651,5.2248 16.4331,5.4928 16.4331,5.8248 C16.4331,6.1558 16.1651,6.4248 15.8331,6.4248 Z M15.8331,10.5913 L4.1661,10.5913 C3.8351,10.5913 3.5661,10.3223 3.5661,9.9913 C3.5661,9.6593 3.8351,9.3913 4.1661,9.3913 L15.8331,9.3913 C16.1651,9.3913 16.4331,9.6593 16.4331,9.9913 C16.4331,10.3223 16.1651,10.5913 15.8331,10.5913 Z M15.8331,14.7754 L4.1661,14.7754 C3.8351,14.7754 3.5661,14.5064 3.5661,14.1754 C3.5661,13.8444 3.8351,13.5764 4.1661,13.5764 L15.8331,13.5764 C16.1651,13.5764 16.4331,13.8444 16.4331,14.1754 C16.4331,14.5064 16.1651,14.7754 15.8331,14.7754 Z" fill="#6B70B8" fill-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">

</style>
