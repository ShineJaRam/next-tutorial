import Head from 'next/head';
import Layout, { siteTitle } from '~components/layout';
import utilStyles from '/styles/utils.module.scss';
import { getSortedPostsData } from '~lib/posts';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Date from '~components/date';

const Home = ({
  allPostsData,
}: {
  allPostsData: { [p: string]: string; id: string }[];
}) => {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
        <meta
          name="description"
          content="That's one small step for a man, one giant leap for mankind."
        />
        <link
          rel="canonical"
          href="https://next-tutorial-devroy.vercel.app/"
          key="canonical"
        />
        <meta property="og:description" content="수현의 next 프로젝트입니다." />
      </Head>
      <Layout home>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData?.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
