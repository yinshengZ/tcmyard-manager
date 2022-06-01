<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'account' => $this->faker->unique()->phoneNumber,
            'password' => Hash::make('123456'), 
            'nickname' => $this->faker->name,
            'gender' => $this->faker->numberBetween(1, 3),
            'avatar' => $this->faker->imageUrl(256,256),
            'email' => $this->faker->unique()->safeEmail,
            'signature' => $this->faker->text(96),
            'email_verified_at' => now(),
            'remember_token' => Str::random(10),
        ];
    }
}
