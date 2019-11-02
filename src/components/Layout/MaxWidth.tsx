import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const MaxWidth = (props: Props) => (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>{ props.children }</div>
)

export default MaxWidth
