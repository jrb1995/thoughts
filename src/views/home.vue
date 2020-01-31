<template>
  <div>
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
        <button class="video-play-button" @click="onShowVideoModal">
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
      <article class="desc">
        <header class="title">创作一切内容</header>
        <p
          class="text"
        >Thoughts 可以帮助你创作工作中所需的一切内容，比如会议纪要、活动策划、项目计划、产品需求文档等。你可以快速使用这些文档的模板，以优雅流畅的体验完成内容的创作。</p>
      </article>
      <div class="img-wrap">
        <img
          class="img"
          src="https://g.alicdn.com/thoughts/thoughts-site/image/create.097dda2a.png"
        />
      </div>
    </section>

    <section class="section" data-reverse="false">
      <article class="desc">
        <header class="title">充满生机的文档</header>
        <p
          class="text"
        >除了能在文档中插入图片、文件和链接这些媒体内容以外，你还可以把常用的第三方内容关联进来，直接在文档中展示，并保持实时更新。你无需再手动更新，整个文档好像是活的一般。</p>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/vivid.796bfbf8.png" />
      </div>
    </section>

    <section class="section" data-reverse="true">
      <article class="desc">
        <header class="title">组织你的知识内容</header>
        <p class="text">知识库采用树状目录的结构，帮助你更好地组织知识；树状目录的每一个层级可以是文档、文件夹或者文件，容纳团队中所有的知识内容。</p>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/easy.6783364e.png" />
      </div>
    </section>

    <section class="section" data-reverse="false">
      <article class="desc">
        <header class="title">基于内容的沟通</header>
        <p class="text">每个文档可以进行对应的评论沟通，所以你的团队始终都会有上下文。沟通、决策和反馈都处于它应该在的位置，而不是被淹没在电子邮件或聊天窗口中。</p>
      </article>
      <div class="img-wrap">
        <img
          class="img"
          src="https://g.alicdn.com/thoughts/thoughts-site/image/communicate.32afe492.png"
        />
      </div>
    </section>

    <section class="section" data-reverse="true">
      <article class="desc">
        <header class="title">与 Teambition 联动</header>
        <p
          class="text"
        >Teambition 和 Thoughts 可以形成非常优雅的联动机制，你可以在 Teambition 中关联 Thoughts 文档，也可以在 Thoughts 中关联 Teambition 任务，甚至将 Teambition 项目和知识库进行关联，让你在同时使用两个产品的过程中无缝切换。</p>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/tb.f0ae41ba.png" />
      </div>
    </section>

    <section class="features">
      <div class="feature">
        <img
          class="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAABFFBMVEUAAABscrqAgMnf6f9rcblscbprcrp2dsFrcLhscLnr8f/K1/9tcrprcbnJ1v9rcbjs8f/r7//L1//K1/9rcrpsdLns8f/r8P////9rcLjQ2//p7v/L1//k6//J1v/i6f/S3f/o7f/g6P/N2f/W3//f5v/Y4f/r8P/U3v/a4//Z4v/b5P/m7P/d5f+mr+O1uuOwt+Onr+OrsuO2u+Pa3O51eb2ss+PP2f3p6vXP1PLe3+/X2ezKy+a/weGbns+Gi8qOksltcrmTmdGOldDa4v20veq5wOmvuOebo9p1e79xdrz5+fy7xvK0uuOhpdLo6fS/xuyhqNqWnNSKkMx8gcP4+Py6xPKrs+ChpNK1u+SkrOCAhcZSpBxjAAAAGHRSTlMAewQcq4lKDdfApqZg8+3n5ubm5nIh7e2xcL7tAAAD/ElEQVRYw+2ZaXfSQBSGo1XR1n1laIGwBCsQaRFKqXVjt621tXZR////8A2juczMTYeQox88Puee3pk7mSdDCGQ4dZyllUe5BXm0suSwLN3NJeAub13JJWKFlT7M5dZya4g4KprzkJWuqQfhD6CTUJ+OUcS81JCZJzDbBC9dhH9SWlorBSApNUR0m5eW4gERgnLJIj17OS9nNMkiPRDzc/YnpAc2aSZTykjr5stNxEvEZojsa/kgnFPKsNKMBAch9KyOEVSLkCbhv/QvSl0348pxNBBmBjTeGX6f9N+960++DzvBMazUDSAJwdU64/6eCNnrjzsR0vnJND8KjY/Nq8mkw68CtC92W9v7p9ut3Yu2ADdv2KXr7jqCc04EeNtKz9B6K8B1c7FSgqAMjHbnBNPf76Q1dt6jfC2lS0moiRV554cQH96kGd58wCVI6VKivF5GUCZcrLP9Os3yuo21aleAExknmsD5OR3BZ1ivq9JyKO2MmypjtywZ4rXTOs214grcUKUh74TOFzng4l7C9YzmDS7r1ZjSJt739KXgHrjNSzvjLUlzq4nY2hq6cqH4HO1cLt0R4l5KkdoY455PW3irLrVcmVKulBEyA6Sw1heiZZO2cFs5hJyoiFXW90Q7baUt7lydkdoYCXFolx4qd1W1UqlWqogKoDbVNoXYtUt3hXhMUlUEFCliYr+koKV8qqo2ekJs26XbeKdY6YvqiylozIDPxL5dui/ELZJORaEMobchPbVLTxWpKiTC+iIvf0ZQe1FDUJYs8kZB8AsS0UnA+QK3VI1Wx3M0181/odz8NcKv+Qg0lFp1gY+pPxUhKGv04n+h+BHQyYbxv/rIUf62oTIaTOuD+F/Svvcb5nHi+x7GN2I/Tjw5kZd6U/zYDz4vZGC+fE8yivuI9ubhOM5mwpQWvSJC7/v9y7c9t7RtTzESyKQUDC7boIErjNTOoB+9lbxlWIvzchy96b1CVqs0X8wjwu6R3J4fBtvzfWzPD2l7rlvzJNApamPehvlDYgNvkWkl2Rz4o97sT57eyM9DYVrzMfGOzo97Jye94/MjLw8czppPiMNZs3mFbD6LoGyOUTsAUsYqBSHo6PIQ6lMbUsaaTYjDWZNLTWtyKWfN1uvZuhxHA2FkYI4D2XZM6xOnHh7QbXxqzILuJ0TDpDsjdwzrnRSkv+iK+YFVAqnOk5QTSAv1AiKeVM4hqYocDOi+arwKQGog1Ayo1i0AOa/ASguxISEWFCldLawizIlUj4aXrqoSIhQihX0E5QBeSiJ+Il+nGr/SZPxF6YNkzgesdFkOPl99PgUNHZSorrPMSpeehrJQTqBLNaUuZzyL+tfZ8v3nC3J/mXf+BGf50UWw0FkGAAAAAElFTkSuQmCC"
        />
        <header class="title">全局搜索</header>
        <article class="text">通过标题和内容快速找到你需要的文档、文件和文件夹</article>
      </div>
      <div class="feature">
        <img
          class="icon"
          src="data:image/png;base64,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"
        />
        <header class="title">历史版本</header>
        <article class="text">清楚掌握每一个文档内容的更新由谁在什么时间做出</article>
      </div>
      <div class="feature">
        <img
          class="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAqFBMVEUAAADM2P/Q2/9scbnM2P/s8P9scLjt9v9tdr/N2P/r8f/s8f/O2v/S4f/r7v/////V3//X4P/g5//S3f/c5P9rcLjQ2//P2v/e5v/K1v/k6v/o7v/Z4v/m7P/b4//M2P/i6f/r8P+JjcdxdrzP1/iTmNGCiMd8gsN8gMBscbmrs+Khp9v09PrT2/rV1+u5wOqMkc13fL/W3PjV2/jJz/LFzvKYntSXntQ4eggYAAAAD3RSTlMA5hzppuamHBzspu1ZFqbuHmQLAAACwElEQVRYw+2V6VIqMRBGm9X9ikCDgGzOIJsIuL7/m92vMiExNDUkyljXupzqopekz8wPKOjIf02+mGvtJVfMBznPWl6chViLLU+K5E/OV5ojf1rehEj7/VY/2UKBkDlc2vfmKgvpZRbS3JW/tNnsN5MtFED1CDcr62We/GgeGPXbax6cs/xnaaPZQJjszAHSrjtyv0goNBgIuUYK7Uzu56iRAdlIa7Vao2Z7NAY0CHMuao3ch1TiSkORUsk/I60kuVKrIFTWiN7O3R25T5VD8+ukN5UbBQoDGtPL2pnJfdp96C5LIUiR000G/CbpnQGlc4aBnpseobOdyX1CE048W42jaLyaxWgkn6W9ux4ChZi5ffwxZc30I95xl3qqUIPduOcolhGDaDxO8lLuk871Xh0hhfJsNoVp/tYDb3N4pzNxh1QjBCoDWS/hHC02O4sRrMvtfaqHEUfMc2TDnDmK6y6h0ne8pzvBu75/TxpPOVq4o0XE03hLeptQv016FAgnA1PPmOfbZ3PmmbtvpVYgsHdWzK/b41fmlbsPaQhjjuQw4rHTQ1qt3laTGgVQPUJn91zvu+d4krtP1SCYH5wHKx6Y3VtfkVp+VjoYVAdVhMoCO7dSO0tqSN17NLDSdF5Ga05hPXoxVyH14zniPUTPRtputwdtu4sGIfNghK37FPDMkd6HVCCkijVHj9cpPEa81lch9YT5/jqVe+a25sek3XYX4fYh0i5pAT6ArW0OeNPNPnU92ZY+TSZPUqr4unTCPEmTdrodBQoDGoSthZTBtnSzT0Zo5EDM/KSbfep44vWmmUpLdm/YGSJUBqoGuveR6v0S/Rk6aKnJZu4j1fvndHIx9MJTCi5OiE7OS4eUls7h9MXny0+hpPxMDyG1HKXfkxb2//EVKJTy/r/oMoVyWuA9FE4p3FoupCrLp3QkO/4Ct4jR59FcOesAAAAASUVORK5CYII="
        />
        <header class="title">权限管理</header>
        <article class="text">可以在每一个层级进行权限的精细控制，保障内容的安全性</article>
      </div>
      <div class="feature">
        <img
          class="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAb1BMVEUAAABscbltcbptcrvk7v/r8P/L1//s8f+TnNdscLnr8f/r7//J1/9rcbzJ1f/h6P9rcLjR3P/O2v/o7f/m7P/a4//L1//c5P/V3//j6v/X4f/T3f/e5v/q7//J1v+kq96nrd6hqd6fp96dpt7J0PJ7viUjAAAAD3RSTlMAZnsxHObm7dCvpqamWO3rIrlWAAACV0lEQVRYw+3X63LaMBCGYUOAHFvHBhkbDEkI93+NXa0EX2DXyJbV6UyTdzSjgzfP0J/NBnU3CTf9NdB87RXUhOg08T//0aKTLGnTV6ApzUegyczpBGgyMwOazgSazgSazgSazgSazgSazgSa0ASazJTo7GWxj2zxABOoNX/vo/t0pkRfhjnVvqIF8yHT0EVFuUH8Ac5db5Q1PxcqehoCfDPMsVntdTQyNmlPhcLsiZZVSavjjrcDm91oec5OnyCbF0VVaX/ngadLFS0jOrDJJUFhpkNh9kWLsqCFHeHNm7jraHGuLATuw92ZX95UtBiWM1EK9IPMjyIdCrM3ui22HB0QvtE6mfYcQoEBR3TFmzOv5lV02yNhohEozJ5oXW9r973GWdydKd9rFa05GuJhn3yz5pv27er/BXdAg715U5ZdqGTaRphAkUA39cZGm27SB1p90E04Nq/eCHc/Ig6FKYtCYQ5EjdmYDS3eReaLaZRZo6LGGD+l5UxzIx1FQXM8CjMaXZs1LXPZuzXxbQCKPwDudmu+uzNnrs48r6LrrrwZKoxKMx0KMxJtXevWzdCBljdbd/ffacm9vY0CoJyJxIwrgCKYehFo3uZ5e4QZiebnSGQ0P5LJZ/8uzrxzuYrmWsdj3rcwir4R2uQNLexIvIm7jjYAg2mzOhrTv0FXFzWrhqMDLb/LN8qfVXQ1rhsofq6siUGDjUeXqyUtecc7zt3o8iIPXJ2RfNfR2P4PdI7vu+WOFu8Unznc5cxcRZ93o3pW0dn9GPN+lunq0zyWnD/Nsp/+fn8ACkNv45aNzZoAAAAASUVORK5CYII="
        />
        <header class="title">导入 / 导出</header>
        <article class="text">将已有的知识内容快速转移到 Thoughts 中，同时可以按需导出</article>
      </div>
      <div class="feature">
        <img
          class="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAAe1BMVEUAAADK1//K1//t9v/R2//s8f/r7//r8f/r8P/s8f/r8P////9rcLjV3//p7v/Q2//J1v/a4v/N2P/Y4f/S3f/L1//P2v/b5P/r8P/l6//g5/+Eicfe5v+mr+Pn7f+Bh8epsuPi6f+stOO7xvK/yPKvt+aUm9O0u+iYndK65C3DAAAAC3RSTlMA6aYcHObmpqbt7aEsF3MAAAIdSURBVFjD7ZPrbsIwDEaBsTtt6S2Q0pUxNrb3f8JZjtDXLg4lKeo2iSOLuLZz6v5g0mI+my4Dmc7mE5E5lCFa2TpbDmImSmnRcllS+KhwZypKy/YQnwRegmfMdMSy1JJZLxByIEtD8JRmZUZhP6OO3C3N2kDQzoFQl6Wh/KJ0/3Iu+7Ol+8X57DOVKQqn1DSVn9QICeWW+n6+YjLlkqphyNIkSVSCGXqgwHkEPeSMLMUAQaktP4Jn5I5NrUt+nJKCvystiqQw/YJz6ySsPsO5KOU2hoFVk3tuKVN+vJ7m3VL3SzeLPt5/VxpFRVRQRFnv50fHWT6ZSJRiqHMykPzM0ZelA7lKx5XmUc5QAtCj8JJCBjmgAmoA86IUc+rjrctnkffSJ7X/poc/JU3zPM1TijyxPj/KGdPHSaAuSruXGAhkIeacmw7kn0tXabpKVxQ4DUK9W2Mc0oGckh62nhzOkG4XnmxHl9Z1vapZ+uwBSWuDLDVcpZeUVlVdhUsrUVoZQqQVLSRL61Apf+GlN62Y8aUbX+lmdOkuVLpjHJuaZoi0ooV28qbBUmZEqQ6VasYp1Tut/aV8zyU1hG6qr9J/LW0Yf2nT6EbrRpQ2wVKmR+pFvzRu4viy0tj0vjaefMWMY9O4A61NgdNRR03edBgjSu+GOe9E6YNpruM1Q0kL9OhH5EGU3jxCBjlzrKMGYnPj6WYiW+9v14Hc3red328nZxqYszS0AAAAAElFTkSuQmCC"
        />
        <header class="title">模板</header>
        <article class="text">丰富的内置模板帮助你免去内容框架和格式的困扰</article>
      </div>
      <div class="feature">
        <img
          class="icon"
          src="data:image/png;base64,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"
        />
        <header class="title">动态通知</header>
        <article class="text">根据偏好定义你所需要接受通知的对象和类型</article>
      </div>
    </section>

    <m-modal v-model="showVideoModal">
      <div class="video-container">
        <video autoplay preload="metadata" controls>
          <source
            type="video/mp4"
            src="http://dn-clients.teambition.net/thoughts/thoughts_intro_2019.mp4"
          />
        </video>
      </div>
    </m-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showVideoModal: false
    }
  },
  methods: {
    onShowVideoModal () {
      this.showVideoModal = true
    }
  }
}
</script>

<style lang="less">
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
    transform: translate(-54%, -56%);
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

.section {
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  margin: 3.125rem auto 0;
  padding: 0 1.25rem;
  align-items: center;

  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 0 0 560px;
    margin: 0;
    padding: 0 5rem;

    .title {
      font-size: 2.25rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    .text {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }
  }

  .img-wrap {
    flex: 0 1 560px;
    margin: 0;

    .img {
      width: 100%;
    }
  }
}

.section[data-reverse="true"] {
  flex-direction: row-reverse;
}

.features {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 71.25rem;
  margin: 0 auto;
  padding: 0 20px;

  .feature {
    display: inline-block;
    flex: 1 1 30%;
    height: 15rem;
    max-width: 22.5rem;
    margin-top: 1.25rem;
    padding: 3rem 1.5%;

    .icon {
      display: block;
      width: 2.625rem;
      height: 2.625rem;
      overflow: visible;
    }

    .title {
      margin-top: 1.75rem;
      font-size: 1.25rem;
      line-height: 1.875rem;
    }

    .text {
      margin-top: 0.25rem;
      font-weight: 300;
      font-size: 1rem;
      line-height: 1.5rem;
      color: grey;
      text-align: justify;
    }
  }
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

  .features {
    margin-top: 3.125rem;
    flex-direction: column;
    max-width: auto;

    .feature {
      width: 100%;
      max-width: 100%;
      height: auto;
      margin-top: 0;
      margin-right: 0;
      padding: 1.25rem 0;
    }
  }
}

.video-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 960px;
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
  }
}
</style>
