import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const View = { template: '<router-view></router-view>' }

const routes = [
  {
    path: '/',
    component: () => import('@pages/Layout/DashboardLayout.vue'),
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@pages/Dashboard.vue'),
        meta: { title: 'global.dashboard' }
      },
      {
        path: 'change-password',
        name: 'change_password',
        component: () => import('@pages/Layout/ChangePassword.vue'),
        meta: { title: 'Change Password' }
      },
      {
        path: 'user-management',
        name: 'user_management',
        component: View,
        redirect: { name: 'permissions.index' },
        children: [
          {
            path: 'permissions',
            name: 'permissions.index',
            component: () => import('@cruds/Permissions/Index.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/create',
            name: 'permissions.create',
            component: () => import('@cruds/Permissions/Create.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id',
            name: 'permissions.show',
            component: () => import('@cruds/Permissions/Show.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'permissions/:id/edit',
            name: 'permissions.edit',
            component: () => import('@cruds/Permissions/Edit.vue'),
            meta: { title: 'cruds.permission.title' }
          },
          {
            path: 'roles',
            name: 'roles.index',
            component: () => import('@cruds/Roles/Index.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/create',
            name: 'roles.create',
            component: () => import('@cruds/Roles/Create.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id',
            name: 'roles.show',
            component: () => import('@cruds/Roles/Show.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'roles/:id/edit',
            name: 'roles.edit',
            component: () => import('@cruds/Roles/Edit.vue'),
            meta: { title: 'cruds.role.title' }
          },
          {
            path: 'users',
            name: 'users.index',
            component: () => import('@cruds/Users/Index.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/create',
            name: 'users.create',
            component: () => import('@cruds/Users/Create.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id',
            name: 'users.show',
            component: () => import('@cruds/Users/Show.vue'),
            meta: { title: 'cruds.user.title' }
          },
          {
            path: 'users/:id/edit',
            name: 'users.edit',
            component: () => import('@cruds/Users/Edit.vue'),
            meta: { title: 'cruds.user.title' }
          }
        ]
      },
      {
        path: 'expense-management',
        name: 'expense_management',
        component: View,
        redirect: { name: 'expense_categories.index' },
        children: [
          {
            path: 'expense-categories',
            name: 'expense_categories.index',
            component: () => import('@cruds/ExpenseCategories/Index.vue'),
            meta: { title: 'cruds.expenseCategory.title' }
          },
          {
            path: 'expense-categories/create',
            name: 'expense_categories.create',
            component: () => import('@cruds/ExpenseCategories/Create.vue'),
            meta: { title: 'cruds.expenseCategory.title' }
          },
          {
            path: 'expense-categories/:id',
            name: 'expense_categories.show',
            component: () => import('@cruds/ExpenseCategories/Show.vue'),
            meta: { title: 'cruds.expenseCategory.title' }
          },
          {
            path: 'expense-categories/:id/edit',
            name: 'expense_categories.edit',
            component: () => import('@cruds/ExpenseCategories/Edit.vue'),
            meta: { title: 'cruds.expenseCategory.title' }
          },
          {
            path: 'expenses',
            name: 'expenses.index',
            component: () => import('@cruds/Expenses/Index.vue'),
            meta: { title: 'cruds.expense.title' }
          },
          {
            path: 'expenses/create',
            name: 'expenses.create',
            component: () => import('@cruds/Expenses/Create.vue'),
            meta: { title: 'cruds.expense.title' }
          },
          {
            path: 'expenses/:id',
            name: 'expenses.show',
            component: () => import('@cruds/Expenses/Show.vue'),
            meta: { title: 'cruds.expense.title' }
          },
          {
            path: 'expenses/:id/edit',
            name: 'expenses.edit',
            component: () => import('@cruds/Expenses/Edit.vue'),
            meta: { title: 'cruds.expense.title' }
          }
        ]
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: '/admin',
  routes
})
