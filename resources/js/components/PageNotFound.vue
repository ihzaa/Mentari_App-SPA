<template>
    <div class="text-center my-5">
        <p>Ups! Halaman tidak ditemukan</p>
        <p style="font-size:100px!important;line-height:90px">
            <strong>404</strong>
        </p>
        <p>
            Mohon maaf, silahkan kembali ke halaman
            <router-link :to="{ name: 'home' }">home</router-link>
        </p>
    </div>
</template>
