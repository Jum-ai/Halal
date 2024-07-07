<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class GenderBasedAccess
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user && $request->is('forum/laki-laki') && $user->gender !== 'male') {
            return redirect('/forum/perempuan');
        }

        if ($user && $request->is('forum/perempuan') && $user->gender !== 'female') {
            return redirect('/forum/laki-laki');
        }
        return $next($request);
    }
}
