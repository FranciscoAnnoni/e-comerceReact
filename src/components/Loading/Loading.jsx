import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ 
        height: '100vh',        // Ocupa toda la altura de la ventana
        paddingTop: '50px',     // Padding superior
        paddingBottom: '50px',  // Padding inferior
        boxSizing: 'border-box' // Asegura que el padding se incluya en la altura total
      }}
    >
      <CircularProgress
        sx={{ color: '#8b0024', thickness: 10 }} // Color personalizado y grosor máximo
        size={100} // Tamaño grande
      />
    </Stack>
  );
}

