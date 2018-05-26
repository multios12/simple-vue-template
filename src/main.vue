<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item active   href="#">Home <span class="sr-only">(current)</span></b-nav-item>
          <b-nav-item          href="#">Link</b-nav-item>
          <b-nav-item disabled href="#">Disabled</b-nav-item>
          <b-nav-dropdown text="Drowdown">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-nav-dropdown>
          <b-nav-form class="my-2 my-lg-0">
            <b-form-input class="mr-sm-2" placeholder="Search" aria-label="Search"/>
            <b-button class="btn-outline-success my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <main role="main" class="container" id="mainContainer">
      <div class="starter-template">
        <h1>Bootstrap starter template</h1>
        <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
      </div>

    </main><!-- /.container -->
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#mainContainer {
  margin-top: 60px;
}
</style>
