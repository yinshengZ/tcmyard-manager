<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Http\Requests\Admin\LoginRequest;

class UserController extends Controller
{
    /**
     * 登录 
     */ 
    public function login(LoginRequest $request)
    {
        $data = $request->only(['account', 'password']);

        $remember = $request->remember ?? false;

        if (Auth::attempt($data, $remember)) {
            $user = auth()->user();
            $expiredAt = null;
            if (!$remember) {
                $expiredAt = Carbon::now()->addMinute(config('session.lifetime'))->toDateTimeString();
            }
            $user->expiredAt = $expiredAt;
            
            return response()->json($user, 200);
        } else {
            return response()->json(['message' => '账号或密码错误'], 401);
        }
    }

    /**
     * 登出 
     */ 
    public function logout()
    {
        Auth::guard('web')->logout();

        return response()->json(['message' => '登出成功'], 200);
    }

    /**
     * 获取当前用户信息
     */ 
    public function userInfo(Request $request)
    {
        $user = $request->user();

        return response()->json($user, 200);
    }
}