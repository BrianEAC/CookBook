const {theme, extendTheme} = require('@chakra-ui/react')
const customTheme = extendTheme({fonts: {
    heading: 'comic-sans, sans-serif',
    body: 'Raleway, sans-serif',
  }
})
export default customTheme