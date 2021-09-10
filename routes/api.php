<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:sanctum']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::get('users/getUser','UsersApiController@getUser')->name('user.getUser');
    Route::resource('users', 'UsersApiController');

    // Expense Categories
    Route::resource('expense-categories', 'ExpenseCategoryApiController');

    // Expenses
    Route::resource('expenses', 'ExpenseApiController');

    //Change Password
    Route::resource('change-password','ChangePasswordApiController');

    //Dashboard
    Route::resource('dashboard','DashboardApiController');
});
