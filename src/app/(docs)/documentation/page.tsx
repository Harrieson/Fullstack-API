import * as React from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/ui/largeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'
export const metadata: Metadata = {
    title: 'Similarity API | Documentation',
    description: 'Free and Open-source API'
}
const page: React.FC = ({}) => {
    return <div className='container max-w-7xl mx-auto mt-12'>
        <div className='flex flex-col items-center gap-6'>
            <LargeHeading>
                Documentation
            </LargeHeading>
            <Paragraph>api/v2/similarity</Paragraph>
            <DocumentationTabs />
        </div>
    </div>
}

export default page