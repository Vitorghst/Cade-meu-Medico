<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\State;

class StateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $state = State::all()->sortBy('name')->toArray();
        return json_encode($state);
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeArray(Request $request)
    {
       $state = [];
       foreach ($request->all() as $key => $value) {
            $state[$key] = State::create($value);
        }
        return json_encode($state);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $state = $request->validate([
            'code' => 'required|string|max:2',
            'name' => 'required|string|max:255',
        ]);
        $state = State::create($state);
        return json_encode($state);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $state = State::find($id);
        return json_decode($state);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            'code' => 'required|string|max:2',
            'name' => 'required|string|max:255',
        ]);
        $state = State::find($id);
        $state->update($validate);
        return json_encode($state);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $state = State::find($id);
        $state->delete();
        return json_encode(['message' => 'Estado deletado com sucesso']);
    }
}
