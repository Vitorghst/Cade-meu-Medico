<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Especialidade extends Model
{
    use HasFactory;
    protected $fillable = [
        'especialidade',

    ];
    public $timestamps = false;

    public function medico()
    {
        return $this->belongsToMany(Medico::class,  'medico_especialidade', 'especialidade_id', 'medico_id');
    }
}
