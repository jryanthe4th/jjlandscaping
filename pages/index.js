import Head from 'next/head'
import styled from '@emotion/styled'
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>JJL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContent>
        <Image
            alt='Next.js logo'
            src='/ModulinePavers.jpg'
            layout='intrinsic'
            objectFit='cover'
            // quality='100'
            width={2400}
            height={1200}

          />
        <CompanyContainer>
          <CompanyTitle><h1 className='title'>J and J Landscaping</h1></CompanyTitle>
          <CompanyDescription><p className='description'>Custom Landscape Design and Installation</p></CompanyDescription>
        </CompanyContainer>
      </MainContent>

      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by Tahoe Web Design
        </a>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  /* min-height: 100vh; */
  /* padding: 0 0.5rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainContent = styled.div`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const CompanyContainer = styled.div`
  position: absolute;
  text-align: center;
`

const CompanyTitle = styled.div`
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
`

const CompanyDescription = styled.div`
  line-height: 1.5;
  font-size: 1.5rem;
`

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`