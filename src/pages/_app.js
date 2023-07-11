// NOT SURE IF I'LL BE USING THIS - NEXT.JS 13 DOESN'T SEEM TO NEED IT 

import "../app/globals.css";
import { ThemeProvider } from "@mui/material";
import darkTheme from "../styles/theme/darkTheme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
 Component,
 emotionCache = clientSideEmotionCache,
 pageProps,
} ) {
 return (
   <CacheProvider value={emotionCache}>
     <ThemeProvider theme={darkTheme}>
       <Component {...pageProps} />
     </ThemeProvider>
   </CacheProvider>
 );
}

export default MyApp;