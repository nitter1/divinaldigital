import globalStyle from './globals.css';


export const metadata = {
  title: 'Rádio DIVINAL Digital',
  description: 'Desenvolvido por Nitter Solutions',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="pt-BR">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>

      <body>
        {children}
        </body>
    </html>
  )
}
