<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\transaction;
use App\Models\customer;

class address extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function transactions()
    {
        return $this->hasMany(transaction::class);
    }
    public function customer()
    {
        return $this->belongsTo(customer::class);
    }
}
