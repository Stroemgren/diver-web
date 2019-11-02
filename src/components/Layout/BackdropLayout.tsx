import React, { ReactNode, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import debounce from 'lodash/debounce'

type Props = {
    backdrop: ReactNode
    backdropHeight: number
    children: ReactNode
    onBackdropVisible?: () => void
    onBackdropHidden?: () => void
}

const BackdropLayout = (props: Props) => {
    const classes = useStyles(props)
    const { backdrop, backdropHeight, children, onBackdropVisible, onBackdropHidden } = props
    const scrollEl = useRef(null as any)
    const scrollingEl = useRef(null as any)
    
    useEffect(
        () => {
            const handleScroll = () => {
                const position = scrollingEl.current.getBoundingClientRect()
                if (position.top < 1 && onBackdropHidden) {
                    onBackdropHidden()
                } else if (position.top > 0 && onBackdropVisible) {
                    onBackdropVisible()
                }
            }
            scrollEl.current.addEventListener("scroll", debounce(handleScroll))
            return () => scrollEl.current.removeEventListener("scroll", debounce(handleScroll))
        },
        [debounce] 
    );

    return (
        <div className={classes.container}>
            <div className={classes.backdrop} style={{ height: `${backdropHeight}px` }}>
                {backdrop}
            </div>
            <div className={classes.contentContainer} ref={scrollEl}>
                <div className={classes.content} style={{ marginTop: `${backdropHeight}px` }} ref={scrollingEl}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BackdropLayout

const useStyles = makeStyles({
    container: {
        position: 'relative',
        height: '100%',
        maxHeight: '100%',
        width: '100%',
    },
    backdrop: {
        width: '100%',
        top: 0,
        overflow: 'hidden'
    },
    contentContainer: {
        position: 'absolute',
        height: '100%',
        maxHeight: '100%',
        width: '100%',
        zIndex: 75,
        overflowY: 'scroll',
        top: 0,
    },
    content: {
        backgroundColor: '#fff',
        width: '100%',
        padding: '0 32px 24px 32px'
    }
})
