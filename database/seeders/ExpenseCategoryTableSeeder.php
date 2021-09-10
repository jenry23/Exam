<?php

namespace Database\Seeders;

use App\Models\ExpenseCategory;
use Illuminate\Database\Seeder;

class ExpenseCategoryTableSeeder extends Seeder
{
    public function run()
    {
        $expense_category = [
            [
                'id'    => 1,
                'name' => 'Bills',
            ],
            [
                'id'    => 2,
                'name' => 'Vehicle',
            ],
            [
                'id'    => 3,
                'name' => 'Rent',
            ],
            [
                'id'    => 4,
                'name' => 'Office Supplies',
            ]
        ];

        ExpenseCategory::insert($expense_category);
    }
}
