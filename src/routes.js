import { createWebHistory, createRouter } from "vue-router";
import UserDashboard from './pages/user-dashboard.vue'
import Inbox from './pages/inbox.vue'
import Board from './pages/board.vue'
import Calendar from './pages/calendar.vue'
import Chat from './pages/chat.vue'
import ClientDashboard from './pages/client-dashboard.vue'
import CreateNewProject from './pages/create-new-project.vue'
import CreateProject from './pages/create-project.vue'
import Dashboard from './pages/dashboard.vue'
import DesignProcess from './pages/design-process-page.vue'
import DesignProject from './pages/design-project-plan.vue'
import DeveloperDashboard from './pages/developer-dashboard.vue'
import Files from './pages/files.vue'
import Forms from './pages/forms.vue'
import Home from './pages/home.vue'
import Login from './pages/index.vue'
import List from './pages/list.vue'
import ManagerDashboard from './pages/manager-dashboard.vue'
import Messages from './pages/messages.vue'
import MyTask from './pages/my-task.vue'
import NitsBasicTraining from './pages/nits-basic-training.vue'
import Overview from './pages/overview.vue'
import ProjectFormate from './pages/project-format.vue'
import ProjectPlan from './pages/project-plan.vue'
import ProjectView from './pages/project-view.vue'
import TemplateGallery from './pages/template-gallery.vue'
import Timeline from './pages/timeline.vue'
import WorkDiary from './pages/work-diary.vue'

const routes = [
    {
        name: "UserDashboard",
        path: "/user-dashboard",
        component: UserDashboard
    },
    {
        name: "Inbox",
        path: "/inbox",
        component: Inbox
    },
    {
        name: "Board",
        path: "/board",
        component: Board
    },
    {
        name: "Calendar",
        path: "/calendar",
        component: Calendar
    },
    {
        name: "Chat",
        path: "/chat",
        component: Chat
    },
    {
        name: "ClientDashboard",
        path: "/client-dashboard",
        component: ClientDashboard
    },
    {
        name: "CreateNewProject",
        path: "/create-new-project",
        component: CreateNewProject
    },
    {
        name: "CreateProject",
        path: "/create-project",
        component: CreateProject
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        component: Dashboard
    },
    {
        name: "DesignProcess",
        path: "/design-process",
        component: DesignProcess
    },
    {
        name: "DesignProject",
        path: "/design-project",
        component: DesignProject
    },
    {
        name: "DeveloperDashboard",
        path: "/developer-dashboard",
        component: DeveloperDashboard
    },
    {
        name: "Files",
        path: "/files",
        component: Files
    },
    {
        name: "Forms",
        path: "/forms",
        component: Forms
    },
    {
        name: "Home",
        path: "/home",
        component: Home
    },
    {
        name: "Index",
        path: "/",
        component: Login
    },
    {
        name: "List",
        path: "/list",
        component: List
    },
    {
        name: "ManagerDashboard",
        path: "/manager-dashboard",
        component: ManagerDashboard
    },
    {
        name: "Messages",
        path: "/messages",
        component: Messages
    },
    {
        name: "MyTask",
        path: "/my-task",
        component: MyTask
    },
    {
        name: "NitsBasicTraining",
        path: "/nits-basic-training",
        component: NitsBasicTraining
    },
    {
        name: "Overview",
        path: "/overview",
        component: Overview
    },
    {
        name: "ProjectFormate",
        path: "/project-formate",
        component: ProjectFormate
    },
    {
        name: "ProjectPlan",
        path: "/project-plan",
        component: ProjectPlan
    },
    {
        name: "ProjectView",
        path: "/project-view",
        component: ProjectView
    },
    {
        name: "TemplateGallery",
        path: "/template-gallery",
        component: TemplateGallery
    },
    {
        name: "Timeline",
        path: "/timeline",
        component: Timeline
    },
    {
        name: "WorkDiary",
        path: "/work-diary",
        component: WorkDiary
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router