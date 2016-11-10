<?php

use Illuminate\Database\Seeder;

class NewsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('news')->insert([
            [
                'id' => 1,
                'title' => '测试111',
                'content' => '测试111',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 2,
                'title' => '测试222',
                'content' => '测试222',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 3,
                'title' => '测试333',
                'content' => '测试333',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 4,
                'title' => '测试444',
                'content' => '测试444',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
        ]);
    }
}
