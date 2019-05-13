<template>
    <div class="heading-wrapper">
      <h1 class="heading-1"><slot /></h1>
    </div>
</template>

<script>
</script>

<style lang="scss">
  .heading-wrapper {
    width: 100%;
    margin: 5rem 0;
  }
  .heading-1 {
    font-size: 1.9rem;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    grid-column-gap: 2rem;
    align-items: center;

    &:before, &:after {
      content: '';
      display: block;
      background-color: $color-black;
      height: 2px;
      width: 100%;
    }
  }
</style>