
import { createRouter,createWebHashHistory} from "vue-router"
import HomeAsider from './components/HomeAsider.vue'
import HomeMain from './components/HomeMain.vue'
import LoginAsider from './components/LoginAsider.vue'
import StudentLoginMain from './components/PatientLoginMain.vue'
import ManagerLoginMain from './components/ManagerLoginMain.vue'
import PlumberLoginMain from './components/PlumberLoginMain.vue'
import StudentRegist from './components/PatientRegist.vue'
import StudentMain from './components/PatientMain.vue'
import StudentAsider from './components/PatientAsider.vue'
import StudentSearch from './components/PatientSearch.vue'
import StudentRepair from './components/PatientRepair.vue'
import StudentVisitor from './components/PatientVisior.vue'



const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:'/',redirect:'/home'}
    ,
        {path:'/home/studentlogin',components:{Asider:LoginAsider,Main:StudentLoginMain}},
        {path:'/home/studentregist',components:{Asider:LoginAsider,Main:StudentRegist}},
        {path:'/home/managerlogin',components:{Asider:LoginAsider,Main:ManagerLoginMain}},
        {path:'/home/plumberlogin',components:{Asider:LoginAsider,Main:PlumberLoginMain}},

        {path:'/home/student/search',name:'search',components:{Asider:StudentAsider,Main:StudentSearch}},
        {path:'/home/student/repair',components:{Asider:StudentAsider,Main:StudentRepair}},
        {path:'/home/student/visitor',components:{Asider:StudentAsider,Main:StudentVisitor}},
        {
            path:'/home/student',components:{Asider:StudentAsider,Main:StudentMain},
            children:[
                {path:'search',components:{Asider:StudentAsider,Main:StudentSearch}},
                {path:'repair',components:{Asider:StudentAsider,Main:StudentRepair}},
            ]
        },

        {
            path:'/home',components:{Asider:HomeAsider,Main:HomeMain}
        },

    ]
})

export default router
