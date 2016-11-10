<?php

use Illuminate\Database\Seeder;

class InformsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('informs')->insert([
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
            ], [
                'id' => 5,
                'title' => '测试555',
                'content' => '测试555',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 6,
                'title' => '测试666',
                'content' => '测试666',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 7,
                'title' => '测试777',
                'content' => '测试777',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 8,
                'title' => '测试888',
                'content' => '测试888',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 9,
                'title' => '测试999',
                'content' => '测试999',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 10,
                'title' => '测试10',
                'content' => '测试10',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 11,
                'title' => '测试11',
                'content' => '测试11',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 12,
                'title' => '测试12',
                'content' => '测试12',
                'columnId' => 1,
                'level' => 1,
                'reveal' => 1,
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
        ]);
    }
}
