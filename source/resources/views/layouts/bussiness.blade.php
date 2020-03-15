<html>
    <head>
        <title>App Name - @yield('title')</title>
    </head>
    <body>
        <div id="sidebar">
            @section('sidebar')
                This is the master sidebar.
            @show
        </div>
        

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>