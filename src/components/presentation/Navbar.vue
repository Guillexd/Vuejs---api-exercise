<template>
    <header class="my-5 navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <routerLink class="nav-brand" to="/">Home</routerLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <routerLink class="nav-link" to="/counter">Counter</routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" to="/characters">Personajes</routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" to="/characters/Human">Humano</routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" to="/characters/Animal">Animal</routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" to="/characters/Robot">Robot</routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" to="/characters/Alien">Alien</routerLink>
            </li>
            <li class="nav-item">
              <routerLink class="nav-link" to="/characters/Mythological Creature">Criatura mitológica</routerLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
</template>
