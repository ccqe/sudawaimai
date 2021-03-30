<template>
  <header class="header">
    <slot name="left"></slot>
    <span class="header_title">
      <span class="header_title_text">{{title}}</span>
    </span>
    <slot name="right"></slot>
  </header>
</template>

<script>
import './HeaderTop.css'
export default {
    props: {
        title: String
    },
}
</script>
