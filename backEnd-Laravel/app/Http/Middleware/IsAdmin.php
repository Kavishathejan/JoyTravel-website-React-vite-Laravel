<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class IsAdmin
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()?->role !== 1) {
            return response()->json(['message'=>'Forbidden'], 403);
        }
        return $next($request);
    }
}
