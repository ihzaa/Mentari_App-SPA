<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class customer extends Authenticatable
{
    use Notifiable, HasApiTokens;
    protected $hidden = [
        'password', 'remember_token',
    ];
    protected $guarded = [];

    public function address()
    {
        return $this->hasMany(address::class);
    }

    public function favorite()
    {
        return $this->hasMany(favorite::class);
    }
}
