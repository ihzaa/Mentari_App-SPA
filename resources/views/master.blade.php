<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

    {{-- Styles --}}
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    {{-- Scripts --}}
    <script src="{{asset('js/app.js')}}" defer></script>

</head>

<body class="h-100">
    <div id="app" class="h-100">
        <router-view></router-view>
    </div>
</body>

</html>
