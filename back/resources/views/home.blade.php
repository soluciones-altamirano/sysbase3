@extends('layouts.app')

@section('content')
<div class="container" id="root">
    <div class="row justify-content-center">
        <div class="col-md-8">

            <passport-clients></passport-clients>
            <passport-authorized-clients></passport-authorized-clients>
            <passport-personal-access-tokens></passport-personal-access-tokens>
        </div>
    </div>
</div>
@endsection

@push('scripts')
<script>
    const app = new Vue({
        el: '#root',
        created() {

        },
        data: {

        },
        methods: {

        }
    });
</script>
@endpush