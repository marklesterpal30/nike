<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nike</title>
    <meta name='csrf-token' content='{{ csrf_token() }}'>
    <script src="https://kit.fontawesome.com/30a8bb7413.js" crossorigin="anonymous"></script>
    @vite('resources/css/app.css')
    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />

</head>

<body>
    <div id="root"></div>
    @viteReactRefresh
    @vite('resources/js/app')
    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>

</body>

<script>
    window.env = {
        API_BASE_URL: '{{ env('API_BASE_URL') }}'
    }
</script>

</html>
