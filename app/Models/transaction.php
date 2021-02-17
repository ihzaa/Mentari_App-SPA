<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class transaction extends Model
{

    protected $guarded = [];
    protected $casts = ['cart_id'=>'array'];
}
