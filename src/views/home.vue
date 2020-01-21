<template>
  <div class="content">
    <section class="hero">
      <div class="desc">
        <header class="title">知识协作由此开启</header>
        <p
          class="text"
        >Thoughts 是一款企业知识管理应用，成员在这里沉淀和共享知识。通过可协作的结构化的文档，将知识积累和沉淀下来，并在团队中有效流动，企业的创造力由此提升。</p>
        <a class="button" href="javascript:;">免费使用</a>
      </div>
      <div class="img-wrapper">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/hero.90fc1670.png" />
        <button class="video-play-button">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAABACAYAAABVy1Q8AAAAAXNSR0IArs4c6QAAAyFJREFUaAXdm71SFEEUhRn1CUwl9w3wDfQRBN9AeACoAiPRCJZ4McBI0URDCgIKTfx5AH+qzJBMzTRQaj2nilvVO3t3ema2f24zVbe6p3t353x778yhh9m50Wi0h5ifuywbYM4Q3xD3EdeK57oAIhTjGLFQMtSVmvib2H8NqC3E9dpcEbt1IBF9D503gLqLqGSwhLaC4DOP0PeYX6uq6ovndSam2wBR6D/EELEDsN8csLpNK7m6Xl79VhAnyOjt+qSl/bZAovkGOk8BtYcw6V1dgQTsDjrMljnvansOCYjW8mKxinPrgzaZeqxvhlyd4l3byFh27woBJHBL6LwF1CIim3eFKDkBcluWH8swuXfFAiJcFu8KWXJuhtjP4l0xgQQwqXelABIw8a5lXDSirbtinkMCorXRvCtlhlywaN6VC0jggntXrpITILeld3Hd9dkd7Nq3BETt54ghYtB33ZW75Ajhblexs4w4wZWQV8XOm7UM1QEOMbCBbJ3WJ6btW8tQXSdXx8xWa++yniEXkN7FiwZv2kzdrGfIFU7veoVsDRBT110lAQncIjpcdy0hJtZdJZWcALnthHeVDkS4Me+6DECSse/obJR4DgmA1lbR1iXa0SKNseSeILb451LpQB8BQm/6JF9WqUC/APAY8QwwI4FhWyLQS+h+CJAfLoj0SwL6CtEsr3ciXmtLAPoD4TuIIWD+ahDumHWgI4hdB8ipK7qpbxWIJvkAIAdN4rU5a0BjnqIJ9o1ZAqKn8Ab/TDdJLADRUx4hngNmzFN82dDmcwO9gKhNgKieogn2jeUCoqewvBqX0z7x2nxqoE6eogn2jaUE6nxLyidem08B1NtTNMG+sZhA9JRdxDbOlWSP08QCCuIpvmxo86GBgnqKJtg3FhKInsJ1yk/fQWPOhwBqdYs2JoT72bMA0VMGiF1kxbtOcQ8as98XKImn9AHvCpTUU2ICZfGUWEATN8T7HCjVe5pKjp6yidjHST/zOiU30D5hcntKry8B/zSSnwnITwVu9fogK2+6AOKPOVYQTSVoRXKzDkDwsWWTjyw3K9dn/wO6pFUG5pvJCwAAAABJRU5ErkJggg=="
            alt
          />
        </button>
      </div>
    </section>

    <section class="intro">
      <img class="paper" src="https://g.alicdn.com/thoughts/thoughts-site/image/paper.25d83a4b.png" />
      <header class="title">知识库</header>
      <p class="text">知识库是承载知识的容器。你可以为你的团队、部门或者项目创建一个知识库，在其中进行知识的沉淀和共享，让工作有条不紊地开展。</p>
      <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/kb.1a7fd28b.png" />
    </section>

    <section class="section" data-reverse="true">
      <!-- <video autoplay controls preload="metadata" style="max-width: 960px;">
        <source type="video/mp4" src="http://dn-clients.teambition.net/thoughts/thoughts_intro_2019.mp4">
      </video> -->
    </section>

    <!-- <m-modal :value="true"></m-modal> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="less">
.content {
  max-width: 1440px;
  margin: 0 auto 60px;

  .hero {
    display: flex;
    height: 37.5rem;
    width: 100%;
    margin: 3rem auto;
    padding: 0 1.25rem;
    align-items: center;
    justify-content: center;

    .desc {
      flex: 0 0 35rem;
    }

    .title {
      font-size: 2.5rem;
      margin-bottom: 1.25rem;
    }

    .text {
      margin-bottom: 2rem;
      line-height: 1.5rem;
      font-weight: 300;
      text-align: left;
      padding-right: 5rem;
    }

    .button {
      padding: 14px 24px;
      border-radius: 26.6px;
      box-shadow: 0 2px 8px 0 rgba(107, 112, 184, 0.15);
      text-align: center;
      background: #fff;
      color: #6b70b8;
      transition: box-shadow 0.3s ease-in-out;
      color: #fff;
      background-image: linear-gradient(108deg, #6b70b8, #9ea4ff);
      border: 1px solid hsla(0, 0%, 100%, 0.75);
      display: inline-block;
      font-weight: 400;
      margin-bottom: 1.25rem;
      min-width: 13rem;
    }

    .button:hover {
      box-shadow: 0 8px 16px 0 rgba(107, 112, 184, 0.3);
    }

    .img-wrapper {
      position: relative;
      flex: 0 1 35rem;

      .img {
        display: block;
        width: 100%;
      }

      .video-play-button {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        padding: 0;
        width: 84px;
        height: 84px;
        outline: none;
        border: none;
        border-radius: 50%;
        background-image: linear-gradient(108deg, #6b70b8, #9ea4ff);
        box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.3s ease-out;

        img {
          width: 26px;
          height: 32px;
          margin: 26px 24px 26px 34px;
        }
      }

      .video-play-button:hover {
        box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.1);
        transform: translateY(-8px);
        transition: all 0.3s ease-out;
      }
    }
  }

  .intro {
    position: relative;
    height: 49rem;
    width: 100%;
    padding: 5.5rem 0 0;
    margin: auto;
    background: #fafafa;

    .paper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-54%,-56%);
      width: 890px;
      height: 754px;
      z-index: 1;
    }

    .title {
      font-weight: 300;
      text-align: center;
      width: 100%;
      margin: auto auto 1.75rem;
      font-size: 2.25rem;
    }

    .text {
      max-width: 41.875rem;
      font-size: 1rem;
      margin: auto auto 3.125rem;
      line-height: 1.5rem;
      font-weight: 300;
      text-align: center;
    }

    .img {
      display: block;
      height: 28.375rem;
      width: 45.625rem;
      margin: auto;
      transform: translateX(30px);
    }
  }

  .intro:after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100vw;
    left: calc((100% - 100vw) / 2);
    background: #fafafa;
    z-index: -1;
  }

  @media screen and (max-width: 768px) {
    .hero {
      flex-direction: column;
      height: auto;
      text-align: center;

      .desc {
        width: 100%;
        margin-top: 2rem;
        flex: 0 0 auto;
      }

      .title {
        font-size: 2.25rem;
        margin-bottom: 1.5rem;
      }

      .text {
        text-align: center;
        padding-right: 0;
        margin-bottom: 2.75rem;
      }

      .img-wrapper {
        flex: 0 0 auto;
      }
    }

    .intro {
      height: auto;
      padding: 3.125rem 1.25rem;
      margin-bottom: 3.625rem;

      .paper {
        display: none;
      }

      .title {
        font-size: 1.75rem;
      }

      .text {
        margin-bottom: auto;
      }

      .img {
        display: block;
        width: 100%;
        height: auto;
        margin-top: 3.125rem;
        transform: none;
      }
    }
  }
}
</style>
