<template>
  <div class="navContainer">
    <div class="logoCotainer">LOGO</div>
    <div class="me-5">
      <div class="btn-group">
        <i
          class="userBtn bi bi-person-circle btn-sm"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></i>
        <ul class="dropdown-menu">
          <li>
            <router-link class="dropdown-item" to="/dashboard"
              >User</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/dashboard"
              >Another action</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/dashboard"
              >Something else here</router-link
            >
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <router-link class="dropdown-item" to="/">Log out</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.navContainer {
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.logoCotainer {
  height: 100%;
  width: 200px;
}

.userBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  color: var(--color-white);
  font-size: 24px;
  transition: 0.3s ease;
}

.userBtn:hover {
  cursor: pointer;
  color: var(--color-wood);
  box-shadow: var(--box-shadow-wood-opa);
}
</style>