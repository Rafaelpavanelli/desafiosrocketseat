'use client'
import {NextUIProvider} from "@nextui-org/react";

export const Providers = ({children}:any) =>{
    return(
        <NextUIProvider>{children}</NextUIProvider>
    )
}