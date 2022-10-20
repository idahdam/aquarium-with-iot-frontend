import React, { useEffect, useState } from 'react'
import {
  Grid, Paper, Container, CircularProgress,
} from '@mui/material'
import {
  Table, Chart, Profile,
} from "../components"
import { itemService } from '../services/item.service'

const Mainpage = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const items = await itemService.getItems()
      setItems(items.data)
    }
    fetchItems()
  }, [])

  return (
    <>
      {items.length === 0 ? (
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </Container>
      ) : (
        <Container
          sx={{
            mt: 5,
            mb: 5,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper
                sx={{
                  border: '1px solid',
                  height: "100%",
                }}
              >
                <Profile />
              </Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper
                sx={{
                  border: '1px solid',
                  height: "100%",
                }}
              >
                <Table data={items} />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper
                sx={{
                  border: '1px solid',
                }}
              >
                <Chart data={items} />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  )
}

export default Mainpage