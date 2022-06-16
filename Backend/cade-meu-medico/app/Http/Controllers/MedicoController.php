<?php

namespace App\Http\Controllers;

use App\Models\Medico;
use Illuminate\Http\Request;

class MedicoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $medico = Medico::paginate(10);
        return json_encode($medico);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $medico = $request->validate([
            'CRM' => 'required|string|max:30',
            'nome' => 'required|string|max:80',
            'endereco' => 'required|string|max:100',
            'bairro' => 'required|string|max:60',
            'email' => 'required|string|max:100',
            'atendporconvenio' => 'required|boolean|max:100',
            'temclinia' => 'required|boolean|max:100',
            'websiteblog' => 'required|string|max:80',
        ]);
        $medico = Medico::create($medico);
        return json_encode($medico);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $medico = Medico::find($id);
        return json_decode($medico);

        $especialidade = $medico->especialidade()->get();
        if($especialidade){
            foreach ($especialidade as $especialidade) {
                $especialidade->id; $especialidade->especialidade;
            }
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            'CRM' => 'required|string|max:30',
            'nome' => 'required|string|max:80',
            'endereco' => 'required|string|max:100',
            'bairro' => 'required|string|max:60',
            'email' => 'required|string|max:100',
            'atendporconvenio' => 'required|boolean|max:100',
            'temclinia' => 'required|boolean|max:100',
            'websiteblog' => 'required|string|max:80',
        ]);
        $medico = Medico::find($id);
        $medico->update($validate);
        return json_encode($medico);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Medico  $medico
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $Medico = Medico::find($id);
        $Medico->delete();
        return json_encode(['message' => 'Medico deletado com sucesso']);
    }
}
