import React from 'react'
import { GridList, GridListTile } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

type Props = {
    images: string[]
}

const Photos = (props: Props) => {
    const classes = useStyles(props)

    return (
        <div className={classes.root}>
            <GridList cellHeight={100} cols={3}>
                {props.images.map((img, i) => 
                    <GridListTile key={i} cols={(i + 1) % 4 === 0 ? 2 : 1}>
                        <img alt="" src={img} />
                    </GridListTile>
                )}
            </GridList>
        </div>
    )
}

export default Photos

const useStyles = makeStyles({
    root: {
        marginBottom: '24px'
    }
})
