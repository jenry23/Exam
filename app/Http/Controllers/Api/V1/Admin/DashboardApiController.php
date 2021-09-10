<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Models\Expense;
use App\Models\ExpenseCategory;
use App\Http\Resources\Admin\DashboardResource;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;

class DashboardApiController extends Controller
{
    public function index()
    {
        $expense_category = ExpenseCategory::all();
        foreach($expense_category as $exp)
        {
            $total = 0;
            $expense = Expense::where('expense_category_id',$exp->id)->get();
            foreach($expense as $e){
                $total = $total + floatval($e->amount);
            }
            $exp->total = $total;
        }
        return new DashboardResource($expense_category);
    }
}
