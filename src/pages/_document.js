import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="Influence Media"
            content="Influence Media Agency"
          />
          <meta
            name="Brand Awareness"
            content="Increase Sales Reversing Bad Publicity"
          />
          <meta name="author" content="" />
          <link rel="shortcut icon" href="/img/fav.ico" />
          <link rel="icon" type="image/x-icon" href="/img/fav.ico" />

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
           <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "gvlxuaqv9b");
              `,
            }}
          />

<script async src="https://www.googletagmanager.com/gtag/js?id=G-83YTDQXTGY" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-83YTDQXTGY');

              `,
            }}
          />

        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
