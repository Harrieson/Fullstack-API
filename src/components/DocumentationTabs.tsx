'use client'
import * as React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import SimpleBar from 'simplebar-react'
import Code from './Code'
const DocumentationTabs: React.FC =() => {
    return (
    <Tabs defaultValue='nodejs' className='max-w-2xl w-full'>
        <TabsList>
            <TabsTrigger value='nodejs'>NodeJS</TabsTrigger>
            <TabsTrigger value='python'>Python</TabsTrigger>
        </TabsList>
        <TabsContent value='nodejs'>
            <SimpleBar>
                <Code language='javascript' code=''/>
            </SimpleBar>
        </TabsContent>
    </Tabs>
    )
}

export default DocumentationTabs