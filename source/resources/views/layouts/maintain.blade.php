<html>
    <head>
        <title>@yield('title')</title>
        <link rel="stylesheet" type="text/css" href="/css/maintain/maintain.css">
        <link rel="stylesheet" type="text/css" href="/bootstrap/css/bootstrap.min.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="/bootstrap/jquery.min.js"></script>
        <script src="/bootstrap/js/bootstrap.min.js"></script>
        <script>
            var root_url = '<?=url("/")?>';
        </script>
    </head>
    <body>
        <div id="container" class="container">
            @yield('content')
        </div>
    </body>
    <script src="{{mix('js/maintain/maintain.js')}}" ></script>
</html>

