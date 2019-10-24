<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PruebaApiController extends Controller
{

    /**
     * PruebaApiController constructor.
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    public function index()
    {
        return view('developer.pruebas_apis');
    }
}
