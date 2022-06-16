<?php

namespace App\Http\Controllers;

use App\Models\Especialidade;
use App\Models\Medico;
use Illuminate\Http\Request;

class EspecialidadeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $especialidade = Especialidade::paginate(10);
        return json_encode($especialidade);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $especialidade = $request->validate([
            'especialidade' => 'required|string|max:80',

        ]);
        $especialidade = Especialidade::create($especialidade);
        return json_encode($especialidade);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Especialidade  $especialidade
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $especialidade = Especialidade::find($id);
        return json_decode($especialidade);

        $medico = $especialidade->medico()->get();
        if($medico){
            foreach ($medico as $medico) {
                $medico->id; $medico->CRM; $medico->nome; $medico->endereco; $medico->bairro; $medico->email; $medico->atendporconvenio; $medico->temclinia; $medico->websiteblog;
            }
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Especialidade  $especialidade
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate = $request->validate([
            'especialidade' => 'required|string|max:80',

        ]);
        $especialidade = Especialidade::find($id);
        $especialidade->update($validate);
        return json_encode($especialidade);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Especialidade  $especialidade
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $especialidade = Especialidade::find($id);
        $especialidade->delete();
        return json_encode(['message' => 'Especialidade deletado com sucesso']);

    }
}
