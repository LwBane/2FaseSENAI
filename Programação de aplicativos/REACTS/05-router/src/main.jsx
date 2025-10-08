import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/routes'
import { GlobalContextProvider } from './contexts/GlobalContext'


createRoot(document.getElementById('root')).render(
<GlobalContextProvider>

    <RouterProvider router={router}> 
       
       {/* Aqui entra a página navegada */}
   
    </RouterProvider>             
</GlobalContextProvider>
)

//  o routerProvider fica 'escutando' o navegador, pra onde ele ta tentando ir
