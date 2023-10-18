import {auth} from "@clerk/nextjs";
import {redirect} from "next/navigation";
import prismadb from "@/lib/prismadb";

export default async function DashbordLayout({
    children,
    params
                                             }: {
    children:React.ReactNode
    params:{storedId: string}
}){
    const {userId} =auth()

    if (!userId){
        redirect('/sign-in')
    }

    const store = await prismadb.store.findFirst({
        where:{
            id:params.storedId,
            userId
        }
    })

    if (!store){
        redirect('/')
    }

    return (
        <>
        <div>
            This will be a Navbar
        </div>
            {children}
        </>
    )
}