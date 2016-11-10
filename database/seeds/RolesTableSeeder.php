<?php

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            [
                'id' => 1,
                'name' => 'Super Admin',
                'slug' => 'admin.super',
                'description' => 'Super Admin',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 2,
                'name' => 'User Admin',
                'slug' => 'admin.user',
                'description' => 'Can manage users',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 3,
                'name' => 'Role Admin',
                'slug' => 'admin.role',
                'description' => 'Can manage user roles',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ], [
                'id' => 4,
                'name' => 'Permission Admin',
                'slug' => 'admin.permission',
                'description' => 'Can manage permissions',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 5,
                'name' => 'inform Admin',
                'slug' => 'admin.inform',
                'description' => 'Can manage informs',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 6,
                'name' => 'dtinform Admin',
                'slug' => 'admin.dtinform',
                'description' => 'Can manage dtinforms',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 7,
                'name' => 'teainforms Admin',
                'slug' => 'admin.teainform',
                'description' => 'Can manage teainforms',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 8,
                'name' => 'industryinforms Admin',
                'slug' => 'admin.industryinform',
                'description' => 'Can manage industryinforms',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 9,
                'name' => 'teaculture Admin',
                'slug' => 'admin.teaculture',
                'description' => 'Can manage teaculture',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 10,
                'name' => 'teaknowledge Admin',
                'slug' => 'admin.teaknowledge',
                'description' => 'Can manage teaknowledge',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 11,
                'name' => 'collectiontea Admin',
                'slug' => 'admin.collectiontea',
                'description' => 'Can manage collectiontea',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 12,
                'name' => 'announcement Admin',
                'slug' => 'admin.announcement',
                'description' => 'Can manage announcement',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],[
                'id' => 13,
                'name' => 'traderules Admin',
                'slug' => 'admin.traderule',
                'description' => 'Can manage traderules',
                'level' => '1',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
        ]);
    }
}
