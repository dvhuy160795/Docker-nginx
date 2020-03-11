@extends('layouts.home')

@section('title', 'Page Title')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')
    <div id="body-main"></div>
    <script src="{{mix('js/app.js')}}" ></script>
@endsection
