<html>
    <head>
        <title>@yield('title')</title>
    </head>
    <body>
        <div id="container" class="container">
            @yield('content')
        </div>
    </body>
    <script src="{{mix('js/maintain/maintain.js')}}" ></script>
</html>
<script>
    var root_url = '<?=url("/")?>';
</script>
