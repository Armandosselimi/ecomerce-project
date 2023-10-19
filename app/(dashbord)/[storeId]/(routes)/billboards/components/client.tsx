"use client"

import React from 'react';
import {Plus} from "lucide-react";
import {useParams, useRouter} from "next/navigation";



import Heading from "@/components/ui/heading";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";


interface BillboardClientProps {
    data: [];
}

const BillboardClient : React.FC<BillboardClientProps>  = ({data}) => {
    const router =useRouter()
    const params =useParams()
    console.log(router)
    console.log(params)

    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title={`Billboards (${data.length})`} description="Manage billboards for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 h-4 w-4" /> Add New
                </Button>
            </div>
            <Separator />
            {/*<DataTable searchKey="label" columns={columns} data={data} />*/}
            {/*<Heading title="API" description="API Calls for Billboards" />*/}
            {/*<Separator />*/}
            {/*<ApiList entityName="billboards" entityIdName="billboardId" />*/}
        </>
    );
};

export default BillboardClient;