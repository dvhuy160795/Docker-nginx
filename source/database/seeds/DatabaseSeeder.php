<?php

use Illuminate\Database\Seeder;
use App\Post;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for($i=0; $i<50; $i++) {
          Post::create([
            'post_title' => $faker->sentence(3),
            'post_body' => $faker->paragraph(6),
          ]);
        }
    }
}
