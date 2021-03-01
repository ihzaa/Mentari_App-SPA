<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\item;
use Illuminate\Database\Eloquent\SoftDeletes;

class category extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    public function items()
    {
        return $this->hasMany(item::class);
    }
}
