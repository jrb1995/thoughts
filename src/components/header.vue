<template>
  <div :class="['header', showBottomBorder && 'with-bottom-border']">
    <Nav />

    <MobileNav />
  </div>
</template>

<script>
import Nav from './nav'
import MobileNav from './mobile-nav'

export default {
  components: {
    Nav,
    MobileNav
  },
  data () {
    return {
      showBottomBorder: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (event) {
      const scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (scrollTop) {
        this.showBottomBorder = true
      } else {
        this.showBottomBorder = false
      }
    }
  }
}
</script>

<style lang="less">
.header {
  position: fixed;
  width: 100%;
  height: 4rem;
  background: #fff;
  z-index: 100;
  top: 0;
  margin: 0 auto;
  display: block;

  .nav {
    max-width: 1352px;
    height: 100%;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .logo-wrapper {
    display: flex;
    align-items: center;

    .logo-anchor {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
    }

    .logo {
      height: 23px;
      width: 132px;
      margin-top: 5px;
      margin-left: 16px;
    }
  }

  .groups {
    display: flex;
    align-items: center;

    .nav-item {
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      padding: 0 8px;
      margin: 0 8px;

      a {
        display: flex;
        height: 100%;
        align-items: center;
      }

      .nav-icon {
        width: 12px;
        height: 12px;
        margin-left: 8px;
        fill: #bfbfbf;
        transform: rotate(0deg);
        transition: all .3s;
      }
    }

    .nav-item:hover::after {
      content: " ";
      width: 100%;
      position: absolute;
      bottom: 2px;
      height: 2px;
      left: 0;
      border-radius: 1px;
      background: linear-gradient(108deg, #9ea4ff, #6b70b8);
    }

    .nav-item:hover .nav-title {
      color: #5c609e;
    }

    .nav-item:hover .nav-icon {
      fill: #5c609e;
      transform: rotate(180deg);
    }
  }

  .buttons {
    display: flex;
    align-items: center;

    .link-login {
      margin-right: 29px;
      font-size: 1rem;
      color: #383838;
    }

    .link-login:hover {
      color: #5c609e;
    }

    .link-free {
      margin-right: 16px;
      border-radius: 20px;
      box-shadow: 0 2px 8px 0 rgba(107, 112, 184, 0.15);
      border: 1px solid #6b70b8;
      text-align: center;
      background: #fff;
      color: #6b70b8;
      transition: box-shadow 0.3s ease-in-out;
      padding: 8px 20px;
    }

    .link-free:hover {
      box-shadow: 0 8px 16px 0 rgba(107, 112, 184, 0.3);
    }
  }

  .mobile-menu {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    display: none;
  }

  @media screen and (max-width: 1440px) {
    .nav {
      max-width: 1280px;
    }
  }

  @media screen and (max-width: 768px) {
    .logo-wrapper {
      width: 150px;

      .logo {
        margin-top: 8px;
      }
    }

    .groups,
    .buttons {
      display: none;
    }

    .mobile-menu {
      display: block;
    }
  }

  .mobile-nav {
    position: fixed;
    background: #fff;
    height: 0;
    max-height: calc(100% - 4rem);
    width: 100%;
    z-index: 1000;
    display: none;
    justify-content: space-between;
    flex-direction: column;
    transition: height 0.35s ease;
    overflow-x: hidden;
  }
}

.with-bottom-border {
  box-shadow: 0 1px 0 0 #e5e5e5;

  .buttons .link-free {
    padding: 8px 20px;
    border-radius: 20px;
    box-shadow: 0 2px 8px 0 rgba(107, 112, 184, 0.15);
    text-align: center;
    background: #fff;
    color: #6b70b8;
    transition: box-shadow 0.3s ease-in-out;
    color: #fff;
    background-image: linear-gradient(108deg, #6b70b8, #9ea4ff);
    border: 1px solid hsla(0, 0%, 100%, 0.75);
  }
}
</style>
