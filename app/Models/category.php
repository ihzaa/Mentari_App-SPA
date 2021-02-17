<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\item;

class category extends Model
{

    protected $guarded = [];

    public function items()
    {
        return $this->hasMany(item::class);
    }
}
