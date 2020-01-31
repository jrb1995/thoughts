<template>
  <div>
    <section class="usage">
      <article class="desc">
        <header class="title">团队如何使用 Thoughts</header>
        <p class="text">不管什么样的部门或团队，<br>Thoughts 都能帮助你提升协作效率，促进团队创新。</p>
      </article>
      <div class="cards-group">
        <div class="card" @click="anchor('#dev')">
          <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/development.149b21a6.png" />
          <header class="card-title">产品研发</header>
          <p class="card-info">为产品团队提供创造力</p>
        </div>
        <div class="card" @click="anchor('#hr')">
          <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/resource.f0caf04a.png" />
          <header class="card-title">人力资源</header>
          <p class="card-info">全面助力人力资源管理</p>
        </div>
        <div class="card" @click="anchor('#it')">
          <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/operation.6316bb06.png" />
          <header class="card-title">IT 和运营</header>
          <p class="card-info">快速构建公司知识库</p>
        </div>
      </div>

      <div class="cards-group">
        <div class="card" @click="anchor('#project')">
          <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/management.441b8050.png" />
          <header class="card-title">项目管理</header>
          <p class="card-info">全程保障项目知识资产</p>
        </div>
        <div class="card" @click="anchor('#market')">
          <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/marketing.816111d1.png" />
          <header class="card-title">市场营销</header>
          <p class="card-info">市场策划井然有序</p>
        </div>
      </div>
    </section>

    <section id="dev" class="scenario" data-reverse="false">
      <article class="desc">
        <header class="title">产品研发</header>
        <p class="text">从产品概念到产品上线，Thoughts 为你的产品研发团队提供了全面的支持。头脑风暴、产品规划、需求文档、技术文档、产品说明文档，每个环节大家都能形成共同的认知，更快更好地为客户交付价值。</p>
        <div class="buttons">
          <button class="purple">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAY1BMVEUAAAAAAACNkt6IjNaNkt2Mkd2LkNuLkNtwcK56er6Mkd2Dic6GjNONkt6Mkd3////c3vTo6fjDxe3BxOzFyO7Fx+23uuqrrubW2PPt7vrP0fG9wOulqeScoeKUmN/29vyOk914Xtt2AAAADnRSTlMECP1w8/K4niMg2lRS2SH/QXYAAAENSURBVFjD7djdjoIwEIbhmRZKC1oQt6Cu+3P/V7lYJbomHtT5NNH0PSGcPOnhzNApp82y8IkVS6MdXeYq5e9MVRfUovSCysXsaOVFKX16T3REUnyTK7240k1Q5QFVRE4hIOVIe0iaDAYyVGOgmgoMVJAHlaE3gr4/QwjD/Lfv+34dG74SoU071c1/H+25dRq0ugm1IwraoaAuQ9fQLwYatz+DHNruu8NnNW6E0LkMZShDGcrQU6EdChoTx5pbhTsGrdD/6zhovfwMmaFHQLDFD7aKwpZj3LpuMQcES4w5aTCxRRxZ7ARxIz/7NHyAWH6I4iPEjew01vAMsZUc6yxHiDhmtanTz4e10ZZj9AdjCxltjfiI3AAAAABJRU5ErkJggg==">
            产品需求文档
          </button>
          <button class="red">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAAAAAD/hXj/hHn/hXj1gHTWc2v+hHj8hHf6g3X8hHf2f3TtfHDzgHPEaGHDaWL/hXn+hHj/hHj/////5+T/wLr/39z/h3z/hXn/7+7/1tL/jIH/0Mz/+/r/+Pj/ysT/rqf/kYf/9fT/4+D/3Nn/2db/w73/urP/tK3/opn/mY//qKD/nJNFX/fGAAAAEnRSTlMECPzz8m8g2rmfnXJUUiQi2bc98/2gAAABjklEQVRYw+3YaY+CMBAG4JYbRNABuVTA+/z/v297aOImKwnMJKsJ7ydCwpNSOkCHPeLY85kJPWPO5rbDXuMEBgyMEbxQUwsQsaZPZ2IAKsbkMR7hICU1JscCdCw5TwEQJBADMiggw2E2kMRmHg3kMZcGcplJA5kMiDJCI/QFULtL32bX9oDqpCN1DyjpzAi9h9ZE0DFvSKAjQIuBskbfUQOwLBHQoYCrvH4lnBQxR1kOQsiSCiDfIZ5auoTiAlCcC8j3iMdfbgBWSVOAsCrEOtoK5yjvbyk9BHQGOOmRnasEAy2gJSqR8tOL9j+hssspe0CnLujUA4LbQiYTl1ULlUouTHV06/+BvKxl1auopb2+DPvS3msxngJUdLHV9yHQdZsk+xyeUeW/vQ6AUv02epHElKUDoMNvR7/gDgMg2Pxx6vv/j0bowyGqjR/ZVpRsc0y3XY9oGggR4z4F5HPGY4omSywgHuLbPiGXEMc3oriGeIhrjYX8CfHYH96s82OuIC3xyPbc/u1D17Mjrp0f1GpqBQyg+M0AAAAASUVORK5CYII=">
            会议纪要
          </button>
        </div>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/development-avatar.04a28fa1.png">
      </div>
    </section>

    <section id="hr" class="scenario" data-reverse="true">
      <article class="desc">
        <header class="title">产品研发</header>
        <p class="text">从产品概念到产品上线，Thoughts 为你的产品研发团队提供了全面的支持。头脑风暴、产品规划、需求文档、技术文档、产品说明文档，每个环节大家都能形成共同的认知，更快更好地为客户交付价值。</p>
        <div class="buttons">
          <button class="purple">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAY1BMVEUAAAAAAACNkt6IjNaNkt2Mkd2LkNuLkNtwcK56er6Mkd2Dic6GjNONkt6Mkd3////c3vTo6fjDxe3BxOzFyO7Fx+23uuqrrubW2PPt7vrP0fG9wOulqeScoeKUmN/29vyOk914Xtt2AAAADnRSTlMECP1w8/K4niMg2lRS2SH/QXYAAAENSURBVFjD7djdjoIwEIbhmRZKC1oQt6Cu+3P/V7lYJbomHtT5NNH0PSGcPOnhzNApp82y8IkVS6MdXeYq5e9MVRfUovSCysXsaOVFKX16T3REUnyTK7240k1Q5QFVRE4hIOVIe0iaDAYyVGOgmgoMVJAHlaE3gr4/QwjD/Lfv+34dG74SoU071c1/H+25dRq0ugm1IwraoaAuQ9fQLwYatz+DHNruu8NnNW6E0LkMZShDGcrQU6EdChoTx5pbhTsGrdD/6zhovfwMmaFHQLDFD7aKwpZj3LpuMQcES4w5aTCxRRxZ7ARxIz/7NHyAWH6I4iPEjew01vAMsZUc6yxHiDhmtanTz4e10ZZj9AdjCxltjfiI3AAAAABJRU5ErkJggg==">
            产品需求文档
          </button>
          <button class="red">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAAAAAD/hXj/hHn/hXj1gHTWc2v+hHj8hHf6g3X8hHf2f3TtfHDzgHPEaGHDaWL/hXn+hHj/hHj/////5+T/wLr/39z/h3z/hXn/7+7/1tL/jIH/0Mz/+/r/+Pj/ysT/rqf/kYf/9fT/4+D/3Nn/2db/w73/urP/tK3/opn/mY//qKD/nJNFX/fGAAAAEnRSTlMECPzz8m8g2rmfnXJUUiQi2bc98/2gAAABjklEQVRYw+3YaY+CMBAG4JYbRNABuVTA+/z/v297aOImKwnMJKsJ7ydCwpNSOkCHPeLY85kJPWPO5rbDXuMEBgyMEbxQUwsQsaZPZ2IAKsbkMR7hICU1JscCdCw5TwEQJBADMiggw2E2kMRmHg3kMZcGcplJA5kMiDJCI/QFULtL32bX9oDqpCN1DyjpzAi9h9ZE0DFvSKAjQIuBskbfUQOwLBHQoYCrvH4lnBQxR1kOQsiSCiDfIZ5auoTiAlCcC8j3iMdfbgBWSVOAsCrEOtoK5yjvbyk9BHQGOOmRnasEAy2gJSqR8tOL9j+hssspe0CnLujUA4LbQiYTl1ULlUouTHV06/+BvKxl1auopb2+DPvS3msxngJUdLHV9yHQdZsk+xyeUeW/vQ6AUv02epHElKUDoMNvR7/gDgMg2Pxx6vv/j0bowyGqjR/ZVpRsc0y3XY9oGggR4z4F5HPGY4omSywgHuLbPiGXEMc3oriGeIhrjYX8CfHYH96s82OuIC3xyPbc/u1D17Mjrp0f1GpqBQyg+M0AAAAASUVORK5CYII=">
            会议纪要
          </button>
        </div>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/development-avatar.04a28fa1.png">
      </div>
    </section>

    <section id="it" class="scenario" data-reverse="false">
      <article class="desc">
        <header class="title">产品研发</header>
        <p class="text">从产品概念到产品上线，Thoughts 为你的产品研发团队提供了全面的支持。头脑风暴、产品规划、需求文档、技术文档、产品说明文档，每个环节大家都能形成共同的认知，更快更好地为客户交付价值。</p>
        <div class="buttons">
          <button class="purple">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAY1BMVEUAAAAAAACNkt6IjNaNkt2Mkd2LkNuLkNtwcK56er6Mkd2Dic6GjNONkt6Mkd3////c3vTo6fjDxe3BxOzFyO7Fx+23uuqrrubW2PPt7vrP0fG9wOulqeScoeKUmN/29vyOk914Xtt2AAAADnRSTlMECP1w8/K4niMg2lRS2SH/QXYAAAENSURBVFjD7djdjoIwEIbhmRZKC1oQt6Cu+3P/V7lYJbomHtT5NNH0PSGcPOnhzNApp82y8IkVS6MdXeYq5e9MVRfUovSCysXsaOVFKX16T3REUnyTK7240k1Q5QFVRE4hIOVIe0iaDAYyVGOgmgoMVJAHlaE3gr4/QwjD/Lfv+34dG74SoU071c1/H+25dRq0ugm1IwraoaAuQ9fQLwYatz+DHNruu8NnNW6E0LkMZShDGcrQU6EdChoTx5pbhTsGrdD/6zhovfwMmaFHQLDFD7aKwpZj3LpuMQcES4w5aTCxRRxZ7ARxIz/7NHyAWH6I4iPEjew01vAMsZUc6yxHiDhmtanTz4e10ZZj9AdjCxltjfiI3AAAAABJRU5ErkJggg==">
            产品需求文档
          </button>
          <button class="red">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAAAAAD/hXj/hHn/hXj1gHTWc2v+hHj8hHf6g3X8hHf2f3TtfHDzgHPEaGHDaWL/hXn+hHj/hHj/////5+T/wLr/39z/h3z/hXn/7+7/1tL/jIH/0Mz/+/r/+Pj/ysT/rqf/kYf/9fT/4+D/3Nn/2db/w73/urP/tK3/opn/mY//qKD/nJNFX/fGAAAAEnRSTlMECPzz8m8g2rmfnXJUUiQi2bc98/2gAAABjklEQVRYw+3YaY+CMBAG4JYbRNABuVTA+/z/v297aOImKwnMJKsJ7ydCwpNSOkCHPeLY85kJPWPO5rbDXuMEBgyMEbxQUwsQsaZPZ2IAKsbkMR7hICU1JscCdCw5TwEQJBADMiggw2E2kMRmHg3kMZcGcplJA5kMiDJCI/QFULtL32bX9oDqpCN1DyjpzAi9h9ZE0DFvSKAjQIuBskbfUQOwLBHQoYCrvH4lnBQxR1kOQsiSCiDfIZ5auoTiAlCcC8j3iMdfbgBWSVOAsCrEOtoK5yjvbyk9BHQGOOmRnasEAy2gJSqR8tOL9j+hssspe0CnLujUA4LbQiYTl1ULlUouTHV06/+BvKxl1auopb2+DPvS3msxngJUdLHV9yHQdZsk+xyeUeW/vQ6AUv02epHElKUDoMNvR7/gDgMg2Pxx6vv/j0bowyGqjR/ZVpRsc0y3XY9oGggR4z4F5HPGY4omSywgHuLbPiGXEMc3oriGeIhrjYX8CfHYH96s82OuIC3xyPbc/u1D17Mjrp0f1GpqBQyg+M0AAAAASUVORK5CYII=">
            会议纪要
          </button>
        </div>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/development-avatar.04a28fa1.png">
      </div>
    </section>

    <section id="project" class="scenario" data-reverse="true">
      <article class="desc">
        <header class="title">产品研发</header>
        <p class="text">从产品概念到产品上线，Thoughts 为你的产品研发团队提供了全面的支持。头脑风暴、产品规划、需求文档、技术文档、产品说明文档，每个环节大家都能形成共同的认知，更快更好地为客户交付价值。</p>
        <div class="buttons">
          <button class="purple">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAY1BMVEUAAAAAAACNkt6IjNaNkt2Mkd2LkNuLkNtwcK56er6Mkd2Dic6GjNONkt6Mkd3////c3vTo6fjDxe3BxOzFyO7Fx+23uuqrrubW2PPt7vrP0fG9wOulqeScoeKUmN/29vyOk914Xtt2AAAADnRSTlMECP1w8/K4niMg2lRS2SH/QXYAAAENSURBVFjD7djdjoIwEIbhmRZKC1oQt6Cu+3P/V7lYJbomHtT5NNH0PSGcPOnhzNApp82y8IkVS6MdXeYq5e9MVRfUovSCysXsaOVFKX16T3REUnyTK7240k1Q5QFVRE4hIOVIe0iaDAYyVGOgmgoMVJAHlaE3gr4/QwjD/Lfv+34dG74SoU071c1/H+25dRq0ugm1IwraoaAuQ9fQLwYatz+DHNruu8NnNW6E0LkMZShDGcrQU6EdChoTx5pbhTsGrdD/6zhovfwMmaFHQLDFD7aKwpZj3LpuMQcES4w5aTCxRRxZ7ARxIz/7NHyAWH6I4iPEjew01vAMsZUc6yxHiDhmtanTz4e10ZZj9AdjCxltjfiI3AAAAABJRU5ErkJggg==">
            产品需求文档
          </button>
          <button class="red">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAAAAAD/hXj/hHn/hXj1gHTWc2v+hHj8hHf6g3X8hHf2f3TtfHDzgHPEaGHDaWL/hXn+hHj/hHj/////5+T/wLr/39z/h3z/hXn/7+7/1tL/jIH/0Mz/+/r/+Pj/ysT/rqf/kYf/9fT/4+D/3Nn/2db/w73/urP/tK3/opn/mY//qKD/nJNFX/fGAAAAEnRSTlMECPzz8m8g2rmfnXJUUiQi2bc98/2gAAABjklEQVRYw+3YaY+CMBAG4JYbRNABuVTA+/z/v297aOImKwnMJKsJ7ydCwpNSOkCHPeLY85kJPWPO5rbDXuMEBgyMEbxQUwsQsaZPZ2IAKsbkMR7hICU1JscCdCw5TwEQJBADMiggw2E2kMRmHg3kMZcGcplJA5kMiDJCI/QFULtL32bX9oDqpCN1DyjpzAi9h9ZE0DFvSKAjQIuBskbfUQOwLBHQoYCrvH4lnBQxR1kOQsiSCiDfIZ5auoTiAlCcC8j3iMdfbgBWSVOAsCrEOtoK5yjvbyk9BHQGOOmRnasEAy2gJSqR8tOL9j+hssspe0CnLujUA4LbQiYTl1ULlUouTHV06/+BvKxl1auopb2+DPvS3msxngJUdLHV9yHQdZsk+xyeUeW/vQ6AUv02epHElKUDoMNvR7/gDgMg2Pxx6vv/j0bowyGqjR/ZVpRsc0y3XY9oGggR4z4F5HPGY4omSywgHuLbPiGXEMc3oriGeIhrjYX8CfHYH96s82OuIC3xyPbc/u1D17Mjrp0f1GpqBQyg+M0AAAAASUVORK5CYII=">
            会议纪要
          </button>
        </div>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/development-avatar.04a28fa1.png">
      </div>
    </section>

    <section id="market" class="scenario" data-reverse="false">
      <article class="desc">
        <header class="title">产品研发</header>
        <p class="text">从产品概念到产品上线，Thoughts 为你的产品研发团队提供了全面的支持。头脑风暴、产品规划、需求文档、技术文档、产品说明文档，每个环节大家都能形成共同的认知，更快更好地为客户交付价值。</p>
        <div class="buttons">
          <button class="purple">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAY1BMVEUAAAAAAACNkt6IjNaNkt2Mkd2LkNuLkNtwcK56er6Mkd2Dic6GjNONkt6Mkd3////c3vTo6fjDxe3BxOzFyO7Fx+23uuqrrubW2PPt7vrP0fG9wOulqeScoeKUmN/29vyOk914Xtt2AAAADnRSTlMECP1w8/K4niMg2lRS2SH/QXYAAAENSURBVFjD7djdjoIwEIbhmRZKC1oQt6Cu+3P/V7lYJbomHtT5NNH0PSGcPOnhzNApp82y8IkVS6MdXeYq5e9MVRfUovSCysXsaOVFKX16T3REUnyTK7240k1Q5QFVRE4hIOVIe0iaDAYyVGOgmgoMVJAHlaE3gr4/QwjD/Lfv+34dG74SoU071c1/H+25dRq0ugm1IwraoaAuQ9fQLwYatz+DHNruu8NnNW6E0LkMZShDGcrQU6EdChoTx5pbhTsGrdD/6zhovfwMmaFHQLDFD7aKwpZj3LpuMQcES4w5aTCxRRxZ7ARxIz/7NHyAWH6I4iPEjew01vAMsZUc6yxHiDhmtanTz4e10ZZj9AdjCxltjfiI3AAAAABJRU5ErkJggg==">
            产品需求文档
          </button>
          <button class="red">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAh1BMVEUAAAAAAAD/hXj/hHn/hXj1gHTWc2v+hHj8hHf6g3X8hHf2f3TtfHDzgHPEaGHDaWL/hXn+hHj/hHj/////5+T/wLr/39z/h3z/hXn/7+7/1tL/jIH/0Mz/+/r/+Pj/ysT/rqf/kYf/9fT/4+D/3Nn/2db/w73/urP/tK3/opn/mY//qKD/nJNFX/fGAAAAEnRSTlMECPzz8m8g2rmfnXJUUiQi2bc98/2gAAABjklEQVRYw+3YaY+CMBAG4JYbRNABuVTA+/z/v297aOImKwnMJKsJ7ydCwpNSOkCHPeLY85kJPWPO5rbDXuMEBgyMEbxQUwsQsaZPZ2IAKsbkMR7hICU1JscCdCw5TwEQJBADMiggw2E2kMRmHg3kMZcGcplJA5kMiDJCI/QFULtL32bX9oDqpCN1DyjpzAi9h9ZE0DFvSKAjQIuBskbfUQOwLBHQoYCrvH4lnBQxR1kOQsiSCiDfIZ5auoTiAlCcC8j3iMdfbgBWSVOAsCrEOtoK5yjvbyk9BHQGOOmRnasEAy2gJSqR8tOL9j+hssspe0CnLujUA4LbQiYTl1ULlUouTHV06/+BvKxl1auopb2+DPvS3msxngJUdLHV9yHQdZsk+xyeUeW/vQ6AUv02epHElKUDoMNvR7/gDgMg2Pxx6vv/j0bowyGqjR/ZVpRsc0y3XY9oGggR4z4F5HPGY4omSywgHuLbPiGXEMc3oriGeIhrjYX8CfHYH96s82OuIC3xyPbc/u1D17Mjrp0f1GpqBQyg+M0AAAAASUVORK5CYII=">
            会议纪要
          </button>
        </div>
      </article>
      <div class="img-wrap">
        <img class="img" src="https://g.alicdn.com/thoughts/thoughts-site/image/development-avatar.04a28fa1.png">
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    anchor (id) {
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="less">
.usage {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;

  .desc {
    margin: 5.5rem auto 1.75rem;
    .title {
      margin-bottom: 1rem;
      line-height: 3.5rem;
      font-size: 2.25rem;
      color: #222;
      text-align: center;
    }

    .text {
      font-weight: 300;
      text-align: center;
    }
  }

  .cards-group {
    margin-top: 1.25rem;
  }

  .cards-group, .card {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    flex-direction: column;
    width: 22.5rem;
    height: 13.5rem;
    border-radius: 4px;
    cursor: pointer;

    .img {
      margin-bottom: 1rem;
      width: 2.625rem;
      height: 2.625rem;
    }

    .card-title {
      margin-bottom: .5rem;
      line-height: 1.875rem;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .card-info {
      font-weight: 300;
      line-height: 1.5rem;
    }
  }

  .card:not(:last-child) {
    margin-right: 1.25rem;
  }

  .card:hover {
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.1);
    background: #fff;
    transition: all .3s ease-in-out;
  }
}

.usage:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  left: calc((100% - 100vw)/2);
  background-image: linear-gradient(180deg,hsla(0,0%,99.2%,0),#fafafa);
  z-index: -1;
}

.scenario {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 3rem auto;

  .desc {
    flex: 0 0 35rem;
    width: 0;
    padding: 5rem 4rem;

    .title {
      margin-bottom: 1rem;
      font-size: 2.25rem;
      font-weight: 300;
      padding: 0 1rem;
    }

    .text {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 300;
      text-align: justify;
      padding: 0 1rem;
    }

    .buttons {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;

      button {
        display: flex;
        align-items: center;
        width: calc(50% - 8px);
        height: auto;
        border-radius: .4rem;
        transition: all .3s ease-in-out;
        padding: 1rem 0 1rem 1rem;
        flex: 0 0 calc(50% - 8px);
        text-align: left;
        margin-top: 1.25rem;
        position: relative;
        overflow: hidden;
        background: transparent;

        img {
          width: 1.5rem;
          height: 1.5rem;
          vertical-align: bottom;
          display: inline-block;
          margin-right: 1rem;
        }
      }

      button:hover {
        box-shadow: 0 4px 12px 0 rgba(0,0,0,.1);
        background-color: #fff;
      }

      .purple:hover:after {
        content: " ";
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        border: solid #8b91dd;
        border-width: 0 4px 0 0;
        animation: fadein .3s;
      }

      .red:hover:after {
        content: " ";
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
        border: solid #ff8478;
        border-width: 0 4px 0 0;
        animation: fadein .3s;
      }

      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

    }
  }

  .img-wrap {
    flex: 0 1 560px;
    padding: 0 4.16%;

    .img {
      width: 100%;
    }
  }
}

.scenario[data-reverse=true] {
  flex-direction: row-reverse;
}
</style>
