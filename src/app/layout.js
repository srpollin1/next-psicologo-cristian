import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Psicologo Cristian Retamales',
  description: 'salud mental, depresión, autestima',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <link rel="stylesheet" href="/assets/css/maicons.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/vendor/animate/animate.css" />
        <link rel="stylesheet" href="/assets/css/theme.css" />
        <style>
          {`
            .toggle {
              display: none;
            }
            .active {
              display: inline-block;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
        <script type="module" src="/src/main.jsx"></script>
        <script src="/assets/js/jquery-3.5.1.min.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="/assets/js/google-maps.js"></script>
        <script src="/assets/vendor/wow/wow.min.js"></script>
        <script src="/assets/js/theme.js"></script>
      </body>
    </html>
  );
}
