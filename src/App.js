import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    boxShadow: '0 5px 8px 0 rgba (0, 0, 0, 0.3)',
    backgroundColor: '#fafafa'
  },
  media: {
    height: '300px'
  }
})

function App() {
  const [data, setData] = useState([])

  const classes = useStyles()

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character/?limit=6')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div>
      <Container>
        <Typography color="textPrimary" gutterBottom variant="h2" align="center">
          React Material UI Study
        </Typography>
        <Grid container spacing={3}>
          {data.map((character) => (
            <Grid item xs={12} sm={4} key={character.id}>
              <Card className={classes.card}>
                <CardMedia className={classes.media} image={character.img_url} />
                <CardContent>
                  <Typography color="primary" variant="h5">
                    {character.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography color="textSecondary" variant="subtitle2">
                      {character.origin}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                      {character.species}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                      {character.status}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default App
