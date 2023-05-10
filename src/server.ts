import app from './app'

const port = process.env.PORT || process.env.port || 3333

app.listen(port, (): void => {
  console.log('Server started in port ' + port)
})
