<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medico extends Model
{
    use HasFactory;
    protected $fillable = [
        'CRM',
        'nome',
        'endereco',
        'bairro',
        'email',
        'atendporconvenio',
        'temclinia',
        'websiteblog',
    ];
    public $timestamps = false;

    public function especialidade()
    {
        return $this->belongsToMany(Especialidade::class, 'medico_especialidade', 'medico_id', 'especialidade_id');
    }


}

