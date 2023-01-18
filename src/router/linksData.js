export const sidebarLinks = [
    {path: '/', name: 'home', meta: {displayName: 'Главная(Счёт)'}, component: () => import('@/views/HomeView.vue')},
    {path: '/categories', name: 'categories', meta: {displayName: 'Категории'}, component: () => import('@/views/CategoriesView.vue')},
    {path: '/history', name: 'history', meta: {displayName: 'История'}, component: () => import('@/views/HistoryView.vue')},
    {path: '/planning', name: 'planning', meta: {displayName: 'Планирование'}, component: () => import('@/views/PlanningView.vue')},
    {path: '/record/new', name: 'newRecord', meta: {displayName: 'Новая запись'}, component: () => import('@/views/RecordView.vue')},
]


export const otherLinks = [
    {path: '/login', name: 'login', meta: {displayName: 'Вход'}, component: () => import('@/views/LoginView.vue')},
    {path: '/register', name: 'register', meta: {displayName: 'Регистрация'}, component: () => import('@/views/RegisterView.vue')},
    {path: '/history/detail', name: 'detailHistory', meta: {displayName: 'Детально'}, component: () => import('@/views/HistoryDetail.vue')},
    {path: '/user/profile', name: 'userProfile', meta: {displayName: 'Профиль'}, component: () => import('@/views/ProfileView.vue')},
]


let linksList = [];
linksList.push(...sidebarLinks)
linksList.push(...otherLinks)


export default linksList
